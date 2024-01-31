import { Seller } from "../src/seller";
import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";

describe('Interface', function () {
    it('should support in typescript', function (){
        const seller: Seller = {
            id: 1,
            name: "TOKO ABC",
            nib: '123131211',
            npwp: '12313111'
        }

        seller.name = "TOKO Restu"
        // seller.nib = "1212" error, karna readonly properties

        console.info(seller)
    })

    it('should support function interface', function (){

        interface addFunction {
            (value1: number, value2: number): number
        }

        const add: addFunction = (value1: number, value2: number) => {
            return value1 + value2
        }

        expect(add(1,2)).toBe(3)
    })

    it('should support indexable interface', function (){
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["Restu", "Joko", "Budi"]
        console.info(names)
    })

    it('should support indexable for non number index', function(){
        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            name: "Restu",
            address: "Depok"
        }

        console.info(dictionary)
        console.info(dictionary['name'])
    })

    it('should support extends interface', function (){

        const employee: Employee = {
            id: 1,
            name: "Restu",
            division: "IT"
        }

        const manager: Manager = {
            id: 2,
            name: "Joko",
            division: "IT",
            numberOfEmployess: 10
        }

        console.info(employee)
        console.info(manager)
    })

    it('should support function in interface', function(){
        const person: Person = {
            name: "Restu",
            sayHello: function (name: string) : string {
                return `Hello ${name} my name is ${this.name}`
            }
        }

        console.info(person.sayHello('Joko'))
    })

    it('should support intersection types', function(){
        interface HasName {
            name: string
        }

        interface HasId {
            id: string
        }

        type Domain = HasName & HasId

        const domain: Domain = {
            id: "1",
            name: "Restu"
        }

        console.info(domain)
    })

    it('should support type assertions', function(){
        const person: any = {
            name: "Restu",
            age: 25
        }

        const person2: Person = person as Person

        console.info(person2)
    })
})