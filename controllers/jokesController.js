const Joke = require('../models/jokesModels'); // Importamos el modelo de chistes

// Función para obtener todos los chistes
module.exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find(); // Consultamos todos los chistes en la base de datos
    res.json(jokes); // Devolvemos los chistes como respuesta en formato JSON
  } catch (error) {
    res.status(500).json({ message: error.message }); // Manejamos errores y devolvemos un mensaje de error
  }
};

// Función para obtener un chiste por su ID
module.exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id); // Consultamos un chiste por su ID
    if (!joke) {
      return res.status(404).json({ message: 'Chiste no encontrado' }); // Si no se encuentra el chiste, devolvemos un mensaje de error
    }
    res.json(joke); // Devolvemos el chiste encontrado como respuesta en formato JSON
  } catch (error) {
    res.status(500).json({ message: error.message }); // Manejamos errores y devolvemos un mensaje de error
  }
};

// Función para crear un nuevo chiste
module.exports.createJoke = async (req, res) => {
  const joke = new Joke({ // Creamos una nueva instancia de Joke con los datos recibidos en el cuerpo de la solicitud (req.body)
    joke: req.body.joke,
    category: req.body.category,
  });

  try {
    const newJoke = await joke.save(); // Guardamos el nuevo chiste en la base de datos
    res.status(201).json(newJoke); // Devolvemos el chiste creado como respuesta con estado 201 (creado) en formato JSON
  } catch (error) {
    res.status(400).json({ message: error.message }); // Manejamos errores de validación y devolvemos un mensaje de error
  }
};

// Función para actualizar un chiste existente por su ID
module.exports.updateJoke = async (req, res) => {
  try {
    const joke = await Joke.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Buscamos y actualizamos el chiste por su ID
    if (!joke) {
      return res.status(404).json({ message: 'Chiste no encontrado' }); // Si no se encuentra el chiste, devolvemos un mensaje de error
    }
    res.json(joke); // Devolvemos el chiste actualizado como respuesta en formato JSON
  } catch (error) {
    res.status(400).json({ message: error.message }); // Manejamos errores de validación y devolvemos un mensaje de error
  }
};

// Función para eliminar un chiste por su ID
module.exports.deleteJoke = async (req, res) => {
  try {
    const joke = await Joke.findByIdAndDelete(req.params.id); // Buscamos y eliminamos el chiste por su ID
    if (!joke) {
      return res.status(404).json({ message: 'Chiste no encontrado' }); // Si no se encuentra el chiste, devolvemos un mensaje de error
    }
    res.json({ message: 'Chiste eliminado correctamente' }); // Devolvemos un mensaje de éxito indicando que el chiste fue eliminado correctamente
  } catch (error) {
    res.status(500).json({ message: error.message }); // Manejamos errores y devolvemos un mensaje de error
  }
};
