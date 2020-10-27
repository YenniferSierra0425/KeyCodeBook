const BookModel = require('../models/book')

/**Metodo para listar todos los libros que están en la plataforma
 * @param {*} req => Todo lo que recibe 
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

exports.update = () =>{
   /**Metodo para monificar la informacion de un  libro
 * @param {*} req => Todo lo que se recibe 
 * @param {*} res => La respuesta que se devolverá
*/ 

exports.update =(req,res) =>{
    if(Object.entries(req.body).length == 0){
        return res.status(400).send({
            message:'Todos los campos estan llenos.'
        })
    }
}
    const book = {
        name: req.body.name,
        author: req.body.author,
        pageNumber: req.body.pageNumber,
        publisher: req.body.publisher,
        publicationDate: req.body.publicationDate,
        genre: req.body.genre

}

BookModel.findByIdAndUpdate(req.params.id, book, {new: true})
.then(
    (BookUpdated) =>{
        res.send(BookUpdated)
    }
)
.catch(
    (error) =>{
        return res.status(500).send({
            message: error.message
        })
        
    }
)
}


/**Metodo para actualizar un nuevo libro
 * @param {*} req => Todo lo que enviamos desde el body (Formulario)
 * @param {*} res => La respuesta que se devolverá
*/

exports.getAll = (req , res) => {
    BookModel.find()
    .populate('genre')
    .exec()
    .then((books) => {res.send(books)})
    .catch(
        (error) => {
            res.status(500).send({
                message: error.message
            })
        }
    )
}

/**Metodo para obtener un libro por el id
 * @param {*} req => Todo lo que se recibe
 * @param {*} res => La respuesta que se devolverá
*/

exports.getOne = (req , res) => {
    BookModel.findById(req.params.id)
    .populate('genre')
    .exec()
    .then((book) => {res.send(book) } )
    .catch(
        (error) =>{
            res.status(500).send({
                message: error.message
            })
        }
    )
}


/**Metodo para eliminar un libro por el id
 * @param {*} req => Todo lo que se recibe
 * @param {*} res => La respuesta que se devolverá
*/
exports.deleteOne = (req, res) => {
BookModel.findByIdAndRemove(req.params.id)
.then((book) => { res.send(book) } )
.catch(
    (error) =>{
        res.status(500).send({
            message: error.message
        })
    }
) 
}
