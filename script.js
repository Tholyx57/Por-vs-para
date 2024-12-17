// ========================= Variables =========================
let currentIndex = 0; // For quiz
let paragraphIndex = 0; // For paragraphs
let totalScore = 0;
let incorrectAnswers = [];
let paragraphCorrect = 0;
let paragraphIncorrect = 0;
let selectedAnswers = {}; // For tracking paragraph answers

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
    feedback.textContent = "";
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
  selectedAnswers = {}; // Reset selected answers

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
      <p><strong>Blank ${index + 1}:</strong></p>
      <button id="btn-${index}-por" onclick="selectParagraphAnswer(${index}, 'por')">Por</button>
      <button id="btn-${index}-para" onclick="selectParagraphAnswer(${index}, 'para')">Para</button>
      <button id="btn-${index}-ser" onclick="selectParagraphAnswer(${index}, 'ser')">Ser</button>
      <button id="btn-${index}-estar" onclick="selectParagraphAnswer(${index}, 'estar')">Estar</button>
      <button id="btn-${index}-saber" onclick="selectParagraphAnswer(${index}, 'saber')">Saber</button>
      <button id="btn-${index}-conocer" onclick="selectParagraphAnswer(${index}, 'conocer')">Conocer</button>
    </div>`;
  });

  html += `<button onclick="evaluateParagraphAnswer()">Submit</button>`;
  paragraphContainer.innerHTML = html;
}

function selectParagraphAnswer(blankIndex, answer) {
  selectedAnswers[blankIndex] = answer;

  // Remove 'selected' class from all buttons for the current blank
  const buttons = document.querySelectorAll(`[id^="btn-${blankIndex}-"]`);
  buttons.forEach((btn) => btn.classList.remove("selected"));

  // Add 'selected' class to the clicked button
  document.getElementById(`btn-${blankIndex}-${answer}`).classList.add("selected");
}

function evaluateParagraphAnswer() {
  const currentParagraph = paragraphPool[paragraphIndex];
  const feedback = document.getElementById("paragraph-feedback");
  let isCorrect = true;

  currentParagraph.answers.forEach((answer, index) => {
    if (selectedAnswers[index] === answer) {
      document.getElementById(`btn-${index}-${answer}`).classList.add("selected");
    } else {
      isCorrect = false;
    }
  });

  if (isCorrect) {
    feedback.innerHTML = `<p style="color: green;">Correct!</p>`;
    paragraphCorrect++;
  } else {
    feedback.innerHTML = `<p style="color: red;">Incorrect. Explanations:</p>`;
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

// ========================= INITIALIZATION =========================
function initQuiz() {
  shuffleQuestions(questionPool);
  loadQuestion();
  loadParagraph();
}

document.addEventListener("DOMContentLoaded", initQuiz);
