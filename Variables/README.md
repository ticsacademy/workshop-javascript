#  👨🏻‍🏫 Comentarios

*JavaScript* permite insertar comentarios en el código, al igual que la mayoría de los lenguajes de programación. En concreto hay dos tipos de comentarios permitidos.

## 📚 Comentario de una linea

Estos solo permienten comentar una sola linea del código  y inican con `//`

```javascript
 // Hola soy un comentario de una linea
```

## 📚 Comentario de bloque

Estos permiten comentar multiples lineas del codigo estos inician con `/*` y terminan con `*/`

```javascript
 /*
     Hola soy un comentario
     de bloque
 */
```

> Nota 🔖: Los comentarios no se ejecutan al momento de correr el programa.


# 👨🏻‍🏫 Tipos de datos

En **JavaScript** tambien conocido como `JS` existen los valores primitivos o tipos de datos primitivos, estos son datos que no son objetos y no tiene metodos. En javascript existen 6 tipos de valores primitivos los cuales son.

## 📚 String

En cualquier lenguaje de programación, un `string` es una secuencia de caracteres usado para representar el texto. su syntaxis es `"soy una cadena"`.


## 📚 Number

En **JavaScript**, Number es un tipo de datos numérico. En otros lenguajes de programación puede existir diferentes tipos numéricos, por ejemplo: `Integers`, `Floats`, `Doubles`, or `Bignums`. su syntaxis es `1000`.


## 📚 Boolean

En ciencias de informática, un `boolean` es un dato lógico que solo puede tener los valores true o false. 

## 📚 null

En ciencias informáticas, un valor `null`  representa una referencia que apunta, generalmente intencionadamente, a una inexistente o inválido objeto o dirección. El significado de una referencia `null` varía entre las implementaciones de lenguajes.

## 📚 undefined

Un valor **primitivo** automáticamente asignado a las variables que solo han sido declarados o a los argumentos formales para los cuales no existe argumentos reales.

## 📚 symbol

Un Symbol es un tipo de dato **primitivo** en cuyos casos son únicos e inmutables. En algunos lenguajes de programación son también llamados atoms(átomos).

## 📰 Extra

En **JavaScript** existen otro tipos de datos los cuales son 

### 📚 Arreglos

Son es una colección ordenada de elementos donde cada elemento puede ser un tipo de dato diferente, como en todo lenguaje de programación los arreglos inician en la posicion `0`, su sintaxis es `[valor, valor]`

```javascript
    const ARREGLO = [1, "hola", true];
```

### 📚 Objetos

Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor, los valores de estos pueden ser cualquiera de los valores primitivos o incluso un arreglo o un mismo `Objeto`. su syntaxis es `{clave: valor}`

```javascript
    const OBJETO = {
        //clave: valor
        string: "jogre"
        number: 1000,
        boolean: true,
        nulo: null,
        arreglo: [1,2,3],
        objeto: {  v1: 100 },
    }
```

# 👨🏻‍🏫 Variables

Una variable es un depósito donde hay un valor. Consta de un nombre y pertenece a un tipo (númerico, cadena de caracteres, etc.), **JavaScript** consta de diversas maneras para declararlas

## 📚 var

La declaracion de estas variavbles utilizando var son variables de alcance global por lo que si esta variable es declarada dentro de una funcion, ciclo o condicion puede ser utilizada desde cualqueir punto en el caso de colocarla fuera de una funcion el alcance es global.

### 📋 Ejemplo

```javascript
    var contador = 0;
    for (contador = 0; contador <= 10; contador ++) {
        var suma = contador + 10;
        console.log("La suma de " + contador + "+ 10 = " + suma);
    }
    // al declarar la variable con var podemos acceder a esta fuera del ciclo.
    console.log(suma);
```

## 📚 let

El alcance de las varibles declaradas con `let` son a nivel de bloque por lo que no se podra tener acceso a estas variables fuera del bloque donde fuereon declaradas.

### 📋 Ejemplo

```javascript
    let contador = 0;
    for (contador = 0; contador <= 10; contador ++) {
        let suma = contador + 10;
        console.log("La suma de " + contador + "+ 10 = " + suma);
    }
    // al declarar suma con let no podemos consultar la variable fuera el bloque del for.
    console.log(suma);
```

> Nota 🔖: Por buenas practicas los nombres de las variables se declaran en minusculas en el caso de ussar una palabra compuesto como `mi nombre` se utiliza la notación camelcase el cual dice que cada nueva plabra tiene que iniciar con mayusculas por ejemplo `miNombre`

## 📚 const

Al declarar una variable usando `const` estamos diciendo que no podemos cambiar su valor de nuestra variable nunca ya que como su nombre lo dice es un valor constante, pero para el caso de manjear Arreglos y 
Objetos cambia la regla ya que si podemos agregarles nuevos items a estos.

### 📋 Ejemplo

```javascript
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
```

Como podemos ver en el caso de Arreglo y Objetos podemos agregar nuevos items pero ojo solo agregar no podemos cambiar el tipo de dato que es la constante.

> Nota 🔖: Por buenas practicas los nombres de las constantes se declaran en mayusculas por ejemplo `VALOR` en el caso de se una palabra compuesta cada palabra tiene que ser seguida de un guion bajo por ejemplo `MI_NOMBRE`.
