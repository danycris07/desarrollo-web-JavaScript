let notas = [7, 8, 6, 9, 10];

let suma = 0;

for (let i = 0; i < notas.length; i++) {

    suma = suma + notas[i];

}

let promedio = suma / notas.length;

console.log("El promedio es: " + promedio);

if (promedio >= 6) {

    console.log("El alumno aprobó");

} else {

    console.log("El alumno desaprobó");

}