import { CustomerType, Customer } from "../src/enum"

describe('Enum', function(){
    it('should support in javascript', function(){
        const customer: Customer = {
            id: 1,
            name: 'Restu',
            type: CustomerType.GOLD
        }

        console.info(customer)
    })
})