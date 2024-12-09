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
  public producer: Professional;
  public distributor: string;
  public genre: string;

  constructor(title: string, releaseYear: number, nacionality: string, genre: string) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.nacionality = nacionality;
    this.genre = genre;
  }   

  printMovie(): void {
    console.log(`TITLE: ${this.title},\nRELEASE YEAR: ${this.releaseYear},\nNACIONALITY: ${this.nacionality},\nGENRE: ${this.genre},\nACTORS: ${this.actors.map(actor => actor.name).join(', ')},\nDIRECTOR: ${this.director.name},\nWRITER: ${this.writer.name},\nLANGUAGE: ${this.language},\nPLATAFORMA: ${this.plataforma},\nIS MCU: ${this.isMCU},\nMAIN CHARACTER NAME: ${this.mainCharacterName},\nPRODUCER: ${this.producer.name},\nDISTRIBUTOR: ${this.distributor}`);
    
  }

}

export { Movie };