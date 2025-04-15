// Object adapter implementation
// Class adapter requires mulitple inheritance which is not supperted in TypeScript

// Client code works with european units
export interface EuropeanCar {
    timeDelta: number
    getSISpeed(tempDistance: number): number
}

export class ConcreteEuropeanCar implements EuropeanCar{
    constructor(public timeDelta: number) { }

    getSISpeed(tempDistance: number): number {
        return tempDistance / this.timeDelta
    }

}

export class AmericanCar {
    constructor(private timeDelta: number) { }
    getImperialSpeed(tempDistance: number): number {
        return tempDistance / this.timeDelta
    }
}


export class AmericanCarAdapter implements EuropeanCar {

    constructor(private adaptee: AmericanCar, public timeDelta: number) { }

    getSISpeed(tempDistance: number): number {
        return this.adaptee.getImperialSpeed(tempDistance) * 1.60934
    }
}