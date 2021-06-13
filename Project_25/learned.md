# What I learned with this project

Scroll Animations again
--> window.scrollY
--> element.offsetHeight

const nav = document.querySelector('#nav')

window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('light')
    } else {
        nav.classList.remove('light')

    }