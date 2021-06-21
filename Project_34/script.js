const goDiv = document.querySelector('.go')
const countdownDiv = document.querySelector('.countdown')
const nums = document.querySelectorAll('.num')
const replayBtn = document.querySelector('.replay')

runAnimation()

replayBtn.addEventListener('click', () => {
    resetDOM()
})

function runAnimation() {
    nums.forEach((num, idx) => {
        num.addEventListener('animationend', (e) => {
            if(e.animationName == 'showNum' && idx < nums.length-1) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName == 'exitNum' && idx < nums.length-1) {
                num.nextElementSibling.classList.add('in')
            } else {
                countdownDiv.classList.add('hide')
                goDiv.classList.add('show')
            }
        })
    })
}

function resetDOM() {
    nums.forEach(num => num.classList.value = 'num')
    nums[0].classList.add('in')
    console.log(nums[0])
    countdownDiv.classList.remove('hide')
    goDiv.classList.remove('show')
    runAnimation()
}

