const { Client } = require('pg');

// Configuración de la conexión
const client = new Client({
    host: 'localhost',
    port: 5432,  // Puerto por defecto para PostgreSQL
    user: 'postgres',  // Usuario de PostgreSQL, cámbialo si usas otro
    password: 'root',  // Contraseña proporcionada
    database: 'diseño-db'  // Nombre de la base de datos
});

// Conectar al cliente
client.connect()
    .then(() => console.log('Conectado a la base de datos PostgreSQL'))
    .catch(err => console.error('Error de conexión a la base de datos', err.stack));

// Exportar el cliente para usarlo en otras partes de la aplicación
module.exports = client;
