export class CacheSingleton {
    private static _instance: CacheSingleton;

    private constructor() { }
    public static get instance(): CacheSingleton {
        if (!CacheSingleton._instance) {
            CacheSingleton._instance = new CacheSingleton();
        }
        return CacheSingleton._instance;
    }
    public static set instance(value: CacheSingleton) {
        CacheSingleton._instance = value;
    }
}