import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="footer" style={{ textAlign: 'center', marginTop: '20px' }}>
      KS Medical ©2024 Created by Fernanda Avello
    </Footer>
  );
};

export default AppFooter;