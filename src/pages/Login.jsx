import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, Alert, Select } from 'antd';
import { useAuth } from '../context/AuthContext';

const { Option } = Select;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const success = await login(values.username, values.password, values.role);
      if (success) {
        if (values.role === 'admin') {
          navigate('/patients');
        } else if (values.role === 'doctor') {
          navigate('/team');
        } else {
          setError(true);
        }
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'lightgrey' }}>
      <Card title="Iniciar Sesión" style={{ width: 400 }}>
        {error && <Alert message="Credenciales inválidas" type="error" />}
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Nombre de Usuario"
            name="username"
            rules={[{ required: true, message: 'Por favor ingrese su nombre de usuario' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: 'Por favor ingrese su contraseña' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Rol"
            name="role"
            rules={[{ required: true, message: 'Por favor seleccione su rol' }]}
          >
            <Select onChange={(value) => setRole(value)}>
              <Option value="doctor">Doctor</Option>
              <Option value="admin">Administrador</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;