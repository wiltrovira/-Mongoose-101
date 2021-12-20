const mongoDB = require("../database/dbconnection");

// Constante para la tabla de usuarios
const TBL_USUARIOS = "usuarios";

// Crea el esquema para la colección de usuarios
const userSchema = new mongoDB.Schema({
  nombre_completo: {
    type: String,
    trim: true,
    required: [true, "El nombre es obligatorio"],
  },
  telefono: {
    type: String,
    required: [true, "El teléfono es obligatorio"],
  },
  direccion: String,
  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
  },
  tipo_documento: {
    type: String,
    enum: ["CC", "TI", "CE", "NIT"],
    required: [true, "El tipo de documento es obligatorio"],
  },
  numero_documento: {
    type: String,
    required: [true, "El número de documento es obligatorio"],
  },
});

const usuarioDocumento = mongoDB.model(TBL_USUARIOS, userSchema);

module.exports = usuarioDocumento;
