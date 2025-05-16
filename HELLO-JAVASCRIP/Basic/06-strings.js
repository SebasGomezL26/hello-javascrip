// 1. String con comillas simples
let saludo1 = 'Hola mundo con comillas simples';
console.log(saludo1);

// 2. String con comillas dobles
let saludo2 = "Hola mundo con comillas dobles";
console.log(saludo2);

// 3. String con backticks (template literal)
let nombre = "Pablo";
let saludo3 = `Hola ${nombre}, bienvenido a JavaScript`;
console.log(saludo3);

// 4. String con salto de línea (\n)
let multilinea = "Primera línea\nSegunda línea\nTercera línea";
console.log(multilinea);

// 5. String multilínea con backticks (más elegante)
let multilineaBonito = `Primera línea
Segunda línea
Tercera línea`;
console.log(multilineaBonito);

// 6. String con tabulación (\t)
let conTab = "Nombre:\tPablo\nEdad:\t21";
console.log(conTab);

// 7. String con comillas dentro del texto
let frase1 = 'Ella dijo: "Hola"';
let frase2 = "Él respondió: 'Hola'";
let frase3 = "Él dijo: \"¿Qué tal?\""; // Usando escape
console.log(frase1);
console.log(frase2);
console.log(frase3);

// 8. String vacío
let vacio = "";
console.log("Este string está vacío: [" + vacio + "]");

// 9. Concatenación con +
let apellido = "Gómez";
let nombreCompleto = "Pablo " + apellido;
console.log("Nombre completo: " + nombreCompleto);

// 10. String creado con new String() (no recomendado)
let saludoObjeto = new String("Hola desde objeto String");
console.log(saludoObjeto);
console.log(typeof saludoObjeto); // "object"

// 11. Convertir números y booleanos a string
let edad = 21;
let edadTexto = String(edad);
console.log("Edad en texto: " + edadTexto);

let booleano = true;
let boolTexto = String(booleano);
console.log("Booleano en texto: " + boolTexto);

// 12. typeof string
let textoNormal = "Soy un texto normal";
console.log("El tipo de textoNormal es: " + typeof textoNormal);
