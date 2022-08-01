// First class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    if (this.constructor == Animal) {
      throw new Error("Cannot create a instance of Abstract class");
    }
  }

  makeSound() {
    // return `Some nice sound made`;
    throw new Error("Abstract method doesn't have an implementation");
  }

  getInfor() {
    return `The name of the animal is ${this.name} and age is ${this.age}`;
  }
}

// First instance
// const firstAnimal = new Animal("Nana", 3);
// console.log(firstAnimal.getInfor());

// const secondAnimal = new Animal("Lulu", 10);
// console.log(secondAnimal.getInfor());

// Inheritance
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  makeSound() {
    return "woof";
  }
  // bark() {
  //   return "woof";
  // }
}

class Cat extends Animal {
  #weight;
  constructor(name, age, weight) {
    super(name, age);
    this.#weight = weight;
  }

  // makeSound() {
  //   return "meow";
  // }

  // ENCAPSULATION //
  getWeight() {
    // getter
    return this.#weight;
  }

  setWeight(weight) {
    // setter
    this.#weight = weight;
  }
}

// const myDog = new Dog("Nana", 1, "Grass dog");
// console.log(myDog.getInfor());
// console.log(myDog.breed);
// console.log(myDog.bark());

// POLYMORPHISM //

const myCat = new Cat("Meow", 5, "4kg");
const myDog = new Dog("Nana", 1, "Grass dog");
console.log(myCat.makeSound());
console.log(myDog.makeSound());

// const myCat = new Cat("Meow", 5, "4kg");
// console.log(myCat.getWeight());
// myCat.setWeight("4.5kg");
// console.log(myCat.getWeight());

// ENCAPSULATION