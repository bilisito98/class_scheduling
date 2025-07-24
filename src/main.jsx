import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';

// Páginas principales
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

// Páginas de gestión
import Usuarios from './pages/Usuarios';
import Tutores from './pages/Tutores';
import Estudiantes from './pages/Estudiantes';
import Clases from './pages/Clases';
import Modulos from './pages/Modulos';
import Notificaciones from './pages/Notificaciones';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          {/* 👉 Redirección por defecto al iniciar la app */}
          <Route path="/" element={<Navigate to="/usuarios" />} />

          {/* Páginas principales */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Gestión de entidades */}
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/tutores" element={<Tutores />} />
          <Route path="/estudiantes" element={<Estudiantes />} />
          <Route path="/clases" element={<Clases />} />
          <Route path="/modulos" element={<Modulos />} />
          <Route path="/notificaciones" element={<Notificaciones />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
