const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('.page-container');


open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));