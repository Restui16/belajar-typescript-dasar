describe('any', function (){
    it('should support in typscript', function (){
        // tipe any di typescript tidak melakukan pengecekan data
        // direkomendasikan hanya untuk kebutuhan urgent
        const person: any = {
            id: 1,
            name: "Restu Wibowo",
            age: 25
        }

        person.age = 26
        person.address = "Depok"

        console.info(person)
    })
})