const usuariosDao = require("./model/usersDao"); //Conexión a la base de datos

//Inserta registros en la base de datos
try {
    usuariosDao.insertOne(
        "Paula S",
        "123456fsfs789",
        "Calle x Cra Y",
        "",
        "CE",
        "12345678"
    );
} catch (e) {
    console.log("Error al insertar un registro.", e.message);
    return;
}

try {
    usuariosDao.insertOne(
        "Simón Simón",
        "0987656",
        "Calle x25 Cra Y2",
        "correo9@example.com",
        "TI",
        "9876543267"
    );
} catch (e) {
    console.log("Error al insertar un registro.", e.message);
    return;
}

try {
    usuariosDao.insertOne(
        "Pedro Correa",
        "96435576756",
        "Calle x455 Cra Yw232",
        "correo10@example.com",
        "CC",
        "34567890987654345678"
    );
} catch (e) {
    console.log("Error al insertar un registro.", e.message);
    return;
}

try {
    usuariosDao.selectAll();
} catch {
    console.log("Error al recuperar los registros.", e.message);
    return;
}

console.log("Fin del programa"); //Esta línea se imprime inmediatamente, incluso antes de devolver el resultado

/**
 * Captura un error inesperado
 */
process.on("uncaughtException", (err) => {
    console.error(
        "Hubo un error inesperado que no pudo ser procesado ==> ",
        err.message
    );
    process.exit(1); //Esto es obligatorio según la documentación de Node.js
});
