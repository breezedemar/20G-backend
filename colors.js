/**
 * Crear una funcion que reciba un nombre del proceso
 * Y en la misma función imprimirla con colors arcoiris 
 * Utilizar el paquete colors 
 */

 /*var colors = require('colors');
 
 console.log('hello'.green); // outputs green text
 console.log('i like cake and pies'.underline.red) // outputs red underlined text
 console.log('inverse the color'.inverse); // inverses the color
 console.log('OMG Rainbows!'.rainbow); // rainbow
 console.log('Run the trap'.trap); // Drops the bass
*/

var colors = require('colors');
 const name = process.argv[2]

 const nameColors = (nombre) =>{
    if(nombre){ // no es necesario validar con undefined !==undefined
        console.log(`OMG tu nombre en raindow ${nombre.rainbow}`)
        return 
    }else {
        console.log("No ingresaste tu nombre")
    }
 }

nameColors(name)