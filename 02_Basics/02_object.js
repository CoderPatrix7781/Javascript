// object literals
const mysym = Symbol("key")
const jsUser ={
    name : "Pratik",
    [mysym]:"mykey",
    age : 19,
    email : "pratik2gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Tuesday"]
}
jsUser.email="pratikk@gamil.com"
console.log(jsUser)
console.log(jsUser["email"])
console.log(jsUser[mysym])
// Object.freeze(jsUser)
jsUser.email="rahul@gamil.com"
console.log(jsUser)
jsUser.greeting = function(){
    console.log("js user")
}
console.log(jsUser.greeting())
jsUser.greetingT = function(){
    console.log(`hello developer ${this.name}`)
}
console.log(jsUser.greetingT())