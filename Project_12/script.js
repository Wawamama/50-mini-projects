const btn = document.querySelectorAll('.faq-toggle')
const faq = document.querySelectorAll('.faq')

btn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active')
    })
})