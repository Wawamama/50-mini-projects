const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const container = document.querySelector('.img-container')
const images = document.querySelectorAll('img')

let activeSlide = 0;

next.addEventListener('click', () => {
    activeSlide++
    changeSlide()
})

prev.addEventListener('click', () => {
    activeSlide--
    changeSlide()    
})


function changeSlide() {
    if (activeSlide > images.length-1) {
        activeSlide = 0
    } else if(activeSlide <0) {
        activeSlide = images.length-1
    }
    container.style.transform = `translateX(-${activeSlide}00%)`
}

let runAnimation = setInterval( () => {
    activeSlide++
    changeSlide()
}, 2000)



