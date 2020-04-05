function obtenerPromedio(calificacion1, calificacion2, calificacion3) {
	const suma = calificacion1 + calificacion2 + calificacion3;
	const promedio = suma / 3;

	if (promedio >= 7) {
		console.log('Promocionado');
	} else {
		console.log('No tiene suficiente promedio');
	}
}

obtenerPromedio(0, 0, 0);
