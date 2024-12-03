function evenNumbers(num) {
    var arrayImpares = [];
    for (var i = 1; i <= num; i += 2) {
        arrayImpares.push(i);
    }
    return arrayImpares;
}
console.log(evenNumbers(10)); // [1, 3, 5, 7, 9]
function myRevert(array) {
    var arrayAlReves = [];
    for (var i = array.length - 1; i >= 0; i--) {
        arrayAlReves.push(array[i]);
    }
    return arrayAlReves;
}
console.log(myRevert(['hola', 'caracola']));
function isRainbow(colors) {
    var rainbow = ['rojo', 'naranja', 'amarillo', 'verde', 'añil', 'azul', 'violeta'];
    var respuesta = [];
    for (var i = 0; i < colors.length; i++) {
        if ((colors[i] === rainbow[0]) || (colors[i] === rainbow[1]) || (colors[i] === rainbow[2]) || (colors[i] === rainbow[3]) || (colors[i] === rainbow[4]) || (colors[i] === rainbow[5]) || (colors[i] === rainbow[6])) {
            respuesta.push('si');
        }
        else {
            respuesta.push('no');
        }
    }
    return respuesta;
}
console.log(isRainbow(['negro', 'verde', 'rosa', 'amarillo', 'naranja']));
function add(myWords) {
    var contador = 0;
    for (var i = 0; i < myWords.length; i++) {
        contador += myWords[i].length;
    }
    return contador;
}
console.log(add(['hola', 'adios']));
