import * as x from '../ciudades.js';
let datos = x.ciudades;
// console.log(datos);
let ciudadesOceania = datos.filter(ciudad => ciudad.continent === "5");
// console.log(ciudadesOceania);

// ----------------------------
function crearElementoCiudad(ciudad, elementoPadreId) {
    let elementoPadre = document.getElementById(elementoPadreId);

    let nombreCiudad = document.createElement("h3");
    nombreCiudad.textContent = ciudad.name;

    let detallesCiudad = document.createElement("p");
    detallesCiudad.textContent = "Días: " + ciudad.details.days;

    let paradasCiudad = document.createElement("p");
    paradasCiudad.textContent = "Paradas: " + ciudad.details.stops.join(", ");

    let presupuestoCiudad = document.createElement("p");
    presupuestoCiudad.textContent = "Presupuesto: " + ciudad.details.budget;

    elementoPadre.appendChild(nombreCiudad);
    elementoPadre.appendChild(detallesCiudad);
    elementoPadre.appendChild(paradasCiudad);
    elementoPadre.appendChild(presupuestoCiudad);
}

// Iterar sobre las ciudades y llamar a la función para crear elementos
for (let i = 0; i < ciudadesOceania.length; i++) {
    let ciudad = ciudadesOceania[i];
    let elementoPadreId = "";

    switch (i) {
        case 0:
            elementoPadreId = "SN";
            break;
        case 1:
            elementoPadreId = "AC";
            break;
        case 2:
            elementoPadreId = "TL";
            break;
        case 3:
            elementoPadreId = "PM";
            break;
        case 4:
            elementoPadreId = "PP";
            break;
    }

    crearElementoCiudad(ciudad, elementoPadreId);
}