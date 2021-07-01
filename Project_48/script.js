const container = document.querySelector('#container')
const imgURL = 'https://source.unsplash.com/random/'

const rows = 5

const getRandomImg = () => {
    const size1 = getRandomSize()
    const size2 = getRandomSize()
    return `${size1}x${size2}`
}


for (let i=0; i<rows * 3; i++) {
    const imgEl = document.createElement('img')
    imgEl.src = imgURL + getRandomImg();
    container.appendChild(imgEl)
}

function getRandomSize() {
    return Math.floor(300 + (Math.random() * 10))
}