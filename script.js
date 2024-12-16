let currentIndex = 0;
let totalScore = 0;
let porCorrect = 0;
let paraCorrect = 0;
let streak = 0;
let incorrectAnswers = [];

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
  quizContainer.innerHTML = ""; // Clear previous question

  // Check if there are no more questions
  if (currentIndex >= questionPool.length) {
    document.getElementById("result").innerText = `Quiz Complete! Your final score: ${totalScore}/${questionPool.length}.`;
    showReview(); // Display review section
    return;
  }

  // Display the current question
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

// Evaluate the user's answer
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
    streak = 0; // Reset streak on incorrect answer
    incorrectAnswers.push(currentQuestion); // Track incorrect answers
  }

  updateProgressBar();

  // Delay and then load the next question
  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 5000); // Feedback persists for 5 seconds
}

// Update the progress bar
function updateProgressBar() {
  const progressContainer = document.getElementById("progress-bar");
  const totalProgress = Math.round((currentIndex / questionPool.length) * 100);
  progressContainer.style.width = `${totalProgress}%`;

  document.getElementById("progress-label").innerText = `Progress: ${totalProgress}% (Por: ${porCorrect}, Para: ${paraCorrect}) | Streak: ${streak}`;
}

// Show a review of incorrect answers
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

// Initialize the quiz
function initQuiz() {
  shuffleQuestions(questionPool); // Shuffle questions on load
  loadQuestion(); // Load the first question
}

document.addEventListener("DOMContentLoaded", initQuiz);
