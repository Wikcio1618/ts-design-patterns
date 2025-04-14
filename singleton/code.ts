export class CacheSingleton {
    private static _instance: CacheSingleton;

    private constructor() { }
    public static get getInstance(): CacheSingleton {
        if (!CacheSingleton.instance) {
            CacheSingleton.instance = new CacheSingleton();
        }
        return CacheSingleton.instance;
    }
    public static set instance(value: CacheSingleton) {
        CacheSingleton._instance = value;
    }
}