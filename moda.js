/* const lista1 = [
    1,
    2,
    3,
    4,
    1,
    3,
    3,
    1,
    3,

]; */






function calcularModa (array) {
    const lista1 = array
    const lista1Count = {};
    lista1.map (
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );
    
    
    const lista1Array = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    const moda = lista1Array[lista1Array.length - 1];
    return moda
}