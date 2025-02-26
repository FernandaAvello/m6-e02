import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Row, Col, Button, Spin, Alert } from "antd";

interface Service {
  key: number;
  icon: string;
  title: string;
  description: string;
}

const ListServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchServices = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('../../../../data/services.json');
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Service[] = await response.json();
      setTimeout(() => {
        setServices(data);
        setLoading(false);
      }, 2000); // Retraso de 2 segundos
    } catch (error) {
      console.error("Error fetching services:", error);
      setError(true);
      setLoading(false);
    }
  };

  const simulateApiFailure = () => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 2000); // Retraso de 2 segundos para simular el fallo
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      {loading && <Spin size="large" />}
      {error && <Alert message="Error al cargar los datos" type="error" />}
      <Button onClick={simulateApiFailure} style={{ marginBottom: 16 }}>
        Simular fallo de API
      </Button>
      <Row gutter={16}>
        {services.map(service => (
          <Col span={8} key={service.id}>
            <ServiceCard icon={service.icon} title={service.title} description={service.description} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListServices;