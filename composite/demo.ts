import { Cluster, Machine } from "./code";

function clientCode() {
    const machine1 = new Machine();
    const machine2 = new Machine();
    const machine3 = new Machine();

    const cluster1 = new Cluster();
    cluster1.addChild(machine1);
    cluster1.addChild(machine2);

    const cluster2 = new Cluster();
    cluster2.addChild(cluster1);
    cluster2.addChild(machine3);

    console.log("Usage of cluster1 (2 machines):", cluster1.getUsage()); // 2
    console.log("Usage of cluster2 (cluster1 + 1 machine):", cluster2.getUsage()); // 3
}

clientCode();
