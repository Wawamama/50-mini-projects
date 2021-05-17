# What I learned with this project

CSS :
input[type='submit']:active {
    transform: scale(0.98);
} 
--> To have an effect on button click

JS :
Add span to the html :
    labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span>${letter}</span>`)
        .join('')
})