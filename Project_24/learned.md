# What I learned with this project

# Options to get a date to a specific format : method toLocaleDateString

function formateDate() {
    const options = {
        weekdays: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const today = new Date()
    return today.toLocaleDateString('en-US', options)
}

# CSS background animation :

/* Where the header and the profile pic have a class of animated-bg and the texts are spans with a class of animated-bg and animated-text */

.animated-bg  {
    background-image: linear-gradient(to right,
    #f6f7f8 0%,
    #edeef1 10%,
    #f6f7f8 20%,
    #f6f7f8 100%
     );
    background-size: 200% 100%;
    animation: moveBg 1s linear infinite;
}

.animated-text {
    border-radius: 50px;
    display: inline-block;
    margin: 0;
    height: 10px;
    width: 100%;
}

@keyframes moveBg {
    0% {
        background-position: 50% 0;
    }

    100% {
        background-position: -150% 0;

    }
}