const downButton = document.querySelector('.down-btn')
const upButton = document.querySelector('.up-btn')
const leftSlider = document.querySelector('.left-slider')
const rightSlider = document.querySelector('.right-slider')

const slidesLength = rightSlider.querySelectorAll('div').length

let activeIndex = 0

rightSlider.style.transform = `translateY(-${(slidesLength -1) *100}vh)`
console.log(slidesLength)

upButton.addEventListener('click', moveUp)
downButton.addEventListener('click', moveDown)

function moveUp() {
    activeIndex ++; 
    if (activeIndex > slidesLength -1) {
        activeIndex = 0;  
    }
    leftSlider.style.transform = `translateY(-${activeIndex *100}vh)`
    rightSlider.style.transform = `translateY(-${300-(activeIndex *100)}vh)`
}

function moveDown() {
    activeIndex --; 
    if (activeIndex < 0) {
        activeIndex = slidesLength -1;  
    }
    leftSlider.style.transform = `translateY(-${activeIndex *100}vh)`
    rightSlider.style.transform = `translateY(-${300-(activeIndex *100)}vh)`
}