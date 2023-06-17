//constante que guarda la librería http
const http = require("http")
const exportFromAnother = require("./another")
console.log({exportFromAnother})

//Función que se ejecutará cuando el servidor escuche una petición
function requestController() {
    //Lógica
    console.log({exportFromAnother})
}

let a = {
    name: "napo",
    age: 12
}

//Se crear un servidor a partir de la librería, y recibe como parámetro
//la función que se ejecutara al recibir una request
const server = http.createServer(requestController)
console.log(a)
//Se pone en escucha a nuestro servidor en el puerto 3000
server.listen(3006)
