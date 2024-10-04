import { Address, Estudiante } from "./tipos";

export default function mostrarEstudiante(estudiante :Estudiante) {
    console.log(`nombre :${estudiante .nombre}`); 
    console.log(`apellido :${estudiante .apellidos}`);
    console.log(`edad :${estudiante .edad}`);
    console.log("Direcciones")
    estudiante.addresses?.forEach(function(direccion:Address) {
        console.log(`ciudad :${direccion.ciudad}`)
        console.log(`ciudad :${direccion.calle}`)
        console.log(`ciudad :${direccion.pais}`)
        console.log("----------------------")
    })
}



