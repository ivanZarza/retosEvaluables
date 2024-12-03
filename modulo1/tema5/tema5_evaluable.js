function crearVector(n, m){
  let vector1  = [];
  for (let i = 0; i <= n; i++) {
    let numeroAleatorio= Math.floor(Math.random() * ( m +  1));
    vector1.push(numeroAleatorio);
  }
return vector1;
}

let v1 = crearVector(8, 100);
console.log('V1',v1);
let v2 = crearVector(8, 100);
console.log('V2',v2);

function sumarVectores(v1, v2){
  if (v1.length !== v2.length) {
    return 'Los vectores no tienen la misma longitud';
  }
  let v3 = [];
  for (let i = 0; i < v1.length; i++) {
    v3[i] = v1[i] + v2[i];
  }
  return v3;
}

let sumavectores = sumarVectores(v1, v2);

console.log('SUMAR VECTORES',sumavectores);

function productoNumeroVector(n,v) {
  let vectorMultiplicado = [];
  for(let i = 0;  i < v.length; i++){
    vectorMultiplicado[i] = n * v[i];
  }
  return vectorMultiplicado;
}

let producto = productoNumeroVector(2, v1);
console.log('VECTOR MULTIPLICADO',producto);

function restaVector(v1,v2) {
  let vectorRestado = []
  for(let i=0;i < v1.length;i++){
    vectorRestado[i] = v1[i] - v2[i]
}
return vectorRestado
}

let vectorResultado = restaVector(v1, v2)
console.log('VECTORES RESTADOS',vectorResultado);

function productoVector(v1,v2) {
  let vectorProducto = []
  for(let i=0;i < v1.length;i++){
    vectorProducto[i] = v1[i] * v2[i]
}
return vectorProducto
}

let vectorMultiplicado = productoVector(v1, v2)
console.log('VECTORES MULTIPLICADOS',vectorMultiplicado);

module.exports = {crearVector, sumarVectores, productoNumeroVector, restaVector, productoVector};

let sumaForEach = (v1, v2) => {
  let vectorSumaEach = [];
  v1.forEach((value, i) => {
    vectorSumaEach[i] = value + v2[i]
  })
  return vectorSumaEach;
}

console.log('VECTORES SUMADOS CON .foeEach',sumaForEach(v1, v2));

function sumaVectorMap(v1, v2) {
  let vectorSumaMap = []
  v1.map((value,i)  => {
    vectorSumaMap[i] = value + v2[i]
  })
  return vectorSumaMap;
}

let sumaMap = sumaVectorMap(v1, v2);
console.log('VECTORES SUMADOS  CON  .map',sumaMap);

let v = crearVector(8, 100);
console.log('VECTOR V',v);

function filtrarPares(v) {
  let vectorFiltrado = v.filter(value => value % 2 === 0);
  return vectorFiltrado;
}

let pares = filtrarPares(v);
console.log('PARES',pares);

function sumatorio (v) {
  let sumado = v.reduce((acc, value) => acc + value, 0);
  return sumado;
}

let sumaReduce = sumatorio(v);
console.log('SUMA DE VECTOR POR SI  MISMO',sumaReduce);