const toggle = document.querySelector('#darkmode-toggle');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const digitalTime = document.querySelector('#digital-time')
const date = document.querySelector('.date')
const day = document.querySelector('#daynum')
const ampmEl = document.querySelector('#ampm')

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


updateDigitalClock() 
setDate()

window.setInterval(moveNeedles, 1000)
window.setInterval(updateDigitalClock, 1000)


toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
})

function moveNeedles() {
    seconds.style.transform = `translate(-50%, -100%) rotate(${scale(new Date().getSeconds(), 0, 59, 0, 360)}deg)`
   
}

function updateDigitalClock() {
    let hours = new Date().getHours() >=13 ? new Date().getHours() %12 : new Date().getHours() ;
    let ampm = hours >=12 ? 'PM' : 'AM';

    digitalTime.innerText = `${hours}:${new Date().getMinutes()} `;
    ampmEl.innerText = ampm;
}

function setDate() {
    minutes.style.transform = `translate(-50%, -100%) rotate(${scale(new Date().getMinutes(), 0, 59, 0, 360)}deg)`
    hours.style.transform = `translate(-50%, -100%) rotate(${scale(new Date().getHours(), 0, 12, 0, 360)}deg)`
    const days = ['Monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let dayNumber = new Date().getDay();
    let month = new Date().getUTCMonth();
    date.innerHTML = `${days[dayNumber]}, ${months[month]} 
         <span>${dayNumber}</span>`
}




