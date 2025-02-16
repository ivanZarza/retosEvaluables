const mongoose = require('mongoose');

async function conectarMongoDB() {
  try {
    await mongoose.connect('mongodb+srv://ivanzarzaestevez:57C14Xff6ygoMFUv@cluster1.5cd1v.mongodb.net/codenotch');
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB', err);
  }
}

module.exports = { conectarMongoDB };