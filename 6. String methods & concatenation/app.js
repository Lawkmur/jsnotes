const firstName = 'William';
const lastName = 'Morales';
const age = 2;

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Lenght
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('1'); // Busca el valor
val = firstName.lastIndexOf('1'); // Busca el primer valor desde atras

// charAt()
val = firstName.charAt('2') // Look for the value in the specified place.

// get last char
val = firstName.charAt(firstName.lenght -1);
 
// substring()
val = firstName.substring(0,4);

// slice()
val = firstName.slice(0,4);

console.log(val);