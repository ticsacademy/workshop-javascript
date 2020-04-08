const calculadora = (valor1, valor2, operacion = '') => {
	let resultado = 0;

	//condicionales para cada caso ( operaciones ) y retorna el valor
	switch (operacion) {
		case '+':
			resultado = valor1 + valor2;
			break;
		case '-':
			resultado = valor1 - valor2;
			break;
		case 'x':
			resultado = valor1 * valor2;
			break;
		case '/':
			resultado = valor1 / valor2;
			break;
		default:
			resultado = 'Problemas al escoger la operacion';
	}
	return resultado;
};

const getValue = (selector) => {
	const $ELEMENT = document.querySelector(selector);
	let value = 0;
	if ($ELEMENT) {
		value = $ELEMENT.value || 0;
	}
	return parseInt(value, 10);
};

document.onreadystatechange = () => {
	if (document.readyState === 'complete') {
		//se identifican los botones
		const $BUTTONSUMA = document.querySelector('#suma');
		const $BUTTONRESTA = document.querySelector('#resta');
		const $BUTTONMULTIPLICACION = document.querySelector('#multiplicacion');
		const $BUTTONSUMADIVISION = document.querySelector('#division');

		//funcion para sumar dos valores
		$BUTTONSUMA.addEventListener('click', () => {
			let message = 'El resultado es: ';

			const $FIRST_VALUE = getValue('#primerValor');
			const $SECOND_VALUE = getValue('#segundo');
			const RESULTADOFINAL = calculadora($FIRST_VALUE, $SECOND_VALUE, '+');

			message = `${message} ${RESULTADOFINAL}`;
			const $ALERT = document.querySelector('#alert');
			$ALERT.innerHTML = message;
		});

		//funcion para restar dos valores
		$BUTTONRESTA.addEventListener('click', () => {
			let message = 'El resultado es: ';

			const $FIRST_VALUE = getValue('#primerValor');
			const $SECOND_VALUE = getValue('#segundo');
			const RESULTADOFINAL = calculadora($FIRST_VALUE, $SECOND_VALUE, '-');

			message = `${message} ${RESULTADOFINAL}`;
			const $ALERT = document.querySelector('#alert');
			$ALERT.innerHTML = message;
		});

		//funcion para multiplicar dos valores
		$BUTTONMULTIPLICACION.addEventListener('click', () => {
			let message = 'El resultado es: ';

			const $FIRST_VALUE = getValue('#primerValor');
			const $SECOND_VALUE = getValue('#segundo');
			const RESULTADOFINAL = calculadora($FIRST_VALUE, $SECOND_VALUE, 'x');

			message = `${message} ${RESULTADOFINAL}`;
			const $ALERT = document.querySelector('#alert');
			$ALERT.innerHTML = message;
		});

		//funcion para dividir dos valores
		$BUTTONSUMADIVISION.addEventListener('click', () => {
			let message = 'El resultado es: ';

			const $FIRST_VALUE = getValue('#primerValor');
			const $SECOND_VALUE = getValue('#segundo');
			const RESULTADOFINAL = calculadora($FIRST_VALUE, $SECOND_VALUE, '/');

			message = `${message} ${RESULTADOFINAL}`;
			const $ALERT = document.querySelector('#alert');
			$ALERT.innerHTML = message;
		});
	}
};
