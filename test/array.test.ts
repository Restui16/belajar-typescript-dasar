describe('Array', function (){
    it('should same with javascrpt', function(){

        const names: string[] = ["Restu", "Budi", "Joko"]
        const values: number[] = [1,2,3]

        console.info(names)
        console.info(values)
    })

    it('should support readonly array', function(){

        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"]

        console.info(hobbies)
        console.info(hobbies[0])
        console.info(hobbies[1])

        // hobbies[0] = 'Main Game' data tidak bisa diubah karna deklarasi readonly array
    })

    it('should support tuple', function (){
        // tuple adalah tipe data array yang panjang dan nilai nya sudah ditentukan
        // tuple bersifat readonly, tidak bisa diubah hanya bisa dibaca

        const person: readonly [string, string, number] = ["Restu", "Budi", 100000]

        console.info(person)
        console.info(person[0])
        console.info(person[1])
        console.info(person[2])
    })
})