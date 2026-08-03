// // const arr = [1,2,3,4,5]
// // const Myarr = new Array(3,4,5,6,7)
// //  const newArr = [9,8,7,6,5]
// // console.log(arr.push(20))
// // Myarr.push(100)
// // Myarr.pop(100)
// // Myarr.unshift(2000)
// // Myarr.shift()
// // console.log(Myarr.includes(10))
// // console.log(Myarr.indexOf(9))
// // console.log(Myarr.push(100))
// // console.log(arr.pop(5))
// // // console.log(Myarr.unshift(5))
// //  const newArr = Myarr.join()
 
// // console.log(Myarr)
// // console.log(typeof newArr)
// const oldArr = [1,2,3,4,5,6,7,8,]
// const newArr = oldArr.slice(1,3)
// console.log("A",oldArr)
// console.log(newArr)
// console.log("B",oldArr)
// const newArr1 = oldArr.splice(1,3)
// console.log("C",oldArr)
// console.log(newArr1)

// const marvel_heros = ["thor","ironman","loki"]
// const dc_heros = ["superman","batman","flash"]
// // marvel_heros.push(dc_heros)
// // console.log(marvel_heros[3][1])
//  const newmarvel = [...marvel_heros, ...dc_heros]
//  console.log(newmarvel)
// const newArr =[1,2,3,4,[6,7,8],[12,13,[14,15,16]]]
// const oldArr =newArr.flat(Infinity)
// console.log(newArr)
// console.log(oldArr)
console.log(Array.isArray("pratik"))
console.log(Array.from("pratik"))
console.log(Array.from({name: "pratik"}))

let s1 = 200
let s2 = 300
let s3 = 400
console.log(Array.of(s1,s2,s3))
