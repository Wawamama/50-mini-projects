const images = [
    'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1560&q=80',
    'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1577003833619-76bbd7f82948?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1463123081488-789f998ac9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
]

const sliderCtn = document.querySelector('.slider_container');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const body = document.body;

let activeSlide = 0;

images.forEach(image => {
    let slide = document.createElement('div');
    slide.classList.add('bright_part')
    slide.style.backgroundImage = `url(${image})`;
    sliderCtn.appendChild(slide)
})

showSlide();
showBodyBg();

rightBtn.addEventListener('click', () => {
    activeSlide ++;

    if (activeSlide > images.length -1) {
        activeSlide = 0
    }
    showSlide()
    showBodyBg();
})

leftBtn.addEventListener('click', () => {
    activeSlide --;

    if (activeSlide <0) {
        activeSlide = images.length -1
    }
    showSlide()
    showBodyBg();
})


function showSlide() {
    let slides = document.querySelectorAll('.bright_part')
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}

function showBodyBg() {
    body.style.backgroundImage = `url("${images[activeSlide]}")`
    console.log(images[activeSlide])
}