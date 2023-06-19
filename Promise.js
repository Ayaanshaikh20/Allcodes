//Promise General Example
let number = 19; 
let getSomething = () => {
    return new Promise((resolve, reject)=>{
        if(number > 20){
            let data = resolve("number is greater than 20")
           
        }
        else{
            let error = reject("number is not greater than 20")
          
        }
        
    })
}

getSomething().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})


//Fetch API
fetch("data.json").then((response)=>{
    console.log("Promise 1 resolved", response)
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})


//async and await

let getTodos = async() => {
    let response = await fetch("data.json");
    let data1 = await response.json()
    return data1
}

getTodos().then((data1) => {
    console.log(data1)
}).catch((error)=>{
    console.log(error)
})


//using async await without using then and catch

let getTodos1 = async() => {
    try{
        let response = await fetch("data.json");
        let data1 = await response.json();
    
        let response2 = await fetch("marie.json");
        let data2 = await response2.json();
    
        console.log(data1, data2)
    }
    catch(error){
        console.log(error.message)
    }
}

getTodos1()