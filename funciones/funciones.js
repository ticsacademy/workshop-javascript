// declarativas
function saludarAlumnos(nombre, edad) {
    let edad2 = edad || 0;
    console.log("1 Hola como estas ", nombre);
    console.log(`1 Hola como estas ${nombre} mi edad es ${edad2}`);
}
saludarAlumnos("Jorge Mendez", 34);


// expresion (anonimas)
const saludarAlumnos2 = function(nombre, edad = 0) {
    console.log(`2 Hola como estas ${nombre} mi edad es ${edad}`);
};
saludarAlumnos2("Jorge Mendez", 34);

// funcion flecha
const saludarAlumnos3 = (nombre) => {
    console.log(`3 Hola como estas ${nombre}`);
};
saludarAlumnos3("Jorge Mendez");

const suma = (valor1, valor2) => {
    const TOTAL = valor1 + valor2;
    return TOTAL;
};

let a = 10;
let b = 90;
let resultado = suma(a, b);
console.log(resultado);


const multipicar = (valor1, valor2) => valor1 * valor2;
resultado = multipicar(2,90);
console.log(resultado);


const cuadrado = valor => valor * valor;
console.log(cuadrado(5));

const calculadora = (valor1, valor2, operacion = "") => {
    let resultado = "";
    // si operacion = + genera la suma
    if (operacion === "+") {
        resultado = valor1 + valor2;
    // si operacion = - genera la resta    
    } else if (operacion === "-") {
        resultado = valor1 - valor2;
    // si operacion = * genera la multiplicacion
    } else if (operacion === "*") {
        resultado = valor1 * valor2;
    // si operacion = / genera la division
    } else if (operacion === "/") {
        resultado = valor1 / valor2;
    } else {
       resultado = "Paseame algo"; 
    }
    return resultado;
};
const OPERACION = calculadora(10, 2, "fsfsdfsds");
console.log(OPERACION);



















