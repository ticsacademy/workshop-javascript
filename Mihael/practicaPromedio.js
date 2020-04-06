// ----- ----- UTILIZANDO UNA CONSTANTE ----- -----
const PROMEDIO = (nota1, nota2, nota3)=>{
    let resultado = (nota1 + nota2 + nota3)/3;
    console.log('Tu promedio general es =',resultado);
    if(resultado >= 7) {
        mensaje = 'Estás Promocionado.'
    }else{
        mensaje = 'Tus notas son bajas, pero puedes mejorar.';
    }
    return mensaje;
}
const RESULTADO_PROMEDIO = PROMEDIO(9,9,9);
console.log(RESULTADO_PROMEDIO);

// ----- ----- UTILIZANDO UNA FUNCION Y UNA CONSTANTE ----- -----
function resultadoPromedio(nota1, nota2, nota3){
	const SUMA = nota1 + nota2 + nota3;
	const PROMEDIO = SUMA /3;
	if (PROMEDIO >= 7) {
        console.log('Tu promedio general es = ' + PROMEDIO);
        console.log('Estás Promocionado.')
	} else {
        console.log('Tu promedio general es = ' + PROMEDIO);
		console.log('Tus notas son bajas, pero puedes mejorar.');
	}
}
resultadoPromedio(6, 7, 6);