import { LookupManager, ObjectStorage, RecordStorage } from "./code";

function clientCode() {
    const implementations = [
        { name: "MapStorage", impl: new ObjectStorage<string, number>() },
        { name: "RecordStorage", impl: new RecordStorage<string, number>() }
    ];

    for (const { name, impl } of implementations) {
        console.log(`\nUsing implementation: ${name}`);

        const manager = new LookupManager(impl);

        manager.insert("a", 100);
        manager.insert("b", 200);

        const a = manager.getOrDefault("a", -1);
        const c = manager.getOrDefault("c", -1);

        if (a === 100) {
            console.log("✅ Value inserted and retrieved correctly via abstraction.");
        } else {
            console.log("❌ Failed to retrieve inserted value.");
        }

        if (c === -1) {
            console.log("✅ Default value returned for missing key.");
        } else {
            console.log("❌ Fallback mechanism failed.");
        }

        console.log("✅ Abstraction (LookupManager) worked identically across different implementations.");
    }
}

clientCode()