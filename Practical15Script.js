let counterDisplay = document.querySelector('.counterDisplay')
let addButton = document.querySelector('.addButton')
let decButton = document.querySelector('.decButton')

let count = 0;

addButton.addEventListener("click", () => {
    count++;
    counterDisplay.innerHTML = count
})