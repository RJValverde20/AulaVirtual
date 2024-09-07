import React, { useState, useEffect } from 'react';
import '../styles/AdminEstudiantes.css'; // Asegúrate de que la ruta sea correcta
import fs from 'fs';
import path from 'path';

const AdminEstudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [selectedEstudiante, setSelectedEstudiante] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    grado: '',
  });

  useEffect(() => {
    // Cargar los estudiantes desde los archivos .txt
    const loadEstudiantes = () => {
      const estudiantesPath = path.join(__dirname, 'matriculas');
      const files = fs.readdirSync(estudiantesPath);
      const estudiantesList = files.map(file => {
        const filePath = path.join(estudiantesPath, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split('\n');
        const [nombre, correo, grado] = lines;
        return { nombre, correo, grado };
      });
      setEstudiantes(estudiantesList);
    };

    loadEstudiantes();
  }, []);

  const handleSelectEstudiante = (estudiante) => {
    setSelectedEstudiante(estudiante);
    setFormData({
      nombre: estudiante.nombre,
      correo: estudiante.correo,
      grado: estudiante.grado,
    });
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Guardar cambios en el archivo correspondiente
    const filePath = path.join(__dirname, 'matriculas', `${formData.nombre.replace(/\s+/g, '_')}.txt`);
    const fileContent = `
      Nombre: ${formData.nombre}
      Correo Electrónico: ${formData.correo}
      Grado: ${formData.grado}
    `;
    fs.writeFileSync(filePath, fileContent);
    setEstudiantes(estudiantes.map(est => est.nombre === formData.nombre ? formData : est));
    setEditMode(false);
  };

  return (
    <div className="admin-estudiantes-container">
      {/* Panel del aula virtual del administrador */}
      <nav className="sidebar">
        <h2>Aula Virtual - Administrador</h2>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#matricular-estudiantes">Matricular Estudiantes</a></li>
          <li><a href="#administrar-estudiantes">Administrar Estudiantes</a></li>
          <li><a href="#ver-notas">Ver Notas</a></li>
          <li><a href="#imprimir-notas">Imprimir Notas</a></li>
          <li><a href="#configuracion">Configuración</a></li>
          <li><button id="logout-button">Cerrar sesión</button></li>
        </ul>
      </nav>

      {/* Contenido Principal */}
      <div className="main-content">
        <h1>Administrar Estudiantes</h1>

        <div className="estudiantes-list">
          <h2>Lista de Estudiantes</h2>
          <ul>
            {estudiantes.map(estudiante => (
              <li key={estudiante.nombre}>
                <button onClick={() => handleSelectEstudiante(estudiante)}>
                  {estudiante.nombre}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {selectedEstudiante && (
          <div className="student-details">
            {editMode ? (
              <div className="edit-form">
                <h2>Editar Información del Estudiante</h2>
                <label>
                  Nombre:
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Correo Electrónico:
                  <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Grado:
                  <select
                    name="grado"
                    value={formData.grado}
                    onChange={handleChange}
                  >
                    <option value="7mo">7mo</option>
                    <option value="8vo">8vo</option>
                    <option value="9no">9no</option>
                    <option value="10mo">10mo</option>
                    <option value="11mo">11mo</option>
                  </select>
                </label>
                <button onClick={handleSave}>Guardar Cambios</button>
              </div>
            ) : (
              <div>
                <p><strong>Nombre:</strong> {selectedEstudiante.nombre}</p>
                <p><strong>Correo Electrónico:</strong> {selectedEstudiante.correo}</p>
                <p><strong>Grado:</strong> {selectedEstudiante.grado}</p>
                <button onClick={handleEdit}>Editar</button>
                {/* Aquí puedes agregar botones para ver notas y asistencia */}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminEstudiantes;
