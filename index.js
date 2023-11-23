let textArea = document.getElementById("text") ;
let speakButton = document.getElementById("convert");

// Add an event listener to the speak button
speakButton.addEventListener("click", function() {
  // Get the text from the text area
  let text = textArea.value + "if you have any other sentences to say, just tell me";

  // Create a new SpeechSynthesisUtterance object
  let utterance = new SpeechSynthesisUtterance();

  // Set the text and voice of the utterance
  utterance.text = text;
  utterance.voice = window.speechSynthesis.getVoices()[0];

  // Speak the utterance
  window.speechSynthesis.speak(utterance);
});
