const form = document.querySelector('#form')
const passwordDiv = document.querySelector('.password')
const clipboard = document.querySelector('.clipboard')
const button = document.querySelector('#submit')

const lengthEl = document.querySelector('#length')
const uppercaseEl = document.querySelector('#uppercase')
const lowercaseEl = document.querySelector('#lowercase')
const numbersEl = document.querySelector('#numbers')
const symbolsEl = document.querySelector('#symbols')

// FUNCTIONS

const getRandomLower = () => {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 97)) // ascii for lowercases : 97->122
}

const getRandomUpper = () => {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 65)) // ascii for lowercases : 65->90
}

const getRandomNumber = () => {
    return String.fromCharCode((Math.floor(Math.random() * 10) + 48)) // ascii for numbers : 48-57
}

const getRandomSymbol = () => {
    const symbols = '!?@$%€£()[]{}=+*-_,;&.#^<>/'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const createPassword = (length, upper, lower, number, symbol) => {
    let password = [] ;
    for (let i = 0; i<length; i++) {
        if (upper) {
            password.push(getRandomUpper())
        }
        if (lower) {
            password.push(getRandomLower())
        }
        if (number) {
            password.push(getRandomNumber())
        }
        if (symbol) {
            password.push(getRandomSymbol())
        }

    }
    return password.join('').slice(0, length)
}

// EVENT LISTENERS

button.addEventListener('click', (e) => {
    e.preventDefault();
    const length = lengthEl.value
    const upper = uppercaseEl.checked
    const lower = lowercaseEl.checked
    const number = numbersEl.checked
    const symbol = symbolsEl.checked
    
    passwordDiv.innerText = createPassword(length, upper, lower, number, symbol)
})

clipboard.addEventListener('click', (e) => {
    e.preventDefault();
    const password = passwordDiv.innerText;
    const textarea = document.createElement('textarea') // Needed to copy

    if(!password) return

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

