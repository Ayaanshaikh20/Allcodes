// //Question 1
// let age = 21;
// console.log(age>10 && age<20);

// //Question 2
// let ab = "Friday"

// const DayTimeTable=()=>{
//     switch(ab){
//         case "Sunday":
//             console.log("Its holiday");
//             break;
    
//         case "Monday":
//             console.log("Python tasks");
//             break;
    
//         case "Tuesday":
//             console.log("JavaScript tasks");
//             break;
    
//         case "Wednesday":
//             console.log("C++ tasks");
//             break;
    
//         case "Thursday":
//             console.log("C tasks");
//             break;
//         case "Friday":
//             console.log("Html tasks");
//             break;
//         }

// }
// DayTimeTable()

// //Question 3
// let number = 24;
// const divisible=()=>{
//     if(number%2==0 && number%3==0){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// divisible()

// //Question 3
// number = 22;
// const divisible1=()=>{
//     if(number%2==0 || number%3==0){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// divisible()


// //Question 5 
// const drive=()=>{
//     let Age = 17;
//     let result = Age>18? "You can drive": "You cannot drive"; 
//     console.log(result);
// }

// drive()



// //Question 6
// let obj = {"harry": 98, "rohan": 70, "aakash": 7};
// const allmarks=()=>{
//     for(let i = 0; i < Object.keys(obj).length; i++){
//         console.log(`The marks of students ${Object.keys(obj)[i]} are ${Object.values(obj)[i]}`);
//     }
// }

// allmarks();

// //Questions 7
// const UsingForInLoop = () =>{
//     for(let i in obj){
//         console.log(`The marks of students ${i} are ${obj[i]}`);
//     }
// }

// UsingForInLoop();

// //Question 8
// // let userEnter  
// // let correctNumber = 24;
// // const TryAgain = () =>{
// //     while(correctNumber != userEnter){
// //         userEnter = prompt("Enter a number: ");
// //         if(correctNumber == userEnter){
// //             alert("Yahoo!! you guessed it right");
// //         }else{
// //             alert("Try Again");
// //         }
        
// //     }
    
// // }

// // TryAgain();


// //Question 9
// let sum = 0;
// arr = [1, 2, 3, 4, 5]
// const mean=(a, b, c, d, e)=>{
//     console.log((a+b+c+d+e)/5);
// }

// mean(1, 2, 3, 4, 5)


// let str = "Ayaan";
// // console.log(str.includes('n'))
// // console.log(str.startsWith("a"))
// // console.log(str.endsWith('y'))
// console.log(typeof str)
// let newnum = Number(str);
// console.log(typeof newnum)

// console.log(str.toLowerCase())

// let problem = "Please give me Rs 1000"

// console.log(problem.slice(18))
// console.log(problem.replace("1000", "150"))

// let string =Milk,1,1.5Eggs,12,0.1Bread,2,1.6Cheese,1,4.5ypeof stringConvert)


// let n = [1, 2, 4]
// console.log(typeof n)
// console.log(n.pop())
// console.log(n)


let objArray =[
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ]
      

  const getTotalPrice=(objArray)=>{

    let demo=0;
    for(i in objArray){
         demo = demo + objArray[i].quantity * objArray[i].price;
    }
    console.log(demo)

  }
getTotalPrice(objArray)



