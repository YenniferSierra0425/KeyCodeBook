const GenreModel = require ('../models/genre');
/**Metodo para actualizar un usuario  
 * @param {*} req => Todo lo que enviamos desde el body (Formulario)
 * @param {*} res => La respuesta que se devolverá
*/

exports.create = (req,res) => {
    if(Object.entries(req.body).length == 0){
        return res.status(400).send({
            message:'Todos los campos son obligatorios'
        })
    }
    const genre = new GenreModel({
        name: req.body.name,
        status: req.body.status,
    })
    genre.save()
    .then(
        (dataGenre) =>{
            res.send(dataGenre)
        }
    ).catch(
        (error) =>{
            return res.status(500).send({
                message: error.message
            })
        }
    )
}