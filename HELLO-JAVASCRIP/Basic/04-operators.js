// Operadores aritmeticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Divicion

console.log(a % b) //Modulo
console.log(a ** b) //Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores De asignacion

let myVariable=2
console.log(myVariable)
myVariable +=2
console.log(myVariable)

myVariable -=2
myVariable *=2
myVariable /=2
myVariable %=2
myVariable **=2

// operaciones de comparacion

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a === "6")
console.log(0 !== "6")
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

// truthy values (Valores verdaderos)

// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos la vacia
// El boolean true

// Falsy values (Valores falsos)

// 0
// on
// null
// undefined
// NaN
// El boolean false
// Operadores logicos 

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log( 5 < 10 && 15 < 20)
console.log( 5 < 10 && 15 > 20)
console.log( 5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log( 5 > 10 || 15 > 20)
console.log( 5 < 10 || 15 < 20)
console.log( 5 < 10 || 15 > 20)
console.log( 5 > 10 || 15 > 20 || 30 > 40)

console.log( 5 > 10 && 15 > 20 || 30 > 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!5 > 10 && 15 > 20)
console.log(!5 > 10 || 15 > 20)

// Operadores terniarios

const isRaining = false
isRaining ? console.log("esta lloviendo") : console.log("No esta lloviendo")