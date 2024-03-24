const textToConvert = document.getElementById('text-to-convert');
const convertBtn = document.getElementById('convert-btn');
const stopBtn = document.getElementById('stop-btn');
let synth = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance();

convertBtn.addEventListener('click', () => {
    if (synth.speaking) {
        return;
    }
    if (textToConvert.value !== '') {
        utterance.text = textToConvert.value;
        synth.speak(utterance);
    }
});

stopBtn.addEventListener('click', () => {
    if (synth.speaking) {
        synth.cancel();
    }
});
