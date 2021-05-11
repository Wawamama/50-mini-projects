const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress-bar');

let progressWidth = 0;
let currentNumber = 0;

nextBtn.addEventListener('click', () => {
    removeActiveClass();
    currentNumber ++;
    progressWidth += 33;
    circles[currentNumber].classList.add('active');
    prevBtn.disabled = false;
    if (currentNumber >=3) {
        nextBtn.disabled = true;
    }
    progress.style.width = progressWidth+'%';
})

prevBtn.addEventListener('click', () => {
    removeActiveClass();
    currentNumber --;
    progressWidth -=33;
    circles[currentNumber].classList.add('active');
    nextBtn.disabled = false;
    if (currentNumber == 0) {
        prevBtn.disabled = true;
    }
    progress.style.width = progressWidth+'%';
})

const removeActiveClass = () => {
    console.log('class removed')
    circles.forEach(circle => circle.classList.remove('active'))
}





