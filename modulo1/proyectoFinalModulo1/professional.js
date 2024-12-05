class Professional {
    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    printProfessional() {
        console.log(`NAME: ${this.name},\nAGE: ${this.age},\nWEIGHT: ${this.weight},\nHEIGHT: ${this.height},\nIS RETIRED: ${this.isRetired},\nNATIONALITY: ${this.nationality},\nOSCARS NUMBER: ${this.oscarsNumber},\nPROFESSION: ${this.profession}`);
    }
}
export { Professional };
