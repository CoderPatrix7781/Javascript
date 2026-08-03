function evenodd(n){
 if(n%2==0){
    console.log("this even number")
 }else{
    console.log("odd number")
 }
}
// evenodd(4)
function loginusermessage(username){
    if(username=== undefined)
        return
    return `${username} just logged in`
}
// console.log(loginusermessage());
function shopingcart(...num){ // rest operter and also calling spred opertor
 return num
}
console.log(shopingcart(2,3,4,5,6,7,8))
 const user ={
    username:"pratik",
     price: "123"
 }
 function handle(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
 }
 handle(user)

 const newArray =[2,4,6,8,10]

 function returnsecondValue(getnewarry){
    return getnewarry[1]
 }
 console.log(returnsecondValue(newArray))
