import React, { useState, useEffect } from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Menu, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const [current, setCurrent] = useState('mail');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario) {
      setUsername(usuario.username);
    }
  }, []);

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const items = [
    {
      key: 'logo',
      label: (
        <img
          src="public/assets/images/logo.png"
          alt="logo"
          style={{ width: '100px' }}
        />
      )
    },
    {
      key: 'home',
      label: (
        <Link to="/">Inicio</Link>
      )
    },
    {
      key: 'team',
      label: (
        <Link to="/team">Equipo Médico</Link>
      )
    },
    {
      key: 'services',
      label: (
        <Link to="/services">Servicios</Link>
      )
    },
    {
      key: 'appointment',
      label: (
        <Link to="/appointment">Agendamiento</Link>
      )
    },
    {
      key: 'patients',
      label: (
        <Link to="/patients">Pacientes</Link>
      )
    },
    {
      key: 'administration',
      label: (
        <Link to="/administration">Administración</Link>
      )
    },
    {
      key: 'whatsapp',
      icon: <WhatsAppOutlined />,
      label: 'Escribenos por WhatsApp',
      className: 'whatsappButton'
    },
    {
      key: 'welcome',
      label: username ? `Bienvenido ${username}` : (
        <Button type="primary" onClick={() => navigate('/login')}>
          Iniciar Sesión
        </Button>
      ),
      className: 'welcomeMessage'
    }
  ];

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className="header" />;
};

export default Header;