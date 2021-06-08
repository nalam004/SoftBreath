const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 8000
const breathTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breathe()

function breathe () {
    text.innerHTML = 'Inhale';
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'
        
        setTimeout(() => {
            text.innerText = 'Exhale'
            container.className = 'container shrink'
        }, holdTime)
    }, breathTime)
}

setInterval(breathe, totalTime)