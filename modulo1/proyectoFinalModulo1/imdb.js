import { writeFileSync, readFileSync } from 'fs';
class Imdb {
    constructor(peliculas) {
        this.peliculas = peliculas;
    }
    printImdb() {
        this.peliculas.forEach((pelicula) => {
            console.log(`${pelicula.printMovie()}\n`);
        });
    }
    escribirEnFicheroJSON(nombreFichero) {
        let toJson = JSON.stringify(this.peliculas, null, 2);
        writeFileSync(`${nombreFichero}.json`, toJson, 'utf-8');
    }
    obtenerInstanciaIMDB(nombreFicheroSinExtension) {
        let recuperarImbd = JSON.parse(readFileSync(`${nombreFicheroSinExtension}.json`, 'utf-8'));
        return new Imdb(recuperarImbd);
    }
}
export { Imdb };
