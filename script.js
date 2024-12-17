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
    incorrectAnswers.push(question); // Add incorrect question for review
  }

  // Clear feedback and load next question after 5 seconds
  setTimeout(() => {
    feedback.textContent = "";
    currentIndex++;
    loadQuestion();
  }, 5000);
}

function showQuizResults() {
  const quizContainer = document.getElementById("questions-container");
  const feedback = document.getElementById("feedback");

  quizContainer.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p style="font-size: 1.5em;">Your Score: <span style="color: green;">${totalScore}</span> / ${questionPool.length}</p>
    <p style="font-size: 1.5em;">Incorrect Answers: <span style="color: red;">${incorrectAnswers.length}</span></p>
    ${incorrectAnswers.length > 0 ? "<h3>Review Incorrect Questions:</h3>" : ""}
  `;

  feedback.textContent = "";

  if (incorrectAnswers.length > 0) {
    incorrectAnswers.forEach((question, index) => {
      const questionReview = document.createElement("div");
      questionReview.style.marginTop = "10px";
      questionReview.innerHTML = `
        <p><strong>${index + 1}. ${question.question}</strong></p>
        <p>Correct Answer: <strong>${question.correct}</strong></p>
        <p>Explanation: ${question.rationale}</p>
      `;
      quizContainer.appendChild(questionReview);
    });
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
  let html = `<p style="font-size: 1.5em;">${currentParagraph.text.replace(/___/g, '___')}</p>`;

  currentParagraph.answers.forEach((answer, index) => {
    html += `
      <div style="margin: 10px 0;">
        <label style="font-size: 1.2em; font-weight: bold;">Blank ${index + 1}:</label>
        <button style="padding: 15px; margin: 5px; font-size: 1.5em; font-weight: bold;" 
                onclick="evaluateParagraphAnswer(${index}, '${answer}')">
          ${answer}
        </button>
      </div>
    `;
  });

  paragraphContainer.innerHTML = html;
}

function evaluateParagraphAnswer(blankIndex, correctAnswer) {
  const feedback = document.getElementById("paragraph-feedback");
  const userChoice = event.target.innerText.trim();

  if (userChoice === correctAnswer) {
    event.target.style.backgroundColor = "green";
    feedback.innerHTML = `<p style="color: green;">Correct!</p>`;
    paragraphCorrect++;
  } else {
    event.target.style.backgroundColor = "red";
    feedback.innerHTML = `<p style="color: red;">Incorrect. The correct answer was: <strong>${correctAnswer}</strong></p>`;
    paragraphIncorrect++;
  }

  // Show "Next Paragraph" button
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
