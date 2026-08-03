// const tinderuser = new object ()
const tinderapp = {}
tinderapp.email = "pratik@gmail"
tinderapp.id = "123bcc"
tinderapp.isLoggedIn = false
tinderapp.number = 8392978909
// console.log(tinderapp)
const Data ={
    name : "pratik ",
    fullname:{
        username:{
            firstName : " Pratik",
            lastName : "Dixit"

        }
    }
}
// console.log(Data.fullname.username)

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"e",4:"d"}
const obj4 ={5:"e", 6:"f"}
// const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3)

 const user =[
    {
    id : 1,
    name : "pratik"
    },
    {

    },
    {

    },
    {

    }
]
// console.log(user)
// console.log(Object.keys(tinderapp))
// console.log(Object.values(tinderapp))
// console.log(Object.entries(tinderapp))
// console.log(tinderapp.hasOwnProperty('isLoggedI'))

const course ={
    courseName: "javascript",
    coursePrice: "999",
    courseTeacher:"Pratik"

}
// course.courseTeacher
const {courseTeacher : tacher}= course
console.log(tacher);



