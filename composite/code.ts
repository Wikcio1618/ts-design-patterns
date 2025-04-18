export interface ComputingComponent {
    getUsage(): number
}

export class Cluster implements ComputingComponent {
    constructor(private children: ComputingComponent[] = []) { }

    addChild(child: ComputingComponent): void { this.children.push(child) }

    get getChildren() { return this.children }

    getUsage(): number {
        let usage = 0
        for (const child of this.children)
            usage += child.getUsage()
        return usage
    }
}

export class Machine implements ComputingComponent {
    getUsage(): number {return 1}
}