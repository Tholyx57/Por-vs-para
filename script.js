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

// ========================= QUIZ SECTION =========================
function loadQuestion() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = ""; // Clear previous content

  if (currentIndex >= questionPool.length) {
    showQuizResults();
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
    html += `<div>
        <strong>Blank ${index + 1}:</strong>
        ${currentParagraph.options
          .map(
            (option) =>
              `<button class="paragraph-button" onclick="selectParagraphAnswer('${option}', ${index})">${option}</button>`
          )
          .join(" ")}
        <span id="paragraph-feedback-${index}" style="margin-left: 10px;"></span>
      </div>`;
  });

  html += `<button id="submit-paragraph" onclick="evaluateParagraphAnswer()">Submit</button>`;
  paragraphContainer.innerHTML = html;
}

let paragraphAnswers = []; // Temporarily store user's paragraph answers

function selectParagraphAnswer(option, index) {
  paragraphAnswers[index] = option;

  // Highlight the selected button
  const buttons = document.querySelectorAll(`.paragraph-button`);
  buttons.forEach((btn) => {
    if (btn.textContent === option) {
      btn.style.backgroundColor = "#0077cc";
      btn.style.color = "white";
    } else {
      btn.style.backgroundColor = "lightblue";
      btn.style.color = "black";
    }
  });
}

function evaluateParagraphAnswer() {
  const currentParagraph = paragraphPool[paragraphIndex];
  let allCorrect = true;

  currentParagraph.answers.forEach((correctAnswer, index) => {
    const feedback = document.getElementById(`paragraph-feedback-${index}`);
    const userAnswer = paragraphAnswers[index];

    if (userAnswer === correctAnswer) {
      feedback.textContent = "✔️";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "❌";
      feedback.style.color = "red";
      allCorrect = false;
    }
  });

  if (allCorrect) {
    paragraphCorrect++;
  } else {
    paragraphIncorrect++;
  }

  const nextButton = document.getElementById("next-paragraph");
  nextButton.style.display = "block";
  nextButton.onclick = () => {
    paragraphAnswers = [];
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
