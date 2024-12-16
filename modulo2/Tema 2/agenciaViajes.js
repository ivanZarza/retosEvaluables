const nombre = document.getElementById('nombre');
const origen = document.getElementById('origen');
const destino = document.getElementById('destino');
const numeroPersonas = document.getElementById('numeroPersonas');
const fecha = document.getElementById('fecha');
const telefono = document.getElementById('telefono');
const desplegable = document.getElementsByClassName('desplegable')[0];
const reservasHechas = document.getElementById('reservasHechas');


const personas = [];

function desplegarInformacion(destino) {
  let contenido = '';

  switch (destino) {
    case 'Galicia':
      contenido = `
              <h2>Galicia</h2>
              <ul>
                <li><img src="imagenes/blue-mountain.jpg" alt=""></li>
                <li><img src="imagenes/bocas-del-toro.jpg" alt=""></li>
                <li><img src="imagenes/iguacu-falls.jpg" alt=""></li>
                <li><img src="imagenes/kilauea-volcano.jpg" alt=""></li>
              </ul>
          `;
      break;
    case 'Cadiz':
      contenido = `
              <h2>Cadiz</h2>
              <ul>
                <li><img src="imagenes/blue-mountain.jpg" alt=""></li>
                <li><img src="imagenes/bocas-del-toro.jpg" alt=""></li>
                <li><img src="imagenes/iguacu-falls.jpg" alt=""></li>
                <li><img src="imagenes/kilauea-volcano.jpg" alt=""></li>
              </ul>
          `;
      break;
    case 'Canarias':
      contenido = `
              <h2>Canarias</h2>
              <ul>
                <li><img src="imagenes/blue-mountain.jpg" alt=""></li>
                <li><img src="imagenes/bocas-del-toro.jpg" alt=""></li>
                <li><img src="imagenes/iguacu-falls.jpg" alt=""></li>
                <li><img src="imagenes/kilauea-volcano.jpg" alt=""></li>
              </ul>
          `;
      break;
    default:
      contenido = '<p>No hay información disponible para este destino.</p>';
  }
  desplegable.setAttribute('id', 'detallesDestinos')
  desplegable.innerHTML = contenido;
}



function agregarPersona() {
  const nuevaPersona = {
    nombre: nombre.value,
    origen: origen.value,
    destino: destino.value,
    numeroPersonas: numeroPersonas.value,
    fecha: fecha.value,
    telefono: telefono.value
  }
  personas.push(nuevaPersona);
  console.log(personas);
  nombre.value = '';
  origen.value = '';
  destino.value = '';
  numeroPersonas.value = '';
  fecha.value = '';
  telefono.value = '';
}


function filtrar() {
  const datosFiltrados = personas.filter(persona =>
    persona.destino.toLowerCase() === 'galicia' ||
    persona.destino.toLowerCase() === 'mallorca' ||
    persona.destino.toLowerCase() === 'canarias');
  console.log(datosFiltrados);

  datosFiltrados.forEach(persona => {
    reservasHechas.innerHTML += `
        <p>${persona.nombre} va a ${persona.destino} el dia ${persona.fecha}</p>`;
  });
  reservasHechas.setAttribute('class', 'reservasHechas');  
}