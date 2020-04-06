#  👨🏻‍🏫 Funciones

![Cuerpo de una funcion](https://image.slidesharecdn.com/javascriptfunciones-150227140733-conversion-gate02/95/javascript-funciones-4-638.jpg?cb= "Cuerpo de una función")

Las funciones son uno de los pilares fundamentales en **JavaScript**. Una función es un procedimiento en **JavaScript** un conjunto de sentencias que realizan una tarea o calculan un valor. Para usar una función, debe definirla en algún lugar del ámbito desde el cual desea llamarla, existen 2 tipos de funciones las cuales son.

---

## 📚 Funciones declarativas

La definición de una función (también llamada declaración de función o sentencia de función) consiste de la palabra clave (reservada) `function` seguida por.

- El nombre de la función el cual pude ser opcional esto depende del tipo de declaración. 

- Una lista de argumentos(propiedades) para la funcion, encerrados encerrados entre paréntesis y separados por comas (,).

- Las sentencias `JavaScript` que definen la funcion son encerradas entre llaves `{ }`.

### 📋 Ejemplo

```javascript
/**
 * funcion que poermite saludar a un alumno
 *
 * @param nombre {String} Correspondiente al nombre del alumno
 * @param edad {Number} (Optional) Correspondiente a la edad del alumno.
 *
 * @return {String}.
 */
function saludarAlumnos(nombre, edad) {
    let edad2 = edad || 0;
    console.log("1 Hola como estas ", nombre);
    console.log(`1 Hola como estas ${nombre} mi edad es ${edad2}`);
    return `Hoja ${Nombre} tu edad es ${edad}`;
}
saludarAlumnos("Jorge Mendez", 34); 
```
En el ejemplo anterior podemos ver que la función recibe 2 parametros los cuales uno de ellos puede ser opcional ya que ` let edad2 = edad || 0;` esta definiendo que valor tomar en el caso de que no semande el valor, al final de la `función` se utiliza la palabra **return** la cual nos indica que la funcion retornara algun resultado.

> 🔖 Nota: actulamente para mandar parametos opcionales se puede utilizar la siguiente sintaxis.

```javascript
    // ejemplo de parametro opcional
    function myFunction(nombre, edad = 0) {
        //TODO: Code here
    }
```
---

## 📚 funciones de exprecion o anonimas

Si bien la declaración de la función anterior es sintácticamente una sentencia, las funciones pueden también ser creadas por una expresión de función. Tal función puede ser anónima; no debe tener un nombre. Por ejemplo, la función square podría haber sido definida como:

```javascript
/**
 * funcion que poermite saludar a un alumno
 *
 * @param nombre {String} Correspondiente al nombre del alumno
 * @param edad {Number} (Optional) Correspondiente a la edad del alumno.
 *
 * @return {String}.
 */
const saludarAlumnos = function (nombre, edad) {
    let edad2 = edad || 0;
    console.log("1 Hola como estas ", nombre);
    console.log(`1 Hola como estas ${nombre} mi edad es ${edad2}`);
    return `Hoja ${Nombre} tu edad es ${edad}`;
}
saludarAlumnos("Jorge Mendez", 34); 
```

> Nota 🔖: como podemos ver el uso de funciones `declarativas` y de `expresión` es muy sencillo regular mente en la actualidad es muy comun utilizar funciones de `expresion`.

---

## 📚 Arrow Function o Funciones flecha =>

Una función flecha es una alternativa sintácticamente más compacta que una función convencional. Dichas funciones no realizan sus propias vinculaciones de this, arguments, super o new.target, y no son adecuadas para ser utilizadas como métodos, además de que no pueden ser usadas como constructores.

```javascript
/**
 * funcion que poermite saludar a un alumno
 *
 * @param nombre {String} Correspondiente al nombre del alumno
 * @param edad {Number} (Optional) Correspondiente a la edad del alumno.
 *
 * @return {String}.
 */
const saludarAlumnos = (nombre, edad) => {
    let edad2 = edad || 0;
    console.log("1 Hola como estas ", nombre);
    console.log(`1 Hola como estas ${nombre} mi edad es ${edad2}`);
    return `Hoja ${Nombre} tu edad es ${edad}`;
}
saludarAlumnos("Jorge Mendez", 34); 
```
Como se puede ver en el ejempolo los `arrow function` no necesitan el uso de la palabra reservada `function`, pero la madnera de declararlas es similar a la de funciones `declarativas`.

Otra de las propiedades de los `ArrowFunctions` es que se puede excluir la palabra reservada `return` y los parentesis, por ejemplo

```javascript
    const cuadrado = valor => valor * valorl;
```

como podemos ver se esta excluyendo la palbra return ya que por defecto al usar la notación de `arrow function` en tiende que `=>` esta retornando algo, para el caso de los parentesis solo aplica si es un solo parametro o no se manda un valor opcional. 

---

# 👨🏻‍🏫 Operadores de comparacion

Un punto importante para poder jugar con las condicionales y con otras opciones de **JavaScript** es conocer los operadores de compración.

![Operadores de comparacion](https://slideplayer.es/slide/8408888/25/images/48/OPERADORES%3A+JavaScript.jpg "operadores de comparacion").

---

#  👨🏻‍🏫 Condicionales If/ else if/ else

Las condicionales pueden sirven para indicar que si pasa exactamente cierto comportamiento o valor se ejecute ciernto fragmento de codigo en caso de que no se puede ejecutar otro en el caso de que no se cumpliera ningun caso se estaria ejecutado el caso por defecto.

![Ejemplo if](https://www.prowessapps.in/java/images/else-if-ladder.png" ejemplo if")

como podemos ver en el algoritmo anterior se genera la validación utilizando `if/else if/else` con lo que tratan de validar multiples esenarios de comportamiento en el caso de que no se cumpla algunos de los esenarios se pasa directamente a la opcion else.

> 🔖 Nota: la sentencia `if` puede ser utilizada por si sola en cambio `else` siempre tiene que estar acompañada de un `if` al igual que `else if.

### 📋 Ejemplo

```javascript
    if (a === 1) {
        console.log("El valor de a es 1")
    }

    //utilizando else 
    if (a === 1) {
        console.log("El valor de a es 1")
    } else {
        console.log("El valor de a es diferente a 1");
    }

    // utilizando else if
    if (a === 1) {
        console.log("El valor de a es 1");
    } else if(a === 2) {
        console.log("El valor de a es =2")
    } else if(a === 3) {
        console.log("El valor de a es 3")
    } else {
        console.log("El valor de a es menor de 1 o mayor a 3")
    }

```

