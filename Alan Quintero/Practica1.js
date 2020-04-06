const PROMEDIO = (calificacion1, calificacion2, calificacion3) => {
    let total = (calificacion1+calificacion2+calificacion3)/3;
    console.log('La calificacion del alumno es:', total)

    if(total >= 7){
        console.log('Promocionado');
    }else{
        console.log('Reprobado')
        }
    }
const PROM = PROMEDIO(10,10,10);
console.log(PROM);