const { pool } = require('../database');

const getPiezas = async (req, res) => {
  let id = req.query.id;
  try {
    let sql;
    if (id === null || id === undefined) {
      sql = 'SELECT * FROM piezas';
      let [result] = await pool.query(sql);
      res.status(200).json({ ok: true, message: 'Exito!!', data: result });
    } else {
      sql = 'SELECT * FROM piezas WHERE id_pieza = ?';
      let [result] = await pool.query(sql, id);
      res.status(200).json({ ok: true, message: 'Exito!!', data: result });
    }
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const postPiezas = async (req, res) => {
  let { id_pieza, nombre, descripcion, anio, id_autor, id_coleccion, estado, id_dueno, id_ubicacion} = req.body;
  console.log(req.body, {
    id_pieza:id_pieza, 
    nombre:nombre,
    descripcion:descripcion,
    anio:anio,
    id_autor:id_autor,
    id_coleccion:id_coleccion,
    estado:estado,
    id_dueno:id_dueno,
    id_ubicacion:id_ubicacion
  });
  if (!id_pieza || !nombre || !descripcion || !anio || !id_autor || !id_coleccion || !estado || !id_dueno || !id_ubicacion) {
    res.status(400).json({ ok: false, message: 'Faltan datos' });
    return;
  }
  try {
    let sql = 'INSERT INTO piezas (id_pieza, nombre, descripcion, anio, id_autor, id_coleccion, estado, id_dueno, id_ubicacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    let [result] = await pool.query(sql, [id_pieza, nombre, descripcion, anio, id_autor, id_coleccion, estado, id_dueno, id_ubicacion]);
    res.status(200).json({ ok: true, message: 'Exito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const putPiezas = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    res.status(400).json({ ok: false, message: 'Se necesita un id' });
  }
  let sql = 'SELECT * FROM piezas WHERE id_pieza = ?';
  let [result] = await pool.query(sql, id);
  if (!result) {
    res.status(404).json({ ok: false, message: 'No se encontro el estudiante' });
  }
  const {
    nombre = result[0].nombre,
    descripcion = result[0].descripcion,
    anio = result[0].anio,
    id_autor = result[0].id_autor,
    id_coleccion = result[0].id_coleccion,
    estado = result[0].estado,
    id_dueno = result[0].id_dueno,
    id_ubicacion = result[0].id_ubicacion
  } = req.body;

  try {
    let sql = 'UPDATE piezas SET nombre = ?, descripcion = ?, anio = ?, id_autor = ?, id_coleccion = ?, estado = ?, id_dueno = ?, id_ubicacion = ? WHERE id_pieza = ?';
    await pool.query(sql, [nombre, descripcion, anio, id_autor, id_coleccion, estado, id_dueno, id_ubicacion, id]);
    res.status(200).json({ ok: true, message: 'Exito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const deletePiezas = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    res.status(400).json({ ok: false, message: 'Se necesita un id' });
  }
  try {
    let sql = 'DELETE FROM piezas WHERE id_pieza = ?';
    let [result] = await pool.query(sql, id);
    res.status(200).json({ ok: true, message: 'Exito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

module.exports = { getPiezas, postPiezas, putPiezas, deletePiezas };