// this code is explanatory, it is not necessary to run it

// Declaring variables using var, let, and const
var name1 = "John"; // var is function-scoped
let age1 = 30; // let is block-scoped
const isStudent = true; // const is block-scoped and cannot be reassigned
/*******************************************/

// Ternary operator for conditional expressions
const age2 = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes
/*******************************************/

// Arrow function syntax
// And functions LOL
function adicionar(a, b) {
    return a + b;
}
console.log(adicionar(2, 3)); // Output: 5
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
/*******************************************/

// Creating an object to represent a car
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
    color: 'blue',
    startEngine: function() {
        console.log('Engine started');
    },
    drive: function() {
        console.log('Car is driving');
    }
};

// Accessing object properties
console.log(car.make); // Output: Toyota
console.log(car.model); // Output: Corolla

// Calling object methods
car.startEngine(); // Output: Engine started
car.drive(); // Output: Car is driving
/*******************************************/

// Spread operator for arrays and objects
// Serves to access the values of an array or object
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
const arr3 = arr1.concat([4, 5]);
const arr4 = arr1 + arr2;

console.log(arr2); // Output: [1, 2, 3, 4, 5]
console.log(arr3); // Output: [1, 2, 3, 4, 5]
console.log(arr4); // // Output: 1,2,34,5 --> it is not the same as the spread operators

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }
/*******************************************/

const numbers = [1, 2, 3, 4, 5];

// map method
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// filter method
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // Output: [2, 4]

// find method
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: 2
/*******************************************/

const name2 = "John";
const age3 = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is John and I am 30 years old.
/*******************************************/

// Class syntax
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const john = new Person("John", 30); // This is an instance of the Person class, this is an object
john.greet(); // Output: Hello, my name is John and I am 30 years old.
/*******************************************/

// Array destructuring
const [a, b] = [1, 2];
console.log(a, b); // Output: 1 2

// Object destructuring
const { name, age } = { name: "John", age: 30 };
console.log(name, age); // Output: John 30
/*******************************************/

// In file math.js
export const add1 = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// In another file
import { add, subtract } from './math.js';
console.log(add1(2, 3)); // Output: 5
console.log(subtract(5, 3)); // Output: 2
/*******************************************/

// JSX syntax in a React component
import React from 'react';

const App = () => {
    const name = "John";
    return (
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    );
};

export default App;
/*******************************************/

/**
 * The provided code snippet demonstrates various JavaScript features and concepts, including object instantiation, array and object destructuring, module exports and imports, 
 * and JSX syntax in a React component.

First, an instance of the Person class is created with the name "John" and age 30. The greet method is called on this instance, which outputs a greeting message. 
This demonstrates how to create and use objects in JavaScript.

Next, array destructuring is shown by assigning the values of an array [1, 2] to variables a and b. The console.log statement then outputs these values, 
illustrating how array destructuring can simplify the extraction of values from arrays.

Following this, object destructuring is used to extract properties name and age from an object { name: "John", age: 30 }. 
The console.log statement outputs these properties, demonstrating how object destructuring can be used to easily access object properties.

The code then shows how to export functions from one file and import them into another. In math.js, two functions add1 and subtract are defined 
and exported. In another file, these functions are imported and used to perform addition and subtraction, with the results logged to the console. 
This demonstrates the modularity and reusability of code using ES6 module syntax.

Finally, the code includes a simple React component using JSX syntax. The App component imports React and
defines a constant name with the value "John". It returns a JSX element that includes a div with an h1 tag displaying a greeting message. 
This part of the code illustrates how to create and export a basic React component using JSX, which allows for writing HTML-like syntax within JavaScript.

Overall, the code snippet covers a range of fundamental JavaScript and React concepts, showcasing how to work with objects, destructuring, modules, and JSX in a React component.
 */

// This code has been generated using GitHub Copilot