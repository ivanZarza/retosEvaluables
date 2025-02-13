let mongoose = require('mongoose');
const { insertarDocumento, obtenerFotos, modificarFoto, eliminarFoto, eliminarTodasLasFotos } = require('./funciones');
const { Photo } = require('./schemasMongo/modelos');

async function conectarMongoDB() {
  try {
    await mongoose.connect('mongodb+srv://ivanzarzaestevez:57C14Xff6ygoMFUv@cluster1.5cd1v.mongodb.net/codenotch');
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB', err);
  }
}

conectarMongoDB();

let documentoPhoto = new Photo({
  userName: 'Ivan',
  image: 'http://www.example.com/foto1.jpg',
  title: 'Foto de la playa',
  description: 'Foto de la playa de la maravillosa',
});

let documentoPhoto1 = new Photo({
  userName: 'Ivan',
  image: 'http://www.example.com/foto2.jpg',
  title: 'Foto de la playa',
  description: 'Foto de la playa de la maravillosa',
});


let documentoPhoto3 = new Photo({ 
  userName: 'Ivan',
  image: 'http://www.example.com/foto3.jpg',
  title: 'Foto de la playa calla',
  description: 'Foto de la playa de la maravillosa',
});

// insertarDocumento(documentoPhoto3);

// obtenerFotos('Ivan');

// modificarFoto('Foto de la playa calla', 'Foto de la playa ');

// eliminarFoto('Ivan', 'Foto de la playa calla');

eliminarTodasLasFotos('Ivan');

