//& Clase 5 

//? EndPoint 
/**
 *  Es el punto final a donde llega nuestro request , cambian por el metodo y la ruta
 * 1. Metodo → GET, POST, PUT, PATCH, DELETE 
   2. url: [localhost](http://localhost):8080
    *ES LA COMBINACIÓN DEL METODO Y LA URL*
 */
// GET -> localhost:8080
// POST -> localhost:8080
// PATCH -> localhost:8080
// PUT -> localhost:8080
// DELETE -> localhost:8080

//* Express

//? 1. Se crea un servidor http

const express = require("express")
const server = express()

//&GET
server.get("/", (request, response)=>{
    const {url, method} = request 

    console.log("method", method)
    console.log("url", url)

    response.write("Bienvenido al GET de Home con Express")
    response.end()
})

//&POST
server.post("/", (request, response)=>{
    response.write("Bienvenido al POST de Home con Express")
    response.end()
})

//&POST - User 
server.post("/users", (request, response)=>{
    response.write("Bienvenido al POST de Users con Express")
    response.end()
})

//&PUT
server.put("/", (request, response)=>{
    response.write("Bienvenido al PUT de Home con Express")
    response.end()
})

//&PATCH
server.patch("/", (request, response)=>{
    response.write("Bienvenido al PATCH de Home con Express")
    response.end()
})

//&DELETE 
server.delete("/", (request, response)=>{
    response.write("Bienvenido al DELETE de Home con Express")
    response.end()
})

//? 2. Poner el servidor a escuchar

//Te pide 2 parametros 
//1. Port - Puerto 8080 
//2. Callback -> lo que va hacer cuando se empiece a escuchar 
server.listen("8080", ()=>{
    console.log("Server listening....")
})