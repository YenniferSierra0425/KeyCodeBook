const express = require("express"); // Estamos utilizando express en nuestro proyecto.
const cors = require('cors')
const bodyParser = require('body-parser')

const {conectDB} = require('./db')
const app = express(); //Se convierte a la constante express en un objeto, el cual vamos a poder trabajar.

app.use(cors())
app.use(bodyParser.json())

conectDB()//Estamos ejecutando el modulo de nuestra conexión de la base de datos.
require('./routes/user')(app)
app.listen(3000, () => {
     console.log('Se levanto el servidor...')
    })

    