
const fs = require("fs")

//console.log(fs)

fs.writeFile("archivo.txt", "Archivo creado desde node", "utf8", (error) =>{
    if(error){
        console.log("Error encontrado", error)
        return 
    }

    console.log("El archivo fue creado con exito")
})