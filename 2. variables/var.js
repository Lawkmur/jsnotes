// // var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var 
// var greeting;
// console.log(greeting); // It's undefined because we do not have a value in the variable yet

// greeting = 'Hello';
// console.log(greeting);

// // Letters, numbers, _, $
// // Can not start with number

// // var 1name = 'John'; this is wrong

// // Multi words vars

// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // underscore
// var FirstName = 'Tom'; // Pascal case 
// var firstname; // not recommended


const numbers = [1,2,3,4,5,6];
numbers.push(7);

console.log(numbers);
// We can change arrays and objets that are assigned variables using const. But we can not re declare the array with another values, because it would be another whole new identity. This value should not be reasigned.

// Unless I need to inialize it, initerate it or loop.