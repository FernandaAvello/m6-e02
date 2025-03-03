import { Table } from 'antd';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import AppointmentForm from '../components/Appointment/AppointmentForm';
import { addAppointmentToDB, getAppointmentsFromDB } from '../utils/indexedDB';

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointmentsFromDB().then((data) => {
      console.log(data)
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
      key: 'patientfirstname',
    },
    {
      title: 'Apellido',
      dataIndex: 'patientLastName',
      key: 'patientlastname',
    },
    {
      title: 'Correo',
      dataIndex: 'patientEmail',
      key: 'patientemail',
    },
    {
      title: 'Teléfono',
      dataIndex: 'patientPhone',
      key: 'patientphone',
    },
    {
      title: 'Fecha de Cita',
      dataIndex: 'appointmentDate',
      key: 'appointmentdate',
      render: (date) => {
        return `${dayjs(date).format('DD/MM/YYYY')}`;
      },
    },
    {
      title: 'Especialidad del Doctor',
      dataIndex: 'doctorSpecialty',
      key: 'doctorspecialty',
    },
    {
      title: 'Nombre del Doctor',
      dataIndex: 'doctorName',
      key: 'doctorname',
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