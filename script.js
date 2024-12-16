console.log("Paragraph Pool:", paragraphPool);
let currentIndex = 0;
let totalScore = 0;
let porCorrect = 0;
let paraCorrect = 0;
let streak = 0;
let incorrectAnswers = [];
let paragraphIndex = 0;

// Shuffle questions on page load
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Load the current question
function loadQuestion() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = "";

  if (currentIndex >= questionPool.length) {
    document.getElementById("result").innerText = `Quiz Complete! Your final score: ${totalScore}/${questionPool.length}.`;
    showReview();
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
  `;
  quizContainer.appendChild(div);

  document.getElementById("submit-btn").addEventListener("click", evaluateAnswer);
}

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
    totalScore++;
    streak++;
    if (currentQuestion.correct === "por") porCorrect++;
    if (currentQuestion.correct === "para") paraCorrect++;
  } else {
    feedback.textContent = `Incorrect. ${currentQuestion.rationale}`;
    feedback.style.color = "red";
    streak = 0;
    incorrectAnswers.push(currentQuestion);
  }

  updateProgressBar();

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 5000);
}

function updateProgressBar() {
  const progressContainer = document.getElementById("progress-bar");
  const totalProgress = Math.round((currentIndex / questionPool.length) * 100);
  progressContainer.style.width = `${totalProgress}%`;

  document.getElementById("progress-label").innerText = `Progress: ${totalProgress}% (Por: ${porCorrect}, Para: ${paraCorrect}) | Streak: ${streak}`;
}

function showReview() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = "<h2>Review Incorrect Answers</h2>";

  incorrectAnswers.forEach((question, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${index + 1}. ${question.question}</p>
      <p><strong>Correct Answer:</strong> ${question.correct}</p>
      <p><strong>Explanation:</strong> ${question.rationale}</p>
    `;
    quizContainer.appendChild(div);
  });
}

// Paragraph Practice
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

function evaluateParagraph() {
  const currentParagraph = paragraphPool[paragraphIndex];
  const feedback = document.getElementById("paragraph-feedback");
  const nextButton = document.getElementById("next-paragraph");
  let isCorrect = true;

  currentParagraph.answers.forEach((answer, index) => {
    const userAnswer = document.getElementById(`answer-${index}`).value.trim().toLowerCase();
    if (userAnswer === answer) {
      document.getElementById(`answer-${index}`).style.borderColor = "green";
    } else {
      document.getElementById(`answer-${index}`).style.borderColor = "red";
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
}

function initQuiz() {
  shuffleQuestions(questionPool);
  loadQuestion();

  document.getElementById("next-paragraph").addEventListener("click", loadParagraph);
}

document.addEventListener("DOMContentLoaded", initQuiz);
