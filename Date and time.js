//Date and Time

//Date object always carry both "Date" and "Time"


//Using Date Method      //yyyy,mm,dd,hh,mm,ss 
let currentDate = new Date(1824, 1, 3,12,30,15)
console.log(currentDate)


//Using timeStamp(integer number represent in "ms" from 1-1-1970)
let currentDate1 = new Date(0) //0 is time in ms
// 1 day = 24 hours * 60 minutes * 60 seconds * 1000 MiliSeconds = 86400000 ms
console.log(currentDate1); 

// To get time in "ms"
let currentDate2 = new Date().getTime()
console.log(currentDate2)  //This shows the current ms starting from 1 jan 1970


//Advance Date and time methods

let completeDateAndTime = new Date()
console.log(completeDateAndTime)

//Get full year
console.log(completeDateAndTime.getFullYear())

//Get date
console.log(completeDateAndTime.getMonth())

//Get day
console.log(completeDateAndTime.getDay())  //0 to 6 is a week
// 0 - sunday, 1 - monday, 2 - tuesday and so on

