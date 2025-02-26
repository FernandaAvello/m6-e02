import React from 'react';
import { Card, Tag, Row, Col } from 'antd';
const { Meta } = Card;

interface DoctorCardProps {
  id: number;
  name: string;
  specialty: string;
  description: string;
  image: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, specialty, description, image }) => (
  <Card
    hoverable
    style={{
      width: 300,
      margin: '10px'
    }}
    cover={<img alt={name} src={image} height={400} width={250} />}
  >
    <Meta title={name}/>
    <Row justify="center" style={{ marginTop: '10px' }}>
      <Col>
        <Tag color="pink">{specialty}</Tag>
      </Col>
    </Row>
    <div style={{ marginTop: '10px' }}>
      <Meta description={description} />
    </div>
  </Card>
);

export default DoctorCard;