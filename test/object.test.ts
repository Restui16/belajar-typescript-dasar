describe('Object', function(){
    it('should support in typescript', function(){
        const person: {id: string, name: string, hobbis?: string} = {
            id: "1",
            name: "Restu"
        }
    
        console.info(person)
    })

})