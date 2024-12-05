import { writeFileSync, readFileSync } from 'fs';
import { Movie } from "./movie.js";

class Imdb {

  public peliculas: Movie[];

  constructor(peliculas: Movie[]) {
    this.peliculas = peliculas
  }

    public printImdb(): void {
      this.peliculas.forEach((pelicula) => {
          console.log(`${pelicula.printMovie()}\n`);
      });
  }

  public escribirEnFicheroJSON(nombreFichero: string): void {
    let toJson: string = JSON.stringify(this.peliculas, null, 2);
    writeFileSync(`${nombreFichero}.json`, toJson, 'utf-8');
  }

  public obtenerInstanciaIMDB(nombreFicheroSinExtension : string): Imdb {
    let recuperarImbd: Movie[] = JSON.parse(readFileSync(`${nombreFicheroSinExtension}.json`, 'utf-8'));
    return new Imdb(recuperarImbd)
  }
}

export { Imdb };