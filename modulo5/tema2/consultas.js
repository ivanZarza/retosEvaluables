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

// let sql = 'SELECT AVG(mark) average FROM marks WHERE subject_id = 1';

// let sql = 'SELECT student_id, mark  FROM marks WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8 AND date LIKE "2024%")';

// let sql = 'SELECT subject_id, AVG(mark) AS media_por_materia FROM marks WHERE (date LIKE "2025%") GROUP BY subject_id';

// let sql = 'SELECT student_id, AVG(mark) AS media_por_alumno FROM marks WHERE (date LIKE "2025%") GROUP BY student_id';

let sql = 'SELECT `groups`.name AS subject, COUNT(*) AS number_students,teachers.first_name AS teacher_first_name, teachers.last_name AS teacher_last_name FROM students JOIN `groups` ON students.group_id = `groups`.group_id JOIN subject_teacher ON `groups`.group_id = subject_teacher.group_id JOIN teachers ON subject_teacher.teacher_id = teachers.teachers_id GROUP BY `groups`.name,teachers.first_name, teachers.last_name'

connection.query(sql, function(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});

connection.end();