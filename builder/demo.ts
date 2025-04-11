import { FullNameBuilder, ShortNameBuilder, Director, ShortName, FullName, PersonInfo } from './code'

const person1: PersonInfo = {
    firstName: "John",
    lastName: "Doe",
    city: "Berlin",
    isMale: true
}

const person2: PersonInfo = {
    firstName: "Alex",
    city: "NewYork",
}

let shortNameBuilder = new ShortNameBuilder()
let fullNameBuilder = new FullNameBuilder()
let director = new Director(shortNameBuilder)

director.make(person1)
let person1Short = shortNameBuilder.getResult()
director.make(person2)
let person2Short = shortNameBuilder.getResult()

director.changeBuilder(fullNameBuilder)

director.make(person1)
let person1Full = fullNameBuilder.getResult()
director.make(person2)
let person2Full = fullNameBuilder.getResult()

console.log(person1Short)
console.log(person2Short)
console.log(person1Full)
console.log(person2Full)