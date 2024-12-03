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
  persona2 ={
    nombre: 'Ana',
    apellido: 'Pena',
    anyoNacimiento: 1990,
    aficiones: ['rugby', 'dormir', 'leer'],
    dni: { anyoExpedicion: 2008, lugarNacimiento: 'Lugo' },
    colorPelo: 'rubio',
  },
  persona3 ={
    nombre: 'Maria',
    apellido: 'Juega',
    anyoNacimiento: 2000,
    aficiones: ['trabajar', 'rascarse', 'surfear'],
    dni: { anyoExpedicion: 2001, lugarNacimiento: 'Sevilla' },
    colorPelo: 'negro',
  },
  persona4 ={
    nombre: 'Pedro',
    apellido: 'Casquero',
    anyoNacimiento: 2010,
    aficiones: ['salir', 'comer', 'saltar'],
    dni: { anyoExpedicion: 2020, lugarNacimiento: 'Madrid' },
    colorPelo: 'pelirrojo',
  }
]

if (personas[0].colorPelo ==='castaño') {
console.log(personas[0].nombre);
} 
if (personas[1].colorPelo ==='castaño') {
console.log(personas[1].nombre);
} 
if (personas[2].colorPelo ==='castaño') {
console.log(personas[2].nombre);
} 
if (personas[3].colorPelo ==='castaño') {
console.log(personas[3].nombre);
}

const date = new Date()  
const anyoActual = date.getFullYear()
console.log(anyoActual);

if(anyoActual - personas[0].anyoNacimiento >= 30){
console.log(anyoActual - personas[0].anyoNacimiento);
}

if(anyoActual - personas[1].anyoNacimiento >= 30){
console.log(anyoActual - personas[1].anyoNacimiento);
}

if(anyoActual - personas[2].anyoNacimiento >= 30){
console.log(anyoActual - personas[2].anyoNacimiento);
}

if(anyoActual - personas[3].anyoNacimiento >= 30){
console.log(anyoActual - personas[3].anyoNacimiento);
}

if((personas[0].colorPelo === 'negro' && anyoActual - personas[0].dni.anyoExpedicion > 20) ||
(anyoActual - personas[0].anyoNacimiento <18 && (personas[0].aficiones.includes('comer') || personas[0].aficiones.includes('dormir') ))){
console.log(personas[0].dni.lugarNacimiento);
}

if((personas[1].colorPelo === 'negro' && anyoActual - personas[1].dni.anyoExpedicion > 20) ||
(anyoActual - personas[1].anyoNacimiento <18 && (personas[1].aficiones.includes('comer') || personas[1].aficiones.includes('dormir') ))){
console.log(personas[1].dni.lugarNacimiento);
}

if((personas[2].colorPelo === 'negro' && anyoActual - personas[2].dni.anyoExpedicion > 20) ||
(anyoActual - personas[2].anyoNacimiento <18 && (personas[2].aficiones.includes('comer') || personas[2].aficiones.includes('dormir') ))){
console.log(personas[2].dni.lugarNacimiento);
}

if((personas[3].colorPelo === 'negro' && anyoActual - personas[3].dni.anyoExpedicion > 20) ||
(anyoActual - personas[3].anyoNacimiento <18 && (personas[3].aficiones.includes('comer') || personas[3].aficiones.includes('dormir') ))){
console.log(personas[3].dni.lugarNacimiento);
}
