// Variables
let currentIndex = 0; // Quiz index
let paragraphIndex = 0; // Paragraph index
let totalScore = 0;
let paragraphCorrect = 0;
let paragraphIncorrect = 0;

// Shuffle Questions
function shuffleQuestions(array) {
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

  // Question Text
  const questionText = document.createElement("p");
  questionText.textContent = currentQuestion.question;

  // Options
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

  if (selectedOption === question.correct) {
    feedback.innerHTML = `
      <p style="color: green;">Correct! ${question.rationale}</p>
      <p><strong>Translation:</strong> ${question.translation}</p>
    `;
    totalScore++;
  } else {
    feedback.innerHTML = `
      <p style="color: red;">Incorrect. ${question.rationale}</p>
      <p><strong>Translation:</strong> ${question.translation}</p>
    `;
  }

  currentIndex++;
  loadQuestion();
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
  let userAnswers = Array(currentParagraph.answers.length).fill("");

  paragraphContainer.innerHTML = currentParagraph.text.replace(/___/g, (match, i) => {
    return `<span class="blank" id="blank-${i}">___</span>`;
  });

  const optionsContainer = document.createElement("div");
  currentParagraph.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => handleParagraphSelection(option, userAnswers, currentParagraph));
    optionsContainer.appendChild(button);
  });

  paragraphContainer.appendChild(optionsContainer);

  feedback.textContent = "";
  nextButton.style.display = "none";
}

function handleParagraphSelection(option, userAnswers, currentParagraph) {
  for (let i = 0; i < userAnswers.length; i++) {
    if (!userAnswers[i]) {
      userAnswers[i] = option;
      document.getElementById(`blank-${i}`).textContent = option;
      break;
    }
  }

  if (userAnswers.every((answer) => answer)) {
    evaluateParagraphAnswer(userAnswers, currentParagraph);
  }
}

function evaluateParagraphAnswer(userAnswers, currentParagraph) {
  const feedback = document.getElementById("paragraph-feedback");
  feedback.innerHTML = "";

  let allCorrect = true;
  userAnswers.forEach((answer, i) => {
    if (answer !== currentParagraph.answers[i]) {
      allCorrect = false;
      document.getElementById(`blank-${i}`).style.color = "red";
    } else {
      document.getElementById(`blank-${i}`).style.color = "green";
    }
  });

  feedback.innerHTML = `
    <p style="color: ${allCorrect ? 'green' : 'red'};">${allCorrect ? 'Correct!' : 'Incorrect.'}</p>
    <ul>${currentParagraph.rationales
      .map((rationale, i) => `<li>${rationale}</li>`)
      .join("")}</ul>
    <p><strong>Translation:</strong> ${currentParagraph.translation}</p>
  `;

  paragraphIndex++;
  document.getElementById("next-paragraph").style.display = "block";
}

// ================== INITIALIZATION ==================
function initQuiz() {
  shuffleQuestions(questionPool);
  currentIndex = 0;
  paragraphIndex = 0;
  loadQuestion();
  loadParagraph();
}

document.addEventListener("DOMContentLoaded", initQuiz);
