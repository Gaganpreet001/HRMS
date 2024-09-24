import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import { toast } from 'react-toastify';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Form values:', values);
    toast.success('User created successfully!');
    form.resetFields();
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the parent page
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <ArrowLeftOutlined onClick={handleBackClick} style={{ fontSize: '24px', cursor: 'pointer' }} />
        <h2 style={{ marginLeft: '10px' }}>Add New Employee</h2>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter the username!' }]}
        >
          <Input placeholder="Enter username" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, type: 'email', message: 'Please enter a valid email!' }
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item
          label="Phone No"
          name="number"
          rules={[{ required: true, message: 'Please enter the phone number!' }]}
        >
          <Input placeholder="Enter Phone No" />
        </Form.Item>

        <Form.Item
          label="Job Title"
          name="text"
          rules={[{ required: false }]}
        >
          <Input placeholder="Enter Title" />
        </Form.Item>

        <Form.Item
          label="Date of Joining"
          name="dateOfJoining"
          rules={[{ required: true, message: 'Please select the date of joining!' }]}
        >
          <DatePicker placeholder="Select Date" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateUser;
