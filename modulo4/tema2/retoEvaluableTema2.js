
const fs = require('fs/promises');
const readline = require('readline');

// ----------------- PARTE 1 -----------------

//  const objetoAMano = {
//   name: 'Ico',
//   surname: 'Nico',
//   age: 77
// }

// function writeAndRead() {
//   fs.writeFile('dia2_Reto1b.json', JSON.stringify(objetoAMano, null, 2))
//     .then(() => fs.readFile('dia2_Reto1b.json', 'utf-8'))
//     .then(data => console.log(data))
//     .catch(err => console.error(err));
// }



// async function writeAndRead() {
//   try {
//     await fs.writeFile('dia2_Reto1b.json', JSON.stringify({ objetoAMano}, null, 2));
//     const data = await fs.readFile('dia2_Reto1b.json', 'utf-8');
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }

//  writeAndRead(); 

// ----------------- PARTE 2 -----------------

const name = '¿Cual es tu nombre?';
const surname = '¿Cual es tu apellido?';
const age = '¿Cual es tu edad?';

function pregunta(pregunta) {
  const question = new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(pregunta, (respuesta) => {
      resolve(respuesta);
          rl.close();
        });
      });
  return question;
}

const objetoAutomatico = {
  name: '',
  surname: '',
  age: '' 
};

function ejercicioConThen() {
console.log('Ejercicio con Then');
  pregunta(name)
    .then(respuesta => {
      objetoAutomatico.name = respuesta;
      return pregunta(surname);
    })
    .then(respuesta => {
      objetoAutomatico.surname = respuesta;
      return pregunta(age);
    })
    .then(respuesta => {
      objetoAutomatico.age = respuesta;
      return fs.writeFile('dia2_Reto2a.json', JSON.stringify(objetoAutomatico, null, 2));
    })
    .then(() => fs.readFile('dia2_Reto2.json', 'utf-8'))
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

ejercicioConThen();

/* async function ejercicioConAwait() {
  try {
    objetoAutomatico.name = await pregunta(name);
    objetoAutomatico.surname = await pregunta(surname);
    objetoAutomatico.age = await pregunta(age);
    await fs.writeFile('dia2_Reto2b.json', JSON.stringify(objetoAutomatico, null, 2));
    const data = await fs.readFile('dia2_Reto2b.json', 'utf-8');
    console.log(data);
  }
  catch (err) {
    console.error(err);
  }
}

ejercicioConAwait(); */