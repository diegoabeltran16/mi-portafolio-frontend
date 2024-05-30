// server.js
// Importa los módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configura el motor de plantillas EJS
app.set('view engine', 'ejs');

// Middleware para analizar los cuerpos de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para la página principal
app.get('/', (req, res) => {
    // Renderiza la plantilla index.ejs
    res.render('index');
});

// Ruta para manejar la solicitud POST del formulario de contacto
app.post('/contact', (req, res) => {
    // Envía una respuesta con los datos recibidos
    res.send(`Nombre: ${req.body.nombre}, Email: ${req.body.email}, Mensaje: ${req.body.mensaje}`);
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
