import { Professional } from './professional.js';
import { Movie } from './movie.js';

const actor = new Professional('John Doe', 30, 70, 180, false, 'American', 2, 'Actor', 'photo.jpg');
const director = new Professional('Jane Smith', 45, 65, 170, false, 'British', 1, 'Director', 'photo.jpg');

const movie = new Movie('The Movie', 2021, 'American', 'Action', [actor], director, director, 'English', 'Netflix', false, 'John Doe', 'Producer', 'Distributor', 'photo.jpg');

actor.printProfessional();
director.printProfessional();
console.log('---------------------------------');
console.log(movie.actors);
console.log('---------------------------------');
movie.printMovie();

