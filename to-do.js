//Event Basics (click event)
let toDoList = document.querySelectorAll('ul')
console.log(toDoList)
// toDoList.addEventListener('click',function clicked(){
//     let codeprint = document.querySelector('.listclass2')
//     console.log(codeprint.innerText);

// })


//Remove an element
toDoList.forEach(function(element){
    
    element.addEventListener('click',function(e){
        console.log(e.target)
        // e.target.remove()
    });
});

//To add an element
let ul = document.querySelectorAll('ul')

let button = document.querySelector('button')

ul.forEach(function(element1){

    button.addEventListener('click',function(e){
        let addLi = document.createElement('li')
        addLi.classList.add('Hori')
        addLi.textContent = "Gaming";
        element1.append(addLi)
        //There is also prepend like append

})

});


//More Events

//Copy Event

let copyRightElement = document.querySelector('.coderDost')

copyRightElement.addEventListener('copy', function(){
    console.log("oops you cannot copy this")
})

//mouseMove event 

// let mouseMove = document.querySelector('.box')

// mouseMove.addEventListener('mousemove', function(e){
//     console.log(e)
// })


