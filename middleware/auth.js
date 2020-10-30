const service = require ('../services/index')

/**Metodo para validar si la persona tiene sesiòn iniciada
 * @param {*} req => Todo los parametros que se reciben
 * @param {*} res => La respuesta que se devolverá
 * @param {*} next => Middleware, si todo sale bien, se ejecuta el metodo que necesitamos
*/
exports.auth = (req, res, next) =>{
    if(!req.headers.authorization){
        return res.status(400).send({
            message: 'No tienes permiso para realizar la operaciòn'
        })
    }
    const token = req.headers.authorization.split(' ')[1]
console.log(token)
    service.decodeToken(token)
    .then(
        
        (respon)=>{
            console.log(respon)
            req.user = respon
            next()
        }

    )
    .catch(
        (error) => {
            res.status(error.status).send({
                message: error.message
            })
        }
    )
}