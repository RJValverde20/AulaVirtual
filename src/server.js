// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Carpeta para guardar los archivos
const DIRECTORY_PATH = path.join(__dirname, 'matriculas');
if (!fs.existsSync(DIRECTORY_PATH)) {
  fs.mkdirSync(DIRECTORY_PATH);
}

// Ruta para guardar matrícula
app.post('/save-matricula', (req, res) => {
  const { nombreArchivo, contenido } = req.body;
  const filePath = path.join(DIRECTORY_PATH, nombreArchivo);
  fs.writeFile(filePath, contenido, (err) => {
    if (err) {
      return res.status(500).send('Error al guardar la matrícula');
    }
    res.send('Matrícula guardada');
  });
});

// Ruta para leer archivos de matrícula
app.get('/get-matriculas', (req, res) => {
  fs.readdir(DIRECTORY_PATH, (err, files) => {
    if (err) {
      return res.status(500).send('Error al leer los archivos');
    }
    const matriculas = files.map(file => {
      return { nombreArchivo: file };
    });
    res.json(matriculas);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
