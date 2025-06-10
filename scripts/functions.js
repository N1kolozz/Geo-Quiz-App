// Translation strings for supported languages
const translations = {
  ka: {
    title: "გამოიცანი ხილის ფასი 🍑",
    subtitle: "თუ გამოიცნობ სწორად – მიიღებ 50%-იან ფასდაკლებას!<br>თუკი ვერ – მაინც მიიღებ 35%-იანს!",
    question: "რამდენი ღირს ეს მანგო (500გ)?",
    options: ["-- აირჩიე პასუხი --", "10 ლარი", "15 ლარი", "20 ლარი"],
    submit: "გაგზავნა",
    correct: "გილოცავ! 🎉 შენ მიიღე 50%-იანი ფასდაკლება!",
    wrong: "კინაღამ გამოიცანი! შენ მიიღე 35%-იანი ფასდაკლება! 🧡",
    choose: "გთხოვ აირჩიე პასუხი ☝️"
  },
  en: {
    title: "Guess the Fruit Price 🍑",
    subtitle: "Guess correctly – get a 50% discount!<br>If not – you still get 35% off!",
    question: "How much does this mango (500g) cost?",
    options: ["-- Choose an answer --", "10 GEL", "15 GEL", "20 GEL"],
    submit: "Submit",
    correct: "Congratulations! 🎉 You get a 50% discount!",
    wrong: "Almost! You get a 35% discount! 🧡",
    choose: "Please select an answer ☝️"
  },
  fr: {
    title: "Devinez le prix du fruit 🍑",
    subtitle: "Bonne réponse – 50% de réduction !<br>Sinon – 35% de réduction quand même !",
    question: "Combien coûte cette mangue (500g) ?",
    options: ["-- Choisissez une réponse --", "10 GEL", "15 GEL", "20 GEL"],
    submit: "Envoyer",
    correct: "Félicitations ! 🎉 Vous bénéficiez de 50% de réduction !",
    wrong: "Presque ! Vous bénéficiez de 35% de réduction ! 🧡",
    choose: "Veuillez choisir une réponse ☝️"
  },
  de: {
    title: "Errate den Fruchtpreis 🍑",
    subtitle: "Richtig geraten – 50% Rabatt!<br>Falls nicht – trotzdem 35% Rabatt!",
    question: "Wie viel kostet diese Mango (500g)?",
    options: ["-- Antwort wählen --", "10 GEL", "15 GEL", "20 GEL"],
    submit: "Absenden",
    correct: "Glückwunsch! 🎉 Du bekommst 50% Rabatt!",
    wrong: "Fast! Du bekommst 35% Rabatt! 🧡",
    choose: "Bitte wähle eine Antwort ☝️"
  }
};

// Current language and user name state
let currentLang = "ka";
let userName = "";


 // Sets the application language and updates UI texts accordingly.
function setLanguage(lang) {
  userName = document.getElementById('username').value;
  if (!userName) {
    // Show placeholder if username is missing
    const input = document.getElementById('username');
    input.placeholder = "Name is required!";
    input.focus();
    return;
  }

  // Reset username input border color
  document.getElementById('username').style.borderColor = "#ddd";
  currentLang = lang;
  const t = translations[lang];

  // Update UI elements with translations
  document.getElementById('title').innerHTML = `${t.title} <span style="font-size:1rem;font-weight:900;">- ${userName}</span>`;
  document.getElementById('subtitle').innerHTML = t.subtitle;
  document.getElementById('question').innerHTML = t.question;

  // Update select options
  const select = document.getElementById('guess');
  select.options[0].text = t.options[0];
  select.options[1].text = t.options[1];
  select.options[2].text = t.options[2];
  select.options[3].text = t.options[3];

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
  const guess = document.getElementById('guess').value;
  const resultDiv = document.getElementById('result');
  const select = document.getElementById('guess');
  const button = document.getElementById('submitBtn');
  const winAudio = new Audio('../assets/audio/win.mp3');
  const t = translations[currentLang];
  resultDiv.classList.remove('show');

  // If no answer is selected
  if (!guess) {
    resultDiv.innerHTML = `${userName}, ${t.choose}`;
    resultDiv.style.color = "#444";
  } 
  // If the correct answer is selected
  else if (guess === "20") {
    resultDiv.innerHTML = `${userName}, ${t.correct}`;
    resultDiv.style.color = "#388e3c";
    winAudio.play();

    // Trigger confetti animation if available
    if (typeof confetti === "function") {
      confetti({
        particleCount: 150,
        spread: 100,
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
    resultDiv.innerHTML = `${userName}, ${t.wrong}`;
    resultDiv.style.color = "#ff9900";
    select.disabled = true;
    button.disabled = true;
    button.style.opacity = "0.6";
    button.style.cursor = "not-allowed";
  }
  // Show result message
  resultDiv.classList.add('show');
}