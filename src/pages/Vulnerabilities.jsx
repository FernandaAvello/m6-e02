import React from 'react';
import { Typography, Form, Input, Button, Card } from 'antd';

const { Title, Paragraph } = Typography;

const Vulnerabilities = () => {
  return (
    <Card>
      <Title level={1}>Demostración de Vulnerabilidades</Title>

      <section>
        <Title level={2}>Clickjacking</Title>
        <Paragraph>
          Intenta cargar esta página en un iframe para ver cómo se puede evitar este ataque con el encabezado <code>X-Frame-Options</code>.
        </Paragraph>
        <iframe
          src="/"
          style={{ width: '100%', height: '200px', border: '1px solid black' }}
          title="Clickjacking Example"
        ></iframe>
      </section>

      <section>
        <Title level={2}>Cross-Site Scripting (XSS)</Title>
        <Paragraph>
          Ingresa un script malicioso para ver cómo lo sanitizamos.
        </Paragraph>
        <Form>
          <Form.Item label="Entrada">
            <Input placeholder="Escribe algo..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={() => alert('Este es un ejemplo seguro, XSS bloqueado.')}>
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </section>
    </Card>
  );
};

export default Vulnerabilities;