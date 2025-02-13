let mongoose = require('mongoose');
const { Teacher, Subject, Mark, Student } = require('./modelosEscenarioDeTrabajo');

async function conectarMongoDB() {
  try {
    await mongoose.connect('mongodb+srv://ivanzarzaestevez:57C14Xff6ygoMFUv@cluster1.5cd1v.mongodb.net/Escenario_de_trabajo');
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB', err);
  }
}

conectarMongoDB();

const teacher1 = new Teacher({
  firstName: 'Ivan',
  lastName: 'Zarza',
  groups: ['Matematicas', 'Ciencias']
});

const teacher2 = new Teacher({
  firstName: 'Nico',
  lastName: 'Zarza',
  groups: ['Matematicas', 'Historia']
});

const subject1 = new Subject({
  title: 'Matematicas',
  teachers: [teacher1, teacher2]
});

const mark1 = new Mark({
  date: new Date('2021-01-01'),
  mark: 8,
  subject: subject1
});

const student1 = new Student({
  firstName: 'Ivan',
  lastName: 'Zarza',
  group: 'Matematicas',
  marks: [mark1]
});

async function insertarDocumento(documento) {
  try {
    const document = await documento.save();
    console.log(document);
  } catch (err) {
    console.log(err);
  }
}

insertarDocumento(student1);