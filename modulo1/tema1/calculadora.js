
function encontrarResultado(x, y, simbolo) {
  if (simbolo !== "+" && simbolo !== "-" && simbolo !== "*" && simbolo !== "/") {
    console.log("Operación no permitida");
  } else if (typeof x !== 'number' || typeof y !== 'number') {
    console.log("Por favor ingrese dos números");
  } else if (x === 0 || y === 0) {
    console.log(-1);
  } else {
    console.log(x + simbolo + y + " = " + eval(x + simbolo + y));
  }
}

encontrarResultado(5, 5, "+");
encontrarResultado(5, 5, "-");
encontrarResultado(5, 5, "*");
encontrarResultado(5, 5, "/");
encontrarResultado(5, 0, "/");
encontrarResultado(0, 5, "/");
encontrarResultado(0, 5, "%");
encontrarResultado("hola", 5, "+");


function suma(x, y) {
  if (x === 0 || y === 0) {
    return -1;
  } else {
    return x + y;
  }
}

function resta(x, y) {
  if (x === 0 || y === 0) {
    return -1;
  } else {
    return x - y;
  }
}

function producto(x, y) {
  if (x === 0 || y === 0) {
    return -1;
  } else {
    return x * y;
  }
}

function division(x, y) {
  if (x === 0 || y === 0) {
    return -1;
  } else {
    return x / y;
  }
}

console.log(suma(4,2));
console.log(resta(4,2));
console.log(producto(4,2));
console.log(division(4,2));
console.log(suma(4,0));
console.log(resta(4,0));
console.log(producto(4,0));
console.log(division(4,0));