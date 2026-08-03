const naam ="pratik"
const age = 25
const domain = "fullstack"

console.log(naam+age+domain)  /// its not a good pratice 

console.log(`hello my name is ${naam} and my age is ${25} and my domain is ${domain}`)

// the morden way to declare stng 
const gameName = new String("Pratik")
console.log(gameName[1])
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
const newString= gameName.substring(0,4)
console.log( newString)
const anotherString = gameName.slice(1,5)
console.log(anotherString)
const newStringOne ="   ayush   "
const wifi= "         kkkkk        "
console.log(newStringOne.trim())
console.log(wifi)

const url ="https://pratik.com/pratik%20dixit"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))

