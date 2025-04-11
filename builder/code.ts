interface Builder {
    reset(): void,
    addGender(isMale: boolean): void,
    addFirstName(name: string): void,
    addLastName(name: string): void,
    addCity(city: string): void
}

export interface PersonInfo {
    firstName?: string;
    lastName?: string;
    city?: string;
    isMale?: boolean;
}

export class Director {
    constructor(private builder: Builder) { }
    changeBuilder(builder: Builder) { this.builder = builder }
    make(info: PersonInfo): void {
        this.builder.reset()
        if (info.isMale !== undefined) this.builder.addGender(info.isMale);
        if (info.firstName) this.builder.addFirstName(info.firstName);
        if (info.lastName) this.builder.addLastName(info.lastName);
        if (info.city) this.builder.addCity(info.city);
    }
}

export class FullName {
    text: string = ""
}

export class ShortName {
    text: string = ""
}

export class FullNameBuilder implements Builder {
    private result = new FullName()

    reset(): void { this.result = new FullName() }

    addGender(isMale: boolean): void {
        this.result.text += isMale ? "male" : "female"
    }
    addFirstName(name: string): void {
        this.result.text += name
    }
    addLastName(name: string): void {
        this.result.text += name
    }
    addCity(city: string): void {
        this.result.text += city
    }
    getResult(): FullName { return this.result }
}

export class ShortNameBuilder implements Builder {
    private result = new ShortName()

    reset(): void { this.result = new ShortName()}

    addGender(isMale: boolean): void {
        this.result.text += isMale ? "m" : "f"
    }
    addFirstName(name: string): void {
        this.result.text += name.slice(0, 3)
    }
    addLastName(name: string): void {
        this.result.text += name.slice(0, 3)
    }
    addCity(city: string): void {
        this.result.text += city.slice(0, 3)
    }
    getResult(): ShortName { return this.result }
}