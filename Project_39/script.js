const background = document.querySelector('#background')
const submit = document.querySelector('#submit')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

let blur = 20

password.addEventListener('keydown', (e) => {
    if (e.keyCode == 32 && password.value.length <= 0) {
        console.log('reseeeet')
        resetBlur()
    }
    if(password.value.length > 1) {
        blur = blur-(blur*0.2)
    }
    updateBlur(blur)
})

function updateBlur(px) {
    background.style.filter = `blur(${px}px)`
}

function resetBlur() {
    background.style.filter = 'blur(20px)'
    console.log('reset')
}