import React, { useState } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Alert, Button, Form, Input, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setSucces}) => {
  const navigate = useNavigate();
  const [alert,setAlert] = useState(false)

  const onFinish = async (values) => {
    const apiUrl = import.meta.env.VITE_BACKEND_ENDPOINT;
    const username = values.email;
    const password = values.password;
    const basicAuth = `Basic ${btoa(`${username}:${password}`)}`;

    try {
      const response = await axios.get(`${apiUrl}/login`, {
        headers: {
          Authorization: basicAuth,
        }
      });

      if (response.data && response.status === 200) {
        const responseData = response.data;
        localStorage.setItem('user', JSON.stringify(responseData));
        navigate('/');
        setSucces(true)
      }
    } catch (error) {
      setAlert(true)
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
        <Space
          direction="vertical"
          style={{
            textAlign : "center",
            width: '100%',
          }}
        >
         {alert && <Alert message="Wrong email or password" type="error" />} 
        </Space>
      <Form
        name="login"
        className="w-full md:w-2/6 p-8 bg-white rounded shadow"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h1 className="text-center text-3xl mb-4">Login</h1>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input a valid email!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <Button
            type="primary"
            htmlType="submit"
            className="bg-black w-full md:w-auto mb-2 md:mb-0 md:mr-2 hover:bg-gray-900"
          >
            Login
          </Button>
          <Link to="/register" className="w-full md:w-auto">
            <Button
              type="primary"
              className="bg-lime-500 w-full md:w-auto hover:bg-lime-600"
            >
              Register
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
