// Variables
let currentIndex = 0; // For quiz
let paragraphIndex = 0; // For paragraphs
let totalScore = 0;
let incorrectAnswers = [];
let paragraphCorrect = 0;
let paragraphIncorrect = 0;
let feedbackTimeout; // To manage clearing feedback timeout

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

  const feedback = document.getElementById("feedback");
  feedback.textContent = ""; // Clear feedback
  clearTimeout(feedbackTimeout); // Ensure previous timeout is cleared

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

  if (!document.getElementById("grade-quiz")) {
    const gradeButton = document.createElement("button");
    gradeButton.textContent = "Grade Quiz";
    gradeButton.className = "quiz-button";
    gradeButton.id = "grade-quiz";
    gradeButton.addEventListener("click", showQuizResults);
    quizContainer.appendChild(gradeButton);
  }
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

  // Clear the previous timeout to avoid overlap
  clearTimeout(feedbackTimeout);

  // Hide the feedback after 5 seconds
  feedbackTimeout = setTimeout(() => {
    feedback.textContent = "";
  }, 5000);

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 5000);
}

function showQuizResults() {
  const quizContainer = document.getElementById("questions-container");
  const feedback = document.getElementById("feedback");
  feedback.textContent = ""; // Clear any lingering feedback
  clearTimeout(feedbackTimeout);

  quizContainer.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your Score: <span style="color: green;">${totalScore}</span> / ${currentIndex}</p>
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
  let userAnswers = Array(currentParagraph.answers.length).fill("");

  let paragraphHTML = currentParagraph.text.split("___").map((part, i) => {
    if (i < currentParagraph.answers.length) {
      return `${part} <span class="blank" id="blank-${i}">___</span>`;
    }
    return part;
  }).join("");

  paragraphContainer.innerHTML = `<p>${paragraphHTML}</p>`;

  const optionsContainer = document.createElement("div");
  const uniqueOptions = [...new Set(currentParagraph.options)];
  uniqueOptions.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className = "paragraph-button";
    button.addEventListener("click", () => handleParagraphSelection(option, userAnswers, currentParagraph));
    optionsContainer.appendChild(button);
  });

  paragraphContainer.appendChild(optionsContainer);

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit Paragraph";
  submitButton.className = "paragraph-button";
  submitButton.onclick = () => evaluateParagraphAnswer(userAnswers, currentParagraph);
  paragraphContainer.appendChild(submitButton);
}

function handleParagraphSelection(option, userAnswers, currentParagraph) {
  for (let i = 0; i < userAnswers.length; i++) {
    if (!userAnswers[i]) {
      userAnswers[i] = option;
      const blankElement = document.getElementById(`blank-${i}`);
      blankElement.textContent = option;
      blankElement.style.color = "blue";
      break;
    }
  }
}

function evaluateParagraphAnswer(userAnswers, currentParagraph) {
  const feedback = document.getElementById("paragraph-feedback");
  let allCorrect = true;

  userAnswers.forEach((answer, i) => {
    if (answer !== currentParagraph.answers[i]) {
      allCorrect = false;
      document.getElementById(`blank-${i}`).style.color = "red";
    } else {
      document.getElementById(`blank-${i}`).style.color = "green";
    }
  });

  if (allCorrect) {
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
