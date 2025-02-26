import { useState } from 'react';
import { Form } from 'antd';

const useDoctorForm = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errors, setErrors] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setErrors([]);
  };

  const handleOk = (doctors, setDoctors) => {
    form.validateFields()
      .then((values) => {
        setDoctors([...doctors, { ...values, key: doctors.length + 1 }]);
        setIsModalVisible(false);
        form.resetFields();
        setErrors([]);
      })
      .catch((errorInfo) => {
        setErrors(errorInfo.errorFields);
      });
  };

  return {
    form,
    isModalVisible,
    showModal,
    handleCancel,
    handleOk,
    errors,
  };
};

export default useDoctorForm;