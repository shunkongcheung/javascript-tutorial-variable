const bool1 = true // also try false
console.log(`bool1: ${bool1}`)


// Equal and not equal
const cat = 'Cat'
const doggy = 'doggy'
const isTwoAnimalEqual =  cat === doggy 
console.log(`isTwoAnimalEqual: ${isTwoAnimalEqual}`)

const isTwoAnimalNotEqual = cat !== doggy
console.log(`isTwoAnimalNotEqual: ${isTwoAnimalNotEqual}`)


// Number comparision
const firstNumber = 5
const secondNumber = 10

const isFirstNumberGreater = firstNumber > secondNumber // also try <, >=, <=
console.log(`isFirstNumberGreater : ${isFirstNumberGreater}`)

// using !
const isFirstNumberSmaller = !isFirstNumberGreater 
console.log(`isFirstNumberSmaller : ${isFirstNumberSmaller}`)

const isFirstNumberGreaterFlipFlip = !!isFirstNumberGreater
console.log(`isSomeStrNonEmpty: ${isFirstNumberGreater}`)

// try changing it to: 
// const someStr = '' // '' is an empty string, this is falsy
// const someStr = 0 // 0 is falsy
// const someStr = 1 // non empty numbers are truthy
const someVar = 'Hello world' 
const isVarEmpty = !someVar
console.log(`isStrEmpty: ${isVarEmpty}`)


