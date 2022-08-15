//&EndPoints 


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


//* Estructuración de datos 

//? 1. Se crea un servidor http

const http = require("http")

/**
 * 
 */
const server = http.createServer((request, response)=>{

    //Leer el request 
    //console.log("request", request)

    //Destructurar 
    const {url, method} = request 

    console.log("method", method)
    console.log("url", url)

    //Mejorar la estructuración de datos 
    //1. Hacer un objeto 
    //Niver 1 -> Metodo 
    //Nivel 2 -> Ruta 

    const endPoints ={
        "GET": {
            "/": "Bienvenido estas en el GET en HOME - con estructuración de datos",
            "/profile": "Bienvenido estas en el get en profile"
        },
        "POST": {
            "/": "Bienvenido estas en el POST en HOME - con estructuración de datos",
            "/user": "Bienvenido estas en el POST en user"
        },
        "PUT": "Bienvenido estas en el get - con estructuración de datos",
        "PATCH": "Bienvenido estas en el get - con estructuración de datos",
        "DELETE": "Bienvenido estas en el get - con estructuración de datos",
    }

    response.write(endPoints[method][url])

    //?Primer forma - Ya no suele utilizarse 
    // GET -> localhost:8080
    //Bienvenido esta en el get 

    /*if(method=== "GET" && url==="/"){
    //Respondo 
    response.write("Bienvenido estas en el get")
    
    // POST -> localhost:8080
    //Bienvenido esta en el get 
    }else if(method=== "POST" && url==="/"){
    
    response.write("Bienvenido estas en el post")

    // PUT -> localhost:8080
    //Bienvenido esta en el get 
    } else if(method=== "PUT" && url==="/"){
    response.write("Bienvenido estas en el put")

    // PATCH -> localhost:8080
    //Bienvenido esta en el get 
    } else if(method=== "PATCH" && url==="/"){
        response.write("Bienvenido estas en el patch")
    
    // DELETE -> localhost:8080
    //Bienvenido esta en el get 
    } else if(method=== "DELETE" && url==="/"){
        response.write("Bienvenido estas en el delete")
    }
    else {
    response.write("Esta ruta no existe")
 
    }
    */
    
    response.end() 
    //ya se finalizao 

})

//? 2. Poner al servidor a escuchar
//Te pide 2 parametros 
//1. Port - Puerto 8080 
//2. Callback -> lo que va hacer cuando se empiece a escuchar 
server.listen(8080, ()=>{
    console.log("Server listening....")
})




