import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Logements from './pages/Logements';

const Router = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logements/:id" element={<Logements />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>

  );
};

export default Router;