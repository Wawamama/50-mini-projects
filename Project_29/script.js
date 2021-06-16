const image = document.querySelector('.image')
const times = document.querySelector('#times')

const createHeart = (e) => {
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop

    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    heart.style.top = y +'px'
    heart.style.left = x + 'px'
    image.appendChild(heart)

    setTimeout( () => image.removeChild(heart), 3000)
}

image.addEventListener('dblclick', (e) => createHeart(e))

