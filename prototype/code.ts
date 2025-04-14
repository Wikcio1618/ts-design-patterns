export interface Prototype<T> {
    clone(): T
}

abstract class Button implements Prototype<Button> {
    public primitive: any
    public component: object
    public circularReference: ButtonWithBackReference

    abstract clone(): this
}

export class RoundButton extends Button {
    clone(): this {
        const clone: this = Object.create(this)
        clone.component = Object.create(this.component)
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };
        return clone
    }
}

export class TriangleButton extends Button {
    clone(): this {
        const clone = Object.create(this)
        clone.component = Object.create(this.component)
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };
        return clone
    }
}

export class ButtonWithBackReference {
    constructor(public prototype: Button) {
        this.prototype = prototype;
    }
}

export class ButtonPrototypeRegistry {
    private static prototypeRegistry: Record<string, Button> = {}
    static register(tag: string, prototype: Button) { this.prototypeRegistry[tag] = prototype }
    static getCloneByTag(tag: string): Button | null {
        const prototype = this.prototypeRegistry[tag]
        return prototype ? prototype.clone() : null
    }
}
