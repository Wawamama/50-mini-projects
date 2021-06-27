const moods = document.querySelectorAll('.mood')
const container = document.querySelector('#container')
const btn = document.querySelector('#send')

let moodArray = ['Unsatisfied', 'Neutral', 'Satisfied']
let selectedMood = ''

btn.addEventListener('click', () => displayCongrats(selectedMood))

moods.forEach((mood, idx) => {
    mood.addEventListener('mouseover', () => {
        removeActive()
        mood.classList.add('active')
    } )
    mood.addEventListener('click', () => {
        selectedMood = moodArray[idx] 
        mood.classList.add('active')
        console.log(selectedMood)
    })
})



function displayCongrats(congrats) {
    container.innerHTML = ''
    container.innerHTML = `
        <i class='fas fa-heart'></i>
        <strong>Thank You!</strong>
        <br>
        <srong>Feedback: ${congrats} </strong>
        <p>We'll use your feedback to improve our customer service. Maybe.</p>
    `
}

function removeActive() {
    moods.forEach(mood => mood.classList.remove('active'))
}

