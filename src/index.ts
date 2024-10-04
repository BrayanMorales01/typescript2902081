import mostrarEstudiante from "./mostrarEstudiante";
import { Address, Estudiante } from "./tipos";

let mensaje: string = "hola";
mensaje = "true".toUpperCase();
console.log(mensaje);

let identificacion: string | number = 575757;
identificacion = "35344R44";
console.log(identificacion);

// Definir variables del tipo dado
const estudiante1: Estudiante = {
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

const estudiante2: Estudiante = {
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

let arreglosEstudiante: (number | string | Estudiante)[] = [];
arreglosEstudiante.push(2);
arreglosEstudiante.push("Jorge");
arreglosEstudiante.push("Daza");
arreglosEstudiante.push(3); 

const addEstudiante = (e: Estudiante) => {
    arreglosEstudiante.push(e);
}

addEstudiante(estudiante1);
addEstudiante(estudiante2); 

//console.log(arreglosEstudiante);

const mostrarSoloEstudiantes=(arreglo: (number | string | Estudiante)[])=> {
    arreglo.forEach(element => {
        if (typeof element === 'object' && 'nombre' in element && 'apellidos' in element) {
            console.log(`Nombre: ${element.nombre}, Apellidos: ${element.apellidos}, Edad: ${element.edad}`);
        }
    });
}



// Mostrar nuevamente solo los estudiantes después de las eliminaciones
mostrarSoloEstudiantes(arreglosEstudiante);