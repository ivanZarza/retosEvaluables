const Profesional = require('../models/profesionalSchema');
const { conectarMongoDB } = require('../database');

const getProfesional = async (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  try {
    await conectarMongoDB();

    let result;
    if (!firstName && !lastName) {
      result = await Profesional.find();
      res.status(200).json({ ok: true, message: 'Éxito!!', data: result });
    } else {
      if ((firstName && !lastName) || (!firstName && lastName)) {
        return res.status(400).json({ ok: false, message: 'Faltan datos' });
      }
      let profesionalName = `${firstName} ${lastName}`.toLocaleLowerCase();
      result = await Profesional.findOne({ name: profesionalName });
      if (!result) {
        return res.status(404).json({ ok: false, message: 'Profesional no encontrado' });
      }
      res.status(200).json({ ok: true, message: 'Éxito!!', data: result });
    }
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const postProfesional = async (req, res) => {
  const { name, age, weight, height,isRetired,nationality,oscarsNumber,profession } = req.body;
  console.log(req.body,
    !name,
    !age,
    !weight,
    !height,
    !isRetired,
    !nationality,
    !oscarsNumber,
    !profession
  );

  if (!name || !age || !weight || !height || isRetired === undefined || !nationality || !oscarsNumber || !profession) {
    return res.status(400).json({ ok: false, message: 'Faltan datos' });
  }

  try {
    await conectarMongoDB();

    const newProfesional = new Profesional({
      name: name,
      age: age,
      weight: weight,
      height: height,
      isRetired: isRetired,
      nationality:nationality,
      oscarsNumber:oscarsNumber,
      profession:profession
    });

    const result = await newProfesional.save();
    res.status(200).json({ ok: true, message: 'Éxito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const putProfesional = async (req, res) => {
  let datosModificar = req.body
  if (  !datosModificar.name, !datosModificar.age, !datosModificar.weight, !datosModificar.height, !datosModificar.isRetired, !datosModificar) {
    res.status(400).json({ ok: false, message: 'Faltan datos' });
  }
  try {
    await conectarMongoDB();
    let result = await Profesional.findOneAndUpdate(
      { name: datosModificar.name },
      { $set: datosModificar },
    );
    console.log(result);
    if (!result) {
      res.status(404).json({ ok: false, message: 'Profesional no encontrado' });
    }
    res.status(200).json({ ok: true, message: 'Éxito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const deleteProfesional = async (req, res) => {
  let { name } = req.body;
  if (!name) {
    res.status(400).json({ ok: false, message: 'Faltan el nombre del profesional' });
  }
  try {
    await conectarMongoDB()
    let result;
      result = await Profesional.findOneAndDelete({ name: name });
      if (!result) {
        return res.status(404).json({ ok: false, message: 'Profesional no encontrado' });
      }
      res.status(200).json({ ok: true, message: 'Éxito!!', data: result });
    } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

module.exports = { getProfesional , postProfesional, putProfesional, deleteProfesional };