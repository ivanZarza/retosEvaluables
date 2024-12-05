"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.printProfessional = function () {
        console.log("NAME: ".concat(this.name, ",\nAGE: ").concat(this.age, ",\nWEIGHT: ").concat(this.weight, ",\nHEIGHT: ").concat(this.height, ",\nIS RETIRED: ").concat(this.isRetired, ",\nNATIONALITY: ").concat(this.nationality, ",\nOSCARS NUMBER: ").concat(this.oscarsNumber, ",\nPROFESSION: ").concat(this.profession));
    };
    return Professional;
}());
exports.Professional = Professional;
