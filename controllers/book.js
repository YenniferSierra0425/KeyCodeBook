const BookModel = require('../models/book')

/**Metodo para actualizar un nuevo libro
 * @param {*} req => Todo lo que enviamos desde el body (Formulario)
 * @param {*} res => La respuesta que se devolverá
*/

exports.create =(req,res) =>{
    if(Object.entries(req.body).length == 0){
        return res.status(400).send({
            message:'Todos los campos estan llenos.'
        })
    }
    const book = new BookModel({
        name: req.body.name,
        author: req.body.author,
        pageNumber: req.body.pageNumber,
        publisher: req.body.publisher,
        publicationDate: req.body.publicationDate,
        genre: req.body.genre


    })
    book.save()
    .then(
        (dataBook) =>{
            res.send(dataBook)
        }
    ).catch(
        (error) =>{
            return res.status(500).send({
                message: error.message
            })
        }
    )

}
