"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mostrarEstudiante;
function mostrarEstudiante(estudiante) {
    var _a;
    console.log(`nombre :${estudiante.nombre}`);
    console.log(`apellido :${estudiante.apellidos}`);
    console.log(`edad :${estudiante.edad}`);
    console.log("Direcciones");
    (_a = estudiante.addresses) === null || _a === void 0 ? void 0 : _a.forEach(function (direccion) {
        console.log(`ciudad :${direccion.ciudad}`);
        console.log(`ciudad :${direccion.calle}`);
        console.log(`ciudad :${direccion.pais}`);
        console.log("----------------------");
    });
}
