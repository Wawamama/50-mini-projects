const textDiv = document.querySelector('#text')
const textContainer = document.querySelector('#text-container')
const speedEl = document.querySelector('#speed')
let speed = 300 / (speedEl.value);

const text = 'Welcome to Project 30'
let idx = 1;

const displayLetter = () => {

    textDiv.innerText = text.slice(0, idx)
    idx++
    if (idx > text.length) {
        idx = 1

        // Other version where the effect stops when the entire text is display
        /*
        textDiv.innerText = text
        setTimeout( () => {
            const reloadDiv = document.createElement('div')
            reloadDiv.innerHTML = '<small>Reload to see the Auto Text Effect</small>'
            reloadDiv.style.textAlign = 'center'
            textContainer.appendChild(reloadDiv)
        }, 1000)
        return          // return is used so the div is only created once
        */
        
    }
    setTimeout(displayLetter, speed);
 
}

displayLetter();

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value
    console.log(e.target.value)
} )



