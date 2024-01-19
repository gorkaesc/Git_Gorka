import * as x from '../ciudades.js';
let datos = x.ciudades;
// console.log(datos);
let ciudadesAfrica = datos.filter(ciudad => ciudad.continent === "4");
// console.log(ciudadesAfrica);


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
for (let i = 0; i < ciudadesAfrica.length; i++) {
    let ciudad = ciudadesAfrica[i];
    let elementoPadreId = "";

    switch (i) {
        case 0:
            elementoPadreId = "EC";
            break;
        case 1:
            elementoPadreId = "CC";
            break;
        case 2:
            elementoPadreId = "NB";
            break;
        case 3:
            elementoPadreId = "CB";
            break;
        case 4:
            elementoPadreId = "LG";
            break;
    }

    crearElementoCiudad(ciudad, elementoPadreId);
}













// // ----------------------------
// let ciudad1 = ciudadesAfrica[0];
// // console.log(ciudad1);
// let EC = document.getElementById("EC");
// let nombreCiudadEC = document.createElement("h3");
// nombreCiudadEC.textContent = ciudad1.name;

// let detallesCiudadEC = document.createElement("p");
// detallesCiudadEC.textContent = "Días: " + ciudad1.details.days;

// let paradasEC = document.createElement("p");
// paradasEC.textContent = "Paradas: " + ciudad1.details.stops.join(", ");

// let presupuestoEC = document.createElement("p");
// presupuestoEC.textContent = "Presupuesto: " + ciudad1.details.budget;

// EC.appendChild(nombreCiudadEC);
// EC.appendChild(detallesCiudadEC);
// EC.appendChild(paradasEC);
// EC.appendChild(presupuestoEC);
// // -----------------------------------
// let ciudad2 = ciudadesAfrica[1];
// // console.log(ciudad2);
// let CC = document.getElementById("CC");
// let nombreCiudadCC = document.createElement("h3");
// nombreCiudadCC.textContent = ciudad2.name;

// let detallesCiudadCC = document.createElement("p");
// detallesCiudadCC.textContent = "Días: " + ciudad2.details.days;

// let paradasCC = document.createElement("p");
// paradasCC.textContent = "Paradas: " + ciudad2.details.stops.join(", ");

// let presupuestoCC = document.createElement("p");
// presupuestoCC.textContent = "Presupuesto: " + ciudad2.details.budget;

// CC.appendChild(nombreCiudadCC);
// CC.appendChild(detallesCiudadCC);
// CC.appendChild(paradasCC);
// CC.appendChild(presupuestoCC);
// // ---------------------------------
// let ciudad3 = ciudadesAfrica[2];
// // console.log(ciudad3);
// let NB = document.getElementById("NB");
// let nombreCiudadNB = document.createElement("h3");
// nombreCiudadNB.textContent = ciudad3.name;

// let detallesCiudadNB = document.createElement("p");
// detallesCiudadNB.textContent = "Días: " + ciudad3.details.days;

// let paradasNB = document.createElement("p");
// paradasNB.textContent = "Paradas: " + ciudad3.details.stops.join(", ");

// let presupuestoNB = document.createElement("p");
// presupuestoNB.textContent = "Presupuesto: " + ciudad3.details.budget;

// NB.appendChild(nombreCiudadNB);
// NB.appendChild(detallesCiudadNB);
// NB.appendChild(paradasNB);
// NB.appendChild(presupuestoNB);
// // -------------------------------
// let ciudad4 = ciudadesAfrica[3];
// // console.log(ciudad4);
// let CB = document.getElementById("CB");
// let nombreCiudadCB = document.createElement("h3");
// nombreCiudadCB.textContent = ciudad4.name;

// let detallesCiudadCB = document.createElement("p");
// detallesCiudadCB.textContent = "Días: " + ciudad4.details.days;

// let paradasCB = document.createElement("p");
// paradasCB.textContent = "Paradas: " + ciudad4.details.stops.join(", ");

// let presupuestoCB = document.createElement("p");
// presupuestoCB.textContent = "Presupuesto: " + ciudad4.details.budget;

// CB.appendChild(nombreCiudadCB);
// CB.appendChild(detallesCiudadCB);
// CB.appendChild(paradasCB);
// CB.appendChild(presupuestoCB);

// // ---------------------------
// let ciudad5 = ciudadesAfrica[4];
// // console.log(ciudad5);
// let LG = document.getElementById("LG");
// let nombreCiudadLG = document.createElement("h3");
// nombreCiudadLG.textContent = ciudad5.name;

// let detallesCiudadLG = document.createElement("p");
// detallesCiudadLG.textContent = "Días: " + ciudad5.details.days;

// let paradasLG = document.createElement("p");
// paradasLG.textContent = "Paradas: " + ciudad5.details.stops.join(", ");

// let presupuestoLG = document.createElement("p");
// presupuestoLG.textContent = "Presupuesto: " + ciudad5.details.budget;

// LG.appendChild(nombreCiudadLG);
// LG.appendChild(detallesCiudadLG);
// LG.appendChild(paradasLG);
// LG.appendChild(presupuestoLG);