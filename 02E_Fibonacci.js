/*
EJERCICIO 8: FIBONACCI (OPCIONALES)
La sucesión de fibonacci consiste en una serie de numeros los cuales cada uno es la suma de los dos anteriores, de la siguiente manera:
[0, 1, 1, 2, 3, 5, 8, 13, 21...]
https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci

Se pide:

- Crear un codigo que almacene en un array los n primeros números de la sucesion (n se definirá como let n = algo).
- Definir con palabras (o pseudocodigo) como vamos a afrontar la solución del problema (que requsitos tiene nuestro programa y como queremos resolverlos).
- Implementar esa estrategia utilizando código.
- testear usando los valores para n: 8, 15, 16. (imprimir el resultado con console.log);

*/
//Primero, creamos el array donde se guardará la secuencia de Fibonacci y los números de la sucesión que van a aparecer

let n = 15;
let numeros = new Array();


/*Segundo, es necesario la secuencia de Fibonacci.Creamos una función que nos cree el siguiente número teniendo
en cuenta los dos anteriores. De esta forma podremos crear la secuencia.*/

var a = 0;
var b = 0;

function fibonacciSec(n){

    if(a === b){
        b = a + 1;
        numeros.push(a);
        numeros.push(b);
    }
    while((n - 2) != 0){
        let suma = a + b;
        numeros.push(suma);
        if( (n % 2) === 0){
            a = suma;
            n--
        }
        else{
            b = suma;
            n--
        }
    }
    console.log(numeros)
}

fibonacciSec(n);

