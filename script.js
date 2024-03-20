const play = document.querySelector('.play')
const pause = document.querySelector('.break')
const reset = document.querySelector('.reset')
let timer = document.querySelector('.timer')

let intervalId = 0
let seconds = 0
let minutes = 0
let hours = 0

function formatTimer(number){
    if(number<10){
        return '0' + number
    }else{
        return number
    }
}

play.addEventListener("click", () => {
    intervalId = setInterval(start, 10)
})

pause.addEventListener("click", breakStart)
reset.addEventListener("click", finishStart)

function start() {
    play.disabled = true
    seconds++
    if(seconds==60){
        minutes++
        seconds = 0
        if(minutes==60){
            hours++
            minutes = 0
        }
    }
    timer.innerText = formatTimer(hours) + ":" + formatTimer(minutes) + ":" + formatTimer(seconds)
}

function breakStart() {
    play.disabled = false
    clearInterval(intervalId)
}
function finishStart() {
    play.disabled = false
    seconds = 0
    minutes = 0
    hours = 0
    timer.innerText = formatTimer(hours) + ":" + formatTimer(minutes) + ":" + formatTimer(seconds)
    clearInterval(intervalId)
}