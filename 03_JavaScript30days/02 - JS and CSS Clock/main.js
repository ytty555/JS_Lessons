function setDate() {
    'use strict';
    
    let time = new Date();
    let timeSec = time.getSeconds();
    let timeMin = time.getMinutes();
    let timeHour = time.getHours();

    let degMin = timeMin * (360 / 60) + 90;
    let degSec = timeSec * (360 / 60) + 90;
    let degHour = timeHour * (360 / 24) + 90;

    let handSec = document.querySelector('div.second-hand');
    handSec.style.transform = `rotate(${degSec}deg)`;

    let handMin = document.querySelector('div.min-hand');
    handMin.style.transform = `rotate(${degMin}deg)`;

    let handHour = document.querySelector('div.hour-hand');
    handHour.style.transform = `rotate(${degHour}deg)`;

}

setInterval(setDate, 10);