//constante que guarda la librería http
require("dotenv").config()
const http = require("http")
const exportFromAnother = require("./another")
console.log({exportFromAnother})

//Función que se ejecutará cuando el servidor escuche una petición
function requestController() {
    //Lógica
    console.log(exportFromAnother.name + " el papu")
}

//Se crear un servidor a partir de la librería, y recibe como parámetro
//la función que se ejecutara al recibir una request
const server = http.createServer(requestController)

const PORT = process.env.PORT

//Se pone en escucha a nuestro servidor en el puerto 3000
server.listen(PORT, function (){
    console.log(`Corriendo en el puerto ${PORT}`)
})
