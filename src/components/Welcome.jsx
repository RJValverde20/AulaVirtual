import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Welcome.css';

const Welcome = ({ userRole }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    switch (userRole) {
      case 'admin':
        navigate('/admin-dashboard');
        break;
      case 'teacher':
        navigate('/teacher-dashboard');
        break;
      case 'student':
        navigate('/student-dashboard');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="welcome-container">
      <h1>Bienvenido al Aula Virtual</h1>
      <p>Estamos emocionados de tenerte con nosotros para una nueva aventura educativa.</p>
      <button onClick={handleNext} className="btn-next">Siguiente</button>
    </div>
  );
};

export default Welcome;
