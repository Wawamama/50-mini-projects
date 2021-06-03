const btn = document.querySelector('.button');

btn.addEventListener('click', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    const btnTop = e.target.offsetTop
    const btnLeft = e.target.offsetLeft

    const xInside = posX - btnLeft
    const yInside = posY - btnTop

    console.log(xInside, yInside)

    const ripple = document.createElement('div')
    ripple.classList.add('ripple')
    ripple.style.position = 'absolute';
    ripple.style.top = `${yInside}px`;
    ripple.style.left = `${xInside}px`;

    btn.appendChild(ripple)

    setTimeout(() => ripple.remove(), 1000) // remove the div after 1s
})