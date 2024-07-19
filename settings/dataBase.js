//nos conectamos a la base de datos a traves de mongoose
const mongoose = require('mongoose');

mongoose.connect ('mongodb://127.0.0.1:27017/jokes_db')// creamos la base de datos
.then (() => {
    console.log ("Conexión exitosa a la base de datos 'jokes_db")
})
.catch((error) => {
    console.log (`Hubo un error al conectarse con la base datos: ${error}`)
})