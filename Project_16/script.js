const bigcup = document.querySelector('#cup')
const minicups = document.querySelectorAll('.minicup')
const percentage = document.querySelector('#percentage')
const remained = document.querySelector('#remained')
const quantity = document.querySelector('#quantity')


const fillMinicups = (index) => {

    // decrease the index if we click on the last full one
    if(minicups[index].classList.contains('full') && !minicups[index+1].classList.contains('full')) {
        index--
    } 

    minicups.forEach((cup, idx) => {
        if (idx <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })  
}

const fillBigCup = () => {
    let nbfilled = document.querySelectorAll('.full').length;
    if (nbfilled === 0) {
        remained.style.height = '100%';
        percentage.style.height = '0%';
        percentage.style.visibility = 'hidden'
        quantity.innerText = '2L'
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${12.5*nbfilled}%`
        percentage.innerText = `${12.5*nbfilled}%`
        remained.style.height = `${100-(12.5*nbfilled)}%`
        quantity.innerText = `${2-(0.25*nbfilled)}L`
        
    }
}

minicups.forEach((cup, index) => {
    cup.addEventListener('click', () => {
        fillMinicups(index)
        fillBigCup();
    })

    
})

