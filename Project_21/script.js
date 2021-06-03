const empties = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

empties.forEach(empt => {
    empt.addEventListener('dragenter', dragEnter)
    empt.addEventListener('dragover', dragOver)
    empt.addEventListener('dragleave', dragLeave)
    empt.addEventListener('drop', dragDrop)
} )

function dragStart() {
    this.className +=' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered')
}

function dragLeave() {
    this.classList.remove('hovered')
}

function dragDrop() {
    this.classList.remove('hovered')
    this.append(fill)
}