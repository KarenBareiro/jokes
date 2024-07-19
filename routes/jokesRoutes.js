const express = require ('express');


const ControllerJokes = require ('./../controllers/jokesController')

const routerJokes = express.Router(); //utilizamos de express un objeto que se llama router


routerJokes.get ('/jokes', ControllerJokes.getAllJokes ); //definimos la ruta con dos parametros, el primer parametro indicamos la ruta y obtenemos todos los chistes a  traves del metodo get
routerJokes.get ('/jokes/:id', ControllerJokes.getJokeById); //Obtenemos un chiste ppor su ID a  traves del metodo get
routerJokes.post('/jokes/create', ControllerJokes.createJoke); // creamos un nuevo chiste con el metodo post
routerJokes.put('/jokes/:id', ControllerJokes.updateJoke); // actualizamos un chiste por su ID con el metodo put
routerJokes.delete('/jokes/:id', ControllerJokes.deleteJoke); // Eliminamos un chiste por su ID con el metodo delete

module.exports = routerJokes; // Exportamos el enrutador configurado