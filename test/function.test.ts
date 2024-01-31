describe('Function', function(){
    it('should support in typescript', function(){
        function sayHello(name: string) :string {
            return `Hello ${name}`
        }

        expect(sayHello("Restu")).toBe("Hello Restu")

        function printHello(name: string) :void {
            console.info(`${name}`)
        }

        printHello("Joko")
    })

    it('should support default value', function(){
        function sayHello(name: string = "Guest") :string {
            return `Hello ${name}`
        }

        expect(sayHello("Restu")).toBe("Hello Restu")
        expect(sayHello()).toBe("Hello Guest")
    })

    it('should suppurt rest parameter', function (){
        function sum(...values: number[]) :number {
            let total = 0
            for (const value of values) {
                total += value
            }

            return total
        }

        expect(sum(1,2)).toBe(3)
    })

    it('should support optional parameter', function(){

        function sayHello(firstName: string, lastName?: string):string {
            if(lastName){
                return `Hello ${firstName} ${lastName}`
            } else {
                return `Hello ${firstName}`
            }
        }

        expect(sayHello("Restu")).toBe("Hello Restu")
        expect(sayHello("Restu", "Wibowo")).toBe("Hello Restu Wibowo")
    })

    it('should support function overloading', function (){
        function callMe(value: number) :number
        function callMe(value: string) : string
        function callMe(value: any) :any {
            if(typeof value === 'number'){
                return value * 10
            } else if (typeof value === 'string'){
                return value.toUpperCase()
            }
        }

        expect(callMe(10)).toBe(100)
        expect(callMe("Restu")).toBe("RESTU")
    })

    it('should support function as parameter', function(){
        function sayHello(name: string, filter: (name: string) => string) : string {
            return `Hello ${filter(name)}`
        }

        function toUpper(name: string) :string {
            return name.toUpperCase()
        }

        console.info(sayHello("Restu", function (name: string) : string  {
            return name.toUpperCase()
        }))

        console.info(sayHello("Restu", (name: string): string => name.toUpperCase())) 

        expect(sayHello("Restu", toUpper)).toBe("Hello RESTU")
    })
})