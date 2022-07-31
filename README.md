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
class Person {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  getInfor() {
    return `${this.firstName} ${this.lastName} (${this.birthYear})`;
  }
}
```

### First instances

```js
const firstAnimal = new Animal("Nana", 2);
console.log(firstAnimal.getInfor());
const secondAnimal = new Animal("Lulu", 3);
console.log(secondAnimal.getInfor());

// for ex 2
const firstPerson = new Person("Black", "Bold", 2000);
console.log(firstPerson.getInfor());
```

### Inheritance

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
class Programer extends Person {}
```

### Encapsulation

### Polymorphism

### Abstract classes

Abstract class is a class which can't be instantiated and require subclasses which inherit from a particular abstract class to provice implementations. We will change the animal class to an abstract class. It will not be possilbe to create a instance of this class anymore like on slide number 3 and we will mark makeSound as an abstract method - in order to use it, a subclass must declare its own implementation of this method.

References: @pyplance_code
