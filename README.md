## Javascript OOP

### Introduction

In this tutorial we will explore the funcamentals for <strong>Object Oriented Programming</strong> (OOP) in Javascript in a practical way with examples.

Table of contents

- first class
- first instances
- inheritance
- encapsulation
- polymorphism
- abstract classes

### First class

On this slide we are creating our first class. Remember to add the constructor method that will enable the creation of instances (objects) based on our class.
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
```

Suppose we have a class Person:

```js
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

On the previous slide we created a new class, added a constructor method that takes in 2 arguments - name and age. To create an object from this constructor method we need to use the new keyword and pass in the given name and age of the animal object that we are creating. We also have added a getInfo method that returns the information about the object:

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

Class inheritance is a feature that enables certain classes to tak all the methods and properties of another one(parent class) and makes it possible to extend the parent class by adding more:
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
```

We can define a new class <code>Programer</code> that extends <code>Person</code>:

```js
class Programer extends Person {
  constructor(firstName, lastName, birthYear, major) {
    super(fistName, lastName, birthYear);
    this.major = major;
  }

  work() {
    return `My major is ${this.major}`;
  }
}
```

Now if we instantiate a new object with class <code>Programmer</code>, it has access to the <code>work()</code> method:

```js
const blackbold = new Programer("black", "bold", 2000, "Front-end");
console.log(blackbold.work());
// black bold (2000)
// My major is Front-end
```

Inside a child class, you can reference the parent class calling <code>super()</code>:

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

Encapsulation is a restriction mechanism making accessing the data impossilbe without using special methods dedicated for this. In the example below we marked weight as a private property and in order to get and set a value we need to use the <code>getter</code> and <code>setter</code> method:

```js
class Cat extends Animal {
  #weight;
  constructor(name, age, weight) {
    super(name, age);
    this.#weight = weight;
  }

  getWeight() {
    return this.#weight;
  }

  setWeight(weight) {
    this.#weight = weight;
  }

  const myCat = new Animal('Mewo', 2, '3kg')
  console.log(myCat.getWeight());   //Output: 3kg
  myCat.setWeight('3.5kg');
  console.log(myCat.getWeight());   //Output: 3.5kg
}
```

More example with <code>Set.has()</code> method:

```js
// function setup(input)
// function isIndict(word)
// setup(["cat", "car", "bar"])
// isInDict{"cat"} // true
// isIndict{"bat"} // false

class Dictionary {
  constructor(wordsArray) {
    this.dict = new Set(wordsArray); // Create a new set using Set() constructor
  }

  isInDict(word) {
    return this.dict.has(word); // As word exists word, it will return true
  }
}

const test = new Dictionary(["cat", "car", "bar"]);
console.log(test.isInDict("cat")); // true
console.log(test.isInDict("kat")); // false
```

### Polymorphism

Polymorphism is a concept that utilizes inheritance for reusing methods multiple times with a different behaviour depending on class types. To understand this lets look at our example - in the dog class we will remove the bark method and in the animal class we'll add a makeSound method which will be overridden by cat and dog classes.

```js
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    return `Some nice sound made`;
  }
}
```

```js
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  makeSound() {
    return `woof`;
  }
}
```

```js
class Cat extends Animal {
  constructor(name, age, colour) {
    super(name, age);
    this.colour = colour;
  }

  makeSound() {
    return `mewo`;
  }
}
```

```js
const myDog = new Dog("Nana", 2, "wild grace");
const myCat = new Cat("Mewow", 6, "4kg");

console.log(myDog.makeSound());
console.log(myCat.makeSound());
```

Output:

```text
woof
meow
```

### Abstract classes

Abstract class is a class which can't be instantiated and require subclasses which inherit from a particular abstract class to provice implementations. We will change the animal class to an abstract class. It will not be possilbe to create a instance of this class anymore like on slide number 3 and we will mark makeSound as an abstract method - in order to use it, a subclass must declare its own implementation of this method.

Refer: @pyplance_code
<br>
Editor by: @blackboldse
