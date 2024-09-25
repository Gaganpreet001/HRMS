import React from 'react';
import { Layout, Menu, Button } from 'antd'; 
import { UserOutlined, CalendarOutlined, WalletOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Attendance = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('X-WRK-CODE'); 
    localStorage.removeItem('refresh_token');
    navigate('/');
  };

  const goBack = () => {
    navigate(-1); // This will navigate to the previous page
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
            onClick={handleLogout} 
          >
            Logout
          </Button>
        </div>
      </Header>

      {/* Sidebar and Content Layout */}
      <Layout>
        <Sider width={250} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['2']}  // Set '2' as active key since it's the Attendance page
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<UserOutlined />} onClick={() => navigate('/dashboard')}>
              Team
            </Menu.Item>
            <Menu.Item key="2" icon={<CalendarOutlined />} onClick={() => navigate('/attendance')}>
              Attendance
            </Menu.Item>
            <Menu.Item key="3" icon={<WalletOutlined />} onClick={() => navigate('/salary')}>
              Salary
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Main Content Area */}
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
            }}
          >
            <h1>Attendance Page</h1>
            <p>This is the attendance management page.</p>

            {/* Back Button */}
            <Button type="primary" onClick={goBack} style={{ marginTop: '20px' }}>
              Back
            </Button>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Attendance;
