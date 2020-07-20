const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'codelines'
});

conexion.connect(error => {
  if(error)
    console.log("Error en la conexión a la BD.", error);
  else {
    console.log("Conexión exitosa.");
  }
});

module.exports = conexion;
