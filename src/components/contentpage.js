import React from "react";
import { Space, Table, Tag } from "antd";
import axios from "axios";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getClosed, getModalData, getStatusResult } from "./redux/orderSlice";
import ModalPage from "./modal";

export default function ContentPage() {
  const result = useSelector((state)=>state.order.result);

  const [data, setData] = React.useState([]);
  const [closed, setClosed] = React.useState(false);
  const [closedRecord, setClosedRecord] = React.useState([]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios
      .get("http://localhost:3004/tableData")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCheck = (id) => {

    let newData = data.map((d) => {
      if (d.id === id) {
        d.status = "Approved";
      }
      return d;
    });

    setData(newData);
  };

  const handleClose = (record) => {
   setClosed(true);
   dispatch(getClosed(true));
   dispatch(getModalData(record.productName))
   setClosedRecord(record);
  };

  const DisplayMissing=()=>{
    let newData = data.map((d) => {
        if (d.id === closedRecord.id) {
          d.status = "Missing";
        }
        return d;
      });
  
      setData(newData);
      dispatch(getStatusResult(false));
  }
  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <>
          <Tag color={status === "Approved" ? "green": "red"} key={status}>
            {status}
          </Tag>
        </>
      ),
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <CheckOutlined onClick={() => handleCheck(record.id)} />
          <CloseOutlined onClick={()=>handleClose(record)} />
          <a href="#">Edit</a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} />
      {closed && <ModalPage/>}
      {result && DisplayMissing()}
    </>
  );
}
