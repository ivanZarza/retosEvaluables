let personas = [
  persona1 =
  {
    nombre: 'Juan',
    apellido: 'Estevez',
    anyoNacimiento: 1980,
    aficiones: ['badminton', 'baloncesto', 'tenis'],
    dni: { anyoExpedicion: 1998, lugarNacimiento: 'A Coruña' },
    colorPelo: 'castaño',
  },
  persona2 = {
    nombre: 'Ana',
    apellido: 'Pena',
    anyoNacimiento: 1990,
    aficiones: ['rugby', 'dormir', 'leer'],
    dni: { anyoExpedicion: 2008, lugarNacimiento: 'Lugo' },
    colorPelo: 'rubio',
  },
  persona3 = {
    nombre: 'Maria',
    apellido: 'Juega',
    anyoNacimiento: 2000,
    aficiones: ['trabajar', 'rascarse', 'surfear'],
    dni: { anyoExpedicion: 2001, lugarNacimiento: 'Sevilla' },
    colorPelo: 'negro',
  },
  persona4 = {
    nombre: 'Pedro',
    apellido: 'Casquero',
    anyoNacimiento: 2010,
    aficiones: ['salir', 'correr', 'saltar'],
    dni: { anyoExpedicion: 2020, lugarNacimiento: 'Madrid' },
    colorPelo: 'pelirrojo',
  }
]

console.log('FOR..IN');
for (let datos in personas[0]) {
  console.log(datos, personas[0][datos]);
}

console.log('FOR');
let elementos = ''
for(i=0;i<personas.length;i++) {
elementos = personas[i]
console.log(elementos);
}

console.log('WHILE');
let elementosWhile = ''
let i1 = 0
while(i1 < personas.length) {
  elementosWhile = personas[i1]
  console.log(elementosWhile);
  i1++
}

console.log('FOR...OF');
for(persona of personas) {
  console.log(persona);
}

console.log('FOR');
for(i=0;i<personas.length;i++){
  if(personas[i].anyoNacimiento >=1978 && personas[i].anyoNacimiento<=2000){
    console.log(personas[i]);
    console.log('Tu edad esta entre 40 y 20 años');
  } else {
    console.log(personas[i]);
    console.log('Tu edad no esta entre 40 y 20 años');
  }
}

console.log('WHILE');
let i2 = 0
while(i2 < personas.length){
  if(personas[i2].anyoNacimiento >=1978 && personas[i2].anyoNacimiento<=2000){
    console.log(personas[i2]);
    console.log('Tu edad esta entre 40 y 20 años');
  } else {
    console.log(personas[i2]);
    console.log('Tu edad no esta entre 40 y 20 años');
  }
  i2++
}

console.log('FOR...OF');
for(persona of personas){
  if(persona.anyoNacimiento >=1978 && persona.anyoNacimiento<=2000){
    console.log(persona);
    console.log('Tu edad esta entre 40 y 20 años');
  } else {
    console.log(persona);
    console.log('Tu edad no esta entre 40 y 20 años');
  }
}

console.log('FOR');
for(i=0;i<personas.length;i++){
personas[i].aficiones.push('Jugar a la play')
console.log(personas[i].aficiones);
}

console.log('FOR..OF');
for(persona of personas) {
  persona.aficiones.push('Jugar a la play')
  console.log(persona.aficiones);
}