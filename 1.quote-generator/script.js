const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

function currentQuote(data){
    quote.textContent = data.quoteText;
    if(data.quoteAuthor === ''){
        author.textContent = 'Unknown';
    } else {
        author.textContent = data.quoteAuthor;
    }
}

async function getQuote(){
    try {
        const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
        const proxyUrl = 'https://fast-stream-06353.herokuapp.com/';
        const res = await fetch(proxyUrl + apiUrl);
        const data = await res.json();
        currentQuote(data);
    } catch (error) {
        console.log('Oops', error);
    }
}

function addTwitter(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}-${author}`
    console.log(twitterUrl);
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', addTwitter);

// On Load
getQuote();