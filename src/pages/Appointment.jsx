import { Table } from 'antd';
import React, { useState, useEffect } from 'react';
import AppointmentForm from '../components/Appointment/AppointmentForm';
import { addAppointmentToDB, getAppointmentsFromDB } from '../utils/indexedDB';

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointmentsFromDB().then((data) => {
      setAppointments(data);
    });
  }, []);

  const addAppointment = (newAppointment) => {
    addAppointmentToDB(newAppointment).then(() => {
      setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
    });
  };

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'patientFirstName',
      key: 'patientFirstName',
    },
    {
      title: 'Apellido',
      dataIndex: 'patientLastName',
      key: 'patientLastName',
    },
    {
      title: 'Correo',
      dataIndex: 'patientEmail',
      key: 'patientEmail',
    },
    {
      title: 'Teléfono',
      dataIndex: 'patientPhone',
      key: 'patientPhone',
    },
    {
      title: 'Fecha de Cita',
      dataIndex: 'appointmentDate',
      key: 'appointmentDate',
      render: (date) => date?.format('DD-MM-YYYY'),
    },
    {
      title: 'Especialidad del Doctor',
      dataIndex: 'doctorSpecialty',
      key: 'doctorSpecialty',
    },
    {
      title: 'Nombre del Doctor',
      dataIndex: 'doctorName',
      key: 'doctorName',
    },
  ];

  return (
    <div className="section_appointment">
      <h1 className="title">Formulario de Agendamiento</h1>
      <p className="description" style={{ textAlign: 'center' }}>
        Por favor complete el siguiente formulario para agendar una cita con uno de nuestros doctores.
      </p>
      <AppointmentForm addAppointment={addAppointment} />
      <h2 className="title">Citas Agendadas</h2>
      <Table dataSource={appointments} columns={columns} rowKey={(record) => record.patientEmail} />
    </div>
  );
};

export default Appointment;