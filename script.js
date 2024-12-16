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
  console.log("Loading paragraph:", paragraphIndex); // Debugging check
  const paragraphContainer = document.getElementById("paragraph-container");
  const feedback = document.getElementById("paragraph-feedback");
  const nextButton = document.getElement
