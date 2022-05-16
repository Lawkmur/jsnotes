const num1 = 100;
const num2 = 80;
let val;

// Simple math with numbers

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math object

val = Math.PI;
val = Math.E;
val = Math.round(2.4); //2
val = Math.round(2.7); //3
val = Math.ceil(2.2); // 3
val = Math.floor(2.2); // 2
val = Math.sqrt(64); // 8
val = Math.abs(-4); // 4
val = Math.pow(9,2); // 81
val = Math.min(2,3,4,5,6,7,8,9,-2,23);
val = Math.max(2,3,4,5,6,7,8,9,-2,23);

// Math with random

val = Math.random() * 20 + 1; // Generates a random number from 1 to 20.

val = Math.floor(Math.random() * 20 + 1); // To remove the decimals

console.log(val);