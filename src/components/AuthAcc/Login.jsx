import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const apiUrl = import.meta.env.VITE_BACKEND_ENDPOINT;
    const username = values.email;
    const password = values.password;
    const basicAuth = `Basic ${btoa(`${username}:${password}`)}`;

    try {
      const response = await axios.get(`${apiUrl}/login`, {
        headers: {
          Authorization: basicAuth,
        },
      });

      if (response.data && response.status === 200) {
        const responseData = response.data;
        localStorage.setItem('user', JSON.stringify(responseData));
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Form
      name="login"
      className="login-form w-full md:w-2/6 mx-auto mt-10 p-4"
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
        <Button type="primary" htmlType="submit" className="login-form-button bg-black w-full md:w-auto mb-2 md:mb-0 md:mr-2">
          Login
        </Button>
        <Link to="/register" className="w-full md:w-auto">
          <Button type="primary" className="login-form-button bg-lime-500 w-full md:w-auto">
            Register
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default Login;
