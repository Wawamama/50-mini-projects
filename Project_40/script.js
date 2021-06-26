const magicBtn = document.querySelector('#magic')
const container = document.querySelector('.box-container')


magicBtn.addEventListener('click', runEffect)


function runEffect() {
    container.classList.toggle('big')
    console.log('run')
}

function createBoxes() {
    for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j *125}px ${-i * 125}px`
            container.appendChild(box)
        }
    }
}

createBoxes()