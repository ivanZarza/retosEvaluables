class Person {
  constructor(nombre, apellidos, yearOfBirth, direccion, telefono, dni, email, genero, estadoCivil, nacionalidad, ocupacion, estudios, numeroHijos, numeroHermanos, nombreMadre, nombrePadre, altura, peso, colorPelo, colorOjos, colorPiel, tamañoPie, complexion, discapacidad, enfermedades, alergias, grupoSanguineo, hobbies) {
    this.nombre = nombre || ''
    this.apellidos = apellidos || ''
    this.yearOfBirth = yearOfBirth || 0
    this.direccion = direccion || ''
    this.telefono = telefono || ''
    this.dni = dni || ''
    this.email = email || ''
    this.genero = genero || ''
    this.estadoCivil = estadoCivil || ''
    this.nacionalidad = nacionalidad || ''
    this.ocupacion = ocupacion || ''
    this.estudios = estudios || []
    this.numeroHijos = numeroHijos || 0
    this.numeroHermanos =numeroHermanos || 0
    this.nombreMadre =nombreMadre || ''
    this.nombrePadre = nombrePadre || ''
    this.altura = altura || 0
    this.peso = peso || 0
    this.colorPelo = colorPelo || ''
    this.colorOjos = colorOjos || ''
    this.colorPiel =colorPiel || ''
    this.tamañoPie =tamañoPie || 0
    this.complexion = complexion || ''
    this.discapacidad = discapacidad || false
    this.enfermedades = enfermedades || []
    this.alergias = alergias || ['Ninguna']
    this.grupoSanguineo = grupoSanguineo || ''
    this.hobbies = hobbies || ['Ninguno']
  }

  calcImc() {
    return this.peso / (this.altura * this.altura)
  }

  calcEdad() {
    return new Date().getFullYear() - this.yearOfBirth
  }

  printAll() {
    console.log(`Nombre - ${this.nombre}`)
    console.log(`Apellidos - ${this.apellidos}`)
    console.log(`Año de nacimiento - ${this.yearOfBirth}`)
    console.log(`Dirección - ${this.direccion}`)
    console.log(`Teléfono - ${this.telefono}`)
    console.log(`DNI - ${this.dni}`)
    console.log(`Email - ${this.email}`)
    console.log(`Género - ${this.genero}`)
    console.log(`Estado Civil - ${this.estadoCivil}`)
    console.log(`Nacionalidad - ${this.nacionalidad}`)
    console.log(`Ocupación - ${this.ocupacion}`)
    console.log(`Estudios - ${this.estudios}`)
    console.log(`Número de hijos - ${this.numeroHijos}`)
    console.log(`Número de hermanos - ${this.numeroHermanos}`)
    console.log(`Nombre de la madre - ${this.nombreMadre}`)
    console.log(`Nombre del padre - ${this.nombrePadre}`)
    console.log(`Altura - ${this.altura}`)
    console.log(`Peso - ${this.peso}`)
    console.log(`Color de pelo - ${this.colorPelo}`)
    console.log(`Color de ojos - ${this.colorOjos}`)
    console.log(`Color de piel - ${this.colorPiel}`)
    console.log(`Tamaño de pie - ${this.tamañoPie}`)
    console.log(`Complexión - ${this.complexion}`)
    console.log(`Discapacidad - ${this.discapacidad}`)
    console.log(`Enfermedades - ${this.enfermedades}`)
    console.log(`Alergias - ${this.alergias}`)
    console.log(`Grupo sanguíneo - ${this.grupoSanguineo}`)
    console.log(`Hobbies - ${this.hobbies}`)
  }

  printHobbies() {
    return console.log(`Hobbies - ${this.hobbies}`)
  }
}

module.exports = Person