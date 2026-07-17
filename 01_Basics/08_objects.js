const mySym= Symbol("Key1")
let JsUser={
    name:"Shubham",
    age:21,
    [mySym]:"Key1",
    age: 18,
    location: "Jaipur",
    email: "Shubham@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.age)
console.log(JsUser[mySym])

JsUser.greetings=function(){console.log(`Hello User ${JsUser.name}`)}
console.log(JsUser.greetings())