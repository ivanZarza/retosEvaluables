import { Movie } from './movie.js';
import { Professional } from './professional.js';

const peliculas: Movie[] = [];
const profesionales: Professional[] = [];






const pintarPeliculas = document.getElementById('pelicula');

const karraElejalde = new Professional('Karra Elejalde', 60, 85, 1.90, false, 'Española', 0, 'Actor','https://www.buscabiografias.com/img/people/Karra-Elejalde.jpg');

let oubiña = new Professional('Oubiña', 50, 85, 1.75, false, 'Gallega', 1, 'Guionista','https://phantom-elmundo.unidadeditorial.es/e6c40d8b4d3185a8c9ecb5b5e8f2dc17/crop/0x352/2476x2003/resize/920/f/webp/assets/multimedia/imagenes/2024/02/02/17068800153389.jpg');

let pabloEscobar = new Professional('Pablo Escobar', 65, 80, 1.75, false, 'Colombiana', 1, 'Productor','https://ichef.bbci.co.uk/ace/ws/412/cpsprodpb/13792/production/_116726797_gettyimages-108556393.jpg.webp' );

const airbag = new Movie('Airbag', 1997, 'Española', 'Comedia', profesionales, pabloEscobar ,oubiña, 'Español', 'Cine', false, karraElejalde.name, 'Pablo Escobar', 'La vaca que sonrie', 'https://pics.filmaffinity.com/airbag-110139764-large.jpg');

peliculas.push(airbag);


console.log(peliculas);



function pintarArrayPeliculas(): void {

  if (pintarPeliculas) {
    peliculas.forEach((pelicula: Movie) => {
      pintarPeliculas.innerHTML += `
          <div class="contenedor"> 
          <div class="datos">
            <h1>${pelicula.title}</h1>
            <h2>${pelicula.releaseYear}</h2>
            <h2>${pelicula.nacionality}</h2>
            <h2>${pelicula.genre}</h2>
            <h2>${pelicula.director.name}</h2>
            <h2>${pelicula.writer.name}</h2>
            <h2>${pelicula.language}</h2>
            <h2>${pelicula.plataforma}</h2>
            <h2>${pelicula.isMCU ? 'Es del UCM' : 'No es del UCM'}</h2>
            <h2>${pelicula.mainCharacterName}</h2>
            <h2>${pelicula.producer}</h2>
            <h2>${pelicula.distributor}</h2>
          </div>
          <div class="imagen">
            <img src="${pelicula.photo}" alt="${pelicula.title}">
          </div>
        </div>`;
    });
  } else {
    console.error('El elemento con id "peliculas" no se encontró en el DOM.');
  }
}

pintarArrayPeliculas();



function crearPelicula(event: Event): void {
  event.preventDefault();

  const title = document.getElementById('title')  as HTMLInputElement;
  const releaseYear = document.getElementById('releaseYear')  as HTMLInputElement;
  const nacionality = document.getElementById('nacionality')  as HTMLInputElement;
  const genre = document.getElementById('genre')  as HTMLInputElement;
  const director = { name: document.getElementById('director')  as HTMLInputElement };
  const writer = { name: document.getElementById('writer')  as HTMLInputElement };
  const language = document.getElementById('language')  as HTMLInputElement;
  const plataforma = document.getElementById('plataforma')  as HTMLInputElement;
  const isMCU = document.getElementById('isMCU')  as HTMLInputElement;
  const mainCharacterName = document.getElementById('mainCharacterName')  as HTMLInputElement;
  const producer = document.getElementById('producer')  as HTMLInputElement;
  const distributor = document.getElementById('distributor')  as HTMLInputElement;
  const photo = document.getElementById('photo')  as HTMLInputElement;

  const nuevaPelicula = new Movie(
    title.value,
    parseInt(releaseYear.value),
    nacionality.value,
    genre.value,
    profesionales,
    new Professional(director.name.value, 0, 0, 0, false, '', 0, '', ''),
    new Professional(writer.name.value, 0, 0, 0, false, '', 0, '', ''),
    language.value,
    plataforma.value,
    isMCU.checked,
    mainCharacterName.value,
    producer.value,
    distributor.value,
    photo.value
  );

  peliculas.push(nuevaPelicula);
  pintarArrayPeliculas();
}