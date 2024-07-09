// Array de puntuaciones
let puntuaciones = [85, 90, 78, 92, 88, 76, 95, 89, 81];

// Función para calcular el promedio
function calcularPromedio(puntuaciones) {
    // Sumar todas las puntuaciones
    let suma = 0;
    for (let i = 0; i < puntuaciones.length; i++) {
        suma += puntuaciones[i];
    }

    // Calcular el promedio
    let promedio = suma / puntuaciones.length;

    // Devolver el promedio
    return promedio;
}

// Llamar a la función y mostrar el resultado
let promedioClase = calcularPromedio(puntuaciones);
console.log("El promedio de la clase es: " + promedioClase);
