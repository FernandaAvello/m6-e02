import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import { Row, Col, Button, Modal } from "antd";

// Ejemplo Interface
interface Doctor {
  id: number;
  name: string;
  specialty: string;
  description: string;
  image: string;
};

// Ejemplo Clase
class Doctor {
  id: number;
  name: string;
  specialty: string;
  description: string;
  image: string;

  constructor(id: number, name: string, specialty: string, description: string, image: string) {
    this.id = id;
    this.name = name;
    this.specialty = specialty;
    this.description = description;
    this.image = image;
  }

  doctorData(): string {
    return `${this.id} - ${this.name} - ${this.specialty} - ${this.description} - ${this.image}`;
  }
}

const ListDoctors: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('../../../../data/doctors.json');
      const data: Doctor[] = await response.json();
      setDoctors(data);
      setIsFetched(true);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const addDoctor = (id: number, name: string, specialty: string, description: string, image: string): void => {
    const newDoctor = new Doctor(id, name, specialty, description, image);
    setDoctors((prevDoctors) => [...prevDoctors, newDoctor]);
  };

  useEffect(() => {
    if (!isFetched) {
      fetchDoctors();
    }
  }, [isFetched]);


  return (
    <div className="section_list_doctors">
      <Button onClick={() => addDoctor(20, "Dr. Gregory House", "Internista", "Médico especialista en medicina interna", "https://www.lanacion.com.ar/resizer/v2/dr-VGT2DJVTCFHVXA5DCJWF6F7L5Y.jpg?auth=6744d4e14c7d06fc09def55b0ded72e7aba5bc63c8393aec488a6dd7bc97a678&width=880&height=586&quality=70&smart=true")}>Agregar Doctor</Button>
      <Row gutter={[16, 16]}>
        {doctors.map((doctor) => (
          <Col key={doctor.id} xs={24} sm={12} md={8}>
            <DoctorCard
              name={doctor.name}
              specialty={doctor.specialty}
              description={doctor.description}
              image={doctor.image}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};


export { ListDoctors };