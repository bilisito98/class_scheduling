import React, { useState } from 'react';
import UsuarioForm from '../components/Usuario/UsuarioForm';
import UsuarioList from '../components/Usuario/UsuarioList';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  // Función para agregar usuario nuevo
  const addUsuario = (usuario) => {
    setUsuarios((prev) => [...prev, usuario]);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Gestión de Usuarios</h1>
      <UsuarioForm onAddUsuario={addUsuario} />
      <UsuarioList usuarios={usuarios} />
    </div>
  );
};

export default Usuarios;
