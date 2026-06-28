function speakMessage(text) {

  document.getElementById("message").textContent = text;

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "pt-BR";
  speech.rate = 0.9;

  speechSynthesis.cancel();
  speechSynthesis.speak(speech);
}