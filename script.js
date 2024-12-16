// Variables for tracking scores and progress
let currentIndex = 0;
let totalScore = 0;
let porCorrect = 0;
let paraCorrect = 0;
let quizCorrectAnswers = 0;
let quizIncorrectAnswers = 0;
let paragraphCorrectAnswers = 0;
let paragraphIncorrectAnswers = 0;
let paragraphIndex = 0;

// Shuffle questions on page load
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Load the current quiz question
function loadQuestion() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = "";

  if (currentIndex >= questionPool.length) {
    document.getElementById("result").innerText = `Quiz Complete! Your final score: ${totalScore}/${questionPool.length}.`;
    return;
  }

  const currentQuestion = questionPool[currentIndex];
  const div = document.createElement("div");
  div.classList.add("quiz-question");
  div.innerHTML = `
    <p>${currentQuestion.question}</p>
    <input type="radio" id="option-por" name="answer" value="por"> <label for="option-por">Por</label><br>
    <input type="radio" id="option-para" name="answer" value="para"> <label for="option-para">Para</label><br><br>
    <button id="submit-btn">Submit</button>
    <p id="feedback" class="feedback"></p>
  `;
  quizContainer.appendChild(div);

  document.getElementById("submit-btn").addEventListener("click", evaluateAnswer);
}

// Evaluate the quiz answer
function evaluateAnswer() {
  const currentQuestion = questionPool[currentIndex];
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  const feedback = document.getElementById("feedback");

  if (!selectedOption) {
    feedback.textContent = "Please select an answer before submitting.";
    feedback.style.color = "red";
    return;
  }

  if (selectedOption.value === currentQuestion.correct) {
    feedback.textContent = `Correct! ${currentQuestion.rationale}`;
    feedback.style.color = "green";
    quizCorrectAnswers++;
    totalScore++;
    if (currentQuestion.correct === "por") porCorrect++;
    if (currentQuestion.correct === "para") paraCorrect++;
  } else {
    feedback.textContent = `Incorrect. ${currentQuestion.rationale}`;
    feedback.style.color = "red";
    quizIncorrectAnswers++;
  }

  updateQuizScoreDisplay();

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 3000);
}

// Update quiz score display
function updateQuizScoreDisplay() {
  const quizScoreContainer = document.getElementById("quiz-score");
  quizScoreContainer.innerHTML = `
    <p style="color: green;">Correct: ${quizCorrectAnswers}</p>
    <p style="color: red;">Incorrect: ${quizIncorrectAnswers}</p>
  `;
}

// Load paragraph practice
function loadParagraph() {
  const paragraphContainer = document.getElementById("paragraph-container");
  const feedback = document.getElementById("paragraph-feedback");
  const nextButton = document.getElementById("next-paragraph");

  paragraphContainer.innerHTML = "";
  feedback.textContent = "";
  nextButton.style.display = "none";

  if (paragraphIndex >= paragraphPool.length) {
    paragraphContainer.innerHTML = "<p>You've completed all paragraph practice questions!</p>";
    return;
  }

  const currentParagraph = paragraphPool[paragraphIndex];
  let html = `<p>${currentParagraph.text}</p>`;
  currentParagraph.answers.forEach((_, index) => {
    html += `
      <label for="answer-${index}">Blank ${index + 1}: </label>
      <input type="text" id="answer-${index}" placeholder="por/para"><br>
    `;
  });
  html += `<button id="submit-paragraph">Submit</button>`;
  paragraphContainer.innerHTML = html;

  document.getElementById("submit-paragraph").addEventListener("click", evaluateParagraph);
}

// Evaluate paragraph answers
function evaluateParagraph() {
  const currentParagraph = paragraphPool[paragraphIndex];
  const feedback = document.getElementById("paragraph-feedback");
  const nextButton = document.getElementById("next-paragraph");
  let isCorrect = true;

  currentParagraph.answers.forEach((answer, index) => {
    const userAnswer = document.getElementById(`answer-${index}`).value.trim().toLowerCase();
    if (userAnswer === answer) {
      document.getElementById(`answer-${index}`).style.borderColor = "green";
      paragraphCorrectAnswers++;
    } else {
      document.getElementById(`answer-${index}`).style.borderColor = "red";
      paragraphIncorrectAnswers++;
      isCorrect = false;
    }
  });

  if (isCorrect) {
    feedback.textContent = "Correct! Great job!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Incorrect. Here are the explanations:";
    feedback.style.color = "red";
    const rationaleList = currentParagraph.rationales.map((rationale, index) => `<li>${rationale}</li>`).join("");
    feedback.innerHTML += `<ul>${rationaleList}</ul>`;
  }

  nextButton.style.display = "block";
  nextButton.addEventListener("click", () => {
    paragraphIndex++;
    loadParagraph();
  });

  updateParagraphScoreDisplay();
}

// Update paragraph score display
function updateParagraphScoreDisplay() {
  const paragraphScoreContainer = document.getElementById("paragraph-score");
  paragraphScoreContainer.innerHTML = `
    <p style="color: green;">Correct: ${paragraphCorrectAnswers}</p>
    <p style="color: red;">Incorrect: ${paragraphIncorrectAnswers}</p>
  `;
}

// Initialize the quiz and paragraph practice
document.addEventListener("DOMContentLoaded", () => {
  shuffleQuestions(questionPool);
  loadQuestion();
  loadParagraph();
});
