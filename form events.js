//form events (Submit Event)

let form = document.querySelector('.sign-up-Form')
// let email = document.querySelector('#email')
let password = document.querySelector('#password')
let Username1 = document.querySelector('#username')
//Method-1 to get password and email in console
// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     console.log(email.value,password.value)       
// })


//Method-2 to get password and email in console
// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     console.log(form.email.value,form.password.value)       
// })




//Regular Expression

//It is pattern of characters used to do pattern matching
//or we can say for 'Data Validation'

//Implementation of password validation

//Length at least = 8
//At least contain one upper case letter
//At least contain one lower case letter
//At least contain one digit 0 to 9

//this is for password
let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
form.addEventListener('submit',function(e){
    e.preventDefault()
    let result = password.value
    let finalresult = result.match(passwordPattern)   //match is method used to check with password pattern
    if(finalresult){
        console.log("Successfully Submmited the password")
    }else{
        console.log("Failed to submit the form")
    }
})


//for username

//username can only consist of A-Z or a-z
//length of username between 6 to 12 length

let userNamePattern = /^[A-Za-z].{6,12}$/
form.addEventListener('submit',function(e){
    e.preventDefault()
    let username2 = Username1.value
    let userNamecheck = userNamePattern.test(username2)
    if(userNamecheck==true){
        console.log("Username is valid")
    }else{
        console.log("username is invalid try again")
    }

})



    //     for (let i in arr1){
//         if(userNamecheck!==arr1[i]){
//             continue;
//         }else{
//             console.log("username already taken")
//         }
// }
    
//     if(userNamecheck){
//         console.log("username is correct")
//     }else{
//         console.log("Failed to submit form since username is not correct")
//     }
    
// })


//keyboard Event

Username1.addEventListener('keyup', function(){
    if(userNamePattern.text(Username1.value)){
        console.log("passed")
    }else{
        console.log("failed")
    }
})