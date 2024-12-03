const tema5_evaluable = require('./tema5_evaluable.js');

let v1 = tema5_evaluable.crearVector(8, 11);
console.log('V1',v1);
let v2 = tema5_evaluable.crearVector(8, 11);
console.log('V2',v2);

let sumaVectores  = tema5_evaluable.sumarVectores(v1, v2);
console.log('SUMAR VECTORES',sumaVectores);

let vectorMultiplicado = tema5_evaluable.productoNumeroVector(2, v1);
console.log('VECTOR MULTIPLICADO',vectorMultiplicado);

let vectorRestado = tema5_evaluable.restaVector(v1, v2);
console.log('VECTORES RESTADOS',vectorRestado);

let vectorProducto = tema5_evaluable.productoVector(v1, v2);
console.log('VECTORES MULTIPLICADOS',vectorProducto);