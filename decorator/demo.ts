import { AuthorizationDecorator, Cluster, LoggingDecorator } from "./code"

function clientCode() {
    const withAuth = new AuthorizationDecorator(
        new LoggingDecorator(
            new Cluster()), "admin"
    )
    withAuth.run()

    const withBadAuth = new LoggingDecorator(
        new AuthorizationDecorator(
            new Cluster(), "user")
    )
    withBadAuth.run()
}

clientCode()