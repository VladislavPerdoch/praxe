//var -> function
//let -> block
//const -> block


//This
const person = {
    name: "Mosh",
    walk() {
        console.log(this);
    }
};

person.walk();

const walk = person.walk.bind(person);
walk(); 


//Arrow functions

/*
const square = function(number) {
    return number * number;
}
*/

const square = number =>  number * number;
console.log(square(5));


const jobs = [
    { id: 1, isActive: false},
    { id: 2, isActive: true},
    { id: 3, isActive: false},
];

const activeJobs = jobs.filter( job => job.isActive); 
console.log(activeJobs);


//Arrow functions and This

const person2 = {
    talk() {
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
        
    }
};

person2.talk();

//Arrray.map()

const colors = ['red', 'green', 'blue'];
const items = colors.map(color => '<li>' + color + '</li>');
console.log(items);

//Object Destructuring

const address = {
    street: 'Staškov',
    city: '',
    country: ''
};

const { street: st, city, country } = address;
console.log(st);

//Spread Operator

const first = [1,2,3];
const second = [4,5,6];
const mix = [...first, 'a', ...second, 'b'];
console.log(mix);

const first1 = {
    name: "Majo",
};

const second2 = {
    age: 18, 
};

const mix2 = {...first1, ...second2, location: 'Australia'};
console.log(mix2);


//Classes 
 


 const person3 = new Person('Mosh');
 person3.walk();
//console.log(person3()); nefunguje
console.log(person3.name);

//Inheritance


import  Teacher, { promote }  from "./teacher";
import React, { Component } from 'react';

// Default -> import ... from '';
// Named -> import { ... } from '';

const teacher = new Teacher('Mosh','Msc');

//Classes
//teacher.js
//person.js

//Named and Default Exports


