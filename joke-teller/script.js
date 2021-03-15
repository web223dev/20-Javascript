function test(){
    VoiceRSS.speech({
        key: 'cd807dbd12e2409fb7abcaea3bf04ea9',
        src: 'Hello, world!',
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}


async function getJoke() {
    try {
        const url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
        const res = await fetch(url);
        const data = await res.json();
        let joke = '';
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`
        } else {
            joke = data.joke
        }
        console.log(joke);
    } catch (error) {
        // Catch Error Here
    }
}

test();
getJoke();