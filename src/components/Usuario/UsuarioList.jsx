import React from 'react';

const UsuarioList = ({ usuarios }) => {
  if (usuarios.length === 0) return <p>No hay usuarios registrados aún.</p>;

  return (
    <div>
      <h3>Usuarios Registrados</h3>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Fecha de Registro</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u, i) => (
            <tr key={i}>
              <td>{u.Nombre}</td>
              <td>{u.Email}</td>
              <td>{u.Rol}</td>
              <td>{new Date(u.Fecha_Registro).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuarioList;
