// let fun = function nameOfFunction(name = " defaultname "){   //you can add a default value into name as
//     console.log("You are" + name +  "running")
// }
// fun(' marie ')


// let age = function currentAge(birthYear){
//     currentage = 2023 - birthYear
//     return currentage
// }

// console.log(age(2005))

// //Arrow function

// const nameInvite=(nameOfPerson)=>{
//     return `Welcome to the party ${nameOfPerson}`
// }

// console.log(nameInvite("Ayaan"))

// const upperCase=(str)=>{
//     // console.log(str.toUpperCase())
//     return str.toUpperCase();

// }

// const lowerCase=(str)=>{
//    return str.toLowerCase();
// }

// const sliceArray=(startIndex, endIndex, str)=>{
//     if(str.length<endIndex){
//         return str;
//     }else{
//         return str.slice(startIndex, endIndex);
//     }


// }
// // const transformer=(str,func)=>{
// //     return func(str)
// // }


// let returnedValue = sliceArray(0, 4, "Ay")
// console.log(returnedValue,"--------")


// Now immediately invoked function expression
//Executed only once


// (function(name){
//     console.log("My name is ayaan", name);
// })("Shaikh")

//setTimeout and setInterval

//setTimeout -> Run function "once" after "interval" of time

//setInterval -> Run function repeatedly, starting after the interval of time, then repeating.....

//setTimeout(func|code, delay, arg1, arg2....)
//setInterval(func|code, delay, arg1, arg2...)


// const stringPrinting=()=>{
//     console.log("my name is ayaan shaikh");
// }
// setTimeout(stringPrinting, 5000)
//   //5000ms = 5sec








//Introduction to objects

let carModels = [{color: "black",model: "2022",company: "Honda"},{color: "white",model: "2021",company: "BMW"}]
console.log(carModels[1].model)
for(let name in carModels){
    console.log(carModels[name])    
}
//Accessing the javascript object properties

console.log(carModels)  //{color: "black",model: "2022",company: "Honda"}
console.log(carModels.color)  //black
console.log(carModels["color"])  //black

//"Modify" the object

carModels.color = "orange"
console.log(carModels)


//Delete properties of object

let obj = {
    prop1 : "value1",
    prop2 : "value2"
}

delete obj.prop1;

console.log(obj)  //{prop2: "value"}


//Method is basically a function that is used inside an object

//example

let person = {
    ageCalculator:function age(birthyear = 2008){
        console.log(2023 - birthyear)
    }
}

person.ageCalculator()


//this keyword

// in each method we have an access 


let personInfo = {
    firstName: "Ayaan",
    lastName: {
        MiddleName: "Muhammad",
        getlastName: function last(){
            return this.MiddleName  
        }
    },
    birthYear: 2001,
    getSummary: function summary(){
        console.log(this.birthYear)
        return `My name is ${this.firstName} ${this.lastName.MiddleName}, I was born in ${this.birthYear}`
    }
}

console.log(personInfo.getSummary())
console.log(personInfo.lastName.getlastName())

const sumofnumber=(a, b)=>a+b
   
function sumofNumber(a, b){
    return a + b;
}

let sum = sumofnumber(10, 5);
console.log(sum);



//Objects inside Array

let blocklist = [{userName:"john",reason:"Abusive content"},{userName:"Ayaan", reason:"copyRight issue"}]

for(let i in blocklist){
    console.log(blocklist[i].userName)
    console.log(blocklist[i].reason)
}

// Math object built in object in javascript
arr1 = [1, 5, 8, 2, 4]
console.log(Math)
console.log(Math.max(...arr1))       // 8
console.log(Math.min(...arr1))       // 1

let num1 = 3.5
console.log(Math.round(num1))        // 4

let num2 = -3.5                       
console.log(Math.round(num2))        // -3

console.log(Math.floor(num2))        // -4

console.log(Math.ceil(num2))         // -3




// Bind method


function greet(){
    console.log(`Hello ${this.firstName} how are you`)
}

let greets = greet.bind(personInfo)

greets()



//"objects/arrays" how 'reference' are passed to variable
// array and object are by default passed by reference
let arr = [1, 2, 3, 4, 5, 6]
let getref = arr;

getref[5] = 7;
getref.shift()

console.log(getref)     //[2, 3, 4, 5, 7]
console.log(arr)        //[2, 3, 4, 5, 7]

//if we want arrays and objects to pass by value we use spread operator
let getval = [...arr]
getval[5] = 8;
console.log(arr)
console.log(getval)


//Call

const Person = {
    name: "p1",
    getName: function(){
        return this.name
    }
}

const p2 = {name : "p2"};

console.log(Person.getName.call(p2))

//apply
