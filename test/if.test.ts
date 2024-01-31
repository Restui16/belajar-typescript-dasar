describe('IF Statement', function(){
    it('should support in typescript', function(){
        const examValue = 90

        if(examValue > 80){
            console.info("Good")
        } else if (examValue > 65){
            console.info("Not Good")
        } else {
            console.info("Bad")
        }
    })

    it('should support ternary operator', function(){
        const value = 80
        const say = value > 70 ? "Congratulation" : "Try Again"

        console.info(say)
    })

    it('should switch statement', function(){
        function sayHello(name: string) {
            switch(name){
                case "Restu":
                    return "Hello Restu"
                case "Budi":
                    return "Hello Budi"
                default:
                    return "Hello"
            }
        }

        console.info(sayHello("Restu"))
        console.info(sayHello("Budi"))
        console.info(sayHello("Joko"))
    })
})