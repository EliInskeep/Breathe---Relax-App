const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// Song Titles
const songs = ['airstream - electra.mp3']










// Breathe Section
const container = document.querySelector('.main-container')
const text = document.querySelector('#text')

const totalTime = 7500;
// I'm setting the breathe time up this way, just incase I want to change the
// totalTime in the future
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation()

function breatheAnimation () {
    text.innerHTML = 'Breathe In!'
    container.className = 'main-container grow'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out!'
            container.className = 'main-container shrink'
        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime);
