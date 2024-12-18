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
  gradeButton.textContent = "Grade Now";
  gradeButton.className = "quiz-button gray-button"; // Added gray-button class
  gradeButton.id = "grade-quiz";
  gradeButton.addEventListener("click", showQuizResults);
  quizContainer.appendChild(gradeButton);
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

  clearTimeout(feedbackTimeout); // Clear the previous timeout
  feedbackTimeout = setTimeout(() => {
    feedback.textContent = "";
  }, 3000);

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 3000);
}

function showQuizResults() {
  const quizContainer = document.getElementById("questions-container");
  const feedback = document.getElementById("feedback");
  feedback.textContent = ""; // Clear any lingering feedback
  clearTimeout(feedbackTimeout);

  const percentage = Math.round((totalScore / questionPool.length) * 100);
  let performanceMessage;

  if (percentage === 100) {
    performanceMessage = "🌟 Perfect score! Excellent work!";
  } else if (percentage >= 80) {
    performanceMessage = "👍 Great job! Keep practicing to reach perfection.";
  } else if (percentage >= 50) {
    performanceMessage = "🙂 Not bad! A little more practice and you'll improve.";
  } else {
    performanceMessage = "🙁 Keep trying! Review the material and try again.";
  }

  quizContainer.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your Score: <span style="color: green;">${totalScore}</span> / ${questionPool.length}</p>
    <p>Percentage: <span style="color: blue;">${percentage}%</span></p>
    <p>${performanceMessage}</p>
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
    showParagraphResults();
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
submitButton.textContent = "Grade Now";
submitButton.className = "gray-button"; // Apply gray-button class
submitButton.id = "submit-paragraph";
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

function showParagraphResults() {
  const paragraphContainer = document.getElementById("paragraph-container");
  const percentage = Math.round((paragraphCorrect / paragraphPool.length) * 100);
  let performanceMessage;

  if (percentage === 100) {
    performanceMessage = "🌟 Outstanding performance!";
  } else if (percentage >= 80) {
    performanceMessage = "👍 Great job! Almost perfect.";
  } else if (percentage >= 50) {
    performanceMessage = "🙂 Good effort! Keep practicing.";
  } else {
    performanceMessage = "🙁 Needs improvement. Try again.";
  }

  paragraphContainer.innerHTML = `
    <h2>Paragraph Practice Complete!</h2>
    <p>Correct: <span style="color: green;">${paragraphCorrect}</span></p>
    <p>Incorrect: <span style="color: red;">${paragraphIncorrect}</span></p>
    <p>Percentage: <span style="color: blue;">${percentage}%</span></p>
    <p>${performanceMessage}</p>
  `;
}

// ========================= INITIALIZATION =========================
function initQuiz() {
  shuffleQuestions(questionPool);
  loadQuestion();
  loadParagraph();
}

document.addEventListener("DOMContentLoaded", initQuiz);
