import { writeFileSync, readFileSync } from 'fs';
import { Movie } from './movie.js';
import { Imdb } from './imdb.js';
import { Professional } from './professional.js';

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

let reparto = [manquiña, karraElejalde, carlosArguiñano, jordiCruz, mariaDeMedeiros, albertoSanJuan, franciscoRabal, fernandoGuillén, albertPla];

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

let peliculas = [airbag, airbag2, airbag3];
let baseDatos = new Imdb(peliculas);

console.log('baseDatos', baseDatos);
baseDatos.printImdb();

let aJson = JSON.stringify(baseDatos); 
// console.log(aJson);

writeFileSync('imdbBBDD.json', aJson, 'utf-8');

let recuperarJSON = JSON.parse(readFileSync('imdbBBDD.json', 'utf-8'));
// console.log(recuperarJSON);

let pruebaJSON = new Imdb(recuperarJSON.peliculas);

console.log('pruebaJson',pruebaJSON);

baseDatos.escribirEnFicheroJSON('nombreFichero');

// baseDatos.obtenerInstanciaIMDB('imdbBBDD')