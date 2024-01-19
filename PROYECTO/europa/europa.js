import * as x from '../ciudades.js';
let datos = x.ciudades;
// console.log(datos);
let ciudadesEuropa = datos.filter(ciudad => ciudad.continent === "2");
// console.log(ciudadesEuropa);

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
for (let i = 0; i < ciudadesEuropa.length; i++) {
    let ciudad = ciudadesEuropa[i];
    let elementoPadreId = "";

    switch (i) {
        case 0:
            elementoPadreId = "LN";
            break;
        case 1:
            elementoPadreId = "RM";
            break;
        case 2:
            elementoPadreId = "BL";
            break;
        case 3:
            elementoPadreId = "AM";
            break;
        case 4:
            elementoPadreId = "BCN";
            break;
    }

    crearElementoCiudad(ciudad, elementoPadreId);
}