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
class SuperCar extends Car {
    fly() {
        return `Super Car Flying`;
    }
    hyperSpeed() {
        return `I am Car Going with Super Speed`;
    }
}
class SuperWorld {
    constructor(car) {
        this.car = car;
    }
    beginHighSpeedChase() {
        return `${this.car.hyperSpeed()} Then i Crashed `;
    }
}
const superHero = new SuperHero();
console.log(`${superHero.Jump()} and ${superHero.fly()} because im super hero`);
const superVillian = new SuperVillian();
console.log(superVillian.fly());
const supercCar = new SuperCar();
console.log(`${supercCar.fly()} with ${supercCar.hyperSpeed()}`);
const earth = new SuperWorld(supercCar);
console.log(earth.beginHighSpeedChase());
