# What I learned with this project

# Slider : how to get the first img after the last one to make it 'round'

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
    activeSlide ++;

    if (activeSlide > images.length -1) {
        activeSlide = 0
    }
    showSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide --;

    if (activeSlide <0) {
        activeSlide = images.length -1
    }
    showSlide()
})