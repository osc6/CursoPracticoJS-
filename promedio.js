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

function calcularMediana () {
    //borrar datos del array
    listaUsario = [];
    const mitadLista2 = parseInt(listaUsario.length /2);

    datosUsuario ();
    mediana(mitadLista2);
}

function esPar (lista2) {
    if (lista2 % 2 ===0){
        return true;
    }
    else {
        return false;
    }
}



function mediana (mitadLista2) {
    if (esPar(listaUsario.lenght)){
        const elemento1 = listaUsario[mitadLista2];
        const elemento2 = listaUsario[mitadLista2 - 1];
        const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);
        mediana1 = promedioElemento1y2;
        return promedioElemento1y2;
    }
    else {
        mediana2 = listaUsario[mitadLista2]
    }
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El promedio es: " + promedioElemento1y2;
}


function calcularPromedio () {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista = sumaLista /listaUsario
    return promedioLista
}