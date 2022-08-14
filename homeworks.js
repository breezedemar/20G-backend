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
console.log("Nombres transformados", transforma)

