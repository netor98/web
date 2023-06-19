//constante que guarda la librería http
require("dotenv").config()
const http = require("http")
const fileSystem = require("fs")
const exportFromAnother = require("./another")


//Función que se ejecutará cuando el servidor escuche una petición
function requestController(request, response) {
    //Lógica
    const url = request.url
    const method = request.method
    console.log({url, method})

    if (method === "GET" && url === "/about"){
        response.setHeader("Content-type", "text/html; charset=utf-8")
        fileSystem.readFile("./public/about.html", function(err, file){
            if (err){
                console.log("error")
            }
            response.write(file)
            response.end()
        })
    }
    else if (method === "GET" && url ==="/inicio"){
        response.setHeader("Content-type", "text/html; charset=utf-8")
        fileSystem.readFile("./public/index.html", function(err, file){
            if (err){
                console.log("error")
            }
            response.write(file)
            response.end()
        })
    }
    else{
        response.setHeader("Content-type", "text/html; charset=utf-8")
        response.write("<body style='background-color:red'><h2>Página no encontrada :(</h2></body>")
        response.end()
    }

}
//Se crear un servidor a partir de la librería, y recibe como parámetro
//la función que se ejecutara al recibir una request
const server = http.createServer(requestController)

const PORT = process.env.PORT

//Se pone en escucha a nuestro servidor en el puerto 3000
server.listen(PORT, function (){
    console.log(`Corriendo en el puerto ${PORT}`)
})
