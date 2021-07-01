const input = document.querySelector('#input')
const form = document.querySelector('#form')
const todosEl = document.querySelector('#todos')

form.addEventListener('submit', (e) => {
        e.preventDefault()
        const todo = document.createElement('li')
        todo.classList.add('field')
        todo.innerHTML = input.value;
        input.value = ''
        todosEl.appendChild(todo)

        const todos = document.querySelectorAll('li')
        
        todos.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                item.classList.add('finito')
            })
            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                item.remove()
            })
        })
} )


