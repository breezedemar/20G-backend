//& Clase 4 

//? Callbacks and Promises 
/*
 * Promesa -> El resultado de un proceso asincrono
 *
 * Reglas ->
 * Tienen 3 estados
 * 1 - Pending -> 5s, 5 segundos pendiente
 * 2 - Rejected -> si ocurrio un error -> si fuera rechazada
 * 3 - Accepted -> si se resolvio -> si fue aceptada
 *
 * Al momento de hacer la promesa, declaracion de la promesa
 * Las promesas se resuelven o se rechazan
 *    - Resolve -> Function que se ejecutan
 *    - Reject -> Function que se ejecutan
 *
 * Al momento de ejecutarlas
 * Recibir el rechazo o la respuesta resuelta
 * .then -> para recibir lo resuelto
 * .catch -> para recibir lo rechazado -> el error
 */

//? AsyncAwait

/**
 * Va a cambiar la forma de ejecutar la forma de ejecutarse nuestras promesas
 * Async Await
 * 
 * Async -> Cuando vamos a hacer una funcion asyncrona
 * Await -> Va a ESPERAR una promesas. -> 5 segundos
 * 
 * Reglas:
 * Async va en la declaracion de la funcion, se esta declarando como asincrona
 * Await va dentro de esa funcion que se declaro como asincrona
 * 
 * No puedo usar await sin el async.
 * 
 * Sintaxis:
 */


// Sintaxis
// Arrow function

// const funcionAsincrona = async () => {

//  Todo lo de adentro va a ser asincrono
//  Que se puede usar Await aqui adentro
//  Que el retorno de esta funcion va a ser una promesa
// }

// Funcion normal
// async function asincronidadFuncion() {
//   Todo lo de adentro va a ser asincrono
//   Que se puede usar Await aqui adentro
//   Que el retorno de esta funcion va a ser una promesa
// }