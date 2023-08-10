import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Content,  Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));
const JobsPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            left: 0,
          }}
          >
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout
          className="site-layout"
        >
          <Content
            style={{
              overflow: 'initial',
            }}
          >
            <div
              style={{
                padding: 4,
                textAlign: 'center',
                
                height : "100vh",
                overflow : "hidden",
                overflowY : "scroll",
                background: colorBgContainer,
              }}
            >
              <h1 className='text-3xl  pb-2 border border-b-violet-950'>Jobs</h1>
              
            </div>
          </Content>
        </Layout>
      </Layout>
    </>

  );
};
export default JobsPage;