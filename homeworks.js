//& CLASE 2 

/** Tarea de la clase 02 
 * Hacer una funcion que se llame transformarNombres reciba como parametro un array de nombres y regresar un objeto de objetos que contenga el nombre, el length del nombre y si es mayor a 4 o no
Input: ["Ale", "Mariana", "Adrian"]...
Output:
{
	0: {
		name: "Ale", -> string
		length: 3, -> numero
		isGreaterThanFour: true -> booleano
	}
}
 */

/*const nombres = [
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


//? Ejercicio con "forEach"

const transformNames = (names) =>{
    const objKoders = {}
    //console.log("Antes", objKoders)
    nombres.forEach((valor, indice) => {
        objKoders[indice]={
            name: valor,
            length: valor.length,
            isGreaterThanFour: valor.length > 3 
        }
    })

    //console.log("Despues", objKoders)
    return objKoders
}

const transforma = transformNames(nombres)
console.log("Nombres transformados", transforma)*/

//& CLASE 3 

// El mismo ejercicio de transformarNombres pero con reduce y spread operator ...
// El reduce recibe 2 valores 
// 1. callback -> acumulador , current value, indice , array 

//? Ejercicio con "reduce"

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

const transformarNombres = (names) =>{

    return nombres.reduce((acc, valorActual, indice )=>{
        //console.log("indice", indice)

        //console.log("accumulador", acc)

        return{
            ...acc,
            [indice]: {
                name: valorActual,
                length: valorActual.length,
                isGreaterThanFour: valorActual.length > 3

            }
        }
    }, {})
}

const nomTransformados = transformarNombres(nombres)

console.log("Nombres transformados", nomTransformados)

/**
 * Leer un archivo con la api del filesystem de Node
 */

//! FALTA TERMINAR EL EJERCICIO 