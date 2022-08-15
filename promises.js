
//& CLASE 4

const koder = {
    seDieronInformes: false,
    seEntrevisto: false,
    sePago: false,
    seInscribio: false,
};

const darInformes = (koderAInformar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderAInformar.seDieronInformes = true;

            if (!koderAInformar.seDieronInformes) {
                reject("No se pudo dar informes");
            }

            // Si se resuelve
            resolve(koderAInformar);
        }, 3000);
    });
};

const entrevistar = (koderAEntrevistar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderAEntrevistar.seEntrevisto = true;

            if (!koderAEntrevistar.seEntrevisto) {
                reject("No se pudo entrevistar");
            }

            // Si se resuelve
            resolve(koderAEntrevistar);
        }, 3000);
    });
};

const pagar = (koderAPagar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderAPagar.sePago = false;

            if (!koderAPagar.sePago) {
                reject("No se pudo pagar");
            }

            // Si se resuelve
            resolve(koderAPagar);
        }, 3000);
    });
};

const inscribir = (koderAInscribir) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderAInscribir.seInscribio = true;

            if (!koderAInscribir.seInscribio) {
                reject("No se pudo inscribir");
            }

            // Si se resuelve
            resolve(koderAInscribir);
        }, 3000);
    });
};

const koderInformado = darInformes({ ...koder });
koderInformado
    .then((koderInformado) => {
        console.log(koderInformado);

        // Entrevistar
        entrevistar({ ...koderInformado })
            .then((koderEntrevistado) => {
                console.log("koderEntrevistado", koderEntrevistado);

                // Pagar
                pagar({ ...koderEntrevistado })
                    .then((koderPagado) => {
                        console.log("El koder fue pagado", koderPagado);

                        // Inscribir
                        inscribir({ ...koderPagado })
                            .then((koderInscrito) => {
                                console.log("Exito", koderInscrito);
                            })
                            // Error de inscribir
                            .catch((error) => {
                                console.log("error", error);
                            });
                    })
                    // Error de pagar
                    .catch((error) => {
                        console.log("Error", error);
                    });
            })
            // Error de entrevistar
            .catch((error) => {
                console.log("error", error);
            });
    })
    // Error de informar
    .catch((error) => {
        console.log("error", error);
    });