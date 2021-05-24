const textarea = document.querySelector('#text')
const tagContainer = document.querySelector('.tag-container')

textarea.addEventListener('keyup', e => {
    let words = textarea.value.split(',');
    let tags = ''
    words.forEach(element => {
        if (element.trim().length>0 ) {
             tags += `
        <div class="tag">${element}</div>
        `
        }
        tagContainer.innerHTML = tags;
        });
    
        if(e.key === 'Enter') {
            let blink =  setInterval(() => {
                pickRandom();
                console.log('toto')
            }, 100);
            setTimeout(() => {
                clearInterval(blink);
            }, 4000);
            
        }
})

function pickRandom() {
    let tags = document.querySelectorAll('.tag');
    let selected = document.querySelector('.selected')
    if (selected) {
        unhighlight(selected)
    }
    highlight(tags[Math.floor(Math.random() * tags.length)])
    
}

function highlight(tag) {
    tag.classList.add('selected')
}

function unhighlight(tag) {
    tag.classList.remove('selected')
}









