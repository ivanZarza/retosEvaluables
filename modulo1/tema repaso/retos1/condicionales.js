let meses = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
};

function zodiaco(day, month) {
  if (day < 1 || day > 31 || month < 1 || month > 12) {
    return 'Fecha incorrecta';
  }
  if (day > meses[month] || day < 1) {
    return 'Fecha incorrecta';
  }

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return 'Aries';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return 'Tauro';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return 'Géminis';
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return 'Cáncer';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return 'Leo';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return 'Virgo';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return 'Libra';
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return 'Escorpio';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return 'Sagitario';
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return 'Capricornio';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return 'Acuario';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return 'Piscis';
  } else {
    return 'Fecha incorrecta';
  }
}

console.log(zodiaco(21, 'enero')); 
console.log(zodiaco(15, 4)); 
console.log(zodiaco(31, 2)); 
console.log(zodiaco(41, 3)); 

function continent(country) {
  if (country === 'España' || country === 'Lepe' || country === 'Pais Vasco' || country === 'Cataluña' || country === 'Galicia') {
    console.log('Europa');
  } else if (country === 'Estados Unidos' || country === 'Canada' || country === 'Mexico' || country === 'Brasil' || country === 'Argentina') {
    console.log('América');
  } else if (country === 'China' || country === 'Japón' || country === 'Corea del Sur' || country === 'India' || country === 'Indonesia') {
    console.log('Asia');
  } else if (country === 'Sudáfrica' || country === 'Nigeria' || country === 'Egipto' || country === 'Kenia' || country === 'Etiopía') {
    console.log('África');
  } else if (country === 'Australia' || country === 'Nueva Zelanda') {
    console.log('Oceanía');
  } else {
    console.log('Pues no me sabia mas paises');
  }
} 

continent('Lepe');

function isEven(number){
  if ( number % 2 === 0){
    console.log('El número es par');
    return true;
  } else {
    console.log('El número es impar');
    return false;
  }
}

isEven(4);

