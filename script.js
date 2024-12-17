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

  const questionText = document.createElement("p");
  questionText.textContent = currentQuestion.question;
  questionText.style.fontSize = "1.5em";

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
    <p style="font-size: 1.5em;">Your Score: <span style="color: green;">${totalScore}</span> / ${questionPool.length}</p>
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
      <p style="color: green;">Correct: ${paragraphCorrect}</p>
      <p style="color: red;">Incorrect: ${paragraphIncorrect}</p>
    `;
    return;
  }

  const currentParagraph = paragraphPool[paragraphIndex];
  const blanks = currentParagraph.answers;

  let html = `<p style="font-size: 1.2em;">${currentParagraph.text.replace(/___/g, '___')}</p>`;

  blanks.forEach((answer, index) => {
    html += `
      <div style="margin: 10px;">
        <label><strong>Blank ${index + 1}:</strong></label>
        <button style="padding: 15px; font-size: 1.2em;" onclick="checkParagraphAnswer('${answer}', ${index})">${answer}</button>
      </div>
    `;
  });

  paragraphContainer.innerHTML = html;
}

function checkParagraphAnswer(correctAnswer, index) {
  const feedback = document.getElementById("paragraph-feedback");
  const clickedButton = event.target;

  if (clickedButton.textContent === correctAnswer) {
    clickedButton.style.backgroundColor = "green";
    feedback.innerHTML = `<p style="color: green;">Correct!</p>`;
    paragraphCorrect++;
  } else {
    clickedButton.style.backgroundColor = "red";
    feedback.innerHTML = `<p style="color: red;">Incorrect! Correct answer: <strong>${correctAnswer}</strong></p>`;
    paragraphIncorrect++;
  }

  document.getElementById("next-paragraph").style.display = "block";
  document.getElementById("next-paragraph").onclick = () => {
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
