let num = [1, 2, 3, 4];
console.log(...num)

//useCases
let num1 = [5, 6, ...num]
console.log(num1)



let hotel = {
    name:"hotell",
    location: "street No xyz delhi",
    categories: ["chinese", "italian", "English"],
    mainMenu: ["FoodA", "FoodB", "FoodC"],
    openingHours:{
        sunday:{open:"09:00AM", closes:"11:00PM"},
        monday:{open:"10:00AM", closes:"10:00PM"}
    }
}

let updatedMenu = [...hotel.mainMenu, "FoodD", "FoodE"];
console.log(updatedMenu)

//put updatedMenu into the array of objects
hotel.mainMenu = updatedMenu

console.log(hotel)

//Spread(...) operator is present in the RHS
// while rest operator is present in the LHS

let [a, b, ...rest] = [2, 3, 4, 5, 6];
console.log(rest)   //output [4, 5, 6]
console.log(a)      //2


let result = 0 && true;
console.log(result);


for(let i of num){
    console.log(i)
}

let menu1 = [...hotel.categories, ...hotel.mainMenu];
for([i,item] of menu1.entries()){
    console.log(`${i+1} : ${item}`)
}

//without optional chaining
if(hotel.openingHours && hotel.openingHours.saturday){
    console.log(hotel.openingHours.saturday.open);
};

//with optional chaining
console.log(hotel.openingHours.saturday?.open)  //line before question mark will check whether saturday is present or not if yes it will go into open

//Set in Js
let newSet = new Set([1, 2, 3, 4, 5, 6, 1, 1])
console.log(newSet)
console.log(newSet.size)
console.log(newSet.has(2))