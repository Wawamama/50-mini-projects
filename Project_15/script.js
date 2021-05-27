const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target') // + sign makes it a Number type var
        const current = +counter.innerText;
        const increment = target / 200

        console.log(increment)
        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})

