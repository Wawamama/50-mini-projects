const insects = [
    {
        name: 'fly',
        image: 'http://pngimg.com/uploads/fly/fly_PNG3946.png'
    },
    {
        name: 'mosquito',
        image: 'http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png'
    },
    {
        name: 'spider',
        image: 'http://pngimg.com/uploads/spider/spider_PNG12.png'
    },
    {
        name: 'roach',
        image: 'http://pngimg.com/uploads/roach/roach_PNG12163.png'
    },
]

let score = 0

// Selectors
const insectMenu = document.querySelector('.insect-container')
const gameScreen = document.querySelector('#screen3')
const gameContainer = document.querySelector('.game-container')
const messageEl = document.querySelector('.warning-message')


const scoreEl = document.createElement('div')
const timeEl = document.createElement('div')

let selectedInsect = ''

function displayChoice() {
    insects.forEach(species => {
        const choice = document.createElement('button')
        choice.classList.add('choose-insect')
        choice.setAttribute('id', species.name)
        choice.innerHTML = `
            <a href='#screen3'>
                <p>${species.name}</p>
                <img src='${species.image}' alt=''>
            </a>
        `
        insectMenu.appendChild(choice)

        //choice.addEventListener('click', () => loadGame(species))
        choice.addEventListener('click', () => {
            selectedInsect = species
            loadGame()
            //startTimer()
            
        })
    })
}

function loadGame() {
    // score and time
    scoreEl.classList.add('score')
    scoreEl.innerHTML = `Score: ${score}`
    timeEl.classList.add('time')
    timeEl.innerHTML = `Time: ??`
    gameScreen.appendChild(scoreEl)
    gameScreen.appendChild(timeEl)

   createInsect()
}

function createInsect() {
     // game
     const ingame = document.createElement('img')
     ingame.classList.add('ingame')
     ingame.src = selectedInsect.image
 
     const { x, y } = getRandomLocation()
     
     //console.log(posX)
     ingame.style.top = `${y}px`
     ingame.style.left = `${x}px`
     ingame.style.transform = `rotate(${Math.random() * 360}deg)`
    
     gameContainer.appendChild(ingame)

     ingame.addEventListener('click', (e) => {
        score++
        updateScore()
        e.target.style.removeProperty('transform')
        e.target.classList.add('disappear')
        setTimeout(() => e.target.remove(), 2000)
        setTimeout(() => createInsect(), 1000)
        setTimeout(() => createInsect(), 1500)
    })

    if(score === 20) {
        messageEl.classList.add('show')
        setTimeout(() => messageEl.classList.remove('show'), 4000)
    }

}

function startTimer() {
    let seconds = 0;
    let minutes = 0;
    setInterval(() => {
        seconds++
        if (seconds > 59) {
            minutes++
            seconds = 0
        } 
        let showingTime = `${minutes}:${padZeros(seconds, 2)}`
        timeEl.innerHTML = `Time: ${showingTime}`
    }, 1000)
}

// Add 0 to Time when <1
function padZeros(num, size) {
    let displayed = num+"";
    while (displayed.length < size) displayed = "0" + displayed;
    return displayed;
}

function updateScore() {
    scoreEl.innerText = `Score: ${score}`
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.floor(Math.random() * (width - 200) + 100)
    const y = Math.floor(Math.random() * (height - 250))
    console.log(height)
    console.log(x, y)
    return { x, y }
}

console.log(startTimer())
displayChoice()