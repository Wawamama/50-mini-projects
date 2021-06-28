const range = document.querySelector("#range")
const label = document.querySelector("#label")

range.addEventListener('input', (e) => {
    label.innerText = e.target.value
    label.style.left = `${e.target.value}%`
})