// Variables
let currentIndex = 0;
let totalScore = 0;
let porCorrect = 0;
let paraCorrect = 0;
let paragraphIndex = 0;
let paragraphCorrect = 0;
let paragraphIncorrect = 0;
let incorrectAnswers = [];

// Shuffle function for randomness
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Load the current quiz question
function loadQuestion() {
  const quizContainer = document.getElementById("questions-container");
  const feedback = document.getElementById("feedback");
  quizContainer.innerHTML = "";
  feedback.innerHTML = "";

  if (currentIndex >= questionPool.length) {
    document.getElementById("result").innerHTML = `
      <h2>Quiz Complete!</h2>
      <p>Your final score: <span style="color: green;">${totalScore}</span> / ${questionPool.length}</p>
      <p>Correct answers: <span style="color: green;">${totalScore}</span></p>
      <p>Incorrect answers: <span style="color: red;">${questionPool.length - totalScore}</span></p>
    `;
    showReview();
    return;
  }

  const currentQuestion = questionPool[currentIndex];
  quizContainer.innerHTML = `
    <p><strong>${currentQuestion.question}</strong></p>
    <button class="answer-btn" onclick="evaluateQuizAnswer('por')"><strong>Por</strong></button>
    <button class="answer-btn" onclick="evaluateQuizAnswer('para')"><strong>Para</strong></button>
  `;
}

// Evaluate quiz answers
function evaluateQuizAnswer(answer) {
  const currentQuestion = questionPool[currentIndex];
  const feedback = document.getElementById("feedback");

  if (answer === currentQuestion.correct) {
    totalScore++;
    feedback.innerHTML = `<p style="color: green;">Correct! ${currentQuestion.rationale}</p>`;
    if (currentQuestion.correct === "por") porCorrect++;
    if (currentQuestion.correct === "para") paraCorrect++;
  } else {
    feedback.innerHTML = `<p style="color: red;">Incorrect. ${currentQuestion.rationale}</p>`;
    incorrectAnswers.push(currentQuestion);
  }

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 2000);
}

// Review incorrect answers
function showReview() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = "<h2>Review Incorrect Answers</h2>";
  incorrectAnswers.forEach((question, index) => {
    quizContainer.innerHTML += `
      <p>${index + 1}. ${question.question}</p>
      <p><strong>Correct Answer:</strong> ${question.correct}</p>
      <p><strong>Explanation:</strong> ${question.rationale}</p>
    `;
  });
}

// Paragraph Practice
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
      <p>Correct: <span style="color:green">${paragraphCorrect}</span></p>
      <p>Incorrect: <span style="color:red">${paragraphIncorrect}</span></p>
    `;
    return;
  }

  const currentParagraph = paragraphPool[paragraphIndex];
  let html = `<p>${currentParagraph.text}</p>`;
  currentParagraph.answers.forEach((_, index) => {
    html += `
      <label for="answer-${index}">Blank ${index + 1}:</label>
      <input type="text" id="answer-${index}" placeholder="Enter answer"><br>
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
    feedback.innerHTML = `<p style="color: green;">Correct! Well done.</p>`;
    paragraphCorrect++;
  } else {
    feedback.innerHTML = `<p style="color: red;">Incorrect. Here's what you missed:</p>`;
    const rationaleList = currentParagraph.rationales.map((r) => `<li>${r}</li>`).join("");
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

// Initialize quiz and paragraph practice
function initQuiz() {
  shuffleQuestions(questionPool);
  loadQuestion();
  loadParagraph();
}

document.addEventListener("DOMContentLoaded", initQuiz);
