const PROMEDIO = (valor1, valor2, valor3) => {
    let suma = valor1 + valor2 + valor3;
    let resultado = suma / 3;
    if (resultado >= 7) {
        console.log('Promedio = ' + resultado + ' : Promocionado');
    } else {
        console.log('Promedio = ' + resultado);
    }
    return resultado
};

PROMEDIO(9, 10, 8);