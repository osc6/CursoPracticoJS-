// CUADRADO

function calcularParametroCuadrado () {
    const inputCuadrado = document.getElementById("InputCuadrado");
    const value = inputCuadrado.value;
    const parametro = parametroCuadrado (value);
    alert(parametro);
}

function calcularAreaCuadrado () {
    const inputCuadrado = document.getElementById("InputCuadrado");
    const value = inputCuadrado.value;
    const area = areaCuadrado (value);
    alert(area);
}


function parametroCuadrado (lado) {
    return lado * 4
}

function areaCuadrado (lado) {
    return lado ** 2
}

// TRIANGULO

function calcularParametroTriangulo () {
    const inputTriangulo1 = document.getElementById("InputTriangulo1");
    const inputTriangulo2 = document.getElementById("InputTriangulo2");
    const inputTriangulo3 = document.getElementById("InputTriangulo3");
    const value1 = parseInt(inputTriangulo1.value);
    const value2 = parseInt(inputTriangulo2.value);
    const value3 = parseInt(inputTriangulo3.value);
    const parametro = parametroTriangulo (value1, value2, value3);
    alert(parametro);
}

function calcularAreaTriangulo () {
    const inputTriangulo1 = document.getElementById("InputTriangulo1");
    const inputTriangulo2 = document.getElementById("InputTriangulo2");
    const inputTriangulo3 = document.getElementById("InputTriangulo3");
    const value1 = parseInt(inputTriangulo1.value);
    const value2 = parseInt(inputTriangulo2.value);
    const value3 = parseInt(inputTriangulo3.value);
    const area = areaTriangulo (value1, value2, value3);
    alert(area);
}


function parametroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base
}

const pi = Math.PI
function areaTriangulo (lado1, lado2, base) {
    return (lado1 * lado2 * base)/2
}


// CIRCULO

function calcularParametroCirculo () {
    const inputCirculo = document.getElementById("InputCirculo");
    const value = inputCirculo.value;
    const parametro = parametroCirculo (value);
    alert(parametro);
}

function calcularAreaCirculo () {
    const inputCirculo = document.getElementById("InputCirculo");
    const value = inputCirculo.value;
    const area = areaCirculo (value);
    alert(area);
}


function parametroCirculo (radio) {
    return (radio * 2) * pi
}

function areaCirculo (radio) {
    return (radio ** 2) * pi
}


// ISOCELES



function calcularParametroIsoceles () {
    const inputIsoceles1 = document.getElementById("InputIsoceles1");
    const inputIsoceles2 = document.getElementById("InputIsoceles2");
    const inputIsoceles3 = document.getElementById("InputIsoceles3");
    const value1 = parseInt(inputIsoceles1.value);
    const value2 = parseInt(inputIsoceles2.value);
    const value3 = parseInt(inputIsoceles3.value);
    if (value1 === value2) {
        const parametro = parametroIsoceles (value1, value2, value3);
        alert(parametro);
    }
    else {
        alert("los lados no son iguales");
    }
    
}

function calcularAreaIsoceles () {
    const inputIsoceles1 = document.getElementById("InputIsoceles1");
    const inputIsoceles2 = document.getElementById("InputIsoceles2");
    const inputIsoceles3 = document.getElementById("InputIsoceles3");
    const value1 = parseInt(inputIsoceles1.value);
    const value2 = parseInt(inputIsoceles2.value);
    const value3 = parseInt(inputIsoceles3.value);
    if (value1 === value2) {
        const parametro = areaIsoceles (value1, value2, value3);
        alert(parametro);
    }
    else {
        alert("los lados no son iguales");
    }
    
}

function calcularAlturaIsoceles () {
    const inputIsoceles1 = document.getElementById("InputIsoceles1");
    const inputIsoceles2 = document.getElementById("InputIsoceles2");
    const inputIsoceles3 = document.getElementById("InputIsoceles3");
    const value1 = parseInt(inputIsoceles1.value);
    const value2 = parseInt(inputIsoceles2.value);
    const value3 = parseInt(inputIsoceles3.value);
    const parametro = alturaIsoceles (value1, value2, value3);    
}


function parametroIsoceles (lado1, lado2, base) {
    return lado1 + lado2 + base
}


function areaIsoceles (lado1, lado2, base) {
    return (lado1 * lado2 * base)/2
}

const raiz = Math.sqrt

function alturaIsoceles (lado1, lado2, base) {
    if (lado1 === lado2) {
        let resultado = raiz(((lado1 * lado2) - ((base/2) * (base/2))));
        alert(resultado);
    }
    else {
        alert("Los lados 1 y 2 no son iguales")
    }
}
