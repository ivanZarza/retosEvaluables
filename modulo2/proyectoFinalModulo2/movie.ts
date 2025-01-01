import { Professional } from './professional.js';

class Movie {
  public title: string;
  public releaseYear: number;
  public actors: Professional[];
  public nacionality: string;
  public director: Professional;
  public writer: Professional;
  public language: string;
  public plataforma: string;
  public isMCU: boolean;
  public mainCharacterName: string;
  public producer: string;
  public distributor: string;
  public genre: string;
  public photo: string;

  constructor(title: string, releaseYear: number, nacionality: string, genre: string, actors: Professional[], director: Professional, writer: Professional, language: string, plataforma: string, isMCU: boolean, mainCharacterName: string, producer: string, distributor: string, photo: string) {

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
  
  printMovie(): void {
    console.log(`TITLE: ${this.title},\nRELEASE YEAR: ${this.releaseYear},\nNACIONALITY: ${this.nacionality},\nGENRE: ${this.genre},\nDIRECTOR: ${this.director},\nWRITER: ${this.writer},\nLANGUAGE: ${this.language},\nPLATFORM: ${this.plataforma},\nIS MCU: ${this.isMCU},\nMAIN CHARACTER NAME: ${this.mainCharacterName},\nPRODUCER: ${this.producer},\nDISTRIBUTOR: ${this.distributor}`);
  }

}

export { Movie };