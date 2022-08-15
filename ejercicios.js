
//& CLASE 4 

//? Callbacks 

//* Ejercicio Pastel con callbacks 

/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
 */

 /*const pastel = {
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
}

const leerReceta = (leerReceta, callback) => {
    let error = null;
    setTimeout(() => {
        
        leerReceta.recetaLeida = true;

        // Si la receta no fue leida, lanzar un error
        if (!leerReceta.recetaLeida) {
            error = "No ha sido leida";
        }
        callback(error, leerReceta);
    }, 2000);
};

const conseguirIngredientes = (obtenerIngredientes, callback) => {
    let error = null;
    setTimeout(() => {
      
        obtenerIngredientes.ingredientesConseguidos = true;

        // Si no se consiguieron los ingredientes, lanzar un error
        if (!obtenerIngredientes.ingredientesConseguidos) {
            error = "No ha sido leida";
        }
        callback(error, obtenerIngredientes);
    }, 2000);
};

const prepararMasa = (masaPreparar, callback) => {
    let error = null;
    setTimeout(() => {
       
        masaPreparar.masaPreparada = true;

        // Si no se preparo la masa, lanzar un error
        if (!masaPreparar.masaPreparada) {
            error = "No ha sido leida";
        }
        callback(error, masaPreparar);
    }, 2000);
};


const honearPastel = (pastelHornear, callback) => {
    let error = null;
    setTimeout(() => {
        
        pastelHornear.pastelHorneado = true;

        // Si no se horneo el pastel, lanzar un error
        if (!pastelHornear.pastelHorneado) {
            error = "No ha sido leida";
        }
        callback(error, pastelHornear);
    }, 2000);
};

const decorarPastel = (pastelDecorar, callback) => {
    let error = null;
    setTimeout(() => {
        
        pastelDecorar.pastelDecorado = true;

        // Si no se decoro el pastel, lanzar un error
        if (!pastelDecorar.pastelDecorado) {
            error = "No ha sido leida";
        }
        callback(error, pastelDecorar);
    }, 2000);
};
*/

/**
 * Asincronidad -> cuando se hacian varias cosas al mismo tiempo
 */
/*
 leerReceta({ ...pastel }, (error, recetaPastelLeida) => {
    if (error) {
        console.log("error:", error);
        return; // Salte
    }

    // Es cuando ya me hizo todo
    // los ingredientes se consiguieron
    conseguirIngredientes({ ...recetaPastelLeida }, (error, ingredientesConseguidos) => {
        if (error) {
            console.log("error", error);
            return;
        }

        // Preparar masa
        prepararMasa({ ...ingredientesConseguidos }, (error, PreparacionMasa) => {
            if (error) {
                console.log("error", error);
                return;
            }

            // Hornear pastel
            honearPastel({...PreparacionMasa}, (error, PastelAHornear) => {
                if(error) {
                    console.log("error", error)
                    return
                }

                decorarPastel({...PastelAHornear}, (error, PastelADecorar) => {
                    if(error) {
                        console.log("error", error)
                        return
                    }
    
                    console.log("Exito", PastelADecorar)
                })
            })
        });
    });
});
*/

//? Promises 

//* Ejercicio Pastel - Promises

/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
 */

const pastel = {
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
}

const leerReceta = (recetaALeer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            recetaALeer.recetaLeida = true;

            if (!recetaALeer.recetaLeida) {
                reject("No se pudo leer la receta");
            }

            // Si se resuelve
            resolve(recetaALeer);
        }, 3000);
    });
};


const conseguirIngredientes = (ingredientesAConseguir) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            ingredientesAConseguir.ingredientesConseguidos = true;

            if (!ingredientesAConseguir.ingredientesConseguidos) {
                reject("No se pudieron conseguir los ingredientes");
            }

            // Si se resuelve
            resolve(ingredientesAConseguir);
        }, 3000);
    });
};

const prepararMasa = (masaAPreparar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            masaAPreparar.masaPreparada = true;

            if (!masaAPreparar.masaPreparada) {
                reject("No se pudo preparar la masa");
            }

            // Si se resuelve
            resolve(masaAPreparar);
        }, 3000);
    });
};

const honearPastel = (pastelAHornear) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastelAHornear.pastelHorneado = true;

            if (!pastelAHornear.pastelHorneado) {
                reject("No se pudo hornear el pastel");
            }

            // Si se resuelve
            resolve(pastelAHornear);
        }, 3000);
    });
};

const decorarPastel = (pastelADecorar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastelADecorar.pastelDecorado = true;

            if (!pastelADecorar.pastelDecorado) {
                reject("No se pudo decorar el pastel");
            }

            // Si se resuelve
            resolve(pastelADecorar);
        }, 3000);
    });
};

//* Siguiente paso

const pastelTerminado = leerReceta({ ...pastel});
pastelTerminado
    .then((pastelTerminado) => {
        console.log(pastelTerminado);

        // Conseguir ingredientes 
        conseguirIngredientes({ ...pastelTerminado })
            .then((ingredientesConseguidos) => {
                console.log("ingredientesConseguidos", ingredientesConseguidos);

                prepararMasa({ ...ingredientesConseguidos })
                    .then((masaPreparada) => {
                        console.log("Masa preparada", masaPreparada);

                        honearPastel({ ...masaPreparada })
                            .then((pastelHorneado) => {
                                console.log("Pastel horneado", pastelHorneado);

                            decorarPastel({ ...pastelHorneado })
                            .then((pastelDecorado) => {
                                console.log("Pastel decorado", pastelDecorado);
                            })
                            .catch((error) => {
                                console.log("error", error);
                            });
                            })
                            .catch((error) => {
                                console.log("error", error);
                            });
                    })
                    .catch((error) => {
                        console.log("Error", error);
                    });
            })
            .catch((error) => {
                console.log("error", error);
            });
    })
    .catch((error) => {
        console.log("error", error);
    });
