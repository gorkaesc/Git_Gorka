import * as x from '../ciudades.js';
let datos = x.ciudades;
// console.log(datos);
let ciudadesAmerica = datos.filter(ciudad => ciudad.continent === "1");
// console.log(ciudadesAmerica);


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
for (let i = 0; i < ciudadesAmerica.length; i++) {
    let ciudad = ciudadesAmerica[i];
    let elementoPadreId = "";

    switch (i) {
        case 0:
            elementoPadreId = "NY";
            break;
        case 1:
            elementoPadreId = "LA";
            break;
        case 2:
            elementoPadreId = "RJ";
            break;
        case 3:
            elementoPadreId = "Toronto";
            break;
        case 4:
            elementoPadreId = "CM";
            break;
    }

    crearElementoCiudad(ciudad, elementoPadreId);
}














// // --------------------------------
// let ciudad1 = ciudadesAmerica[0];
// // console.log(ciudad1);
// let NY = document.getElementById("NY");
// let nombreCiudadNY = document.createElement("h3");
// nombreCiudadNY.textContent = ciudad1.name;

// let detallesCiudadNY = document.createElement("p");
// detallesCiudadNY.textContent = "Días: " + ciudad1.details.days;

// let paradasNY = document.createElement("p");
// paradasNY.textContent = "Paradas: " + ciudad1.details.stops.join(", ");

// let presupuestoNY = document.createElement("p");
// presupuestoNY.textContent = "Presupuesto: " + ciudad1.details.budget;

// NY.appendChild(nombreCiudadNY);
// NY.appendChild(detallesCiudadNY);
// NY.appendChild(paradasNY);
// NY.appendChild(presupuestoNY);
// // -----------------------------------
// let ciudad2 = ciudadesAmerica[1];
// // console.log(ciudad2);
// let LA = document.getElementById("LA");
// let nombreCiudadLA = document.createElement("h3");
// nombreCiudadLA.textContent = ciudad2.name;

// let detallesCiudadLA = document.createElement("p");
// detallesCiudadLA.textContent = "Días: " + ciudad2.details.days;

// let paradasLA = document.createElement("p");
// paradasLA.textContent = "Paradas: " + ciudad2.details.stops.join(", ");

// let presupuestoLA = document.createElement("p");
// presupuestoLA.textContent = "Presupuesto: " + ciudad2.details.budget;

// LA.appendChild(nombreCiudadLA);
// LA.appendChild(detallesCiudadLA);
// LA.appendChild(paradasLA);
// LA.appendChild(presupuestoLA);
// // ---------------------------------
// let ciudad3 = ciudadesAmerica[2];
// // console.log(ciudad3);
// let RJ = document.getElementById("RJ");
// let nombreCiudadRJ = document.createElement("h3");
// nombreCiudadRJ.textContent = ciudad3.name;

// let detallesCiudadRJ = document.createElement("p");
// detallesCiudadRJ.textContent = "Días: " + ciudad3.details.days;

// let paradasRJ = document.createElement("p");
// paradasRJ.textContent = "Paradas: " + ciudad3.details.stops.join(", ");

// let presupuestoRJ = document.createElement("p");
// presupuestoRJ.textContent = "Presupuesto: " + ciudad3.details.budget;

// RJ.appendChild(nombreCiudadRJ);
// RJ.appendChild(detallesCiudadRJ);
// RJ.appendChild(paradasRJ);
// RJ.appendChild(presupuestoRJ);
// // -------------------------------
// let ciudad4 = ciudadesAmerica[3];
// // console.log(ciudad4);
// let T = document.getElementById("Toronto");
// let nombreCiudadT = document.createElement("h3");
// nombreCiudadT.textContent = ciudad4.name;

// let detallesCiudadT = document.createElement("p");
// detallesCiudadT.textContent = "Días: " + ciudad4.details.days;

// let paradasT = document.createElement("p");
// paradasT.textContent = "Paradas: " + ciudad4.details.stops.join(", ");

// let presupuestoT = document.createElement("p");
// presupuestoT.textContent = "Presupuesto: " + ciudad4.details.budget;

// T.appendChild(nombreCiudadT);
// T.appendChild(detallesCiudadT);
// T.appendChild(paradasT);
// T.appendChild(presupuestoT);

// // ---------------------------
// let ciudad5 = ciudadesAmerica[4];
// // console.log(ciudad5);
// let CM = document.getElementById("CM");
// let nombreCiudadCM = document.createElement("h3");
// nombreCiudadCM.textContent = ciudad5.name;

// let detallesCiudadCM = document.createElement("p");
// detallesCiudadCM.textContent = "Días: " + ciudad5.details.days;

// let paradasCM = document.createElement("p");
// paradasCM.textContent = "Paradas: " + ciudad5.details.stops.join(", ");

// let presupuestoCM = document.createElement("p");
// presupuestoCM.textContent = "Presupuesto: " + ciudad5.details.budget;

// CM.appendChild(nombreCiudadCM);
// CM.appendChild(detallesCiudadCM);
// CM.appendChild(paradasCM);
// CM.appendChild(presupuestoCM);
