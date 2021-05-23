const container = document.querySelector('#container')

window.addEventListener('keydown', (e) => {
    container.innerHTML = `
        <div class='key'>
        ${e.key}
        <small>Event.key</small>
        </div>
        <div class='key'>
        ${e.keyCode}
        <small>Event.keyCode</small>
        </div>
        <div class='key'>
        ${e.code}
        <small>Event.code</small>
        </div>
    `
})