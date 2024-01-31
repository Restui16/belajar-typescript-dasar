describe('Union Type', function(){
    it('should support in typscript', function(){

        let sample : number | string | boolean = "Restu"
        
        console.info(sample)

        sample = 100
        console.info(sample)
        
        sample = true
        console.info(sample)

    })

    it('should suport typeof operator', function(){

        function process(value: string | number | boolean) {
            if(typeof value === 'string'){
                return value.toUpperCase()
            } else if( typeof value === 'number'){
                return value + 2
            } else {
                return !value
            }
        }

        expect(process('Restu')).toBe("RESTU")
        expect(process(100)).toBe(102)
        expect(process(true)).toBe(false)
    })
})