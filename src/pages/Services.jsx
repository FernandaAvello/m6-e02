import { List } from 'antd';
import React, { useState } from 'react';
import ListServices from '../components/Services/ListServices';

const Services = () => {
  return (
    <div className="section_services">
      <h1 className="title">Nuestros Servicios</h1>
      <p className="description" style={{ textAlign: 'justify'}}>
        En nuestra clínica, nos dedicamos a proporcionar una atención integral y especializada en salud femenina, fertilidad y obstetricia. Nuestro equipo de expertos está comprometido en ofrecer los mejores servicios para asegurar el bienestar y la salud de nuestras pacientes en cada etapa de sus vidas. Desde el control prenatal hasta tratamientos avanzados de fertilidad, estamos aquí para apoyarte en cada paso del camino.
      </p>
      < ListServices />
    </div>
  );
};

export default Services;