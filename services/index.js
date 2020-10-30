const jwt = require ('jwt-simple')
const moment = require ('moment')
const config = require ('../config')
const SECRET = config.keytoken

exports.createToken = (dataUser) =>{
    const payload = {
        sub: dataUser._id,
        iat:moment().unix () ,// Fecha en la que se creo el Token, con unix se convierte en numero 
        exp: moment().add('1', 'hour').unix(),
        firstName: dataUser.firstName,
        lastName: dataUser.lastName,
        email: dataUser.email,
        role: dataUser.role,
        birthDate: dataUser.birthDate,
        age: dataUser.age,
    }
return jwt.encode(payload, SECRET)

}

exports.decodeToken = (token) =>{
    const decode = new Promise( (resolve, reject) => {
        try{
            const payload = jwt.decode(token, SECRET)
            if(payload.exp <= moment().unix()){
                reject ({
                    status: 401,
                    messege: 'El token ha expirado'
                })
            }
            resolve(payload.sub)
         }catch{
            reject({
                status:500,
                messege: ' El token es invalido'
            })

         }
      
        
    })
    return decode

    

}