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
