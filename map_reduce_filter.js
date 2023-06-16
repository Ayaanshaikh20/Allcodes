let salaries = [3000, 4000, 5000, 10000];

//Map Method
let newSalaries = salaries.map(
  (Salary = (e) => {
    let updatedSalary = e / 2;
    return updatedSalary + e;
  })
);

console.log(newSalaries);

//Filter Method
let cart = ['mango', 'orange', 'lemon', 'watermelon'];

let cartValue = cart.filter(cartFilter = (e) => {
  return e == 'orange'
})

console.log(cartValue)


//reduce Method

let Grocery =[
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]

let groceryValue = Grocery.reduce(totalPrice = (total, element)=>{
  return total += element.quantity * element.price
},0)

console.log(groceryValue)

//Array Method

//findIndex Method
//Execute function for each array element
//It return "index" of that array element who "first" pass the test "otherwise" -1

let ages = [15, 25, 10, 30]

let findAges = ages.findIndex(function(e){
  return e > 28;
})

console.log(findAges)


// "some" and "every" method
// some method return "true" if any array element pass the test
// every method return "true" if "all" elements pass the test

let scores = [25, 34, 67, 65, 80, 92];


//Some method
let someScores = scores.some(score = (e) => {
  return e > 50;
});

console.log(someScores);



//Every method
let everyScore = scores.every(allScore = (e) => {
  return e >20;
});

console.log(everyScore);


//Flat Method
let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, 10]], [11, 12, 13]];

console.log("Before flat method: ", arr)

console.log("After flat method: ", arr.flat(2));   //by default 1(depth value) value


//flatMap method

//It is the combination of the 'map()' method
// followed by the "flat()" method of depth "1"

let newCart = [{
  name: "Mobile Phone",
  quant: 1,
  price: 500
},{
  name: "Tablet",
  quant: 1,
  price: 1000
}];

let cartValue1 = newCart.flatMap(cart = (item) => {
  if(item.name === "Mobile Phone"){
    return [item, {
      name: "Screen protector",
      quant: 1,
      price: 0
    }]
  }else{
    return item
  }
  
}) 

console.log(cartValue1)

//sort method

let num = [2, 5 ,7, -1, -22, -43];

console.log("Unsorted Array", num.sort())


console.log("Sorted array", num.sort(sorting = (a, b) => {
  return a-b
}))


//chain of methods 
let num1 = [1, 2, 3, 4, 5, 6]
console.log(num1.slice(0,3).splice(1, 2))
console.log(num1)         


