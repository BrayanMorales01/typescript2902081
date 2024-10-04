"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mensaje = "hola";
mensaje = "true".toUpperCase();
console.log(mensaje);
let identificacion = 575757;
identificacion = "35344R44";
console.log(identificacion);
// Definir variables del tipo dado
const estudiante1 = {
    nombre: "Brayan",
    apellidos: "Morales",
    edad: 18,
    addresses: [
        {
            calle: "102",
            numero: 45,
            sector: "Zona 10",
            ciudad: "Bogota",
            pais: "Colombia"
        },
        {
            calle: "117",
            numero: 45,
            sector: "Zona 15",
            ciudad: "Ciudad de Mexico",
            pais: "Mexico"
        }
    ]
};
const estudiante2 = {
    nombre: "Karen",
    apellidos: "Morales",
    edad: 17, // Agregamos la edad para el segundo estudiante
    addresses: [
        {
            calle: "102",
            numero: 4,
            sector: "Zona 15",
            ciudad: "Bogota",
            pais: "Colombia"
        },
        {
            calle: "102",
            numero: 45,
            sector: "Zona 15",
            ciudad: "Bogota",
            pais: "Colombia"
        },
        {
            calle: "10",
            numero: 5,
            sector: "Zona 15",
            ciudad: "Bogota",
            pais: "Colombia"
        }
    ]
};
// Llamar al método "mostrarEstudiante" para mostrar info
//mostrarEstudiante(estudiante1);
let arreglosEstudiante = [];
arreglosEstudiante.push(2);
arreglosEstudiante.push("Jorge");
arreglosEstudiante.push("Daza");
arreglosEstudiante.push(3);
const addEstudiante = (e) => {
    arreglosEstudiante.push(e);
};
addEstudiante(estudiante1);
addEstudiante(estudiante2);
//console.log(arreglosEstudiante);
const mostrarSoloEstudiantes = (arreglo) => {
    arreglo.forEach(element => {
        if (typeof element === 'object' && 'nombre' in element && 'apellidos' in element) {
            console.log(`Nombre: ${element.nombre}, Apellidos: ${element.apellidos}, Edad: ${element.edad}`);
        }
    });
};
// Mostrar nuevamente solo los estudiantes después de las eliminaciones
mostrarSoloEstudiantes(arreglosEstudiante);
