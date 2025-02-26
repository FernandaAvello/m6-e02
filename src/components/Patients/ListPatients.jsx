import React, { useEffect, useState } from "react";
import { Row, Col, Spin, Alert, Card, Button, Modal, Form, Input, Select } from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Option } = Select;

const ListPatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);
  const [form] = Form.useForm();

  const fetchPatients = async () => {
    setLoading(true);
    setError(false);
    try {
      const token = JSON.parse(localStorage.getItem('user')).token;
      const response = await axios.get('http://localhost:3000/patients', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setPatients(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching patients:", error);
      setError(true);
      setLoading(false);
    }
  };

  const addPatient = async (values) => {
    try {
      const token = JSON.parse(localStorage.getItem('user')).token;
      const response = await axios.post('http://localhost:3000/patients', values, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setPatients([...patients, response.data]);
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  const updatePatient = async (id, values) => {
    try {
      const token = JSON.parse(localStorage.getItem('user')).token;
      const response = await axios.put(`http://localhost:3000/patients/${id}`, values, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setPatients(patients.map(patient => (patient.id === id ? response.data : patient)));
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  const deletePatient = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem('user')).token;
      await axios.delete(`http://localhost:3000/patients/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setPatients(patients.filter(patient => patient.id !== id));
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      if (editingPatient) {
        updatePatient(editingPatient.id, values);
      } else {
        addPatient(values);
      }
      form.resetFields();
      setIsModalVisible(false);
      setEditingPatient(null);
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
    setEditingPatient(null);
  };

  const showModal = (patient = null) => {
    setEditingPatient(patient);
    if (patient) {
      form.setFieldsValue(patient);
    }
    setIsModalVisible(true);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      {loading && <Spin size="large" />}
      {error && <Alert message="Error al cargar los datos" type="error" />}
      <Button type="primary" onClick={() => showModal()} style={{ marginBottom: 16 }}>
        Añadir Nuevo Paciente
      </Button>
      <Row gutter={16}>
        {patients.map(patient => (
          <Col span={8} key={patient.id}>
            <Card
              title={patient.name}
              extra={
                <>
                  <Button type="link" icon={<EditOutlined />} onClick={() => showModal(patient)} style={{ marginRight: 8 }} />
                  <Button type="link" icon={<DeleteOutlined />} onClick={() => deletePatient(patient.id)} />
                </>
              }
            >
              <p>Edad: {patient.age}</p>
              <p>Género: {patient.gender}</p>
              <p>Dirección: {patient.address}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal
        title={editingPatient ? "Editar Paciente" : "Añadir Nuevo Paciente"}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Nombre del Paciente"
            rules={[{ required: true, message: 'Por favor ingrese el nombre del paciente' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Edad"
            type="number"
            rules={[
              { required: true, message: 'Por favor ingrese la edad del paciente' },
              { validator: (_, value) => value && Number.isInteger(Number(value)) ? Promise.resolve() : Promise.reject('La edad debe ser un número entero') }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Género"
            rules={[{ required: true, message: 'Por favor ingrese el género del paciente' }]}
          >
            <Select>
              <Option value="Mujer">Mujer</Option>
              <Option value="Hombre">Hombre</Option>
              <Option value="Otro">Otro</Option>
              <Option value="No especifica">No especifica</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="address"
            label="Dirección"
            rules={[{ required: true, message: 'Por favor ingrese la dirección del paciente' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ListPatients;