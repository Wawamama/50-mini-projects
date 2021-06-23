const imgs = document.querySelectorAll('.content img')
const home = document.querySelector('#home')
const work = document.querySelector('#work')
const blog = document.querySelector('#blog')
const about = document.querySelector('#about')

home.addEventListener('click', () => {
    removeActiveClass()
    home.classList.toggle('active')
    showContent(0, document.querySelector('.show'))

})
work.addEventListener('click', () => {
    removeActiveClass()
    work.classList.toggle('active')
    showContent(1, document.querySelector('.show'))
})
blog.addEventListener('click', () => {
    removeActiveClass()
    blog.classList.toggle('active')
    showContent(2, document.querySelector('.show'))

})
about.addEventListener('click', () => {
    removeActiveClass()
    about.classList.toggle('active')
    showContent(3, document.querySelector('.show'))

})

function removeActiveClass() {
    const actives = document.querySelectorAll('.active')
    actives.forEach(active => active.classList.remove('active'))
}

function showContent(id, old) {
    old.classList.remove('show')
    imgs[id].classList.add('show')
}