// Variables
let currentIndex = 0; // For quiz
let paragraphIndex = 0; // For paragraphs
let totalScore = 0;
let incorrectAnswers = [];
let paragraphCorrect = 0;
let paragraphIncorrect = 0;

// Shuffle Questions
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Load Quiz Questions
function loadQuestion() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = "";

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
    button.className = "quiz-button";
    button.addEventListener("click", () => evaluateAnswer(option, currentQuestion));
    optionsContainer.appendChild(button);
  });

  quizContainer.appendChild(questionText);
  quizContainer.appendChild(optionsContainer);
}

function evaluateAnswer(selectedOption, question) {
  const feedback = document.getElementById("feedback");

  if (selectedOption === question.correct) {
    feedback.textContent = `Correct! ${question.rationale}`;
    feedback.style.color = "green";
    totalScore++;
  } else {
    feedback.textContent = `Incorrect. ${question.rationale}`;
    feedback.style.color = "red";
    incorrectAnswers.push(question);
  }

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 3000);
}

function showQuizResults() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your Score: <span style="color: green;">${totalScore}</span> / ${questionPool.length}</p>
    <p>Review your incorrect answers below:</p>
  `;

  incorrectAnswers.forEach((question, index) => {
    const questionReview = document.createElement("div");
    questionReview.innerHTML = `
      <p><strong>${index + 1}. ${question.question}</strong></p>
      <p>Correct Answer: ${question.correct}</p>
      <p>Explanation: ${question.rationale}</p>
    `;
    quizContainer.appendChild(questionReview);
  });
}

// Load Paragraph Practice
function loadParagraph() {
  const paragraphContainer = document.getElementById("paragraph-container");
  paragraphContainer.innerHTML = "";

  if (paragraphIndex >= paragraphPool.length) {
    showParagraphResults();
    return;
  }

  const currentParagraph = paragraphPool[paragraphIndex];
  let userAnswers = Array(currentParagraph.answers.length).fill("");

  paragraphContainer.innerHTML = currentParagraph.text.split("___").map((part, i) => {
    return `${part}<span class="blank" id="blank-${i}">___</span>`;
  }).join("");

  const optionsContainer = document.createElement("div");
  currentParagraph.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className = "paragraph-button";
    button.addEventListener("click", () => handleParagraphSelection(option, userAnswers, currentParagraph));
    optionsContainer.appendChild(button);
  });

  paragraphContainer.appendChild(optionsContainer);
}

function handleParagraphSelection(option, userAnswers, currentParagraph) {
  const feedback = document.getElementById("paragraph-feedback");
  feedback.innerHTML = "";

  for (let i = 0; i < userAnswers.length; i++) {
    if (!userAnswers[i]) {
      userAnswers[i] = option;
      document.getElementById(`blank-${i}`).textContent = option;
      break;
    }
  }

  if (userAnswers.every((answer, index) => answer === currentParagraph.answers[index])) {
    paragraphCorrect++;
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    paragraphIncorrect++;
    feedback.textContent = "Incorrect. Try again!";
    feedback.style.color = "red";
  }
}

function showParagraphResults() {
  const paragraphContainer = document.getElementById("paragraph-container");
  paragraphContainer.innerHTML = `
    <h2>Paragraph Practice Complete!</h2>
    <p>Correct: ${paragraphCorrect}</p>
    <p>Incorrect: ${paragraphIncorrect}</p>
  `;
}

// Initialize
function initQuiz() {
  shuffleQuestions(questionPool);
  loadQuestion();
  loadParagraph();
}

document.addEventListener("DOMContentLoaded", initQuiz);
