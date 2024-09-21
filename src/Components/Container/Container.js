import React from 'react';
import { Layout, Menu } from 'antd'; // Import Divider and other Ant Design components

const { Header } = Layout;

const Container = () => (
  <>
    <Layout className="layout">
      <Header style={{ background: '#fff', padding: 0 }}>
        <div style={{ float: 'left', padding: '0 20px' }}>
          <img src="path_to_logo" alt="Logo" style={{ height: '32px' }} />
        </div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">Credit Management</Menu.Item>
          <Menu.Item key="2">Treasury Management</Menu.Item>
          <Menu.Item key="3">Features</Menu.Item>
        </Menu>
      </Header>
    </Layout>
    
    {/* <Divider style={{ borderColor: '#7cb305' }}></Divider> */}
  </>
);

export default Container;
