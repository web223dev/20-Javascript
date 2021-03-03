const quoteContainer = document.getElementById('quote-container');

async function getQuote(){
    try {
        const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const res = await fetch(proxyUrl + apiUrl);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log('Oops', error);
    }
}

// On Load
getQuote();