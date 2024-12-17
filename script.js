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
  quizContainer.innerHTML = ""; // Clear previous content

  if (currentIndex >= questionPool.length) {
    document.getElementById("result").innerText = `Quiz Complete! Your final score: ${totalScore}/${questionPool.length}.`;
    return;
  }

  const currentQuestion = questionPool[currentIndex];

  // Question text
  const questionText = document.createElement("p");
  questionText.textContent = currentQuestion.question;

  // Options as buttons
  const optionsContainer = document.createElement("div");
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerHTML = `<strong>${option}</strong>`;
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
  }

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
