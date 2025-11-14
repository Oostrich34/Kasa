import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Logements from './pages/Logements/Logements.jsx'
import Error from './components/Error/Error.jsx'

const AppRouter = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/*<Route path="/logements" element={<Logements />} />*/}
      <Route path="/logements/:id" element={<Logements />} />
      <Route path="*" element={<Error />} />
    </Routes>

  );
};

export default AppRouter;