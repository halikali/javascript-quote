const baseUrlForQuotes = "https://goquotes-api.herokuapp.com/api/v1/random?count=1" ; 

const fetchQuotes = () => {
    fetch(baseUrlForQuotes).then(Response => Response.json()).then(data =>  {
        document.getElementById("quote").innerHTML = data.quotes[0].text , 
        data ? document.getElementById("author").innerHTML = `Author : ${data.quotes[0].author}`: ""
        data ? document.getElementById("tag").innerHTML = `Tag : ${data.quotes[0].tag} ` : ""
        
    })
}



window.addEventListener('load',fetchQuotes());