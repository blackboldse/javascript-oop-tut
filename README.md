## Javascript OOP

### Introduction

In this tutorial we will explore the funcamentals for Object Oriented Programming (OOP) in Javascript in a practical way with examples.

Table of contents

- first class
- first instances
- inheritance
- encapsulation
- polymorphism
- abstract classes

### First class

We talked about objects, which are one of the most interesting parts of JavaScript.
In this part wel'll go up one level, introducing classes.
What are classes? They are a way to define a common parttern for multiple objects.
Let's take a Animal object:

```js
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfor() {
    return `The name animal is ${this.name} and age is ${this.age}`;
  }
}

// For ex 2
// Suppose we have a class Person:
class Person {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  getInfor() {
    return `My name is ${this.firstName} ${this.lastName}, (${this.birthYear}).`;
  }
}
```

### First instances

```js
const firstAnimal = new Animal("Nana", 2);
console.log(firstAnimal.getInfor()); // The name animal is Nana and age is 2
const secondAnimal = new Animal("Lulu", 3);
console.log(secondAnimal.getInfor()); // The name animal is Lulu and age is 3

// for ex 2
const firstPerson = new Person("Black", "Bold", 2000);
console.log(firstPerson.getInfor()); // Black Bold (2000)
```

### Inheritance

A class can <strong>extend</strong> another class, and objects initialized using that class inherit all the methods of both classes.

```js
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    return `woof`;
  }
}
// For ex 2
// We can define a new class Programer that extends Person:
class Programer extends Person {
  constructor(firstName, lastName, birthYear, major) {
    super(fistName, lastName, birthYear);
    this.major = major;
  }

  work() {
    return `My major is ${this.major}`;
  }
}
// Now if we instantiate a new object with class Programmer, it has access to the work() method:
const blackbold = new Programer("black", "bold", 2000, "Front-end");
console.log(blackbold.work());
// black bold (2000)
// My major is Front-end
```

Inside a child class, you can reference the parent class calling super():

```js
class Programmer extends Person {
  hello() {
    return super.hello() + ". I am a programmer.";
  }
}

const blackbold = new Programmer("black", "bold", 2000);
console.log(blackbold.hello()); // My name is black bold, (2000). I am a programmer.
```

### Encapsulation

### Polymorphism

### Abstract classes

Abstract class is a class which can't be instantiated and require subclasses which inherit from a particular abstract class to provice implementations. We will change the animal class to an abstract class. It will not be possilbe to create a instance of this class anymore like on slide number 3 and we will mark makeSound as an abstract method - in order to use it, a subclass must declare its own implementation of this method.

References: @pyplance_code
