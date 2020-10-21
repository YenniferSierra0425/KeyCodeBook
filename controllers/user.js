const { reset } = require('nodemon')
const UserModel = require ('../models/users')


  /**Metodo para actualizar un usuario  
 * @param {*} req => Todo lo que enviamos desde el body (Formulario)
 * @param {*} res => La respuesta que se devolverá
*/

exports.create = (req , res) => {
/**El signo de ! antes de la condición significa que estamos negando la condición */
   
if ( Object.entries(req.body).lenght == 0){
return res.status(400).send({
    menssage: 'Los datos son obligatorios.'
})
    }
   
const user = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    birthDate: req.body.birthDate,
    age: req.body.age,
})
 user.save().then((dataUser) => {res.send(dataUser)})
 .catch((error) => {
     res.status(500).send({
message: error.message
    })
 })
}


/**Metodo para actualizar un usuario  
 * @param {*} req => Todo lo que enviamos desde el body (Formulario)
 * @param {*} res => La respuesta que se devolverá
*/
exports.update = (req, res) =>{
    if ( Object.entries(req.body).lenght == 0){
        return res.status(400).send({
            menssage: 'Los datos son obligatorios.'
        })


            }
const user ={
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    birthDate: req.body.birthDate,
    age: req.body.age,
}

/** findByIdAndUpdate => Método de mongoose que permite buscar por id y actualizar usuario.Tiene los parametros 
 * -El id del usuario => req.params. ud es el id que se envia por la URL
 * -Los datos nuevos
*/
UserModel.findByIdAndUpdate(req.params.id, user)
.then(
    (userUpdate) =>{
        res.send(userUpdate)
    }
).catch(
    (error) => {
        res.status(500).send({
            message: error.message
        })
    }
)
}