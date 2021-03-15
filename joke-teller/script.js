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

test();