window.onload = () => {

    function fetchTendingGiphy() {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=bQf1sIBP2bxnXxmnrWcGOHb4CxXC4HyZ&limit=25&rating=g')
        .then(response => response.json())
        .then(information => {
            let data = information.data

            console.log(data)
            
            data.forEach(gif => {
                let gifName
                if(gif.title != "" || gif.title != " ") {
                    gifName = gif.title
                } else {
                    gifName = 'GIF sin titulo'
                }
    
                let gifURL = gif.images.original.url
    
                let p = document.querySelector('p#trending-gif')
             
                p.innerHTML += `${gifName}<br><br><img src="${gifURL}"><br></br><br>`
            })        

           
        });
    }    
    
    fetchTendingGiphy()
    

}

