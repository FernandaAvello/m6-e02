import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Services from "../pages/Services";
import Appointment from "../pages/Appointment";
import Patients from "../pages/Patients";
import Login from "../pages/Login";
import AccessDenied from "../pages/AccessDenied";
import Vulnerabilities from "../pages/Vulnerabilities";
import Administration from "../pages/Administration";
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vulnerabilities" element={<Vulnerabilities />} />
        <Route path="/login" element={<Login />} />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/patients" element={<Patients />} />
        <Route element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/administration" element={<Administration />} />
        </Route>
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
};

export default AppRoutes;