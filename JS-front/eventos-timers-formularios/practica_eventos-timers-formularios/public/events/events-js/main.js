window.onload = () => {
  
    let abracadabra = document.getElementById('abracadabra')

    let titular = document.getElementById('titular')

    let touch = document.getElementById('get-in-touch')

    let parrafoColor = document.getElementById('parrafo-color')

    let recentWork = document.getElementById('recentWork')

    let parrafoRecentWork = document.getElementById('parrafoRecentWork')


    abracadabra.addEventListener('click', () => {
        let nombre = prompt('Ingresá tu nombre:')

        titular.innerHTML = titular.innerHTML.replace('Jane Doe', nombre)
    })

    
    function colorAlAzar() {
        /* let colors = ['red', 'blue', 'green', 'pink', 'orange']

        let n = Math.floor(Math.random()*5) */

        let n = "#"+((1<<24)*Math.random()|0).toString(16)

        return n
    }

    touch.addEventListener('dblclick', () => {
        parrafoColor.style.color = colorAlAzar()
    })


    let sections = document.getElementsByTagName('section')

    Array.from(sections).forEach(section => {
        section.addEventListener('click', function() {
            alert('Clickeaste sobre ' + this.querySelector('h3').innerHTML)
        })
    })

    recentWork.addEventListener('mouseover', function() {
        console.log('Pasó!!!')
        parrafoRecentWork.style.color = colorAlAzar()
    })

    recentWork.addEventListener('mouseout', () => {
        parrafoRecentWork.style.color = '#888'
    })

}