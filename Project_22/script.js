// Canvas API Doc : https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const clearBtn = document.querySelector('#clear')
const smallerBtn = document.querySelector('#smaller')
const biggerBtn = document.querySelector('#bigger')
const sizeDiv = document.querySelector('#size')
const selectedColor = document.querySelector('#color')


let size = 10;
let color = selectedColor.value
let isPressed = false;

// Initialize positions
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        let x2 = e.offsetX
        let y2 = e.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})

clearBtn.addEventListener('click', clearCanvas)
smallerBtn.addEventListener('click', decreaseSize)
biggerBtn.addEventListener('click', increaseSize)
selectedColor.addEventListener('change', () => color = selectedColor.value)





function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1) // starting point
    ctx.lineTo(x2, y2) // ending point
    ctx.strokeStyle = color;
    ctx.lineWidth = size *2;
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function decreaseSize() {
    if (size >=1) {
        size --;
        sizeDiv.innerText = size;
    }
    
}

function increaseSize() {
    if (size <30) {
        size ++
        sizeDiv.innerText = size;
    }
    
}
