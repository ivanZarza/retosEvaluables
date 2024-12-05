"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imdb = void 0;
var fs_1 = require("fs");
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.printImdb = function () {
        this.peliculas.forEach(function (pelicula) {
            console.log("".concat(pelicula.printMovie(), "\n"));
        });
    };
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var toJson = JSON.stringify(this.peliculas);
        (0, fs_1.writeFileSync)("".concat(nombreFichero, ".json"), toJson, 'utf-8');
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var recuperarImbd = JSON.parse((0, fs_1.readFileSync)("".concat(nombreFichero, ".json"), 'utf-8'));
        return new Imdb(recuperarImbd);
    };
    return Imdb;
}());
exports.Imdb = Imdb;
