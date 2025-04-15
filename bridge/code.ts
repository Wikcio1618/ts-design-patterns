// abstraction
export class LookupManager<K, V> {
    constructor(private storage: LookupStorage<K, V>) { }

    insert(key: K, value: V): void { this.storage.put(key, value) }
    getOrDefault(key: K, defaultVal: V): V {return this.storage.getOrDefault(key, defaultVal) }

}

// implementation
export interface LookupStorage<K, V> {
    storage: any
    put(key: K, value: V): V | undefined
    getOrDefault(key: K, defaultVal: V): V
}

// export class MapStorage<K, V> implements LookupStorage<K, V> {
//     storage = new Map<K, V>()

//     put(key: K, value: V): V | undefined {
//         let result = this.storage.get(key)
//         this.storage.set(key, value)
//         return result
//     }
//     getOrDefault(key: K, defaultVal: V): V {
//         let result = this.storage.get(key)
//         return result === undefined ? defaultVal : result
//     }
// }

export class RecordStorage<K, V> implements LookupStorage<K, V> {
    storage: Record<string, V> = {}

    put(key: K, value: V): V | undefined {
        let result = this.storage[String(key)]
        this.storage[String(key)] = value
        return result
    }

    getOrDefault(key: K, defaultVal: V): V {
        let result = this.storage[String(key)]
        return result === undefined ? defaultVal : result
    }
}

export class ObjectStorage<K, V> implements LookupStorage<K, V> {
    storage: Object = {}

    put(key: K, value: V): V | undefined {
        let result = this.storage[String(key)]
        this.storage[String(key)] = value
        return result
    }

    getOrDefault(key: K, defaultVal: V): V {
        let result = this.storage[String(key)]
        return result === undefined ? defaultVal : result
    }
}