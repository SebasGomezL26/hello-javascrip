// 1. Bucle FOR: contar del 1 al 5
for (let i = 1; i <= 5; i++) {
  console.log("For loop:", i);
}

// 2. Bucle WHILE: contar del 1 al 5
let j = 1;
while (j <= 5) {
  console.log("While loop:", j);
  j++;
}

// 3. Bucle DO WHILE: contar del 1 al 5 (se ejecuta al menos una vez)
let k = 1;
do {
  console.log("Do While loop:", k);
  k++;
} while (k <= 5);

// 4. BREAK: salir del bucle cuando i sea 3
for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    console.log("Break en i =", i);
    break;
  }
  console.log("Antes de break:", i);
}

// 5. CONTINUE: saltar la iteración cuando i sea 3
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Continue en i =", i);
    continue;
  }
  console.log("Después de continue:", i);
}

// 6. Bucle FOR con array
const frutas = ["manzana", "banana", "cereza"];

for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]);
}

// 7. Bucle FOR...OF (más moderno para arrays)
for (const fruta of frutas) {
  console.log("For...of:", fruta);
}

// 8. Bucle FOR...IN (para objetos)
const persona = { nombre: "Pablo", edad: 21, ciudad: "Bogotá" };

for (const propiedad in persona) {
  console.log(propiedad + ":", persona[propiedad]);
}
