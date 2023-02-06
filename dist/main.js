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
class SuperHero extends Person {
    fly() {
        return `I am Flying`;
    }
}
class SuperVillian {
    fly() {
        return `Im a Super Villian Flying`;
    }
}
const superHero = new SuperHero();
console.log(`${superHero.Jump()} and ${superHero.fly()} because im super hero`);
const superVillian = new SuperVillian();
console.log(superVillian.fly());
