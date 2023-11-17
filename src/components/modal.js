import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import {useSelector, useDispatch} from "react-redux";
import { getClosed, getStatusResult } from "./redux/orderSlice";
const ModalPage = () => {
  const closed = useSelector((state)=>state.order.closed);
  const modalData = useSelector((state)=>state.order.modalData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(()=>{
    setIsModalOpen(closed);
  }, [closed]);
  const handleOk = () => {
    dispatch(getClosed(false))
    dispatch(getStatusResult(true));
  };
  const handleCancel = () => {
    dispatch(getClosed(false))
    dispatch(getStatusResult(false));
  };
  return (
    <>
      
      <Modal title="Missing product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        is {modalData} urgent
      </Modal>
    </>
  );
};
export default ModalPage;