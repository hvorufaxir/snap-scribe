/**
 * File: sophisticated_code.js
 * Description: A complex and elaborate JavaScript code showcasing various advanced concepts and techniques.
 * Author: Your Name
 * Date: October 30, 2022
 */

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  // Static method to compare two persons' ages
  static compareAges(person1, person2) {
    if (person1.age > person2.age) {
      console.log(`${person1.name} is older than ${person2.name}.`);
    } else if (person1.age < person2.age) {
      console.log(`${person2.name} is older than ${person1.name}.`);
    } else {
      console.log(`${person1.name} and ${person2.name} are the same age.`);
    }
  }
}

// Creating instances of Person class
const john = new Person("John", 30);
const sarah = new Person("Sarah", 25);

// Calling greet() method on john and sarah
john.greet();
sarah.greet();

// Calling compareAges() static method
Person.compareAges(john, sarah);

// Class representing a Circle
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getters and setters for radius property
  get radius() {
    return this._radius;
  }

  set radius(radius) {
    if (radius >= 0) {
      this._radius = radius;
    } else {
      throw new Error("Radius cannot be negative.");
    }
  }

  // Method to calculate the area of the circle
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Creating an instance of Circle class
const circle = new Circle(5);

// Printing the area of the circle
console.log(`Area of the circle with radius ${circle.radius} is ${circle.calculateArea()}.`);

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// Finding the factorial of a number
const number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}.`);

// Generating an array of random numbers
const randomNumberArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

// Sorting the array in ascending order
randomNumberArray.sort((a, b) => a - b);

// Printing the sorted array
console.log("Sorted array:", randomNumberArray);

// Implementation of a recursive Fibonacci sequence
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Printing the Fibonacci sequence up to the 10th number
console.log("Fibonacci sequence:", Array.from({ length: 10 }, (_, i) => fibonacci(i)));

// Promises and asynchronous code
function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Async code execution complete."), 2000);
  });
}

asyncFunction().then(result => console.log(result));

// Fetching data from an API using async/await
async function fetchApiData(url) {
  const response = await fetch(url);
  
  if (!response.ok){
    throw new Error('Network response was not ok.');
  }

  const data = await response.json();
  return data;
}

fetchApiData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));