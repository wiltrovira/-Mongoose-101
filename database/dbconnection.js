/**
 * Para ejecutar este módulo, crear un archivo con el nombre ".env"
 * Agregar una línea con la variable
 *          EXAMPLE_MONGODB_CONNSTRING=cadenaConexionMongoDB
 */
require("dotenv").config(); //Requiere el módulo dotenv para cargar variables de entorno

// Conecta a la base de datos a través de Mongoose (https://mongoosejs.com/)
let mongoDB = require("mongoose");
let dbConnString = process.env.EXAMPLE_MONGODB_CONNSTRING;
let dbName = process.env.EXAMPLE_MONGODB_DBNAME;

//Opciones para la conexión a la base de datos
//https://mongoosejs.com/docs/connections.html#connection-string-options
const dbOptions = {
    dbName: dbName, //Nombre de la base de datos
    autoIndex: false, // Don't build indexes
    maxPoolSize: 2, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 30000, // Close sockets after 30 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
};

// Abre la conexión a la base de datos on mongoClient
mongoDB
    .connect(process.env.EXAMPLE_MONGODB_CONNSTRING, dbOptions)
    .catch((err) => {
        console.log("error codeName: ", err.codeName);
    });

/*
 * EVENTOS DE CONEXIÓN
 */

// Cuando se conecta exitosamente
mongoDB.connection.on("connected", callbackConexionExitosa);

// Cuando la conexión genera un error
mongoDB.connection.on("error", callbackErrorConexion);

// Cuando la conexión es desconectada
mongoDB.connection.on("disconnected", callbackConexionDesconectada);

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", callbackConexionTerminada);

/**
 * Callback de conexión exitosa
 */
function callbackConexionExitosa() {
    console.log(
        "Se estableció conexión exitosa con la base de datos " + dbName
    );
}

/**
 * Callback cuando hay error en la conexión
 * @param {*} err
 */
function callbackErrorConexion(err) {
    console.log("Error en la conexión con la base de datos: " + err.message);
}

/**
 * Callback cuando hay desconexión
 */
function callbackConexionDesconectada() {
    console.log("Hubo una desconexión con la base de datos");
}

/**
 * Callback cuando la conexión se termina
 */
function callbackConexionTerminada() {
    mongoDB.connection.close(callbackCerrarConexion);
}

/**
 * Callback para cerrar la conexión
 */
function callbackCerrarConexion() {
    console.log("Conexión terminada desde la aplicación");
    process.exit(0);
}

//Exporta la función conectar
module.exports = mongoDB;
