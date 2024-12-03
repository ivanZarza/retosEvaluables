
let familia = {
  nombre: 'Nico',
  apellidos: ['Zarza', 'Garcia'],
  edad: 6,
  padres: [
    {
      nombre: 'Ivan',
      apellidos: ['Zarza', 'Estevez'],
      padres: [
        {
          nombre: 'Jose Francisco',
          apellidos: ['Zarza', 'Esteban'],
          edad: 70
        },
        {
          nombre: 'Malena',
          apellidos: ['Estevez', 'Vila'],
          edad: 71,
        }]
    }, 
    {
      nombre: 'Iria',
      apellidos: ['Garcia', 'Vidal'],
      edad: 36,
      padres: [
        {
          nombre: 'Ausente',
          apellidos: ['Garcia', 'Perez'],
          edad: 72
        },
        {
          nombre: 'Lela',
          apellidos: ['Lalo', 'Ca'],
          edad: 73,
        }]
    }]
}

console.log(familia.padres[0].padres[0].nombre); 

console.log(familia.padres[1].padres[1].apellidos[1]);

let edadesSumadas = familia.padres[1].edad + familia.padres[0].padres[0].edad;
console.log(edadesSumadas);

let edadAbuelo1 = familia.padres[0].padres[0].edad;
let edadAbuel02 = familia.padres[1].padres[0].edad;
familia.padres[0].padres[0].edad = edadAbuel02;
familia.padres[1].padres[0].edad = edadAbuelo1;
console.log(familia.padres[0].padres[0].edad);
console.log(familia.padres[1].padres[0].edad);

familia.padres[1].padres[1].apellidos.push(familia.padres[0].padres[0].apellidos[1]); 

console.log(familia.padres[1].padres[1].apellidos);

familia.padres[1].apellidos.shift();
console.log(familia.padres[1].apellidos);

let ultimaLetra = familia.padres[0].padres[0].apellidos[1].slice(-1);
console.log(ultimaLetra);

