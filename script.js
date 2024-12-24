// Variables
let currentIndex = 0; // For quiz
let paragraphIndex = 0; // For paragraphs
let totalScore = 0;
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
    showQuizResults();
    return;
  }

  const currentQuestion = questionPool[currentIndex];

  // Question text
  const questionText = document.createElement("p");
  questionText.textContent = currentQuestion.question;

  // Options as buttons
  const optionsContainer = document.createElement("div");
  optionsContainer.style.marginTop = "20px";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.style.padding = "10px";
    button.style.margin = "5px";
    button.style.fontSize = "1.1em";
    button.innerHTML = `${option}`;
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
    feedback.style.color = "green";
    totalScore++;
  } else {
    feedback.textContent = `Incorrect. ${question.rationale}`;
    feedback.style.color = "red";
  }

  // Clear feedback and load next question after 4 seconds
  setTimeout(() => {
    feedback.textContent = "";
    currentIndex++;
    loadQuestion();
  }, 4000);
}

function showQuizResults() {
  const quizContainer = document.getElementById("questions-container");
  const feedback = document.getElementById("feedback");

  quizContainer.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your Score: ${totalScore} / ${questionPool.length}</p>
  `;

  feedback.textContent = "";
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
  const paragraphText = document.createElement("p");
  paragraphText.innerHTML = currentParagraph.text.replace(/___/g, '<span class="blank">___</span>');
  paragraphContainer.appendChild(paragraphText);

  // Options as buttons
  const optionsContainer = document.createElement("div");
  currentParagraph.options.forEach((option) => {
    const button = document.createElement("button");
    button.style.padding = "10px";
    button.style.margin = "5px";
    button.style.fontSize = "1.1em";
    button.textContent = option;
    button.addEventListener("click", () => handleParagraphSelection(option, currentParagraph));
    optionsContainer.appendChild(button);
  });

  paragraphContainer.appendChild(optionsContainer);
}

function handleParagraphSelection(option, currentParagraph) {
  const blanks = document.querySelectorAll(".blank");
  for (let i = 0; i < blanks.length; i++) {
    if (blanks[i].textContent === "___") {
      blanks[i].textContent = option;
      blanks[i].style.color = "blue";
      break;
    }
  }
}

function evaluateParagraphAnswer(currentParagraph) {
  const blanks = document.querySelectorAll(".blank");
  const feedback = document.getElementById("paragraph-feedback");

  let allCorrect = true;
  for (let i = 0; i < currentParagraph.answers.length; i++) {
    if (blanks[i].textContent === currentParagraph.answers[i]) {
      blanks[i].style.color = "green";
    } else {
      blanks[i].style.color = "red";
      allCorrect = false;
    }
  }

  if (allCorrect) {
    feedback.textContent = "Correct! " + currentParagraph.rationales.join(" ");
    feedback.style.color = "green";
    paragraphCorrect++;
  } else {
    feedback.textContent = "Incorrect. " + currentParagraph.rationales.join(" ");
    feedback.style.color = "red";
    paragraphIncorrect++;
  }

  // Show feedback for 4 seconds
  setTimeout(() => {
    feedback.textContent = "";
    document.getElementById("next-paragraph").style.display = "block";
  }, 4000);
}

// ========================= INITIALIZATION =========================
function initQuiz() {
  shuffleQuestions(questionPool);
  shuffleQuestions(paragraphPool);
  loadQuestion();
  loadParagraph();

  const nextParagraphButton = document.getElementById("next-paragraph");
  nextParagraphButton.addEventListener("click", () => {
    paragraphIndex++;
    loadParagraph();
  });
}

document.addEventListener("DOMContentLoaded", initQuiz);
