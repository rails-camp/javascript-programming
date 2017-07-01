// Hoisted
name = 'Kristine';
console.log(name); // 'Kristine'
var name;

// Initializers not hoisted
console.log(age); // undefined
var age = 33;
