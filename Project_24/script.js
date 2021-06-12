// Selectors
const header = document.querySelector('#header')
const title = document.querySelector('#title')
const textcontent = document.querySelector('#textcontent')
const profilepic = document.querySelector('#profile_img')
const authorName = document.querySelector('#name')
const dateDiv = document.querySelector('#date')
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_txts = document.querySelectorAll('.animated-text')

const getData = () => {
    const date = new Date()
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1588354924596-71b1cb1393fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="beautiful image">'
    title.innerHTML = 'Cool loading effect bro'
    textcontent.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, consequatur';
    profilepic.innerHTML = '<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="">';
    authorName.innerHTML = 'John Doe'
    dateDiv.innerHTML = formateDate()

    // remove the classes
    animated_bgs.forEach(div => div.classList.remove('animated-bg'))
    animated_txts.forEach(div => div.classList.remove('animated-text'))
}

function formateDate() {
    const options = {
        weekdays: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }
    const today = new Date()
    return today.toLocaleDateString('en-US', options)
}

setTimeout(getData, 2000)