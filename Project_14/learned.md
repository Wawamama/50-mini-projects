# What I learned with this project

# CSS :
• Multiple transitions on something :
transition: width 0.6s linear, opacity 0.6s linear

• Split the background 
body {
    background-color: color1; // in case the linear gradient doesn't work
    background-image: linear-gradient(to bottom, 
    color1 0%,
    color1 50%,
    color2 50%,
    color2 100%
    ) 
}