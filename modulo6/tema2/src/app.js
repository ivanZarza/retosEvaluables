let mongoose = require('mongoose');
let express = require('express');
const { User, Profile, Credentials, Photo } = require('./schemasMongo/modelos');


async function conectarMongoDB() {
  try {
    await mongoose.connect('mongodb+srv://ivanzarzaestevez:57C14Xff6ygoMFUv@cluster1.5cd1v.mongodb.net/codenotch');
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB', err);
  }
}

conectarMongoDB();

let userDocument = new User({
  name: 'Ivan',
  password: '123456',
});

let profileDocument = new Profile({
  name: 'Ivan',
  email: 'Ivan@example.com',
  dateOfBirth: new Date('1990-01-01'),
  Comments: 'comentario vario',
  rol: 'admin',
});

let credentialsDocument = new Credentials({
  address: 'Calle ermelegildo',
  phone: 123456789,
  email: 'Ivan@example.com'
});

/* insertarDocumento(userDocument);
insertarDocumento(profileDocument);
insertarDocumento(credentialsDocument);
insertarDocumento(photoDocument);
 */

