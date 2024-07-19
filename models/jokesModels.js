//crear jokesModels y JokeSchema y exportar.-
// servidor/modelos/jokes.model.js

const mongoose = require('mongoose');

// Definimos el esquema de datos para los chistes
const JokeSchema =  mongoose.Schema({
  joke: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Joke = mongoose.model ('joke',JokeSchema);

module.exports = Joke;
