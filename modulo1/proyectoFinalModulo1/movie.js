class Movie {
    constructor(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
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
