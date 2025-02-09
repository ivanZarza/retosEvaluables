const { pool } = require('../database');

const getColecciones = async (req, res) => {
  let tipo = req.query.tipo;
  if (!tipo) {
    return res.status(400).json({ ok: false, message: 'Se necesita un tipo de coleccion: permanente, itinerante o almacenada' });
  }
  try {
    let sql = 'SELECT colecciones.estado, piezas.nombre, colecciones.nombre FROM piezas JOIN colecciones ON colecciones.id_coleccion = piezas.id_coleccion WHERE colecciones.estado = ? GROUP BY colecciones.estado,piezas.nombre, colecciones.nombre;';
    let [result] = await pool.query(sql, tipo);
    console.log(result);
    if (result.length === 0) {
      return res.status(404).json({ ok: false, message: 'No se encontro el tipo de coleccion' });
    }
    res.status(200).json({ ok: true, message: 'Exito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}



module.exports = { getColecciones };