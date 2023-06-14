//Getting Html elements using querySelector/All

//queryselector returns "firstelement" that match CSS selector

//To get all matched elements we use querySelectorAll

// let resultedElement = document.querySelector('h3')
// console.log(resultedElement)

// //Access element with class
let arr = []
let resultedElement1 = document.querySelectorAll('li');
resultedElement1.forEach(function(element){
    console.log(element.innerText)
});
// //Access element with id
// let resultedElement2 = document.querySelector('#coder')
// console.dir(resultedElement2)


//innerHtml
//it does not ignores spaces
//Retrieve and set content in HTML format
//No need to print in innerHtml

// let readText = document.querySelector('.content')
// readText.innerHTML += '<p>Changed using innerHtml</p>'


//innerText
//it ignores spaces
//Retrieve and set content in plain text

// let readText1 = document.querySelector('.content')
// readText1.innerText = '<p>Changed using innerText</p>'

//get attribute is used to read 
// let coderDostLink = document.querySelector('a')
// console.log(coderDostLink.getAttribute('href'))

//set attribute is used to write a value
// coderDostLink.setAttribute('href',"https://www.youtube.com/watch?v=vpAJ0s5S2t0");
// console.log(coderDostLink.getAttribute('href'))
// coderDostLink.innerHTML = '<p>Bootstrap video by code with harry<p>'

//picked this from github of coder dost
// let content1 = document.querySelector('#coder')
// console.log(content1.innerHTML)

// let content = document.getElementById('content');

// console.log(content.innerHTML);

// console.log(content.innerText);

//style method
// let styleMethod = document.querySelector('h1');
// styleMethod.style.color = "yellow"

//Add, Remove and replace class of element 
// let heading = document.querySelector('h6');
// console.log(heading)
// console.log(heading.classList.add('newClass'))

// //Remove the class
// heading.classList.remove("newClass")



//Replace the class name
// console.log(heading.classList.replace('coderDost1', 'replacedclass'))


//Access the children
// let parent = document.querySelector('.content')
// console.log(parent.children)

//Covert the html collection into array
// let convertedArray = Array.from(parent.children)  //[h1, h2]
// console.log(convertedArray)

// for(let i in convertedArray){
//     convertedArray[i].classList.add('convertedIntoArray')
// }
// console.log(convertedArray)

// let childElement = document.querySelector('h2')
// console.log(childElement.nextElementSibling.innerText)


//Event Basics (click event)


