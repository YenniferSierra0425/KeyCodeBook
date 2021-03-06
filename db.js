const mongoose = require("mongoose"); //Paquete que permite la comunicación con nuestra base de datos
const config = require('./config')

const conectDB = () => {
  //useNewUrlParser: Analizar la información que se requiere enviar a mongoDB.
  //useUnifiedTopology: Escuchar los llamados que hacemos a mongoDB y monitorea que es lo que pasa
  mongoose.connect(config.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Nos conectamos a la DB.");
      }
    })
}

/**module.exports
 * Nos permite excportar una función para que pueda ser utilizada en otra parte de nuestro proyecto
 */

module.exports = {conectDB}
