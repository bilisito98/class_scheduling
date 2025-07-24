import EstudianteForm from '../components/Estudiante/EstudianteForm';
import EstudianteList from '../components/Estudiante/EstudianteList';

const Estudiantes = () => {
  return (
    <div className="container mt-4">
      <h2>Estudiantes</h2>
      <EstudianteForm />
      <EstudianteList />
    </div>
  );
};

export default Estudiantes;
