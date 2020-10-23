const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    name: {type: String, required: true}, //nombre libro
    author: {type: String, required: true},//nombre autor del libro
    pageNumber: {type: Number},//numero de paginas
    publisher: {type: String, required: true},//editorial
    publicationDate: {type:Date},//Fecha publicacion
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}]//Un libro puede tener muchos generos
})

module.exports = mongoose.model('Book', bookSchema)