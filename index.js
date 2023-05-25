console.log('Hello World');


//let name = 'Mosh';
//console.log(name);

//let firstName;
let lastName = 'Kacer';

const interestRate = 0.3;
//cant change

//types String,Number,Boolean,undefined,null

//let name = 'Mosh' //String
//let age = 30; //Number
let isApproverd = false; //boolean 
let firstName = undefined;
let selectedColor = null;//object

//let dynamic
//Object
let person = {
    name: 'Mosh',
    age: 30
}

//dot notation
person.name = 'John';

//bracket notation
person['name'] = 'Marry';

console.log(person.name);

//Array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);
selectedColors[3] = false;
console.log(selectedColors[3]);
console.log(selectedColors.length);

//functions
//Performing task
function greet(name, lastNamef) {
    console.log('Hello ' + name + ' ' + lastNamef)
}
let name = 'John';
greet(name,lastName);

//Calculating a value
function square(Number){
   return Number*Number;
}
let number = square(5);
console.log(square(4));
console.log(number);



