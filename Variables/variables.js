// Valores primitivos
var nombre = "jorge"; //tipo string
var edad = 34; // tipo number
var soyProgramador = true; // tipo booleamn
var tengoDinero = null; // se asigna un valor nulo
console.log(estoNoExiste); // esto es undefined
let sym = Symbol('foo'); // crea un a variable tipo symbol

// declarando variables usando var

var contador = 0;
for (contador = 0; contador <= 10; contador ++) {
    var suma = contador + 10;
    console.log("La suma de " + contador + "+ 10 = " + suma);
}
// al declarar la variable con var podemos acceder a esta fuera del ciclo.
console.log(suma);

// declarando variables usando let

var contador = 0;
for (contador = 0; contador <= 10; contador ++) {
    let sumaLet = contador + 10;
    console.log("La suma de " + contador + "+ 10 = " + sumaLet);
}
// al declarar la variable con var podemos acceder a esta fuera del ciclo.
console.log(sumaLet);

// declarando variables usando const
const VALOR_DE_PI = 3.1416;
// si tratpo de cambiar el valor este me mostrara un error
VALOR_DE_PI = 3333333;
// para el caso de los arreglos si podemos agregarle nuevos items
const MI_ARREGLO = [1,2,3,4,5,6,7,8];
console.log(MI_ARREGLO);
// le agregamos un nuevo item
MI_ARREGLO.puhs(9);
console.log(MI_ARREGLO);
// para el caso de los Objetos si podemos agregarles nuevos items
const MI_OBJETO = {
    nombre: "Jorge",
    "appellidos": "Mendez"
};
console.log(MI_OBJETO);
// le agregamos un nuevo item
MI_OBJETO.edad = 34;
console.log(MI_OBJETO);