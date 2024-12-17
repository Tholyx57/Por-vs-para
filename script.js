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
  const buttons = generateButtons(currentQuestion.category);

  quizContainer.innerHTML = `
    <p><strong>${currentQuestion.question}</strong></p>
    ${buttons}
  `;
}

function generateButtons(category) {
  let options = [];
  if (category === "Por vs. Para") {
    options = ["por", "para"];
  } else if (category === "Ser vs. Estar") {
    options = ["ser", "estar"];
  } else if (category === "Conocer vs. Saber") {
    options = ["saber", "conocer"];
  }

  return options
    .map(
      (option) =>
        `<button class="answer-btn" onclick="evaluateQuizAnswer('${option}')"><strong>${option.toUpperCase()}</strong></button>`
    )
    .join(" ");
}

function evaluateQuizAnswer(answer) {
  const currentQuestion = questionPool[currentIndex];
  const feedback = document.getElementById("feedback");

  // Check correctness
  if (answer === currentQuestion.correct) {
    totalScore++;
    feedback.innerHTML = `<p style="color: green;">Correct! ${currentQuestion.rationale}</p>`;
  } else {
    feedback.innerHTML = `<p style="color: red;">Incorrect. Correct Answer: <strong>${currentQuestion.correct}</strong><br>${currentQuestion.rationale}</p>`;
    incorrectAnswers.push(currentQuestion);
  }

  // Move to next question after 2 seconds
  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 2000);
}

function showQuizResults() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your Score: <span style="color: green;">${totalScore}</span> / ${questionPool.length}</p>
    <p>Incorrect Answers: <span style="color: red;">${incorrectAnswers.length}</span></p>
  `;
}

// ========================= PARAGRAPH SECTION =========================
function loadParagraph() {
  const paragraphContainer = document.getElementById("paragraph-container");
  const feedback = document.getElementById("paragraph-feedback");
  const nextButton = document.getElementById("next-paragraph");

  paragraphContainer.innerHTML = "";
  feedback.innerHTML = "";
  nextButton.style.display = "none";

  if (paragraphIndex >= paragraphPool.length) {
    paragraphContainer.innerHTML = `
      <h2>Paragraph Practice Complete!</h2>
      <p>Correct: <span style="color: green;">${paragraphCorrect}</span></p>
      <p>Incorrect: <span style="color: red;">${paragraphIncorrect}</span></p>
    `;
    return;
  }

  const currentParagraph = paragraphPool[paragraphIndex];
  let html = `<p>${currentParagraph.text}</p>`;
  currentParagraph.answers.forEach((_, index) => {
    html += `
      <label><strong>Blank ${index + 1}:</strong></label>
      <input type="text" id="answer-${index}" placeholder="Enter answer" /><br>
    `;
  });
  html += `<button onclick="evaluateParagraphAnswer()">Submit</button>`;
  paragraphContainer.innerHTML = html;
}

function evaluateParagraphAnswer() {
  const currentParagraph = paragraphPool[paragraphIndex];
  const feedback = document.getElementById("paragraph-feedback");
  let isCorrect = true;

  currentParagraph.answers.forEach((answer, index) => {
    const userAnswer = document.getElementById(`answer-${index}`).value.trim().toLowerCase();
    if (userAnswer === answer) {
      document.getElementById(`answer-${index}`).style.borderColor = "green";
    } else {
      document.getElementById(`answer-${index}`).style.borderColor = "red";
      isCorrect = false;
    }
  });

  if (isCorrect) {
    feedback.innerHTML = `<p style="color: green;">Correct!</p>`;
    paragraphCorrect++;
  } else {
    feedback.innerHTML = `<p style="color: red;">Incorrect. Explanations:</p>`;
    const rationaleList = currentParagraph.rationales.map(r => `<li>${r}</li>`).join("");
    feedback.innerHTML += `<ul>${rationaleList}</ul>`;
    paragraphIncorrect++;
  }

  const nextButton = document.getElementById("next-paragraph");
  nextButton.style.display = "block";
  nextButton.onclick = () => {
    paragraphIndex++;
    loadParagraph();
  };
}

// ========================= INITIALIZATION =========================
function initQuiz() {
  shuffleQuestions(questionPool);
  loadQuestion();
  loadParagraph();
}

document.addEventListener("DOMContentLoaded", initQuiz);
