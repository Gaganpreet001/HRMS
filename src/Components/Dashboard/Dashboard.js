import React from 'react';
import { Layout, Menu, Button } from 'antd'; 
import { UserOutlined, CalendarOutlined, WalletOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; 
import './Dashboard.css'; 

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    
    localStorage.removeItem('X-WRK-CODE'); 
    localStorage.removeItem('refresh_token');
    navigate('/');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Topbar */}
      <Header style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ float: 'left', padding: '0 20px' }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Top Logo"
            className="top-image"
            style={{ flex: 'center' }}
          />
        </div>
        
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px', flex: 1 }}>
        </Menu>

        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <Button
            type="primary"
            size="small"
            style={{ marginRight: '10px', width: '110px' }}
            onClick={() => navigate('/user-template')} 
          >
            Add Employee
          </Button>
          <Button
            type="danger"
            size="small"
            style={{ width: '80px' }}
            onClick={handleLogout} // Call logout function
          >
            Logout
          </Button>
        </div>
      </Header>

      {/* Layout for Sidebar and Content */}
      <Layout>
        <Sider width={250} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              Team
            </Menu.Item>
            <Menu.Item key="2" icon={<CalendarOutlined />}>
              Attendance
            </Menu.Item>
            <Menu.Item key="3" icon={<WalletOutlined />}>
              Salary
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Main Content */}
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
            }}
          >
            <h2>Welcome to the HRMS</h2>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
