const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Voice is activated, talk now.')
};

recognition.onresult = function(event) {
    console.log(event);
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    console.log(transcript);
    content.textContent = transcript;
    readOutLoud(transcript);
};


//add the listener to the btn

btn.addEventListener('click', () => {
    recognition.start();
});


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 0.75;
    speech.pitch = 0.2; 

    window.speechSynthesis.speak(speech);
}