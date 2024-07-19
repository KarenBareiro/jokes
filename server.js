 // server.js

const express = require('express');
// const connectDB = require('./servidor/configuración/mongoose.config'); // Importamos la función de configuración de Mongoose
const RouterJokes = require('./routes/jokesRoutes'); // Importamos las rutas de chistes

const app = express(); // Creamos una instancia de la aplicación Express
// const PORT = process.env.PORT || 3000; // Definimos el puerto en el que escuchará el servidor
require ('./settings/dataBase'); // conectamos a la base de datos


// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());
app.use (express.urlencoded({extended:true}))

// Middleware para manejar las rutas de chistes
app.use('/', RouterJokes);

// Iniciamos el servidor y escuchamos en el puerto especificado
app.listen(8080, () => {
  console.log('Servidor corriendo en el puerto 8080'); // Mensaje de éxito cuando el servidor se inicia correctamente
});
