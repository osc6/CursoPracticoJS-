/* let listaSort = [
    10,
    5,
    3,
    2,
    9,
    1,
];

function compareNumbers(a, b) {
    return a - b;
  }

lista1 = listaSort.sort(compareNumbers);
 */



function calcularPromedio (lista) {
    const sumaLista = lista.reduce(
        function (valorActual = 0, nuevoValor) {
            return nuevoValor + valorActual;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}




function calcularMediana(lista1) {
    const listaOrdenada = lista1.sort(function(a,b){
        return a - b;
    });
    const mitad = parseInt(listaOrdenada.length / 2);
    
    function esPar (numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let mediana;    
    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitad];
        const elemento2 = listaOrdenada[mitad - 1];
        const promedioElemento1y2 = calcularPromedio([
            elemento1,
            elemento2
        ]);

        mediana = promedioElemento1y2
    } else {
        mediana = listaOrdenada[mitad];
    }
    return mediana
}

console.log(calcularMediana([10,
    7,
    3,
    2,
    9,
    1,]));