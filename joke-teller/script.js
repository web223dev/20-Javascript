const audioElement = document.getElementById('audio');
const button = document.getElementById('button');

// Disable/Enable Button
function toggleButton() {
    button.disabled = !button.disabled;
}

// VoiceRSS Speech Function
function tellMe(joke) {
    const jokeString = joke.trim().replace(/ /g, '%20');
    // VoiceRSS Speech Parameters
    VoiceRSS.speech({
        key: 'cd807dbd12e2409fb7abcaea3bf04ea9',
        src: jokeString,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false,
    });
}

// Get joke from Joke API
async function getJokes() {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    // When Click "Tell Me A Joke" Button, Disable button
    toggleButton();
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        // Assign One or Two Part Joke
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        // Passing Joke to VoiceRSS API
        tellMe(joke);
    } catch (error) {
        // Catch Error Here
    }
}

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);