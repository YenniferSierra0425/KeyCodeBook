const GenreModel = require ('../models/genre');
/**
 * Metodo para Crear un Genero 
 * @param {*} req => Todo lo que estamos enviando
 * @param {*} res => Respusta que devolvera 
 */
exports.create = (req, res ) =>{

    if( Object.entries(req.body).length == 0){
        return res.status(400).send({
            message: 'Todos los campos son obligatorios'
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
        (error) => {
            return res.status(500).send({
                message: error.message
            })
        }
    )

}
/**
 * Metodo para Modificar los Generos
 * @param {*} req 
 * @param {*} res 
 */
exports.update = (req, res) =>{
    if( Object.entries(req.body).length == 0){
        return res.status(400).send({
            message: 'Todos los datos deben estar llenos'
        })

     }

     const genre = {
        name: req.body.name,
        status: req.body.status,
        
     }

     GenreModel.findByIdAndUpdate(req.params.id, genre, {new: true} )
     .then(
        (genreUpdated) =>{
            res.send(genreUpdated)
        }
      ).catch(
        (error) =>{
            return res.status(500).send({
                message: error.message
            })
        }
    )


}