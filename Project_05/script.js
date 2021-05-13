// Found on SOF : function to map a range of numbers to another range
// Will use it to map the load variable (0-100) to the opacity (1-0)
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const loadingText = document.querySelector('.loading-text');
const bgImg = document.querySelector('.bg');
const h1 = document.querySelector('.temp-title');

let load = 0;
let interval = setInterval(blurring, 30)

function blurring() {
    load++

    if (load>99) {
        clearInterval(interval)
    }
    
    loadingText.innerText = `${load}%`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    h1.style.opacity = scale(load, 0, 100, 1, 0);
    bgImg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}