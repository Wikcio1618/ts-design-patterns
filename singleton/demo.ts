import { CacheSingleton } from './code'

function clientCode() {
    const s1 = CacheSingleton.instance
    const s2 = CacheSingleton.instance

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();