const PROMEDIO = (nota1, nota2, nota3)=>{
    let resultado = (nota1 + nota2 + nota3)/3;
    console.log("Tu promedio general es: ",resultado);
    if(resultado >= 7 ){
        mensaje = "Promocionado";

    }else{
        mensaje = "no Promocionado";
    }
    return mensaje

}
const RESULTADO_PROMEDIO= PROMEDIO(7,7,8);
console.log(RESULTADO_PROMEDIO);