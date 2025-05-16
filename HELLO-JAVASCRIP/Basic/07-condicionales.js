// 1. Condición simple
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
}

// 2. Condición con else
let tieneLlave = false;

if (tieneLlave) {
  console.log("Puedes entrar.");
} else {
  console.log("No puedes entrar.");
}

// 3. Condición con else if
let nota = 7;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

// 4. Operadores de comparación
let a = 5;
let b = "5";

console.log("a == b:", a == b);   // true (compara solo valor)
console.log("a === b:", a === b); // false (compara valor y tipo)

// 5. Operadores lógicos
let tienePermiso = true;
let tieneEdad = true;

if (tienePermiso && tieneEdad) {
  console.log("Puedes continuar.");
}

// 6. Negación
let estaLloviendo = false;

if (!estaLloviendo) {
  console.log("Puedes salir sin paraguas.");
}
