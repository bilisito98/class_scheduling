import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
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
          {/* Redirigir "/" a Login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Páginas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Páginas protegidas (requieren login) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/tutores" element={<Tutores />} />
          <Route path="/estudiantes" element={<Estudiantes />} />
          <Route path="/clases" element={<Clases />} />
          <Route path="/modulos" element={<Modulos />} />
          <Route path="/notificaciones" element={<Notificaciones />} />

          {/* Ruta de fallback: redirige a Login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
