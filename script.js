// Variables
let currentIndex = 0; // For quiz
let paragraphIndex = 0; // For paragraphs
let totalScore = 0;
let incorrectAnswers = [];
let paragraphCorrect = 0;
let paragraphIncorrect = 0;

// Shuffle Questions (for randomness)
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ========================= QUIZ SECTION =========================
function loadQuestion() {
  const quizContainer = document.getElementById("questions-container");
  const feedback = document.getElementById("feedback");
  quizContainer.innerHTML = "";
  feedback.innerHTML = "";

  if (currentIndex >= questionPool.length) {
    showQuizResults();
    return;
  }

  const currentQuestion = questionPool[currentIndex];
  quizContainer.innerHTML = `
    <p><strong>${currentQuestion.question}</strong></p>
    <button class="answer-btn" onclick="evaluateQuizAnswer('por')"><strong>Por</strong></button>
    <button class="answer-btn" onclick="evaluateQuizAnswer('para')"><strong>Para</strong></button>
    <button class="answer-btn" onclick="evaluateQuizAnswer('ser')"><strong>Ser</strong></button>
    <button class="answer-btn" onclick="evaluateQuizAnswer('estar')"><strong>Estar</strong></button>
    <button class="answer-btn" onclick="evaluateQuizAnswer('saber')"><strong>Saber</strong></button>
    <button class="answer-btn" onclick="evaluateQuizAnswer('conocer')"><strong>Conocer</strong></button>
  `;
}

function evaluateQuizAnswer(answer) {
  const currentQuestion = questionPool[currentIndex];
  const feedback = document.getElementById("feedback");

  if (answer === currentQuestion.correct) {
    totalScore++;
    feedback.innerHTML = `<p style="color: green;">Correct! ${currentQuestion.rationale}</p>`;
  } else {
    feedback.innerHTML = `<p style="color: red;">Incorrect. ${currentQuestion.rationale}</p>`;
    incorrectAnswers.push(currentQuestion);
  }

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 2000);
}

function showQuizResults() {
  const quizContainer = document.getElementById("questions-conta
