import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { theme } from 'antd';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from "./routes/AppRoutes";

const { defaultAlgorithm, defaultSeed } = theme;

const customTheme = {
  algorithm: defaultAlgorithm,
  token: {
    colorPrimary: '#EA4C89',
  },
};

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;