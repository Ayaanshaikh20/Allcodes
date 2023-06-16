//Local Storage

//In Previous todo list task when we refresh the browser we
//lose our current state data

//Store and retrieve data from database

//for now our focus is on local storage
//store and retrieve data from local storage

//it is api provided by browser to store data inside browser


//local Storage
//set item
//get item
//update item

//Set item in local storage
localStorage.setItem("passion", "programming")
localStorage.setItem('age', 24)
localStorage.setItem('', 26)

//Get item in local storage
console.log(localStorage.getItem('passion'))
console.log(localStorage.getItem('age'))


//Remove item

localStorage.removeItem('age')
localStorage.removeItem('')

//How to store complex data structure like
//array of objects

//Ultimately in local storage date store in string format

let vehicles = [
    {
        company: "Honda",
        model: "2009"
    },
    {
        company: "Toyota",
        model: "2010"
    }
]

let stringOfVehicles = JSON.stringify(vehicles)

localStorage.setItem('vehicles', stringOfVehicles)

console.log(localStorage)

//Get stored item again in object format

let object = localStorage.getItem("vehicles")
let objectFormat = JSON.parse(object)
console.log(objectFormat)

// Without using getItem method
let objectFormat1 = JSON.parse(stringOfVehicles);
console.log(objectFormat)