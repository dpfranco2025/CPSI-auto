import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Edital from './pages/Edital';
import Termo from './pages/Termo';
import Contrato from './pages/Contrato';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edital" element={<Edital />} />
        <Route path="/termo" element={<Termo />} />
        <Route path="/contrato" element={<Contrato />} />
      </Routes>
    </BrowserRouter>
  );
}
