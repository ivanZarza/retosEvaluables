class Movie {
    constructor(title, releaseYear, nacionality, genre, actors, director, writer, language, plataforma, isMCU, mainCharacterName, producer, distributor, photo) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors = actors;
        this.director = director;
        this.writer = writer;
        this.language = language;
        this.plataforma = plataforma;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.photo = photo;
    }
    printMovie() {
        console.log(`TITLE: ${this.title},\nRELEASE YEAR: ${this.releaseYear},\nNACIONALITY: ${this.nacionality},\nGENRE: ${this.genre},\nDIRECTOR: ${this.director},\nWRITER: ${this.writer},\nLANGUAGE: ${this.language},\nPLATFORM: ${this.plataforma},\nIS MCU: ${this.isMCU},\nMAIN CHARACTER NAME: ${this.mainCharacterName},\nPRODUCER: ${this.producer},\nDISTRIBUTOR: ${this.distributor}`);
    }
}
export { Movie };
