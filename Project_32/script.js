const checkboxes = document.querySelectorAll('input[type=checkbox')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

let checked = 0

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => checkStatus(e.target))
    
})

function checkStatus(checkbox) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === checkbox) {
            fast.checked = false
        }
        if (fast === checkbox) {
            cheap.checked = false
        }
        if (cheap === checkbox) {
            good.checked = false
        }
    }
}