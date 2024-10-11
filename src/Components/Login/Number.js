import React, { useState } from 'react';
import { Layout, Menu } from 'antd'; 
import './Number.css'; 
import { toast } from 'react-toastify';
const { Header, Content } = Layout;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!username.trim()) {
        toast.error('Please enter your username');
        return;
    }

    if (!password.trim()) {
        toast.error('Please enter your password');
        return;
    }

    // Add logic for handling login with username and password
    console.log("Username:", username);
    console.log("Password:", password);

    // Example: Call login API or handle authentication here
  };

  return (
    <Layout className="layout">
  
      <Header style={{ background: '#fff', padding: 0 }}>
        <div style={{ float: 'left', padding: '0 20px' }}>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Top " className="top-image" style={{ flex: "center" }} />
        </div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
          <div style={{paddingLeft:'550px'}}>
          <Menu.Item key="1">Credit Management</Menu.Item>
          </div>
          <div style={{}}>
          <Menu.Item key="2">Treasury Management</Menu.Item>
         
          </div>
          <div style={{}}>
          <Menu.Item key="3">Features</Menu.Item>
          </div>
        </Menu>
      </Header>

      <Content style={{ padding: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <div className="login-container" style={{ width: '300px', height: '350px' }}>

          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Top " className="top-image" style={{ flex: "center" }} />

          <h2 style={{fontWeight:'100', fontSize:'15px', textAlign:'left', marginTop:'30px'}}>Login</h2>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginTop: '30px' }}>
              <label>Enter your username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group" style={{ marginTop: '20px' }}>
              <label>Enter your password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div style={{ marginTop: '20px' }}>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </Content>
    </Layout>
  );
};

export default LoginPage;
