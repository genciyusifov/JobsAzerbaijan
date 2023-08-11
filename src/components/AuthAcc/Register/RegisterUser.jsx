import React from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, DatePicker, Select } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Option } = Select;

const RegisterUser = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const apiUrl = import.meta.env.VITE_BACKEND_ENDPOINT;
    try {
      const response = await axios.post(`${apiUrl}/users`, {
        city: values.city,
        confirmPassword: values.confirmPassword,
        dateOfBirth: values.dateOfBirth.toISOString(),
        email: values.email,
        gender: values.gender,
        name: values.name,
        password: values.password,
        phone: values.phone,
        photoUrl: null,
        surname: values.surname,
      });
      console.log('Registration successful:', response);
      {response && navigate("/login")}
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <Form
        name="register"
        className="w-96 p-8 bg-white rounded shadow"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h1 className="text-center text-3xl mb-4">Register User</h1>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
          />
        </Form.Item>

        <Form.Item
          name="surname"
          rules={[
            {
              required: true,
              message: 'Please input your Surname!',
            },
          ]}
        >
          <Input placeholder="Surname" />
        </Form.Item>

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
            prefix={<MailOutlined className="site-form-item-icon" />}
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

        <Form.Item
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>

        <Form.Item
          name="dateOfBirth"
          rules={[
            {
              required: true,
              message: 'Please select your Date of Birth!',
            },
          ]}
        >
          <DatePicker placeholder="Date of Birth" />
        </Form.Item>

        <Form.Item
          name="gender"
          rules={[
            {
              required: true,
              message: 'Please select your Gender!',
            },
          ]}
        >
          <Select placeholder="Gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="city"
          rules={[
            {
              required: true,
              message: 'Please input your City!',
            },
          ]}
        >
          <Input placeholder="City" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your Phone number!',
            },
          ]}
        >
          <Input placeholder="Phone" />
        </Form.Item>

        <Form.Item
          name="photoUrl"
          rules={[
            {
              required: true,
              message: 'Please input your Photo URL!',
            },
          ]}
        >
          <Input placeholder="Photo URL" />
        </Form.Item>

        <Form.Item className="text-center">
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-black hover:bg-gray-900"
          >
            Register
          </Button>
          <p className="mt-4">
            Already have an account? <Link to="/login">Login now!</Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterUser;
