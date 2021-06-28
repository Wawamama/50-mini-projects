const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

openBtn.addEventListener('click', () => {
    nav.forEach(div => div.classList.add('active'))
})

closeBtn.addEventListener('click', () => {
    nav.forEach(div => div.classList.remove('active'))
})