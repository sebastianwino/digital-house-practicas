window.addEventListener('load', () => {
  
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
        // let colors = ['red', 'blue', 'green', 'pink', 'orange']
        // let n = Math.floor(Math.random()*5)

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
        parrafoRecentWork.style.color = colorAlAzar()
    })

    recentWork.addEventListener('mouseout', () => {
        parrafoRecentWork.style.color = '#888'
    })


    window.addEventListener('keyup', (e) => {
        switch (e.which) {
            case 83 : estadoSecreto = 1; break;
            case 69 : 
                if(estadoSecreto == 1) {
                    estadoSecreto = 2;
                } else if (estadoSecreto == 4) {
                    estadoSecreto = 5;
                }
                break;
            case 67 : estadoSecreto = 1; break;
            case 82 : estadoSecreto = 1; break;
            case 84 : estadoSecreto = 1; break;
            case 79 :
                estadoSecreto = 7;
                alert('SECRETO MÁGICO')
                break;
            default:
                estadoSecreto = 0
        }
    })



})