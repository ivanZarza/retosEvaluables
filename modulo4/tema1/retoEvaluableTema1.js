const fs = require('fs');

const objetoAMano = {
  name: 'Laura',
  surname: 'Risitas',
  age: 29
}


function escribirArchivo() {
  fs.writeFile('reto1.json', JSON.stringify(objetoAMano, null, 2), (err) => {
    if (err) {
      console.error(err);
    } else {
      fs.readFile('reto1.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
        }
      }
      );
    }
  });

}

escribirArchivo();

/* const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');



function rellenarObjeto() {
  const rl = readline.createInterface({ input, output });
  const nombre = '¿Cual es tu nombre?';
  const apellido = '¿Cual es tu apellido?';
  const age = '¿Cual es tu edad?';
  const objetoAutomatico = {
    name: '',
    surname: '',
    age: ''
  }


  rl.question(nombre, (respuesta) => {
    objetoAutomatico.name = respuesta;

    rl.question(apellido, (respuesta) => {
      objetoAutomatico.surname = respuesta;

      rl.question(age, (respuesta) => {
        objetoAutomatico.age = respuesta;
        fs.writeFile('reto2.json', JSON.stringify(objetoAutomatico, null, 2), (err) => {
          if (err) {
            console.error(err);
          } else {
                       console.log('Archivo creado');
                   fs.readFile('reto2.json', 'utf8', (err, data) => {
          if (err) {
            console.error(err);
          } else {
            console.log(data);
          }
        });
          }
        });


        rl.close();
      });
    });
  }
  );
};

rellenarObjeto();

 */