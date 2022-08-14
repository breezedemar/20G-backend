
//& CLASE 2 
console.log("***********Ejercicio 1***********")
//? Ejercicio 1 

// lo que sea que este despues de un return no se hace 
const nombre = process.argv[2]

const saludo = (nombre) =>{
    //console.log("Nombre", nombre)
        if(nombre){ // no es necesario validar con undefined !==undefined
            console.log(`Hola bienvenid@ ${nombre}`)
            return 
        }else {
            console.log("fuera de aqui")
        }
}

saludo(nombre)
//let res = saludo(process.argv[2])
//console.log(res)

//Si el ejecutamos una función y el resultado lo guardamos en una variable  y resulta undefined -> es que no estamos retornando

console.log("***********Ejercicio 2***********")
//? Ejercicio 2

/**
 * Construir una función que separe los nombres largos de los cortos
 * un nombre largo es aquel que supera los 4 caracteres de longitud 
 * 
 * Input: ["Rodolfo" ...]
 * Destructurando 
 * Output: const [nombresCortos, nombresLargos] = funcion(nombres) // retornando esto 
 * console.log(nombresCortos) ["Pete", "Gio" ...]
 * console.log(nombresLargos) ["Mariana", "Sofia" ...]
 */

 const nombres = [
    "Rodolfo",
    "Araceli",
    "Brisa",
    "Eduardo",
    "Gio",
    "Jose",
    "Luis",
    "Marco",
    "Mariana",
    "Pete",
    "Sebastian",
    "Sofia"
  ]

  const separarNames =(names)=>{
    const nomLargos=[]
    const nomCortos=[]

    nombres.forEach((name)=>{
        if(name.length <4){
            nomCortos.push(name)
        }else {
            nomLargos.push(name)
        }
    })

    return [nomCortos, nomLargos]
  }

  const [nomCortos, nomLargos] = separarNames(nombres)
  console.log("nombres cortos", nomCortos)
  console.log("nombres largos", nomLargos)


