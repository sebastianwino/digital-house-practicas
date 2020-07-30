window.onload = () => {

    function fetchRandomGiphy() {
        fetch('https://api.giphy.com/v1/gifs/random?api_key=bQf1sIBP2bxnXxmnrWcGOHb4CxXC4HyZ&tag=&rating=g')
        .then(response => response.json())
        .then(information => {
            let data = information.data
            
            let gifName
            if(data.title != "" || data.title != " ") {
                gifName = data.title
            } else {
                gifName = 'GIF sin titulo'
            }

            let gifURL = data.images.original.url

            let h1 =  document.querySelector('h1#random')
            h1.innerHTML = gifName
            
            let p = document.querySelector('p#random-gif')
            p.innerHTML = `<img src="${gifURL}">`

           
        });
    } 
    

    let changeGIF = document.querySelector('button#random-changeGIF')

    changeGIF.addEventListener('click', (e) => {
        e.preventDefault()

        fetchRandomGiphy() 
    })

    fetchRandomGiphy()
}

