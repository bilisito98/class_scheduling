import React, { useState } from 'react';

const initialForm = {
  Nombre: '',
  Email: '',
  Password_Hash: '',
  Rol: '',
  Fecha_Registro: '',
};

const UsuarioForm = ({ onAddUsuario }) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!form.Nombre || !form.Email || !form.Password_Hash || !form.Rol) {
      setError('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Fecha de registro automática si no está asignada
    const fechaRegistro = form.Fecha_Registro || new Date().toISOString();

    // Enviar datos
    onAddUsuario({ ...form, Fecha_Registro: fechaRegistro });

    // Limpiar formulario
    setForm(initialForm);
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h3>Registro de Usuario</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <label>Nombre*:</label><br />
        <input type="text" name="Nombre" value={form.Nombre} onChange={handleChange} />
      </div>

      <div>
        <label>Email*:</label><br />
        <input type="email" name="Email" value={form.Email} onChange={handleChange} />
      </div>

      <div>
        <label>Contraseña*:</label><br />
        <input type="password" name="Password_Hash" value={form.Password_Hash} onChange={handleChange} />
      </div>

      <div>
        <label>Rol*:</label><br />
        <select name="Rol" value={form.Rol} onChange={handleChange}>
          <option value="">-- Seleccionar Rol --</option>
          <option value="admin">Administrador</option>
          <option value="tutor">Tutor</option>
          <option value="estudiante">Estudiante</option>
        </select>
      </div>

      <div>
        <label>Fecha de Registro:</label><br />
        <input
          type="datetime-local"
          name="Fecha_Registro"
          value={form.Fecha_Registro}
          onChange={handleChange}
          placeholder="Opcional"
        />
      </div>

      <button type="submit" style={{ marginTop: '1rem' }}>Registrar Usuario</button>
    </form>
  );
};

export default UsuarioForm;
