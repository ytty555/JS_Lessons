const handSec = document.querySelector('div.second-hand');
const handMin = document.querySelector('div.min-hand');
const handHour = document.querySelector('div.hour-hand');


function setDate() {
    'use strict';
    
    let time = new Date();
    let timeSec = time.getSeconds();
    let timeMin = time.getMinutes();
    let timeHour = time.getHours();

    let degMin = timeMin * (360 / 60) + 90;
    let degSec = timeSec * (360 / 60) + 90;
    let degHour = timeHour * (360 / 24) + 90;

    handSec.style.transform = `rotate(${degSec}deg)`;
    handMin.style.transform = `rotate(${degMin}deg)`;
    handHour.style.transform = `rotate(${degHour}deg)`;

}

setInterval(setDate, 10);