import { Movie } from "./movie.js";
import { Imdb } from "./imdb.js";
import { Professional } from "./professional.js";

import { writeFileSync, readFileSync } from 'node:fs';

let manquiña = new Professional('Manuel Manquiña', 71, 84, 1.75, false, 'Española', 0, 'Actor');
let karraElejalde = new Professional('Karra Elejalde', 60, 85, 1.90, false, 'Española', 0, 'Actor');
let carlosArguiñano = new Professional('Carlos Arguiñano', 71, 80, 1.35, false, 'Española', 0, 'Actor');
let jordiCruz = new Professional('Jordi Cruz', 42, 75, 1.75, false, 'Española', 0, 'Actor');
let mariaDeMedeiros = new Professional('Maria de Medeiros', 59, 60, 1.58, false, 'Portuguesa', 0, 'Actriz');
let albertoSanJuan = new Professional('Alberto San Juan', 51, 99, 1.63, false, 'Española', 0, 'Actor');
let franciscoRabal = new Professional('Francisco Rabal', 75, 105, 1.79, true, 'Española', 0, 'Actor');
let fernandoGuillén = new Professional('Fernando Guillén', 80, 84, 1.45, false, 'Española', 0, 'Actor');
let albertPla = new Professional('Albert Pla', 135, 77, 1.72, false, 'Española', 0, 'Actor');
let juanmaBajoUlloa = new Professional('Juanma Bajo Ulloa', 52, 79, 1.67, false, 'Española', 0, 'Director');
let oubiña = new Professional('Oubiña', 50, 85, 1.75, false, 'Gallega', 1, 'Guionista');
let pabloEscobar = new Professional('Pablo Escobar', 65, 80, 1.75, false, 'Colombiana', 1, 'Productor');

let reparto: Professional[] = [manquiña, karraElejalde, carlosArguiñano, jordiCruz, mariaDeMedeiros, albertoSanJuan, franciscoRabal, fernandoGuillén, albertPla];

let airbag = new Movie('Airbag', 1997, 'Española', 'Comedia');

airbag.setActors(reparto);
airbag.setDirector(juanmaBajoUlloa);
airbag.setWriter(oubiña);
airbag.setProducer(pabloEscobar);
airbag.setLanguage('Español');
airbag.setPlataforma('Toilet times');
airbag.setIsMCU(false);
airbag.setMainCharacterName('Carlos Arguiñano');
airbag.setDistributor('La Vaquinha tiesa');
airbag.printMovie();

let airbag2 = new Movie('Airbag 2', 2022, 'Española', 'Comedia');

airbag2.setActors(reparto);
airbag2.setDirector(juanmaBajoUlloa);
airbag2.setWriter(oubiña);
airbag2.setProducer(pabloEscobar);
airbag2.setLanguage('Español');
airbag2.setPlataforma('Toilet times');
airbag2.setIsMCU(false);
airbag2.setMainCharacterName('Carlos Arguiñano');
airbag2.setDistributor('La Vaquinha tiesa');
airbag2.printMovie();

let airbag3 = new Movie('Airbag 3', 2025, 'Española', 'Comedia');

airbag3.setActors(reparto);
airbag3.setDirector(juanmaBajoUlloa);
airbag3.setWriter(oubiña);
airbag3.setProducer(pabloEscobar);
airbag3.setLanguage('Español');
airbag3.setPlataforma('Toilet times');
airbag3.setIsMCU(false);
airbag3.setMainCharacterName('Carlos Arguiñano');
airbag3.setDistributor('La Vaquinha tiesa');
airbag3.printMovie();

let peliculas: Movie[] = [airbag, airbag2, airbag3];

let baseDatos = new Imdb(peliculas);

// esto creo que no es necesario
baseDatos.printImdb();

// probando a guardar en un fichero JSON
let baseDatosAJson = JSON.stringify(baseDatos,null,2);

writeFileSync('imdbBBDD.json', baseDatosAJson);

//recuperando del fichero JSON
let recuperarDeImdbBBDD = readFileSync('imdbBBDD.json', 'utf-8');

let recuperarImdb = JSON.parse(recuperarDeImdbBBDD);

let imdbRecuperada = new Imdb(recuperarImdb.peliculas);

console.log(imdbRecuperada.peliculas[1].actors[1].name);

// prueba metodos escribirEnFicheroJSON y obtenerInstanciaIMDB

imdbRecuperada.escribirEnFicheroJSON('imdbBBDD2');

imdbRecuperada.obtenerInstanciaIMDB('imdbBBDD2');
console.log('imdbRecuperada',imdbRecuperada);

console.log(imdbRecuperada.peliculas[1].actors[1].name);
