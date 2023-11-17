import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import ContentPage from "./contentpage";
const { Header, Content, Footer } = Layout;

function MainPage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  let menuItem = ["Store", "Orders", "Analytics"];
  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={menuItem.map((menu, index) => ({
              key: String(index + 1),
              label: menu,
            }))}
          />
        </Header>
        <Content
          className="site-layout"
          style={{
            padding: "0 50px",
          }}
        >
          <div
            style={{
              padding: 24,
              marginBottom: 12,
              minHeight: 80,
              background: colorBgContainer,
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Orders</Breadcrumb.Item>
              <Breadcrumb.Item>Order 32457ABC</Breadcrumb.Item>
            </Breadcrumb>

            <h1>Order 32457ABC</h1>
          </div>

          <div
            style={{
              padding: 24,
              marginBottom: 12,
              minHeight: 80,
              background: colorBgContainer,
            }}
          >
            
            </div>

          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
            }}
          >
            {/* content */}
            <ContentPage/>
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default MainPage;
