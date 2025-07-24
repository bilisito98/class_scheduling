import TutorForm from '../components/Tutor/TutorForm';
import TutorList from '../components/Tutor/TutorList';

const Tutores = () => {
  return (
    <div className="container mt-4">
      <h2>Tutores</h2>
      <TutorForm />
      <TutorList />
    </div>
  );
};

export default Tutores;
