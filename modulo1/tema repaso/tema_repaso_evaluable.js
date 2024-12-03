let arrayOvejas =[
    {
      nombre: 'Lolita',
      color: 'blanco',
    },
    {
      nombre: 'Pepita',
      color: 'rojo',
    },
    {
      nombre: 'Rosita',
      color: 'verde',
    },
    {
      nombre: 'Fulanita',
      color: 'azul',
    },
    {
      nombre: 'A lbert',
      color: 'rojo',
    },
    {
      nombre: 'Panchita',
      color: 'blanco',
    },
]

function buscarOvejaPorColor(){
  let ovejas = arrayOvejas.filter(oveja => oveja.color === 'rojo' && oveja.nombre.toLowerCase().replace(/\s+/g, '').includes('a'));
  return ovejas;
}

console.log(buscarOvejaPorColor());