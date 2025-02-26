import { List } from 'antd';
import React, { useState } from 'react';
import { ListDoctors } from '../components/Teams/ListDoctors';

const Team = () => {
  return (
    <div className="section_team">
      <h1 className="title">Equipo Médico</h1>
      <p className="description" style={{ textAlign: 'justify'}}>
        En nuestra clínica, contamos con un equipo de profesionales altamente capacitados y dedicados a proporcionar la mejor atención en salud femenina, fertilidad y obstetricia. Nuestro equipo está compuesto por especialistas en diversas áreas, incluyendo ginecología, obstetricia, endocrinología reproductiva, y más. Cada uno de nuestros médicos se compromete a ofrecer un cuidado personalizado y de alta calidad, asegurando que nuestras pacientes reciban el mejor tratamiento posible en cada etapa de sus vidas. Con años de experiencia y un enfoque en la innovación y la empatía, nuestro equipo está aquí para apoyarte y guiarte en tu camino hacia la salud y el bienestar.
      </p>
      < ListDoctors />
    </div>
  );
};

export default Team;