const { pool } = require('../database');

const getStudent = async (req, res) => {
  let id = req.query.id;
  try {
    let sql;
    if (id === null || id === undefined) {
      sql = 'SELECT * FROM students';
      let [result] = await pool.query(sql);
      res.status(200).json({ ok: true, message: 'Exito!!', data: result });
    } else {
      sql = 'SELECT * FROM students WHERE students_id = ?';
      let [result] = await pool.query(sql, id);
      res.status(200).json({ ok: true, message: 'Exito!!', data: result });
    }
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const postStudent = async (req, res) => {
  let { students_id, first_name, last_name, group_id, año_ingreso } = req.body;
  console.log(req.body, {
    students_id: !students_id,
    first_name: !first_name,
    last_name: !last_name,
    group_id: !group_id,
    año_ingreso: !año_ingreso,
  });
  if (!students_id || !first_name || !last_name || !group_id || !año_ingreso) {
    res.status(400).json({ ok: false, message: 'Faltan datos' });
    return;
  }
  try {
    let sql = 'INSERT INTO students (students_id, first_name, last_name, group_id, año_ingreso ) VALUES (?, ?, ?, ?, ?)';
    let [result] = await pool.query(sql, [students_id, first_name, last_name, group_id, año_ingreso]);
    res.status(200).json({ ok: true, message: 'Exito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const putStudent = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    res.status(400).json({ ok: false, message: 'Se necesita un id' });
  }
  let sql = 'SELECT * FROM students WHERE students_id = ?';
  let [result] = await pool.query(sql, id);
  if (!result) {
    res.status(404).json({ ok: false, message: 'No se encontro el estudiante' });
  }
  const {
    first_name = result[0].first_name,
    last_name = result[0].last_name,
    group_id = result[0].group_id,
    año_ingreso = result[0].año_ingreso,
  } = req.body;

  try {
    let sql = 'UPDATE students SET first_name = ?, last_name = ?, group_id = ?, año_ingreso = ? WHERE students_id = ?';
    await pool.query(sql, [first_name, last_name, group_id, año_ingreso, id]);
    res.status(200).json({ ok: true, message: 'Exito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const deleteStudent = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    res.status(400).json({ ok: false, message: 'Se necesita un id' });
  }
  try {
    let sql = 'DELETE FROM students WHERE students_id = ?';
    let [result] = await pool.query(sql, id);
    res.status(200).json({ ok: true, message: 'Exito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

module.exports = { getStudent, postStudent, putStudent, deleteStudent };