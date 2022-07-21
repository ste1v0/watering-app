// variables

let lastWatering = document.querySelector('.lastWatering');
let setDateBtn = document.querySelector('.setDateBtn');
let recommendedDate = document.querySelector('.recommendedDate');

// time-related variables

let currentDate = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;
let nextDate = new Date(Date.now() + (3600 * 1000 * 96)).toLocaleDateString();

// button function

setDateBtn.addEventListener('click', () => {
    lastWatering.innerText = currentDate;
    localStorage.setItem('lastDate', currentDate);
    recommendedDate.innerText = nextDate;
    localStorage.setItem('recDate', nextDate);
})

// get cached items

let getLastDate = localStorage.getItem('lastDate');
lastWatering.innerText = getLastDate;
let getNewNextDate = localStorage.getItem('recDate');
recommendedDate.innerText = getNewNextDate;