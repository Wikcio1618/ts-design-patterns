interface ComputingComponent {
    run(): void
}

export class Cluster implements ComputingComponent {
    run(): void { console.log("Compute instance is runnig") }
}

export class BaseDecorator implements ComputingComponent {
    protected constructor(private wrapee:ComputingComponent) { }
    run(): void { this.wrapee.run() }
}

export class AuthorizationDecorator extends BaseDecorator {
    constructor(private wrappee: ComputingComponent, private user: string) { super(wrappee) }
    run(): void {
        if (this.user !== "admin") {
            console.log("Unauthorized access attempt");
            return;
        }
        this.wrappee.run()
    }
}

export class LoggingDecorator extends BaseDecorator {
    constructor(private wrappee: ComputingComponent) { super(wrappee) }
    run(): void {
        console.log("Logging start");
        this.wrappee.run();
        console.log("Logging end");
    }
}