const usersDTO = require("./usersDTO"); //Conexión a la base de datos

/**
 *
 */
function selectAll() {
    usersDTO.find({}, callbackSelectAll);
}

/**
 * Inserta un registro en la base de datos
 * @param {*} nombre_completo Nombre del usuario
 * @param {*} telefono Teléfono del usuario
 * @param {*} direccion Dirección del usuario
 * @param {*} correo Correo electrónico del usuario
 */
function insertOne(
    vNombre_completo,
    vTelefono,
    vDireccion,
    vCorreo,
    vTipoDcocumento,
    vNumeroDocumento
) {
    usersDTO.create(
        {
            nombre_completo: vNombre_completo,
            telefono: vTelefono,
            direccion: vDireccion,
            correo: vCorreo,
            tipo_documento: vTipoDcocumento,
            numero_documento: vNumeroDocumento,
        },
        callbackInsertOne
    );
}

/**
 * Callback para la impresión de lista de usuarios
 * @param {*} err Objeto con el error
 * @param {*} usuarios Lista de usuarios
 */
function callbackSelectAll(err, usuarios) {
    if (err) {
        console.log("Error al consultar usuarios ==> ", err.message);
        return;
    }

    console.log("Lista de usuarios ==> ", usuarios);
}

/**
 * Callback para la impresión de lista de usuarios
 * @param {*} err Objeto con el error
 * @param {*} usuarios Lista de usuarios
 */
function callbackInsertOne(err, usuario) {
    if (err) {
        console.log("Error al insertar usuarios ==> ", err.message);
        return err;
    }

    console.log("Usuario creado ==> ", usuario);
}

//Exporta las funciones
exports.insertOne = insertOne;
exports.selectAll = selectAll;
