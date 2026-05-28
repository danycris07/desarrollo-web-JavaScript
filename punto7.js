let estudiante = {
    nombre: "Juan",
    apellido: "Pérez",
    nota: 8
};

console.log(
    estudiante.nombre + " " +
    estudiante.apellido + " tiene nota " +
    estudiante.nota + " y " +
    (estudiante.nota >= 6 ? "aprobó" : "desaprobó")
);