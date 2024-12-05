import { Professional } from "./professional.js";
import { readFileSync, writeFileSync } from 'fs';
import readLineSync from 'readline-sync';


let recuperarImdb = readFileSync('imdbBBDD.json', 'utf-8');

let recuperarImdb2 = JSON.parse(recuperarImdb);

function  crearProfesional(): Professional {
  const name = readLineSync.question('Introduce el nombre del profesional: ');
  const age = readLineSync.question('Introduce la edad del profesional: ');
  const weight = readLineSync.question('Introduce el peso del profesional: ');
  const height = readLineSync.question('Introduce la altura del profesional: ');
  const isRetired = readLineSync.question('Introduce si el profesional esta retirado: ');
  const nationality = readLineSync.question('Introduce la nacionalidad del profesional: ');
  const oscarsNumber = readLineSync.question('Introduce el numero de oscars del profesional: ');
  const profession = readLineSync.question('Introduce la profesion del profesional: ');


  return new Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession);
}

const profesional = crearProfesional();

recuperarImdb2.peliculas[0].actors.push(profesional);

console.log(recuperarImdb2.peliculas[0].actors);

let imdbRecuperada = JSON.stringify(recuperarImdb2,null,2);


writeFileSync('imdbBBDD.json', imdbRecuperada);