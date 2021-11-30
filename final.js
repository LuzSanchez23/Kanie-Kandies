const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours= document.getElementById('hours');
const days = document.getElementById('days');

const container = document.getElementById('container');
const currentYear = new Date ().getFullYear();

const christmasDate = new Date(`December 25 ${currentYear} 00:00:00`);

function updateContainer() {
    const timeNow = new Date();
    const result = christmasDate - timeNow;

    const second = Math.floor (result / 1000) % 60;
    const minute = Math.floor (result / 1000 / 60) % 60;
    const hour = Math.floor (result / 1000 / 60 / 60) % 24;
    const day = Math.floor (result / 1000 / 60 / 60 / 24);
    
    seconds.innerHTML = second;
    minutes.innerHTML = minute;
    hours.innerHTML = hour;
    days.innerHTML = day;
}

setInterval(updateContainer, 1000);
