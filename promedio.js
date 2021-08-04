let listaUsario = [];

function datosUsuario () {
    let valorNumeroDatos =  numeroDatos ();

    //trae los datos a js y los agrega a la
    for (let i = 1; i < (valorNumeroDatos + 1); i++){
        let id = i;
        let dato = inputDatoUsiario = document.getElementById(id);
        let valueDato = parseInt(dato.value);

        let aggElemento = listaUsario.push(valueDato);
    }
}


function calcularMediaAritmetica () {
    //borrar datos del array
    listaUsario = [];

    datosUsuario ();

    const sumaLista = listaUsario.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    //recibe una funcion y lo que permite es sumar o cualquie operacion cada uno de los elementos del array

    const promedioLista = sumaLista / listaUsario.length;

    const resultado = document.getElementById("resultado");
    resultado.innerText = "El promedio es: " + promedioLista;
}

function numeroDatos () {
    //saber cuantos input son
    const inputNumeroDatos = document.getElementById("numeroDatos");
    const value = parseInt(inputNumeroDatos.value);
    return value;
}

function aggInput () {
    //eliminar todos los elementos hijos del padre;
    var elemento = document.getElementById("aggInputs");
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    };
    //quitar respuesta
    const resultado = document.getElementById("resultado");
    resultado.innerText = "";

    //colocar los imput
    let valorNumeroDatos =  numeroDatos ();

   for(let i = 1; i < (valorNumeroDatos + 1); i++ ) {
        
        var direccion = '<label for="' + i + '">dato: </label> <input id="' + i + '"type="number"></input>';
        let input1 = document.getElementById("aggInputs");
        input1.insertAdjacentHTML('beforeend', direccion);
    }
    let button = document.getElementById("aggInputs");
    button.insertAdjacentHTML('beforeend', '<button type="button"onclick="calcularMediaAritmetica()">Calcular Media</button> <br> <button type="button"onclick="calcularMediana()">Calcular Mediana</button> <br> <button type="button"onclick="calcularModa()">Calcular Moda</button>');
}


// MEDIANA

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
    listaUsario = [];
    datosUsuario ();

    const listaOrdenada = listaUsario.sort(function(a,b){
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
    // return mediana
    const resultado = document.getElementById("resultado");
    resultado.innerText = "La mediana es: " + mediana;
}
