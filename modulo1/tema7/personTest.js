const Person = require('./person.js');

const person1 = new Person('Ivan', 'Zarza Estevez', 1979, 'Calle Falsa 123', '692692692', '47474474b','ivavavvavva@izarzadev.com', 'masculino', 'soltero', 'español', 'hosteleria', ['E.G.B.', 'G.M. Cultivos Marinos'], 1, 2, 'Maria Elena', 'Jose Francisco', 1.85, 93, 'castaño oscuro', 'marrones y verdes', 'blanca', 42, 'normal', false, ['ninguna'], ['ninguna'], '0+', ['cine', 'teatro', 'viajar']);


person1.printAll();
console.log('');
console.log('Indice masa corporal',person1.calcImc());
console.log('');
console.log('Calcular Edad',person1.calcEdad()); 
console.log('');
person1.printHobbies();