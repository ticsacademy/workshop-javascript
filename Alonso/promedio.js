//Usando una constante
const PROMED = (nota1, nota2, nota3)=>{
    let suma = nota1 + nota2 + nota3;
    let promedio = suma / 3;
    if(promedio >= 7 ){
        console.log("Tu promedio general es: **"+promedio+"** Tu estas Promocionado");

    }else{
        console.log("Tu promedio general es: **"+promedio+"** Tu estas No Promocionado");
    }
}
const RESUL_PROMEDIO= PROMED(5,5,7);
//Usando una funcion 
function Promedio(nota1,nota2,nota3){
    let suma = nota1 + nota2 + nota3;
    let promedio = suma / 3;
    if(promedio >= 7 ){
        console.log("Tu promedio general es: **"+promedio+"** Tu estas Promocionado");

    }else{
        console.log("Tu promedio general es: **"+promedio+"** Tu estas No Promocionado");
    }
}
Promedio(10,10,10);