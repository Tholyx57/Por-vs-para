// Variables
let currentIndex = 0; // Quiz index
let paragraphIndex = 0; // Paragraph index
let totalScore = 0;
let paragraphCorrect = 0;
let paragraphIncorrect = 0;

// Placeholder function for dynamic translation
function translateText(text) {
  // Simulate translation for now (replace this with an actual API or library for real translations)
  const translations = {
    "Caminamos ___ el parque para disfrutar el buen clima.":
      "We walked ___ the park to enjoy the good weather.",
    "Estudié mucho ___ aprobar el examen de historia.":
      "I studied hard ___ to pass the history exam.",
  };

  return translations[text] || "Translation not available.";
}

// Shuffle Array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ================== QUIZ SECTION ==================
function loadQuestion() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = ""; // Clear previous content

  if (currentIndex >= questionPool.length) {
    showQuizResults();
    return;
  }

  const currentQuestion = questionPool[currentIndex];
  const questionText = document.createElement("p");
  questionText.textContent = currentQuestion.question;

  const optionsContainer = document.createElement("div");
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => evaluateAnswer(option, currentQuestion));
    optionsContainer.appendChild(button);
  });

  quizContainer.appendChild(questionText);
  quizContainer.appendChild(optionsContainer);

  document.getElementById("quiz-feedback").textContent = ""; // Clear feedback
}

function evaluateAnswer(selectedOption, question) {
  const feedback = document.getElementById("quiz-feedback");

  const translation = translateText(question.question);

  if (selectedOption === question.correct) {
    feedback.innerHTML = `
      <p style="color: green;">Correct! ${question.rationale}</p>
      <p><strong>Translation:</strong> ${translation}</p>
    `;
    totalScore++;
  } else {
    feedback.innerHTML = `
      <p style="color: red;">Incorrect. ${question.rationale}</p>
      <p><strong>Translation:</strong> ${translation}</p>
    `;
  }

  currentIndex++;
  setTimeout(loadQuestion, 2000); // Load next question after 2 seconds
}

function showQuizResults() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your Score: ${totalScore} / ${questionPool.length}</p>
  `;
}

// ================== PARAGRAPH SECTION ==================
function loadParagraph() {
  const paragraphContainer = document.getElementById("paragraph-container");
  const feedback = document.getElementById("paragraph-feedback");
  const nextButton = document.getElementById("next-paragraph");

  if (paragraphIndex >= paragraphPool.length) {
    paragraphContainer.innerHTML = `
      <h2>Paragraph Practice Complete!</h2>
      <p>Correct: ${paragraphCorrect}</p>
      <p>Incorrect: ${paragraphIncorrect}</p>
    `;
    nextButton.style.display = "none";
    return;
  }

  const currentParagraph = paragraphPool[paragraphIndex];
  const textWithBlanks = currentParagraph.text.replace(/___/g, (match, index) => {
    return `<span class="blank" id="blank-${index}">___</span>`;
  });

  paragraphContainer.innerHTML = `<p>${textWithBlanks}</p>`;

  const optionsContainer = document.createElement("div");
  currentParagraph.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () =>
      handleParagraphSelection(option, currentParagraph)
    );
    optionsContainer.appendChild(button);
  });

  paragraphContainer.appendChild(optionsContainer);

  feedback.innerHTML = "";
  nextButton.style.display = "none";
}

function handleParagraphSelection(option, currentParagraph) {
  const blanks = document.querySelectorAll(".blank");
  let isFilled = true;

  blanks.forEach((blank, i) => {
    if (blank.textContent === "___" && option === currentParagraph.answers[i]) {
      blank.textContent = option;
      blank.style.color = "green";
    } else if (blank.textContent === "___") {
      blank.style.color = "red";
      isFilled = false;
    }
  });

  if (isFilled) {
    showParagraphRationale(currentParagraph);
  }
}

function showParagraphRationale(currentParagraph) {
  const feedback = document.getElementById("paragraph-feedback");

  const translation = translateText(currentParagraph.text);

  feedback.innerHTML = `
    <ul>${currentParagraph.rationales
      .map((rationale) => `<li>${rationale}</li>`)
      .join("")}</ul>
    <p><strong>Translation:</strong> ${translation}</p>
  `;

  document.getElementById("next-paragraph").style.display = "block";
  paragraphIndex++;
}

// ================== INITIALIZATION ==================
function initQuiz() {
  shuffleArray(questionPool);
  shuffleArray(paragraphPool);
  currentIndex = 0;
  paragraphIndex = 0;
  loadQuestion();
  loadParagraph();
}

document.addEventListener("DOMContentLoaded", initQuiz);
