"use strict";
// S - Single-responsibility principle
// O - Open–closed principle
// L - The Liskov substitution principle
// I - Interface segregation principle
// D - Dependency inversion principle
class Car {
    drive() {
        return `I'm am Driving`;
    }
    OpenDoor() {
        return `I'm am Openeing Door`;
    }
}
class Person {
    walk() {
        return `Im walking`;
    }
    Jump() {
        return `I'm Jumping`;
    }
}
class superHero extends Person {
    fly() {
        return `I am Flying`;
    }
}
const superPerson = new superHero();
console.log(`${superPerson.Jump()} and ${superPerson.fly()} becassue im super hero`);
