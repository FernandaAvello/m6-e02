import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select, DatePicker, Button } from 'antd';
import doctorsData from '../../../public/data/doctors.json';

const { Option } = Select;

const AppointmentForm = ({ addAppointment }) => {
  const [form] = Form.useForm();
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [patientFirstName, setPatientFirstName] = useState('');
  const [patientLastName, setPatientLastName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [doctorSpecialty, setDoctorSpecialty] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [doctors, setDoctors] = useState([]);

  const emailInputRef = useRef(null);

  useEffect(() => {
    setDoctors(doctorsData);
  }, []);

  const focusEmailInput = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };

  const handleSubmit = () => {
    const newAppointment = {
      appointmentDate,
      patientFirstName,
      patientLastName,
      patientEmail,
      patientPhone,
      doctorSpecialty,
      doctorName,
    };
    addAppointment(newAppointment);
    form.resetFields();
  };

  return (
    <div>
      <Form form={form} className="section_appointment" onFinish={handleSubmit}>
        <React.Fragment>
          <Form.Item
            label="Nombre del paciente"
            rules={[{ required: true, message: 'Por favor ingrese el nombre del paciente' }]}
          >
            <Input
              value={patientFirstName}
              onChange={(e) => setPatientFirstName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Apellido del paciente"
            rules={[{ required: true, message: 'Por favor ingrese el apellido del paciente' }]}
          >
            <Input
              value={patientLastName}
              onChange={(e) => setPatientLastName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Correo del paciente"
            rules={[
              { required: true, message: 'Por favor ingrese el correo del paciente' },
              { type: 'email', message: 'Por favor ingrese un correo válido' },
            ]}
          >
            <Input
              ref={emailInputRef}
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Teléfono del paciente"
            rules={[{ required: true, message: 'Por favor ingrese el teléfono del paciente' }]}
          >
            <Input value={patientPhone} onChange={(e) => setPatientPhone(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Especialidad del doctor"
            rules={[{ required: true, message: 'Por favor seleccione la especialidad del doctor' }]}
          >
            <Select value={doctorSpecialty} onChange={(value) => setDoctorSpecialty(value)}>
              {doctors.map((doctor) => (
                <Option key={doctor.specialty} value={doctor.specialty}>
                  {doctor.specialty}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Nombre del doctor"
            rules={[{ required: true, message: 'Por favor seleccione el nombre del doctor' }]}
          >
            <Select value={doctorName} onChange={(value) => setDoctorName(value)}>
              {doctors
                .filter((doctor) => doctor.specialty === doctorSpecialty)
                .map((doctor) => (
                  <Option key={doctor.name} value={doctor.name}>
                    {doctor.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Fecha de la cita"
            rules={[{ required: true, message: 'Por favor seleccione la fecha de la cita' }]}
          >
            <DatePicker value={appointmentDate} onChange={(date) => setAppointmentDate(date)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Agendar Cita
            </Button>
          </Form.Item>
        </React.Fragment>
      </Form>
    </div>
  );
};

AppointmentForm.propTypes = {
  addAppointment: PropTypes.func.isRequired,
};

export default AppointmentForm;