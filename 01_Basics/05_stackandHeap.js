// the example of  stack and heap memory 
let score = 11
let anotherScore = score
anotherScore =12
console.log(score)
console.log(anotherScore) // stack giving the only copy

// heap memory 
let userOne ={  // heap memory provide only referance 
    email: "kk@1.com",
    name: "pratik"

}
let userTwo = userOne

userTwo.email = "pik@1.com"
console.log(userOne.email)
console.log(userTwo.email)