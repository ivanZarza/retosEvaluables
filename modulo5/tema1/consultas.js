let mysql = require('mysql2');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3st3v3Z99!',
  database: 'escenario_de_trabajo'
});

connection.connect(function(error) {
  if (error) {
    console.error('Error de conexión:', error);
  } else {
    console.log('Conexión correcta');
  }
});

// let sql = 'CREATE TABLE escenario_de_trabajo.direccion (id INT AUTO_INCREMENT PRIMARY KEY, direccioncol VARCHAR(45) NOT NULL)';

// let sql = 'ALTER TABLE escenario_de_trabajo.direccion ADD COLUMN localidad VARCHAR(45) NULL AFTER direccioncol';

// let sql = 'ALTER TABLE escenario_de_trabajo.direccion DROP COLUMN localidad';

// let sql = 'DROP TABLE escenario_de_trabajo.direccion';

// let sql = U'PDATE escenario_de_trabajo.marks SET mark = 0 WHERE mark_id IS NOT NULL';

// let sql = 'SELECT first_name, last_name FROM escenario_de_trabajo.students';

let sql = 'SELECT * FROM escenario_de_trabajo.teachers';

// let sql = 'DELETE FROM escenario_de_trabajo.marks WHERE date < '2015-01-01'';

// let sql = 'UPDATE escenario_de_trabajo.marks SET mark = 5 WHERE mark > 0';

connection.query(sql, function(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});

connection.end();