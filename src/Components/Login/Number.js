import React, { useState } from 'react';
import { Layout, Menu } from 'antd'; // Import necessary Ant Design components
import './Number.css'; // Your CSS file
import { toast } from 'react-toastify';
const { Header, Content } = Layout;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
      if (!mobileNumber.trim()) {
          toast.error('Please enter your mobile number');
          return;
      }

      if (!isValidMobileNumber(mobileNumber)) {
          toast.error('Please enter a valid mobile number.');
          return;
      }

     
    
  };
  const handleMobileNumberChange = (event) => {
    const newMobileNumber = event.target.value;

    if (/^\d*$/.test(newMobileNumber) && newMobileNumber.length <= 10) {
        setMobileNumber(newMobileNumber);
    }
};

const isValidMobileNumber = (number) => {
    return /^\d{10}$/.test(number);
};

  return (
    <Layout className="layout">
      {/* Header and Menu */}
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
          <div  style={{}}>
          <Menu.Item key="3">Features</Menu.Item>
          </div>
        </Menu>
      </Header>

      <Content style={{ padding: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="login-container" style={{ width: '300px',height:'350px' }}>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Top " className="top-image" style={{ flex: "center" }} />
          <h2 style={{fontWeight:'40',fontSize:'15px',textAlign:'left',marginTop:'50px'}}>Login / Register</h2>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{marginTop:'30px'}}>
              <label>Enter your mobile number to login</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              
            </div>
            <div style={{marginTop:'20px'}}>
            <button type="submit">Get OTP</button>
            </div>
          </form>
        </div>
      </Content>
    </Layout>
  );
};

export default LoginPage;
