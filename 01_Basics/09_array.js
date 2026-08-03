// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// const frootbucket = []
// frootbucket.push(" banana","apple","mango",)
// // console.log(frootbucket.length)
// frootbucket[5] = "Green" // creating empty slot without creating new element
// console.log(frootbucket[5]) 
// console.log(Object.keys(frootbucket))
// console.log(frootbucket.length)
// console.log(frootbucket)

const arr = ["red", "blue","yellow "]
arr[5]="pink"
// arr.forEach((item,index)=>{
//     console.log(`${index} : ${item}`)
// })
// console.log(arr.reverse())
const arr1=arr.keys()
for(const key of arr1){
    console.log(`${key}: ${arr[key]}`)
   
}


