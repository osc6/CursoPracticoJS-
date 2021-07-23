let lista1 = [
    1,
    2,
    3,
    5,
    9,
    10,
];

const mitad = parseInt(lista1.length / 2);


function calcularPromedio (lista) {
    const sumaLista = lista.reduce(
        function (valorActual = 0, nuevoValor) {
            return nuevoValor + valorActual;
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}

let mediana;
if (esPar(lista1.length)) {
    const elemento1 = lista1[mitad];
    const elemento2 = lista1[mitad - 1];
    const promedioElemento1y2 = calcularPromedio([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2
} else {
    mediana = lista1[mitad];
}

function esPar (numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}