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

Encapsulation is a restriction mechanism making accessing the data impossible without using special methods dedicated for this. In the example below we marked weight as a private property and in order to get and set a value we need to use the <code>getter</code> and <code>setter</code> method:

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

```js
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    if (this.constructor == Animal) {
      throw new Error("Cannot create a instance of Abstract class.");
    }
  }

  makeSound() {
    throw new Error("Abstract method doesn't have an implementation.");
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
  constructor(name, age, weight) {
    super(name, age);
    this.weight = weight;
  }

  // makeSound(){
  //   return `mewo`
  // }
}
```

```js
const myDog = new Animal("Na", 2, "Wild");
const myCat = new Animal("Mewo", 5, "3.4kg");

console.log(myCat.makeSound());
// makeSound() method isn't avaliable
```

## For beginner

### Introducing Object Constructor

Object constructor, or "constructor" for short, are your path to better object creation. Think of a constructor like little factory taht can create an endless number of similar objects.
In terms of code, a constructor is quite similar to a function that returns an object: you define it once and invoke it every time you want to create a new object. But us you'll see there's a little extra that goes intro a constructor.
The best way to see how constructor work is to create one. Let's revisit our old friend, the dog object, from earlier in the book and write a constructor to create as many dogs as we need. Here's a verion of the dog object we've used before, with a name, a breed and a weight.

```text
Dog: name, breed, weight
```

Now, if we were going to define such a dog with an object literal, it would look like this:

```js
var dog = {
  name: "Nana",
  breed: "Mixed",
  weight: 28,
};
// Just a simple dog object created by an object literal. Now we need to figure out how to create a lot of these pupies.
```

But we don't want <em>just a Nana</em> dog, we want a way to create <em>any dog</em> that has a name, a breed and a weight. And, again, to do that we're going to write some code that looks like a function, with a dash of object syntax thrown in.
With that introduction, you must be a bit curious--go ahead and turn the page and let's get these constructor figured out and working for us.

### How to create a Constructor

Using constructor is a <strong>two-step</strong> process: first we define a constructor, and then we use it to create objects. Let's first focus on creating a constructor.
What we want is a constructor that we can use to create dogs, and, more specifically, dogs with names, breeds and weights. So, we're going to define a function, called the constructor, that know how to create dogs. Like this:

```js
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}
```

The parameters <code>name</code>, <code>breed</code>, <code>weight</code> of the function match the properties we want to supply for each individual dog.
<code>this.name = name</code> This part feels more like an object because we're assigning each parameter to waht looks like a property.

### How to use a Constructor

We said using a constructor is a two-step process: first we create a constructor, then we use it. Well, we've created a Dog constructor, so let's use it. Here's how we do that:

```js
const nana = new Dog("Nana", "Mixed", 28);
// To create a dog, we use the new operator with the constructor.
```

Now that we have a constructor for dogs, we can keep making them:

```js
const ronron = new Dog("Ronron", "Boom", 15);
const lulu = new Dog("Lulu", "Woof", 18);
```

Refer: <code>@pyplance_code</code>
<br>
[1] — Head First JavaScript Programming 2014
<br>
Editor by: <code>@blackboldse</code>
