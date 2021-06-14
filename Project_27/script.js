const toastWrapper = document.querySelector('#notif-wrapper')
const btn = document.querySelector('.notif-btn')

const messages = [
    'Hello World',
    'Dinosaur ahead',
    'Congratulations',
    'Level Up',
    'Good click mate'
]

const types = ['info', 'success', 'error']


btn.addEventListener('click', () => createNotif() )

function getRandomMsg() {
    return (Math.floor(Math.random()*messages.length))
}

function getRandomType() {
    return (Math.floor(Math.random()*types.length))
}

function createNotif(type = null) {
    const notif = document.createElement('div');
    notif.classList.add('notif')
    notif.classList.add(type ? type : types[getRandomType()])
    notif.innerText = messages[getRandomMsg()]
    toastWrapper.appendChild(notif)
    setTimeout(() => {
        notif.remove()
    }, 4000)
}
