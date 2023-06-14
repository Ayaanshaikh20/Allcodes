let budget = 7000;
const budgetesti = () => {
    if (budget < 6000) {
        console.log(`The budget ${budget} is less than 6000`)

    } else {
        console.log(`The budget ${budget} is greater than 6000`)
    }

}

budgetesti()


// using else if

budget = 8000;
const budgetestimate = () => {
    if (budget > 6000) {
        console.log("Dinner at 5 star hotel")
    } else if (budget > 4000) {
        console.log("Dinner at 3 star hotel")
    } else if (budget > 2000) {
        console.log("Basic Dinner")
    } else {
        console.log("No dinner")
    }
}
//After the 1st condition true everything else will be rejected
budgetestimate()

//nested-if statement 
let number = 23;
if (number > 21) {
    console.log("first condition is true");
    if (number > 22) {
        console.log("Second condition is also true");
        if (number > 20) {
            console.log("third condition is also true");
        }
    }

}

//Break and continue statements
// also called as jump statements 

//Continue statement
//used to skip some values of loop

for (let i = 1; i <= 10; i++) {

    if (i == 2) {
        continue; //Move towards the next iteration
    }
    console.log("value of i is ", i);

}

const breakusage = () => {

    for (let j = 1; j <= 10; j++) {
        if (j == 5) {
            console.log("This is my desired output ", j);
            break;
        }
        console.log("value of j is ", j);
    }
    console.log("Now we are out of the loop");

}

breakusage()

//Variables and block scope

//scope >>- Area where variable is defined or accessbile

let marks = 90; //Global scope

if (true) {
    let marks = 50;
    console.log(marks)
}

//Ternary operator (? :)
//It is similar to if else condition

age = 19;
weight = 40;
result = age>18 && weight>50 ? "Qualify" : (age < 18 ?  "ageissue" : "weightissue");
console.log(result);

//complex ternary operator

let mark = 10;
result = mark > 35 ? "Excellent" : (mark > 25 ? "Good" : (mark > 15 ? "Average" : "Poor"));
console.log(result);


//Switch statement 

age = 17;

switch(age) {
    case 1:
        break;
    case 15:
        break;
    case 16:
        break;
    case 17:
        result = "These ages are allowed to sit in the exam";
        break;

    default:
        result = "Not Allowed"
        break;
}

console.log(result)