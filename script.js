// Variables
let currentIndex = 0; // For quiz
let paragraphIndex = 0; // For paragraphs
let totalScore = 0;
let incorrectAnswers = [];
let paragraphCorrect = 0;
let paragraphIncorrect = 0;
let feedbackTimeout; // To manage clearing feedback timeout
let rationaleTimeout; // To clear rationale timeout

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
    button.classList.add("quiz-button");
    button.addEventListener("click", () => evaluateAnswer(option, currentQuestion));
    optionsContainer.appendChild(button);
  });

  quizContainer.appendChild(questionText);
  quizContainer.appendChild(optionsContainer);

  // Clear previous feedback
  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
}

function evaluateAnswer(selectedOption, question) {
  const feedback = document.getElementById("feedback");

  if (selectedOption === question.correct) {
    feedback.textContent = `Correct! ${question.rationale}`;
    totalScore++;
  } else {
    feedback.textContent = `Incorrect. ${question.rationale}`;
    incorrectAnswers.push(question); // Add incorrect question for review
  }

  feedback.style.color = "green";

  // Clear feedback and load next question after 4 seconds
  clearTimeout(feedbackTimeout);
  feedbackTimeout = setTimeout(() => {
    feedback.textContent = "";
    currentIndex++;
    loadQuestion();
  }, 4000);
}

function showQuizResults() {
  const quizContainer = document.getElementById("questions-container");

  quizContainer.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your Score: <span style="color: green;">${totalScore}</span> / ${questionPool.length}</p>
    <p>Incorrect Answers: <span style="color: red;">${incorrectAnswers.length}</span></p>
  `;

  if (incorrectAnswers.length > 0) {
    const reviewSection = document.createElement("div");
    reviewSection.innerHTML = "<h3>Review Incorrect Questions:</h3>";

    incorrectAnswers.forEach((question, index) => {
      const questionReview = document.createElement("div");
      questionReview.innerHTML = `
        <p>${index + 1}. ${question.question}</p>
        <p>Correct Answer: <strong>${question.correct}</strong></p>
        <p>Explanation: ${question.rationale}</p>
      `;
      reviewSection.appendChild(questionReview);
    });

    quizContainer.appendChild(reviewSection);
  }
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
    button.classList.add("paragraph-button");
    button.addEventListener("click", () => handleParagraphSelection(option, userAnswers, currentParagraph));
    optionsContainer.appendChild(button);
  });

  paragraphContainer.appendChild(optionsContainer);

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.id = "submit-paragraph";
  submitButton.classList.add("paragraph-button");
  submitButton.addEventListener("click", () => evaluateParagraphAnswer(userAnswers, currentParagraph));
  paragraphContainer.appendChild(submitButton);
}

function handleParagraphSelection(option, userAnswers, currentParagraph) {
  for (let i = 0; i < userAnswers.length; i++) {
    if (!userAnswers[i]) {
      userAnswers[i] = option;
      const blankElement = document.getElementById(`blank-${i}`);
      blankElement.textContent = option;
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
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    paragraphCorrect++;
    showParagraphRationale(currentParagraph.rationales);
  } else {
    feedback.textContent = "Incorrect. Try Again.";
    feedback.style.color = "red";
    showParagraphRationale(currentParagraph.rationales);
    const tryAgainButton = document.createElement("button");
    tryAgainButton.textContent = "Try Again";
    tryAgainButton.classList.add("paragraph-button");
    tryAgainButton.addEventListener("click", () => loadParagraph());
    feedback.appendChild(tryAgainButton);
  }
}

function showParagraphRationale(rationales) {
  const feedback = document.getElementById("paragraph-feedback");
  const rationaleList = rationales.map((r) => `<li>${r}</li>`).join("");
  feedback.innerHTML += `<ul>${rationaleList}</ul>`;
}

// ========================= INITIALIZATION =========================
function initQuiz() {
  shuffleQuestions(questionPool);
  loadQuestion();
  loadParagraph();
}

document.addEventListener("DOMContentLoaded", initQuiz);
