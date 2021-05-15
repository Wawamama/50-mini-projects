const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', showBoxes)

showBoxes();

function showBoxes() {
    const windowBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        let boxTop = box.getBoundingClientRect().top;
        
        if(boxTop < windowBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}