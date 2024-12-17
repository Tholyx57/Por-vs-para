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
  quizContainer.innerHTML = "";

  if (currentIndex >= questionPool.length) {
    showQuizResults();
    return;
  }

  const currentQuestion = questionPool[currentIndex];

  // Question text
  const questionText = document.createElement("p");
  questionText.textContent = currentQuestion.question;
  questionText.style.fontSize = "1.5em";

  // Options as buttons
  const optionsContainer = document.createElement("div");
  optionsContainer.style.marginTop = "20px";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.style.padding = "20px";
    button.style.margin = "10px";
    button.style.fontSize = "1.5em";
    button.style.fontWeight = "bold";
    button.textContent = option;
    button.onclick = () => evaluateAnswer(option, currentQuestion);
    optionsContainer.appendChild(button);
  });

  quizContainer.appendChild(questionText);
  quizContainer.appendChild(optionsContainer);

  // Add "Grade Quiz" button
  const gradeButton = document.createElement("button");
  gradeButton.textContent = "Grade Quiz";
  gradeButton.style.padding = "15px";
  gradeButton.style.marginTop = "20px";
  gradeButton.style.fontSize = "1.5em";
  gradeButton.onclick = showQuizResults;
  quizContainer.appendChild(gradeButton);
}

function evaluateAnswer(selectedOption, question) {
  const feedback = document.getElementById("feedback");

  if (selectedOption === question.correct) {
    feedback.innerHTML = `<p style="color: green;">Correct! ${question.rationale}</p>`;
    totalScore++;
  } else {
    feedback.innerHTML = `<p style="color: red;">Incorrect. ${question.rationale}</p>`;
    incorrectAnswers.push(question);
  }

  setTimeout(() => {
    feedback.innerHTML = "";
    currentIndex++;
    loadQuestion();
  }, 5000);
}

function showQuizResults() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p style="font-size: 1.5em;">Your Score: <span style="color: green;">${totalScore}</span> / ${currentIndex}</p>
    <p style="color: red;">Incorrect Answers: ${incorrectAnswers.length}</p>
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

  // Add buttons for each blank
  currentParagraph.answers.forEach((_, index) => {
    html += `
      <div>
        <strong>Blank ${index + 1}:</strong>
        ${currentParagraph.options.map(
          (option) =>
            `<button onclick="selectParagraphAnswer(${index}, '${option}')" id="btn-${index}-${option}">${option}</button>`
        ).join(" ")}
      </div>
    `;
  });

  html += `<button id="submit-paragraph">Submit</button>`;
  paragraphContainer.innerHTML = html;

  document.getElementById("submit-paragraph").addEventListener("click", evaluateParagraphAnswer);
}

let selectedAnswers = {};

function selectParagraphAnswer(blankIndex, answer) {
  selectedAnswers[blankIndex] = answer;

  // Highlight selected button
  const buttons = document.querySelectorAll(`[id^="btn-${blankIndex}-"]`);
  buttons.forEach((btn) => btn.style.backgroundColor = "");
  document.getElementById(`btn-${blankIndex}-${answer}`).style.backgroundColor = "#0077cc";
}

function evaluateParagraphAnswer() {
  const currentParagraph = paragraphPool[paragraphIndex];
  const feedback = document.getElementById("paragraph-feedback");
  let isCorrect = true;

  currentParagraph.answers.forEach((answer, index) => {
    if (selectedAnswers[index] === answer) {
      isCorrect = isCorrect && true;
    } else {
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

  document.getElementById("next-paragraph").style.display = "block";
  document.getElementById("next-paragraph").onclick = () => {
    paragraphIndex++;
    selectedAnswers = {};
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
