const mongoose = require('mongoose');
const Photo = require('../models/photoSchema');
const { conectarMongoDB } = require('../database');

const getPhotos = async (req, res) => {
  let id = req.query.id;
  try {
    await conectarMongoDB();

    let result;
    if (!id) {
      result = await Photo.find();
      res.status(200).json({ ok: true, message: 'Éxito!!', data: result });
    } else {
      result = await Photo.findById(id);
      if (!result) {
        return res.status(404).json({ ok: false, message: 'Foto no encontrada' });
      }
      res.status(200).json({ ok: true, message: 'Éxito!!', data: result });
    }
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const postPhoto = async (req, res) => {
  const { userName, image, title, description } = req.body;

  if (!userName || !image || !title || !description) {
    return res.status(400).json({ ok: false, message: 'Faltan datos' });
  }

  try {
    await conectarMongoDB();

    const newPhoto = new Photo({
      userName,
      image,
      title,
      description
    });

    const result = await newPhoto.save();
    res.status(200).json({ ok: true, message: 'Éxito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const putPhoto = async (req, res) => {
  let { title, description } = req.body
  if (!title || !description) {
    res.status(400).json({ ok: false, message: 'Faltan datos' });
  }
  try {
    await conectarMongoDB();
    let result = await await Photo.findOneAndUpdate(
      { title: title },
      { description: description }
    );
    console.log(result);
    if (!result) {
      res.status(404).json({ ok: false, message: 'Foto no encontrada' });
    }
    res.status(200).json({ ok: true, message: 'Éxito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const deletePhoto = async (req, res) => {
  let { userName, title } = req.body;
  if (!userName) {
    res.status(400).json({ ok: false, message: 'Faltan datos del usuario' });
  }
  try {
    await conectarMongoDB()
    let result;
    if (title) {
      result = await Photo.findOneAndDelete({ userName: userName, title: title });
      if (!result) {
        return res.status(404).json({ ok: false, message: 'Foto no encontrada' });
      }
      res.status(200).json({ ok: true, message: 'Éxito!!', data: result });
    }   else {
      result = await Photo.deleteMany({ userName: userName });
      if (result.deletedCount === 0) {
        return res.status(404).json({ ok: false, message: 'Usuario no encontrado' });
      }
      console.log(result);
      res.status(200).json({ ok: true, message: 'Éxito!!', data: result });
    }
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}
module.exports = { getPhotos, postPhoto, putPhoto, deletePhoto };