const { pool } = require('../database');

const getMedia = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    return res.status(400).json({ ok: false, message: 'Se necesita un id' });
  }
  try {
    let sql = 'SELECT students.students_id, students.first_name, students.last_name, AVG(mark) AS average FROM marks JOIN students ON marks.student_id = students.students_id WHERE student_id = ?';
    let [result] = await pool.query(sql, id);
    console.log(result);
    if (result[0].students_id === null) {
      return res.status(404).json({ ok: false, message: 'No se encontro el estudiante o no tiene notas asignadas' });
    }
    res.status(200).json({ ok: true, message: 'Exito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const getApuntadas = async (req, res) => {
  const id = req.query.id;
  if (!id) {
    return res.status(400).json({ ok: false, message: 'Se necesita un id' });
  }
  try {
    const sql = 'SELECT students.first_name, students.last_name, `groups`.name FROM students JOIN `groups` ON students.group_id = `groups`.group_id WHERE students.students_id = ? ';
    const [result] = await pool.query(sql, [id]);
    if (result.length === 0) {
      return res.status(404).json({ ok: false, message: 'No se encontro el estudiante' });
    }
    res.status(200).json({ ok: true, message: 'Exito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

module.exports = { getMedia, getApuntadas };