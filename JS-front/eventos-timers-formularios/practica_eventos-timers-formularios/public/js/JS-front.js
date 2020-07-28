let bienvenida = alert('Bienvenidos a mi sitio')

let confirmacionEntrarAlSitio = confirm('Querés entrar?')

let h1 = document.querySelector('h1')

let h2Bienvenida = document.getElementById('bienvenida').querySelector('h2')

let backgroundIMG = document.getElementById('background')

let articleHobbies = document.querySelector('article.hobbies')


if (confirmacionEntrarAlSitio) {
    h2Bienvenida.innerText = 'Qué alegría que quieras continuar tu visita por este maravilloso sitio'

   /*  let nombreUsuario = ''
    do {
        nombreUsuario = prompt('Cuál es tu nombre?')
    } while (nombreUsuario.length == 0)
    

    h1.innerHTML = h1.innerHTML.replace('usuario', `<span>${nombreUsuario}</span>`)

    
    let edadUsuario
    do {
        edadUsuario = prompt('Cuántos años tenés?')
    } while (edadUsuario.length == 0)
    
    if (edadUsuario < 18) {
        document.getElementsByClassName('container-general')[0].style.display = 'none'
        document.getElementById('accesoDenegado').style.display = 'block'
    } */

    let hobbies
    do {
        hobbies = prompt('Ingresá tus hobbies, separados por una coma, sin espacios')
    } while (hobbies.length == 0)

    if (/programa[r|cióon]+/gi.test(hobbies)) {
        alert('Qué bueno que te guste la programación!!!')
    } else {
        alert('Qué lástima que no te guste la programación :(');
        backgroundIMG.style.backgroundImage = 'url(../images/gatito.jpeg)'
        
    } 

    let hobbiesArray = hobbies.split(',')

    articleHobbies.innerHTML += '<ol>'

    for (let i = 0; i < hobbiesArray.length; i++) {
        if (i == 3) break
        
        articleHobbies.innerHTML += `<li>${hobbiesArray[i]}</li>`
    }

    let webFavorita = prompt('Cuál es tu web favorita?')
    let urlFavorita = prompt('Pega acá la url de tu web favorita')
    articleHobbies.innerHTML += `<li><a href="${urlFavorita}">${webFavorita}</a></li>`

    articleHobbies.innerHTML += '</ol>'


    let colorPreferido = prompt('Cuál es tu color preferido?')

    h1.querySelector('span').classList.add('color-preferido')
    
    Array.from(document.querySelectorAll('a')).forEach(a => {
        a.style.textDecoration = 'none'
        
    })

    
} else {
    h2Bienvenida.innerText = 'Lamentamos que no quieras continuar tu visita por este maravilloso sitio'
}



















// let resultado = alert('Hola, cómo estás?')

// let confirmaSalida = confirm('Seguro qué queres salir?')

// if (confirmaSalida === true) {
//     location.href = 'http://digitalhouse.com'
// } else {
//     alert('Gracias por quedate!!!')
// }

// let nombre = ''
// do {
//     nombre = prompt('Dejame saber tu nombre')
// } while (nombre.length == 0)
// alert('Hola ' + nombre)

// let capturando = document.querySelectorAll('p')
// capturando.forEach( p => console.log(p))

// let strong = document.querySelector('p strong')
// console.log(strong)

// let titulo = document.querySelector('h1')
// titulo.innerHTML += ' Soy un contenido nuevo desde JS'
// console.log(titulo)

// let parrafoEspecial = document.querySelector('.parrafo-especial')
// parrafoEspecial.innerHTML = 'Un texto con algo <i>en cursiva</i>'
// console.log(parrafoEspecial)

// let confimaCambios = confirm('Querés cambiar el color del título?')
// if (confimaCambios) {
//     let titulo = document.querySelector('h1')
//     titulo.innerHTML += ' Soy un contenido nuevo desde JS'
//     titulo.style.color = 'crimson'
//     titulo.style.fontSize = '50px'
// }


// console.log(titulo)


// let titulo = document.querySelector('h1')
// titulo.innerHTML += ' Soy un contenido nuevo desde JS'
// titulo.classList.toggle('titulo-destacado')

// let confirmacionClase = confirm('Querés eliminar el estilo del título?')
// if (confirmacionClase) {
//     titulo.classList.remove('titulo-destacado')
// }

