import { AmericanCar, AmericanCarAdapter, ConcreteEuropeanCar, EuropeanCar } from "./code";

const timeDelta = 1e-3
const tempDistance = 100

let americanCar = new AmericanCar(timeDelta)
let adapter = new AmericanCarAdapter(americanCar, timeDelta)
let concreteEuropeanCar: EuropeanCar = new ConcreteEuropeanCar(timeDelta)

if (adapter.getSISpeed(tempDistance / 1.60934) === concreteEuropeanCar.getSISpeed(tempDistance)) {
    console.log('Adapter works. Yay!');
} else {
    console.log('Adapter doesn\'t work. Booo!');
}