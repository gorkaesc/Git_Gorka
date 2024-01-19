export const ciudades = [
    {
      "name": "Nueva York",
      "continent": "1",
      "details": {
        "days": 7,
        "stops": ["Londres", "París"],
        "budget": 2000
      }
    },
    {
      "name": "Los Ángeles",
      "continent": "1",
      "details": {
        "days": 5,
        "stops": ["San Francisco"],
        "budget": 1800
      }
    },
    {
      "name": "Río de Janeiro",
      "continent": "1",
      "details": {
        "days": 6,
        "stops": ["Buenos Aires", "Lima"],
        "budget": 2200
      }
    },
    {
      "name": "Toronto",
      "continent": "1",
      "details": {
        "days": 8,
        "stops": ["Montreal", "Vancouver", "Nueva York"],
        "budget": 2500
      }
    },
    {
      "name": "Ciudad de México",
      "continent": "1",
      "details": {
        "days": 7,
        "stops": [],
        "budget": 2100
      }
    },
    {
      "name": "Londres",
      "continent": "2",
      "details": {
        "days": 5,
        "stops": ["París", "Ámsterdam"],
        "budget": 1600
      }
    },
    {
      "name": "Roma",
      "continent": "2",
      "details": {
        "days": 6,
        "stops": ["Barcelona"],
        "budget": 1900
      }
    },
    {
      "name": "Berlín",
      "continent": "2",
      "details": {
        "days": 7,
        "stops": ["Praga", "Viena"],
        "budget": 2200
      }
    },
    {
      "name": "Ámsterdam",
      "continent": "2",
      "details": {
        "days": 4,
        "stops": ["Bruselas", "Hamburgo"],
        "budget": 1500
      }
    },
    {
      "name": "Barcelona",
      "continent": "2",
      "details": {
        "days": 5,
        "stops": ["Madrid", "Niza"],
        "budget": 1800
      }
    },
    {
      "name": "Tokio",
      "continent": "3",
      "details": {
        "days": 10,
        "stops": ["Seúl", "Pekín"],
        "budget": 3000
      }
    },
    {
      "name": "Seúl",
      "continent": "3",
      "details": {
        "days": 7,
        "stops": ["Tokio", "Shanghái"],
        "budget": 2500
      }
    },
    {
      "name": "Pekín",
      "continent": "3",
      "details": {
        "days": 8,
        "stops": ["Shanghái", "Hong Kong"],
        "budget": 2800
      }
    },
    {
      "name": "Singapur",
      "continent": "3",
      "details": {
        "days": 6,
        "stops": ["Kuala Lumpur"],
        "budget": 2000
      }
    },
    {
      "name": "Mumbai",
      "continent": "3",
      "details": {
        "days": 7,
        "stops": ["Delhi", "Goa"],
        "budget": 2300
      }
    },
    {
      "name": "El Cairo",
      "continent": "4",
      "details": {
        "days": 8,
        "stops": ["Atenas", "Estambul"],
        "budget": 2500
      }
    },
    {
      "name": "Ciudad del Cabo",
      "continent": "4",
      "details": {
        "days": 6,
        "stops": ["Johannesburgo"],
        "budget": 2000
      }
    },
    {
      "name": "Nairobi",
      "continent": "4",
      "details": {
        "days": 7,
        "stops": ["Mombasa", "Zanzíbar"],
        "budget": 2200
      }
    },
    {
      "name": "Casablanca",
      "continent": "4",
      "details": {
        "days": 5,
        "stops": ["Marrakech", "Fez"],
        "budget": 1800
      }
    },
    {
      "name": "Lagos",
      "continent": "4",
      "details": {
        "days": 7,
        "stops": ["Abiyán", "Accra"],
        "budget": 2100
      }
    },
    {
      "name": "Sídney",
      "continent": "5",
      "details": {
        "days": 6,
        "stops": ["Auckland", "Melbourne"],
        "budget": 1800
      }
    },
    {
      "name": "Auckland",
      "continent": "5",
      "details": {
        "days": 5,
        "stops": ["Queenstown", "Wellington"],
        "budget": 1600
      }
    },
    {
      "name": "Tokelau",
      "continent": "5",
      "details": {
        "days": 8,
        "stops": ["Samoa", "Fiyi"],
        "budget": 2200
      }
    },
    {
      "name": "Port Moresby",
      "continent": "5",
      "details": {
        "days": 7,
        "stops": ["Honiara", "Noumea"],
        "budget": 2000
      }
    },
    {
      "name": "Papeete",
      "continent": "5",
      "details": {
        "days": 4,
        "stops": ["Bora Bora", "Moorea"],
        "budget": 1500
      }
    }
  ]

  let america = document.getElementById("america");
  let africa = document.getElementById("africa");
  let asia = document.getElementById("asia");
  let europa = document.getElementById("europa");
  let oceania = document.getElementById("oceania");


  //evento click para que al darle a la imagen de america, me redirija a una web donde me aparecen las ofertas del continente americano
    if (america) {
      america.addEventListener("click",function () {
    // let ciudadesAmerica = ciudades.filter(ciudad => ciudad.continent === "1");
    // nos permitirá redirigir a otra página cuando se haga click en la imagen
    window.location.href = "america/america.html";
    console.log(ciudadesAmerica);
      });
    }


  //evento click para que al darle a la imagen de áfrica, me redirija a una web donde me aparecen las ofertas del continente africano
    if (europa) {
      europa.addEventListener("click",function () {
    // let ciudadesEuropa = ciudades.filter(ciudad => ciudad.continent === "2");
    // nos permitirá redirigir a otra página cuando se haga click en la imagen
    window.location.href = "/europa/europa.html";
    console.log(ciudadesEuropa);
  });
    }

    if (asia) {
      asia.addEventListener("click",function () {
    // let ciudadesAsia = ciudades.filter(ciudad => ciudad.continent === "3");
    // nos permitirá redirigir a otra página cuando se haga click en la imagen
    window.location.href = "/asia/asia.html";
    console.log(ciudadesAsia);
      });
    }
  
    if (africa) {
      africa.addEventListener("click",function () {
    // let ciudadesAfrica = ciudades.filter(ciudad => ciudad.continent === "4");
    // nos permitirá redirigir a otra página cuando se haga click en la imagen
    window.location.href = "africa/africa.html";
    console.log(ciudadesAfrica);
      });
    }

    if (oceania) {
      oceania.addEventListener("click",function () {
    // let ciudadesOceania = ciudades.filter(ciudad => ciudad.continent === "5");
    // nos permitirá redirigir a otra página cuando se haga click en la imagen
    window.location.href = "oceania/oceania.html";
    console.log(ciudadesOceania);
      });
    }
  






// export function redireccionarAContinente(continent, page) {
//     const ciudadesContinente = ciudades.filter(ciudad => ciudad.continent === continent);
//     window.location.href = page;
//     console.log(ciudadesContinente);
//   }
  
//   if (america) {
//     america.addEventListener("click",function () {
//       redireccionarAContinente("1", "america/america.html");
//     });
//   }
  
//   if (europa) {
//     europa.addEventListener("click",function () {
//       redireccionarAContinente("2", "/europa/europa.html");
//     });
//   }
  
//   if (asia) {
//     asia.addEventListener("click",function () {
//       redireccionarAContinente("3", "/asia/asia.html");
//     });
//   }
  
//   if (africa) {
//     africa.addEventListener("click",function () {
//       redireccionarAContinente("4", "africa/africa.html");
//     });
//   }
  
//   if (oceania) {
//     oceania.addEventListener("click",function () {
//       redireccionarAContinente("5", "oceania/oceania.html");
//     });
//   }