let mongoose = require('mongoose');
const { Teacher, Mark } = require('./modelos');
const { verMedia, totalAlumnos, listaDeAlumnos, listaDeProfesores, totalAlumnosPorGrupo, mejoresCinco, profesoresPorAsignatura  } = require('./funciones');

async function conectarMongoDB() {
  try {
    await mongoose.connect('mongodb+srv://ivanzarzaestevez:57C14Xff6ygoMFUv@cluster1.5cd1v.mongodb.net/Escenario_de_trabajo');
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB', err);
  }
}
conectarMongoDB();


// verMedia('Matematicas');
// totalAlumnos();
// listaDeAlumnos();
// listaDeProfesores();
// totalAlumnosPorGrupo();
// mejoresCinco();
// profesoresPorAsignatura();