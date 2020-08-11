window.onload = () => {


    let hoursPart = document.getElementById('hours')
    let minutesPart = document.getElementById('minutes')
    let secondsPart = document.getElementById('seconds')
    let chronometerCall = false

    function chronometer() {

        let seconds = 0
        let minutes = 0
        let hours = 0

        seconds++

        if (seconds < 10) seconds = `0` + seconds

        if (seconds > 59) {
            seconds = `00`
            minutes++

            if (minutes < 10) minutes = `0` + minutes
        }

        if (minutes > 59) {
            minutes = `00`
            hours++

            if (hours < 10) hours = `0` + hours
        }

        secondsPart.innerHTML = seconds
        minutesPart.innerHTML = minutes
        hoursPart.innerHTML = hours
    }

    

    let start = document.getElementById('start')
    let pause = document.getElementById('pause')
    let reset = document.getElementById('reset')

    start.addEventListener('click', (event) => {
        chronometerCall = setInterval(chronometer, 1000)
        event.target.setAttribute(`disabled`, ``)
    })

    pause.addEventListener('click', () => {
        clearInterval(chronometerCall)
        start.removeAttribute(`disabled`)
    })

    reset.addEventListener('click', () => {
        clearInterval(chronometerCall)
        start.removeAttribute(`disabled`)
        
        hoursPart.innerHTML = '00'
        minutesPart.innerHTML = '00'
        secondsPart.innerHTML = '00'
    })

}