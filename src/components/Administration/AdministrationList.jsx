import React, { useEffect, useState } from 'react';
import { Table, Image, Button, Modal, Form, Input, Select } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import doctorsData from '../../../public/data/doctors.json';
import useDoctorForm from '../../hooks/useDoctorForm';

const { Option } = Select;

const AdministrationList = () => {
  const [doctors, setDoctors] = useState([]);
  const [editingDoctorKey, setEditingDoctorKey] = useState(null);
  const {
    form,
    isModalVisible,
    showModal,
    handleCancel,
    errors,
  } = useDoctorForm();

  useEffect(() => {
    setDoctors(doctorsData);
  }, []);

  const handleEdit = (record) => {
    form.setFieldsValue(record);
    setEditingDoctorKey(record.key);
    showModal();
  };

  const handleDelete = (key) => {
    setDoctors(doctors.filter(doctor => doctor.key !== key));
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      if (editingDoctorKey !== null) {
        setDoctors(doctors.map(doctor => (doctor.key === editingDoctorKey ? { ...doctor, ...values } : doctor)));
        setEditingDoctorKey(null);
      } else {
        setDoctors([...doctors, { ...values, key: doctors.length + 1 }]);
      }
      form.resetFields();
      handleCancel();
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Nombre del Doctor',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Especialidad',
      dataIndex: 'specialty',
      key: 'specialty',
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Miniatura',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <Image width={50} src={text} />,
    },
    {
      title: 'Años de Experiencia',
      dataIndex: 'years_of_experience',
      key: 'years_of_experience',
    },
    {
      title: 'Días Disponibles',
      dataIndex: ['disponibility', 'days'],
      key: 'days',
      render: (days) => days.join(', '),
    },
    {
      title: 'Horas Disponibles',
      dataIndex: ['disponibility', 'hours'],
      key: 'hours',
      render: (hours) => hours.join(', '),
    },
    {
      title: 'Acciones',
      key: 'actions',
      render: (text, record) => (
        <div>
          <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)} style={{ marginRight: 8 }} />
          <Button type="link" icon={<DeleteOutlined />} onClick={() => handleDelete(record.key)} />
        </div>
      ),
    },
  ];

  return (
    <div className="section_administration">
      <h1 className="title">Administración</h1>
      <p className="description" style={{ textAlign: 'center' }}>
        Bienvenido a la página de administración.
      </p>
      <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
        Añadir Nuevo Doctor
      </Button>
      <Table dataSource={doctors} columns={columns} rowKey="key" />
      <Modal
        title={editingDoctorKey !== null ? "Editar Doctor" : "Añadir Nuevo Doctor"}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Nombre del Doctor"
            rules={[{ required: true, message: 'Por favor ingrese el nombre del doctor' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="specialty"
            label="Especialidad"
            rules={[{ required: true, message: 'Por favor ingrese la especialidad del doctor' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Descripción"
            rules={[{ required: true, message: 'Por favor ingrese la descripción del doctor' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="image"
            label="URL de la Imagen"
            rules={[{ required: true, message: 'Por favor ingrese la URL de la imagen del doctor' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="years_of_experience"
            label="Años de Experiencia"
            rules={[{ required: true, message: 'Por favor ingrese los años de experiencia del doctor' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name={['disponibility', 'days']}
            label="Días Disponibles"
            rules={[{ required: true, message: 'Por favor ingrese los días disponibles del doctor' }]}
          >
            <Select mode="multiple">
              <Option value="Lunes">Lunes</Option>
              <Option value="Martes">Martes</Option>
              <Option value="Miércoles">Miércoles</Option>
              <Option value="Jueves">Jueves</Option>
              <Option value="Viernes">Viernes</Option>
              <Option value="Sábado">Sábado</Option>
              <Option value="Domingo">Domingo</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={['disponibility', 'hours']}
            label="Horas Disponibles"
            rules={[{ required: true, message: 'Por favor ingrese las horas disponibles del doctor' }]}
          >
            <Select mode="multiple">
              <Option value="8:00">8:00</Option>
              <Option value="9:00">9:00</Option>
              <Option value="10:00">10:00</Option>
              <Option value="11:00">11:00</Option>
              <Option value="12:00">12:00</Option>
              <Option value="13:00">13:00</Option>
              <Option value="14:00">14:00</Option>
              <Option value="15:00">15:00</Option>
              <Option value="16:00">16:00</Option>
              <Option value="17:00">17:00</Option>
              <Option value="18:00">18:00</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdministrationList;