let voices = [];

function loadVoices() {
    voices = speechSynthesis.getVoices();
}

// Inicializa vozes e garante atualização em navegadores como Chrome
loadVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
}

function speakMessage(text) {
    const el = document.getElementById('message');
    el.textContent = text;
    el.classList.add('speaking');

    setTimeout(() => {
        el.classList.remove('speaking');
    }, 1200);

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    // Prioridade para vozes brasileiras
    let voice = voices.find(v => v.lang === 'pt-BR') ||
                voices.find(v => v.lang === 'pt_BR') ||
                voices.find(v => v.lang.startsWith('pt'));

    if (voice) {
        utterance.voice = voice;
    }

    utterance.lang = 'pt-BR';
    utterance.rate = 0.9;
    utterance.pitch = 1;

    speechSynthesis.speak(utterance);
}