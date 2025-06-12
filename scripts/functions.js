import translations from '../scripts/translations.js';


// Current language

let currentLang = "ka";
let currentQuestion = null; // Store the current question object

// Sets the application language and updates UI texts accordingly.
function setLanguage(lang) {

  currentLang = lang;
  const t = translations[lang];

  // Pick a random question
  const questions = t.questions;
  currentQuestion = questions[Math.floor(Math.random() * questions.length)];

  // Update UI elements with translations
  document.getElementById('title').innerHTML = `${t.title}`;
  document.getElementById('subtitle').innerHTML = t.subtitle;
  document.getElementById('question').innerHTML = currentQuestion.question;

  // Update select options
  const select = document.getElementById('guess');
  for (let i = 0; i < currentQuestion.options.length; i++) {
    select.options[i].text = currentQuestion.options[i];
  }

  // Update submit button text
  document.getElementById('submitBtn').innerText = t.submit;

  // Hide language modal and show game container after a short delay
  const modal = document.getElementById('lang-modal');
  modal.classList.add('hide');
  setTimeout(() => {
    modal.style.display = "none";
    document.getElementById('game-container').style.display = "block";
  }, 700);
}

/**
 * Checks the user's answer and updates the UI with the result.
 */
function checkAnswer() {
  const guess = document.getElementById('guess').selectedIndex;
  const resultDiv = document.getElementById('result');
  const select = document.getElementById('guess');
  const button = document.getElementById('submitBtn');
  const winAudio = new Audio('../assets/audio/win.mp3');
  const t = translations[currentLang];
  resultDiv.classList.remove('show');

  // If no answer is selected
  if (guess === 0) {
    resultDiv.innerHTML = `${t.choose}`;
    resultDiv.style.color = "#444";
  } 
  // If the correct answer is selected
  else if (guess === currentQuestion.answer) {
    resultDiv.innerHTML = `${t.correct}`;
    resultDiv.style.color = "#388e3c";
    winAudio.play();

    // Trigger confetti animation if available
    if (typeof confetti === "function") {
      confetti({
        particleCount: 200,
        spread: 50,
        origin: { y: 0.6 }
      });
    }

    // Disable further input
    select.disabled = true;
    button.disabled = true;
    button.style.opacity = "0.6";
    button.style.cursor = "not-allowed";
  } 
  // If the answer is incorrect
  else {
    resultDiv.innerHTML = `${t.wrong}`;
    resultDiv.style.color = "#ff9900";
    select.disabled = true;
    button.disabled = true;
    button.style.opacity = "0.6";
    button.style.cursor = "not-allowed";
  }
  // Show result message
  resultDiv.classList.add('show');
}

window.setLanguage = setLanguage;
window.checkAnswer = checkAnswer;