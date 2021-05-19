const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const board = document.querySelector('#board');

sounds.forEach(sound => {
    let button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = sound;
    board.appendChild(button);

    button.addEventListener('click', () => {
        let song = document.getElementById(sound);
        stopSongs();
        song.play();
    })
})

function stopSongs() {
    sounds.forEach(sound => {
        let song = document.getElementById(sound)
        song.pause();
        song.currentTime = 0;
    })
}