import { Professional } from "./professional.js";
import { Movie } from "./movie.js";

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



