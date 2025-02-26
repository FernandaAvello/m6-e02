import { List } from 'antd';
import React, { useState } from 'react';
import ListPatients from '../components/Patients/ListPatients';

const Patients = () => {
  return (
    <div className="section_services">
      <h1 className="title">Lista de Pacientes</h1>
      < ListPatients />
    </div>
  );
};

export default Patients;