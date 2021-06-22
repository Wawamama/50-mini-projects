const NB_SQUARES = 500;
const basicColor = 'rgb(20,29,29)';
const container = document.querySelector('.container')


createGrid(NB_SQUARES);

function createGrid(num) {
    for (let i = 0; i< num; i++) {
        let square = document.createElement('div')
        square.classList.add('square')
        container.appendChild(square)
    }
}

const squares = document.querySelectorAll('.square')

const getRandomColor = () => {
    const colors = ['mediumturquoise', 'orange', 'yellow', 'chartreuse', 'purple', 'red']
    return colors[Math.floor(Math.random() * colors.length)]
}

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        const color = getRandomColor()
        square.style.backgroundColor = color;
        square.style.boxShadow = `${color} 0px 0px 2px, ${color} 0px 0px 10px`;
        setTimeout(() => {
            square.style.backgroundColor = basicColor;
            square.style.boxShadow = '';

        }, 2000)
    })
})