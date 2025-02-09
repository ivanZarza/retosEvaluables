const { pool } = require('../database');

const getPrestamos = async (req, res) => {
  try {
    let estado = 'en prestamo';
    let sql = 'SELECT piezas.nombre, duenos.nombre, duenos.apellido, prestamos.fecha_prestamo, prestamos.fecha_devolucion FROM piezas JOIN duenos ON piezas.id_dueno = duenos.id_dueno JOIN prestamos ON piezas.id_pieza = prestamos.id_pieza WHERE piezas.estado = ? ';
    let [result] = await pool.query(sql, estado);
    console.log(result);
    if (result.length === 0) {
      return res.status(404).json({ ok: false, message: 'No hay piezas en prestamo' });
    }
    res.status(200).json({ ok: true, message: 'Exito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

module.exports = { getPrestamos };