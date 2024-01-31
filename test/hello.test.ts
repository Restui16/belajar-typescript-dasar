import { sayHello } from "../src/say-hello";

describe('sayHello', function () {
    it('should return hello restu', function(){
        expect(sayHello('Restu')).toBe("Hello Restu")
    })
})