
const profesionales = [];
const profesional1 = new Professional('Scarlett Johansson', 45, 65, 1.65, false, 'Estadounidense', 23, 'Actriz', 'https://pics.filmaffinity.com/scarlett_johansson-036969395704449-nm_200.jpg');
const profesional2 = new Professional('Megan Fox', 34, 52, 1.63, false, 'Estadounidense', 23, 'Actriz', 'https://hips.hearstapps.com/hmg-prod/images/megan-fox-drogas-ayahuasca-experiencia-1626191416.jpg');
const profesional3 = new Professional('Angelina Jolie', 45, 55, 1.69, false, 'Estadounidense', 23, 'Actriz', 'https://3.bp.blogspot.com/-w43jb-p1Koc/U3MvTPC6GWI/AAAAAAAAAuQ/tiZChGrZH-Q/s1600/tendencia.jpg');
profesionales.push(profesional1, profesional2, profesional3);
function pintarArrayProfesionales() {
    const pintarActores = document.getElementById('actores');
    if (pintarActores) {
        profesionales.forEach((profesional) => {
            pintarActores.innerHTML += `
        <div class="actor">
          <img src="${profesional.photo}" alt="imagen de ${profesional.name}">
          <div class="datos">
            <h1>${profesional.name}</h1>
            <h2>${profesional.age} años</h2>
            <h2>${profesional.weight}kg</h2>
            <h2>Estatura: ${profesional.height}m</h2>
            <h2>${profesional.isRetired ? 'Retirado' : 'Esta en activo'}</h2>
            <h2>${profesional.profession}</h2>
            <h2>${profesional.nationality}</h2>
            <h2>${profesional.oscarsNumber} Oscars</h2>
          </div>
        </div>`;
        });
    }
    else {
        console.error('El elemento con id "actores" no se encontró en el DOM.');
    }
}
pintarArrayProfesionales();
