// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import Matricula from './components/Matricula'; // Importar el componente Matricula

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  return (
    <Router>
      <Routes>
        {/* Ruta de inicio de sesión */}
        <Route path="/" element={isLoggedIn ? <Navigate to="/welcome" /> : <Login onLogin={handleLogin} />} />
        
        {/* Ruta de bienvenida después de iniciar sesión */}
        <Route path="/welcome" element={isLoggedIn ? <Welcome userRole={userRole} /> : <Navigate to="/" />} />
        
        {/* Ruta para el panel del administrador */}
        <Route path="/admin-dashboard" element={isLoggedIn && userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/" />} />
        
        {/* Ruta para matricular estudiantes desde el panel del administrador */}
        <Route path="/matricula" element={isLoggedIn && userRole === 'admin' ? <Matricula /> : <Navigate to="/" />} />

        {/* Rutas para el panel del profesor y del estudiante */}
        <Route path="/teacher-dashboard" element={isLoggedIn && userRole === 'teacher' ? <TeacherDashboard /> : <Navigate to="/" />} />
        <Route path="/student-dashboard" element={isLoggedIn && userRole === 'student' ? <StudentDashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
