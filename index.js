const baseUrlForQuotes = "https://goquotes-api.herokuapp.com/api/v1/random?count=1" ; 

const fetchQuotes = () => {
    fetch(baseUrlForQuotes).then(Response => Response.json()).then(data =>  {
        document.getElementById("quote").innerHTML = data.quotes[0].text , 
        document.getElementById("author").innerHTML = `Yazar : ${data.quotes[0].author}`,
        document.getElementById("tag").innerHTML = `Kategori : ${data.quotes[0].tag}`
        
    })
}



window.addEventListener('load',fetchQuotes());