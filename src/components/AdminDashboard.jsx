// src/components/AdminDashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom
import '../styles/Dashboard.css'; // Usamos el mismo archivo CSS para todos los paneles

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('inicio');

  const renderSectionContent = () => {
    switch (selectedSection) {
      case 'matricular-estudiantes':
        return (
          <div className="card">
            <span className="card-icon">📘</span>
            <h2 className="card-title">Matricular Estudiantes</h2>
            <p className="card-description">Accede a la página para matricular estudiantes en el sistema.</p>
          </div>
        );
      case 'administrar-estudiantes':
        return (
          <div className="card">
            <span className="card-icon">👥</span>
            <h2 className="card-title">Administrar Estudiantes</h2>
            <p className="card-description">Gestiona los datos de los estudiantes registrados.</p>
          </div>
        );
      case 'ver-notas':
        return (
          <div className="card">
            <span className="card-icon">📊</span>
            <h2 className="card-title">Ver Notas</h2>
            <p className="card-description">Consulta las calificaciones de los estudiantes.</p>
          </div>
        );
      case 'imprimir-notas':
        return (
          <div className="card">
            <span className="card-icon">🖨️</span>
            <h2 className="card-title">Imprimir Notas</h2>
            <p className="card-description">Genera informes de calificaciones para impresión.</p>
          </div>
        );
      case 'configuracion':
        return (
          <div className="card">
            <span className="card-icon">⚙️</span>
            <h2 className="card-title">Configuración</h2>
            <p className="card-description">Ajusta las configuraciones del sistema.</p>
          </div>
        );
      default:
        return (
          <>
            <div className="card">
              <span className="card-icon">📘</span>
              <h2 className="card-title">Clases</h2>
              <p className="card-description">Accede a tus clases virtuales y participa activamente.</p>
            </div>
            <div className="card">
              <span className="card-icon">📝</span>
              <h2 className="card-title">Tareas</h2>
              <p className="card-description">Revisa y entrega tus tareas asignadas.</p>
            </div>
            <div className="card">
              <span className="card-icon">🏅</span>
              <h2 className="card-title">Calificaciones</h2>
              <p className="card-description">Consulta tus calificaciones y el progreso de tus estudios.</p>
            </div>
            <div className="card">
              <span className="card-icon">💬</span>
              <h2 className="card-title">Foro</h2>
              <p className="card-description">Participa en discusiones y debates con tus compañeros.</p>
            </div>
            <div className="card">
              <span className="card-icon">📅</span>
              <h2 className="card-title">Calendario</h2>
              <p className="card-description">Mantente al día con las fechas importantes de tu curso.</p>
            </div>
            <div className="card">
              <span className="card-icon">📂</span>
              <h2 className="card-title">Recursos</h2>
              <p className="card-description">Accede a materiales de aprendizaje y recursos útiles.</p>
            </div>
          </>
        );
    }
  };

  return (
    <div className="dashboard-container">
      {/* Panel de navegación */}
      <nav className="sidebar">
        <h2>Aula Virtual - Administrador</h2>
        <ul>
          <li><a href="#inicio" onClick={() => setSelectedSection('inicio')}>Inicio</a></li>
          <li><Link to="/matricula" onClick={() => setSelectedSection('matricular-estudiantes')}>Matricular Estudiantes</Link></li> {/* Utilizar Link para redirigir a Matricula.jsx */}
          <li><a href="#administrar-estudiantes" onClick={() => setSelectedSection('administrar-estudiantes')}>Administrar Estudiantes</a></li>
          <li><a href="#ver-notas" onClick={() => setSelectedSection('ver-notas')}>Ver Notas</a></li>
          <li><a href="#imprimir-notas" onClick={() => setSelectedSection('imprimir-notas')}>Imprimir Notas</a></li>
          <li><a href="#configuracion" onClick={() => setSelectedSection('configuracion')}>Configuración</a></li>
          <li><button id="logout-button">Cerrar sesión</button></li>
        </ul>
      </nav>

      {/* Contenido Principal */}
      <div className="main-content">
        {renderSectionContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
