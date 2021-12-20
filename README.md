# ConnectMongoDB

Ejemplo básico de NodeJS para conectar a una base de datos de MongoDB a través de Mongoose. 
Ejercicio se publica para efectos académicos.

La cadena de conexión se debe guardar en un archivo .env (Este archivo no se sube al repositorio por razones de seguridad)
    EXAMPLE_MONGODB_CONNSTRING=mongodb://cadenaDeConexion

Nota: La base de datos puede estar en un servidor de MongoDB local, en Atlas MongoDB, Azure CosmosDb u otro servicio en la nube.

## versiones

1. node --version = v16.13.1
2. npm -version = 8.3.0

## Comandos utilizados

1. npm init -y
2. npm install dotenv  (versión 10.0.0)
3. npm install mongoose (versión 6.1.2)

## Archivos de Ejemplo

1. ./database/dbconnection.js: Genera la conexión a la base de datos de MongoDB
2. ./model/usersDTO.js: Define el esquema y  modelo del usuario
3. ./model/usersDao.js: Implementa los métodos para insertar y consultar
4. ./index.js: Realizar la inserción y consulta de registros de usuarios
