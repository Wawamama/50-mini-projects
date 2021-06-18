const addBtn = document.querySelector('.add-note')

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
    notes.forEach(note => addNote(note))
}

addBtn.addEventListener('click', () => addNote())

function addNote(text ='') {
    const note = document.createElement('div');
    note.classList.add('note')
    note.innerHTML = `
    <div class="note_header ${getRandomColor()}">
        <button id="tohtml">
            <i class="fas fa-edit"></i>
        </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>

    </div>
    <div class="note_content">
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class=${text ? "hidden" : ""}></textarea>
        
    </div>

    `
    document.body.appendChild(note)
    
    const deleteBtn = note.querySelector('.delete')
    const editBtn = note.querySelector('#tohtml')
    const textArea = note.querySelector('textarea')
    const main = note.querySelector('.main')
    
    textArea.value = text
    main.innerHTML = marked(text)
   
    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLocalStorage()
    })

    editBtn.addEventListener('click', () => {
        textArea.classList.toggle('hidden')
        main.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        main.innerHTML = marked(e.target.value)
        updateLocalStorage()
    })

}


function removeNote(note) {
    note.remove();
    //note.parentElement.parentElement.remove()
}

function getRandomColor() {
    const colors = ['yellow', 'green', 'pink', 'blue']
    return colors[Math.floor(Math.random() * colors.length)]
}

function updateLocalStorage() {
    const notes = document.querySelectorAll('textarea')
    const savedNotes = []
    notes.forEach(note => savedNotes.push(note.value))
    localStorage.setItem('notes', JSON.stringify(savedNotes))
}