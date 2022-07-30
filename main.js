// First class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfor() {
    return `The name of the animal is ${this.name} and age is ${this.age}`;
  }
}

// First instance
const firstAnimal = new Animal("Nana", 3);
console.log(firstAnimal.getInfor());

const secondAnimal = new Animal("Lulu", 10);
console.log(secondAnimal.getInfor());

// Inheritance
class Dog extends Animal {}
