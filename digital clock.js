let digitalHour = document.querySelector('.hour');
let digitalminute = document.querySelector('.minute');
let digitalsecond = document.querySelector('.second');

let ticking = tickClock = () => {
    let currentDate = new Date()

    let getHr = currentDate.getHours();

    let getMin = currentDate.getMinutes();

    let getsec = currentDate.getSeconds();
    
    digitalHour.textContent = getHr;

    digitalminute.textContent = getMin;

    digitalsecond.textContent = getsec
}

setInterval(ticking, 1000)