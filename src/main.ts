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


interface SuperInterface {
    fly(): string;
}

interface SpeedyInterface{
    hyperSpeed():string;
}

class SuperHero extends Person implements SuperInterface {
    fly() {
        return `I am Flying`;
    }
}


class SuperVillian implements SuperInterface {
    fly() {
        return `Im a Super Villian Flying`
    }
}


class SuperCar extends Car  implements SuperInterface, SpeedyInterface{
    fly(){
        return `Super Car Flying`
    }

    hyperSpeed() {
         return `I am Car Going with Super Speed`
    }
}


class SuperWorld {
    car: SuperCar;
    constructor(car :SuperCar){
       this.car = car;
    }

    beginHighSpeedChase(){
        return `${this.car.hyperSpeed()} Then i Crashed `
    }
} 
 
const superHero = new SuperHero();
console.log(`${superHero.Jump()} and ${superHero.fly()} because im super hero`)


const superVillian = new SuperVillian();
console.log(superVillian.fly());


const supercCar =  new SuperCar();
console.log(`${supercCar.fly()} with ${supercCar.hyperSpeed()}`);

const earth = new SuperWorld(supercCar);
console.log(earth.beginHighSpeedChase());




