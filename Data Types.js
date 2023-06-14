//variables
var score = 23;
var score = 56; //Can be redeclare
console.log(score)

//let 
let points = 45; //cannot be redeclare but reassignment is possible 
points = 56                      

//Const
const value = 10; //cannot be redeclare and reassignment is also not possible
console.log(value)

//Data Types of values

//7 Data Types

// Numbers 1,2,22,33,76,3.4 all are numbers in javascript

//String "I am string", "34", 'Also String'

//Boolean true/false

// Null Intentionally absence of value
let scores = null;  
console.log(scores)

//Undefined variable declare but not initialized 
let point;
console.log(point)

//Object Complex Data Structure 

//Symbol looks like object

//Strings
console.log("Hello Coders")
let firstName = "Wow";
let lastName = "Programmer"
console.log(firstName,lastName)

//String Concatenation 

//Method 1 using + Operator
let fullName = firstName + " " + lastName
console.log(fullName)

//Method 2 using template literals 
fullName = `I want to Become ${firstName} ${lastName}`
console.log(fullName)

//Getting String Character
console.log(fullName[0])
console.log(fullName[1])
console.log(fullName[5])

//String methods
console.log(firstName.toUpperCase()) //this will convert string to uppercase
console.log(lastName.indexOf('m'))

//Common String Methods
let hobbies = "     coding reading running    ";
console.log(hobbies)

//trim method
let result = hobbies.trim() //trim basically removes the spaces present in the beginning and ending of the string
console.log(result)

//indexof //it is case Sensitive 
console.log(hobbies.indexOf("coding"))
console.log(result.indexOf("coding"))

//lastindexof //it is case Sensitive 
console.log(hobbies.lastIndexOf("running"))
console.log(result.lastIndexOf("running"))  

//includes method
console.log(result.includes("reading")) // it is used to check wether the word exists in the string or not


//slice method //it excludes the end index but includes the start index
fullName = "Wow programmer"  //Strings are immutable
console.log(fullName.slice(0,5))
console.log(fullName.slice(0,6))
console.log(fullName.slice(1,8)) 
console.log(fullName)

result = fullName.slice(0,6)
console.log(result)

//String split method
let favoriteColors = "Brown_ ,Blue_ ,Black_ ,Grey";
let arrColors = favoriteColors.split('_ ,');
console.log(arrColors)

//Javascript strings are immutable
let str = "Hello";
str = str + "Programmers"
console.log(str)

//Numbers
let num = 50;

//typeof
console.log(num, typeof(num))

//Mathematical operators * / % ** + -
result = num / 2; //Gives Quotient 
console.log(result);

result = num%2; //Gives remainder
console.log(result)

result = num *2 + (4*3) - 8 / 2 % 4;
console.log(result)

result = '12' / 45
console.log(result, typeof(result))

//loose equality (==) vs strict equality operator (===)

// loose equality operator ==
let age = 22;
console.log(age=='22'); //it displays true even if the both the value have different data type
console.log(age!='22');

// strict equality operator ===
age = 22;
console.log(age==='22'); //here it displays false
console.log(age!=='22');

//Type conversion
let stringType = '54';
console.log(stringType, typeof(stringType))

//Number Method
let numberType = Number(stringType);
console.log(numberType, typeof(numberType))

// ****Imp Note**** 
// In Number method passing string must be of numeric values 

//Boolean method true/false
let Age = ""; //empty value is by default false
let booleanValueOfAge = Boolean(Age)
console.log("This boolean value is " + booleanValueOfAge)

//Arrays
let dishes = ['Biryani', 'Paratha', 'Roti', 'Rice'];

//Access Arrays
console.log(dishes[3]);

//Modify the array
dishes[0] = "Jeera Rice"
console.log(dishes)

//Array Methods

//Join Methods
console.log(dishes.join(',')) //even if you dont put comma you get comma

//Concat to arrays
let sweets = ['gulab-jamun', 'kheer', 'jalebi']
fullCourse = dishes.concat(sweets)
console.log(fullCourse)

//length property in array
console.log(dishes.length)
console.log(sweets.length)
console.log(fullCourse.length)

//push method //This will tell what is the length of the array after adding an item into the list
console.log(fullCourse.push('Dal', 'Mango juice')); // you can add multiple elements into the list 
console.log(fullCourse) 

//pop method
console.log(fullCourse.pop())
console.log(fullCourse) //pop method updates the original array like push method

//Boolean Values and comparison operators
let booleanType = true;
let StringType = "true"

console .log(typeof booleanType, typeof stringType)

//Methods Return Boolean Values
let email = "wowcoder@example.com"
console.log(email.includes("@"))

//Comparison operators always return boolean value
// ==, ===, !==, !=
// >, >=
// <, <=



//+operator
let a = 10;
console.log("a++ ", a++);
console.log(a++);
console.log(a);

console.log("++a ", ++a);
console.log(++a);


//Switch Statement
let ab = "Friday"

switch(ab){
    case "Sunday":
        console.log("Its holiday");
        break;

    case "Monday":
        console.log("Python tasks");
        break;

    case "Tuesday":
        console.log("JavaScript tasks");
        break;

    case "Wednesday":
        console.log("C++ tasks");
        break;

    case "Thursday":
        console.log("C tasks");
        break;
    case "Friday":
        console.log("Html tasks");
        break;
    }


sessionStorage.setItem("Ayaan",22);
