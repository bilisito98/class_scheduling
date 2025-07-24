import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import styles from './Auth.module.css'; // Si necesitas estilos específicos para autenticación

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    // Aquí iría la lógica de autenticación con el backend
  };

  return (
    <div className="page-container" style={{ maxWidth: '400px', margin: '50px auto', padding: '2rem', backgroundColor: 'var(--white-color)', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        ¿No tienes cuenta? <Link to="/register" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default Login;
