
const peliculas = [];
const profesionales = [];
let pintarPeliculas = document.getElementById('peliculas');
const botonCrearPelicula = document.getElementById('agregarPelicula');
const karraElejalde = new Professional('Karra Elejalde', 60, 85, 1.90, false, 'Española', 0, 'Actor', 'https://www.buscabiografias.com/img/people/Karra-Elejalde.jpg');
const oubiña = new Professional('Oubiña', 50, 85, 1.75, false, 'Gallega', 1, 'Guionista', 'https://phantom-elmundo.unidadeditorial.es/e6c40d8b4d3185a8c9ecb5b5e8f2dc17/crop/0x352/2476x2003/resize/920/f/webp/assets/multimedia/imagenes/2024/02/02/17068800153389.jpg');
const pabloEscobar = new Professional('Pablo Escobar', 65, 80, 1.75, false, 'Colombiana', 1, 'Productor', 'https://ichef.bbci.co.uk/ace/ws/412/cpsprodpb/13792/production/_116726797_gettyimages-108556393.jpg.webp');
const airbag = new Movie('Airbag', 1997, 'Española', 'Comedia', profesionales, pabloEscobar, oubiña, 'Español', 'Cine', false, karraElejalde.name, 'Pablo Escobar', 'La vaca que sonrie', 'https://pics.filmaffinity.com/airbag-110139764-large.jpg');
const airbag2 = new Movie('Airbag', 1997, 'Española', 'Comedia', profesionales, pabloEscobar, oubiña, 'Español', 'Cine', false, karraElejalde.name, 'Pablo Escobar', 'La vaca que sonrie', 'https://pics.filmaffinity.com/airbag-110139764-large.jpg');
peliculas.push(airbag, airbag2);
console.log(peliculas);
function pintarArrayPeliculas() {
    pintarPeliculas.innerHTML = '';
    peliculas.forEach((pelicula) => {
        pintarPeliculas.innerHTML += `
          <div class="contenedor"> 
          <div class="datos">
            <h1>${pelicula.title}</h1>
            <h2>Año de lanzamiento: ${pelicula.releaseYear}</h2>
            <h2>Nacionalidad: ${pelicula.nacionality}</h2>
            <h2>Genero: ${pelicula.genre}</h2>
            <h2>Idioma: ${pelicula.language}</h2>
            <h2>Plataforma: ${pelicula.plataforma}</h2>
            <h2>${pelicula.isMCU ? 'Es del UCM' : 'No es del UCM'}</h2>
            <h2>Protagonista: ${pelicula.mainCharacterName}</h2>
            <h2>Productor: ${pelicula.producer}</h2>
            <h2>Distribuidora: ${pelicula.distributor}</h2>
          </div>
          <div class="imagen">
            <img src="${pelicula.photo}" alt="${pelicula.title}">
          </div>
        </div>`;
    });
}
pintarArrayPeliculas();
function crearPelicula() {
    const title = document.getElementById('title');
    const releaseYear = document.getElementById('releaseYear');
    const nacionality = document.getElementById('nacionality');
    const genre = document.getElementById('genre');
    const language = document.getElementById('language');
    const plataforma = document.getElementById('plataforma');
    const isMCU = document.getElementById('isMCU');
    const mainCharacterName = document.getElementById('mainCharacterName');
    const producer = document.getElementById('producer');
    const distributor = document.getElementById('distributor');
    const photo = document.getElementById('photo');
    const nuevaPelicula = new Movie(title.value, parseInt(releaseYear.value), nacionality.value, genre.value, profesionales, new Professional('', 0, 0, 0, false, '', 0, '', ''), new Professional('', 0, 0, 0, false, '', 0, '', ''), language.value, plataforma.value, isMCU.checked, mainCharacterName.value, producer.value, distributor.value, photo.value);
    peliculas.push(nuevaPelicula);
    pintarArrayPeliculas();
}
botonCrearPelicula.addEventListener('click', crearPelicula);
