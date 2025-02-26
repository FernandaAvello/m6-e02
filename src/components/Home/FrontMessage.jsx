import React from "react";
import { Row, Col, Button, Space } from "antd";

const FrontMessage = () => (
  <>
    <div className="section_frontImage">
      <Row>
        <Col span={24}>
          <h1 className="headerMessage">Bienvenido a la Clínica de la Salud de la Mujer</h1>
        </Col>
      </Row>
    </div>
    <section className="section_frontMessage">
      <h1 className="title">Somos líderes en salud de la Mujer</h1>
      <Row>
        <Col span={8}>
          <img src="../../assets/images/1.jpg" height={300} width={250}></img>
        </Col>
        <Col span={8}>
          <h2>¿Por qué elegirnos?</h2>
          <p>En nuestra clínica, entendemos que cada mujer es única. Ofrecemos un enfoque personalizado y humano para garantizar que te sientas cuidada y acompañada en cada paso de tu camino. Contamos con un equipo de especialistas en salud femenina, tecnología de vanguardia y un ambiente cálido diseñado para tu comodidad.</p>
          <Button type="primary" style={{ marginTop: '20px'}}>Agenda tu Consulta</Button>
        </Col>
        <Col span={8}>
          <img src="../../assets/images/1.jpg" height={300} width={250}></img>
        </Col>
      </Row>
    </section>
    <section>
      <div className="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  </>
);
export { FrontMessage };