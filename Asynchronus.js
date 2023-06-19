//Asynchronous JavaScript
// Async Code Example

console.log(1);
console.log(2);

//Async code
setTimeout(time=()=>{
    console.log("This will print after 3 seconds")
}, 3000)

console.log(3);
console.log(4);


const todos = (callBack) => {
    // Making HTTP request (Example)
    let request = new XMLHttpRequest();

    console.log(request)

    //set an eventListner
    request.addEventListener("readystatechange", ()=>{
        if(request.readyState == 4 && request.status == 200){
            callBack(undefined,request.responseText);
        }else if(request.readyState == 4){
            callBack("Data could not be fetched", undefined);
        }
        
})

    // Set up the request
    request.open("Get", "https://jsonplaceholder.typicode.com/todos")

    // sending the request
    request.send()
}

todos(callBack = (error, Data) => {
    if(error){
        console.log(error)
    }else{
        console.log(Data)
    }
})


// async and await

let get


