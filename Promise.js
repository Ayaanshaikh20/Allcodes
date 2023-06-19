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
    return fetch("marie.json")
}).then((response)=>{
    console.log("Promise 2 resolved", response)
}).catch((error)=>{
    console.log(error)
})
