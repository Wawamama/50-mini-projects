# What I learned with this project

# LOCAL STORAGE

# Markdown API

# Local storage : native browser API
localStorage.setItem('name', 'Brad')
localStorage.getItem('name')
localStorage.removeItem('name', 'Brad')

Parameters have to be string, so if I want to pass an object I have to use 
a method called JSON.stringify() :

localStorage.setItem('name', JSON.stringify())
JSON.parse(localStorage.getItem('name'))
localStorage.removeItem('name', 'Brad')