const notas = [
    {curso: "Matematicas",
    nota: 3,
    creditos: 5},
    {curso: "Fisica",
    nota: 3,
    creditos: 3},
    {curso: "Espanol",
    nota: 5,
    creditos: 2},
    {curso: "Ingles",
    nota: 4,
    creditos: 3},
];


const notesWithCredit = notas.map(function (noteObject) {
    return noteObject.nota * noteObject.creditos;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const credits = notas.map(function (noteObject) {
    return noteObject.creditos;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);


const resultado = sumOfNotesWithCredit / sumOfCredits

console.log(resultado);