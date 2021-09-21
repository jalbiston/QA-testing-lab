const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions.js')




test("Should return the integer 2", () => {
    expect(returnTwo()).toEqual(2)
})


test("Should return Hello,  ${name}", () => { 
    expect(greeting('Jake')).toEqual('Hello, Jake')
})

test("Should display the sum of both numbers", () => {
    expect(add(5,7)).toEqual(12)
})

test("Should display product of both numbers", () => {
    expect(multiply(2,5)).toEqual(10)
})

test("Should display quotient of both numbers", () => {
    expect(divide(10, 2)).toEqual(5)
})

test("Should display difference of both numbers", () => {
    expect(subtract(25, 22)).toEqual(3)
})




describe('Math functions', () => {
    test("Should return the integer 2", () => {
        expect(returnTwo()).toEqual(2)
    })
    
    
    test("Should return Hello,  ${name}", () => { 
        expect(greeting('Jake')).toEqual('Hello, Jake')
    })
    
    test("Should display the sum of both numbers", () => {
        expect(add(5,7)).toEqual(12)
    })
    
    test("Should display product of both numbers", () => {
        expect(multiply(2,5)).toEqual(10)
    })
    
    test("Should display quotient of both numbers", () => {
        expect(divide(10, 2)).toEqual(5)
    })
    
    test("Should display difference of both numbers", () => {
        expect(subtract(25, 22)).toEqual(3)
    })
})
