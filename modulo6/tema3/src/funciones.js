const { Mark, Teacher } = require('./modelos');

async function verMedia(asignatura) {
  let media = await Mark.aggregate([
    { $match: { subject_name: asignatura } },
    { $group: { _id: '$subject_name', media: { $avg: '$mark' } } }
  ]);
  console.log(media);
}

async function totalAlumnos() {
  let total = await Mark.aggregate([
    { $count: 'total' }
  ]);
  console.log(total);
}

async function listaDeAlumnos() {
  let alumnos = await Mark.aggregate([
    { $project: { _id: 0, student_first_name: 1, student_last_name: 1 } }
  ]);
  console.log(alumnos);
}

async function listaDeProfesores() {
  let profesores = await Mark.aggregate([
    { $unwind: '$teachers' },
    { $project : { _id: 0, 'teachers.first_name':1, 'teachers.last_name':1} }]
  );
  console.log(profesores);
}   

async function totalAlumnosPorGrupo() {
  let grupos = await Mark.aggregate([
    { $group: { _id: '$group_name', total: { $sum: 1 } } },
    { $sort: { _id: -1 } }
  ]);
  console.log('alumnos por grupo:', grupos);
}

async function mejoresCinco() {
  let top = await Mark.aggregate([
    { $group: { _id: '$subject_name', media: { $avg: '$mark' } } },
    { $match: { media: { $gt: 5 } } },
    { $sort: { media: -1 } },
    { $limit: 5 }
  ]);
  console.log('Top 5 asignaturas con nota media mayor que 5:', top);
}

async function profesoresPorAsignatura() {
  let profesores = await Mark.aggregate([
    { $unwind: '$teachers' },
    { $group: { _id: '$subject_name', total: { $sum: 1 } } }
  ]);
  console.log('Número de profesores por asignatura:', profesores);
}

module.exports = { verMedia, totalAlumnos, listaDeAlumnos, listaDeProfesores, totalAlumnosPorGrupo, mejoresCinco, profesoresPorAsignatura };