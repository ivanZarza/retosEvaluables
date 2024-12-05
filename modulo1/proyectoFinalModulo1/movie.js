"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.setActors = function (actors) {
        this.actors = actors;
    };
    Movie.prototype.setDirector = function (director) {
        this.director = director;
    };
    Movie.prototype.setWriter = function (writer) {
        this.writer = writer;
    };
    Movie.prototype.setLanguage = function (language) {
        this.language = language;
    };
    Movie.prototype.setPlataforma = function (plataforma) {
        this.plataforma = plataforma;
    };
    Movie.prototype.setIsMCU = function (isMCU) {
        this.isMCU = isMCU;
    };
    Movie.prototype.setMainCharacterName = function (mainCharacterName) {
        this.mainCharacterName = mainCharacterName;
    };
    Movie.prototype.setProducer = function (producer) {
        this.producer = producer;
    };
    Movie.prototype.setDistributor = function (distributor) {
        this.distributor = distributor;
    };
    Movie.prototype.printMovie = function () {
        console.log("TITLE: ".concat(this.title, ",\nRELEASE YEAR: ").concat(this.releaseYear, ",\nNACIONALITY: ").concat(this.nacionality, ",\nGENRE: ").concat(this.genre, ",\nACTORS: ").concat(this.actors.map(function (actor) { return actor.name; }).join(', '), ",\nDIRECTOR: ").concat(this.director.name, ",\nWRITER: ").concat(this.writer.name, ",\nLANGUAGE: ").concat(this.language, ",\nPLATAFORMA: ").concat(this.plataforma, ",\nIS MCU: ").concat(this.isMCU, ",\nMAIN CHARACTER NAME: ").concat(this.mainCharacterName, ",\nPRODUCER: ").concat(this.producer.name, ",\nDISTRIBUTOR: ").concat(this.distributor));
    };
    return Movie;
}());
exports.Movie = Movie;
