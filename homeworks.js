
// & CLASS 5
/**
 * Tarea de la clase 06
Hacer el CRUD con express,
 */

//* Express

//? 1. Se crea un servidor http

const express = require("express")
const server = express()

//&GET
server.get("/", (request, response)=>{
    response.write("Bienvenido al GET de Home con Express")
    response.end()
})

//&POST
server.post("/", (request, response)=>{
    response.write("Bienvenido al POST de Home con Express")
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
