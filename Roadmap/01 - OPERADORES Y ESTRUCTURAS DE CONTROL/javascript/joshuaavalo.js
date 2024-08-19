/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */


//ejemplos 

const suma = 5 + 3;
const resta = 10 - 4;
const multiplicacion = 2 * 6;
const division = 6 / 6; 
const resto = 17% 5; //result : 2(resto de la division)

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(resto);


// Operador de Incremento y Decremento
let numero = 6
numero++ // 7
numero-- // 6

console.log('Numero despues del incremento y el decremento', numero);


 // Operadores de Asignación 
 let a = 6;

 a += 7; // a = 13
 console.log('a += 7:', a);
 
 a -= 7; // a = 6
 console.log('a -= 7:', a);
 
 a *= 7; // a = 42
 console.log('a *= 7:', a);
 
 a /= 7; // a = 6
 console.log('a /= 7:', a);


 // Operadores de Comparacion
let numero1 = 2
let numero2 = 4

console.log('numero1 === numero2:', numero1 === numero2); // Comprueba si ambos valores son iguales
console.log('numero1 !== numero2:', numero1 !== numero2); // Comprueba si ambos valores no son iguales
console.log('numero1 < numero2:', numero1 < numero2); // Comprueba si el valor izquierdo es menor que el derecho
console.log('numero1 > numero2:', numero1 > numero2); // Comprueba si el valor izquierdo es mayor que el derecho
console.log('numero1 <= numero2:', numero1 <= numero2); // Comprueba si el valor izquierdo es menor o igual que el derecho
console.log('numero1 >= numero2:', numero1 >= numero2); // Comprueba si el valor izquierdo es mayor o igual que el derecho

// Operadores Logicos
let logica1 = 2
let logica2 = 3

const resultado1 = (logica1 === logica2)  // false
const resultado2 = (logica1 !== logica2)  // true
const resultado3 = (logica1 > logica2) // false
const resultado4 = (logica1 < logica2) // true

// && => Ambos valores deben ser verdaderos

console.log('resultado2 && resultado4:', resultado2 && resultado4); // true
console.log('resultado1 && resultado4:', resultado1 && resultado4); // false
console.log('resultado3 && resultado4:', resultado3 && resultado4); // false
console.log('resultado1 && resultado3:', resultado1 && resultado3); // false

// || => Uno de los 2 valores debe ser verdadero

console.log('resultado2 || resultado4:', resultado2 || resultado4); // true
console.log('resultado1 || resultado4:', resultado1 || resultado4); // true
console.log('resultado3 || resultado4:', resultado3 || resultado4); // true
console.log('resultado1 || resultado3:', resultado1 || resultado3); // falsessss

// Operadores de Cadena 

let nombre = "Joaquin"
let apellido = "Lopez"
let nombreCompleto = "Joaquin" + " " + "Lopez"

console.log('Nombre Completo:', nombreCompleto);
/*
* DIFICULTAD EXTRA (opcional):
* Crea un programa que imprima por consola todos los números comprendidos
* entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
*
* Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
*/
for (let i = 10; i <= 55; i++) {
    if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
      console.log(i);
    }
  }
  