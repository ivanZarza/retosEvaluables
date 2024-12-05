import { Professional } from './professional.js';
class Movie {
    constructor(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors = [];
        this.director = new Professional('', 0, 0, 0, false, '', 0, '');
        this.writer = new Professional('', 0, 0, 0, false, '', 0, '');
        this.language = '';
        this.plataforma = '';
        this.isMCU = false;
        this.mainCharacterName = '';
        this.producer = new Professional('', 0, 0, 0, false, '', 0, '');
        this.distributor = '';
    }
    setActors(actors) {
        this.actors = actors;
    }
    setDirector(director) {
        this.director = director;
    }
    setWriter(writer) {
        this.writer = writer;
    }
    setLanguage(language) {
        this.language = language;
    }
    setPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
    setIsMCU(isMCU) {
        this.isMCU = isMCU;
    }
    setMainCharacterName(mainCharacterName) {
        this.mainCharacterName = mainCharacterName;
    }
    setProducer(producer) {
        this.producer = producer;
    }
    setDistributor(distributor) {
        this.distributor = distributor;
    }
    printMovie() {
        console.log(`TITLE: ${this.title},\nRELEASE YEAR: ${this.releaseYear},\nNACIONALITY: ${this.nacionality},\nGENRE: ${this.genre},\nACTORS: ${this.actors.map(actor => actor.name).join(', ')},\nDIRECTOR: ${this.director.name},\nWRITER: ${this.writer.name},\nLANGUAGE: ${this.language},\nPLATAFORMA: ${this.plataforma},\nIS MCU: ${this.isMCU},\nMAIN CHARACTER NAME: ${this.mainCharacterName},\nPRODUCER: ${this.producer.name},\nDISTRIBUTOR: ${this.distributor}`);
    }
}
export { Movie };
