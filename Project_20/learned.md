# What I learned with this project

# JS

How to get the position of the target element :
method offsetTop / offsetLeft ...
-> e.target.offsetLeft

# Arrow functions and this in eventListener
In order to use 'this' inside an EventListener we can't use an arrow function we need the keyword function

// NOT WORKING :
btn.addEventListener('click', (e) => {
    this.appendChild(ripple)
}

// WORKING :
btn.addEventListener('click', function(e) {
    this.appendChild(ripple)
}