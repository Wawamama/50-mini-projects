const quizData = [
    {
        question: 'The Lojack raises to 2.5 big blinds. Action folds to you in the Big Blind with 22. What’s your play?',
        a: 'Fold',
        b: 'Call',
        c: '3-Bet',
        correct: 'b'
    },
    {
        question: 'The Hijack raises to 2.5 big blinds. You are in the Cutoff with JJ. What’s your play',
        a: 'Fold',
        b: 'Call',
        c: '3-Bet',
        correct: 'c'
    },
    {
        question: 'The Cutoff raises to 2.5 big blinds. You 3-bet to 8 big blinds with KK from the Button. The action folds back to the cutoff who 4-bets to 22.5 big blinds. What’s your play?',
        a: 'Fold',
        b: 'Call',
        c: 'All-in',
        correct: 'c'
    },
    {
        question: 'The Button raises to 2.5 big blinds. The action folds to you in the Big Blind with 96 suited. What’s your play?',
        a: 'Fold',
        b: 'Call',
        c: '3-Bet',
        correct: 'b'
    },
    {
        question: 'The Button raises to 2.5 big blinds. The action folds to you in the Small Blind with 99. What’s your play?',
        a: 'Fold',
        b: 'Call',
        c: '3-Bet',
        correct: 'c'
    },
    {
        question: 'The Hijack raises to 2.5 big blinds. The action folds to you on the Button with AQ suited. What’s your play?',
        a: 'Fold',
        b: 'Call',
        c: '3-Bet',
        correct: 'c'
    },
    {
        question: 'The Button raises to 2.5 big blinds. The action folds to you in the Big Blind with A7 suited. What’s your play?',
        a: 'Fold',
        b: 'Call',
        c: '3-Bet',
        correct: 'b'
    },
    {
        question: 'The Lojack raises to 2.5 big blinds. The action folds to you in the Cutoff with A5 suited. What’s your play?',
        a: 'Fold',
        b: 'Call',
        c: '3-Bet',
        correct: 'c'
    },
    {
        question: 'The Hijack raises to 2.5 big blinds. The action folds to you in the Small Blind with AT suited. What’s your play?',
        a: 'Fold',
        b: 'Call',
        c: '3-Bet',
        correct: 'c'
    },
    {
        question: 'The Cutoff raises to 2.5 big blinds. The action folds to you in the Big Blind with K7 offsuit. What’s your play?',
        a: 'Fold',
        b: 'Call',
        c: '3-Bet',
        correct: 'a'
    }
]

const submit = document.querySelector('#submit')
const questionEl = document.querySelector('#question')
const answerA = document.querySelector('#answer-a_text')
const answerB = document.querySelector('#answer-b_text')
const answerC = document.querySelector('#answer-c_text')
const quizContent = document.querySelector('.quiz-content')
const checkboxes = document.querySelectorAll('.answer')

let currentQuestion = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselect()
    questionEl.innerText = quizData[currentQuestion].question
    answerA.innerText = quizData[currentQuestion].a
    answerB.innerText = quizData[currentQuestion].b
    answerC.innerText = quizData[currentQuestion].c
}

function deselect() {
    checkboxes.forEach(checkbox => checkbox.checked = false)
}

function getSelected() {
    let answer
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            answer = checkbox.id.charAt(checkbox.id.length-1)
        }
    })
    return answer

}

submit.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if (answer == quizData[currentQuestion].correct) score ++
        currentQuestion++
        
        if(currentQuestion < quizData.length) {
            loadQuiz()
        } else {
            quizContent.innerHTML = `
                <h2 style='text-align: center;'>You answered correcty ${score}/${quizData.length} questions</h2>
                <button class='reload' onclick='location.reload()'>Reload Quiz</button>
            `
        }
    }

})