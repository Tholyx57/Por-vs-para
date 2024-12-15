// Tracking variables
let currentIndex = 0;
let totalScore = 0;
let porCorrect = 0;
let paraCorrect = 0;

console.log("Question Pool:", questionPool); // Check if questionPool is loaded

// Function to load the current question
function loadQuestion() {
  console.log("Loading question:", questionPool[currentIndex]); // Log the current question
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = ""; // Clear previous question

  if (currentIndex >= questionPool.length) {
    console.log("Quiz Complete! Final Score:", totalScore); // Log quiz completion
    document.getElementById("result").innerText = `Quiz Complete! Your final score: ${totalScore}/${questionPool.length}.`;
    updateProgressBar();
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

// Function to evaluate the answer
function evaluateAnswer() {
  const currentQuestion = questionPool[currentIndex];
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  console.log("Selected Answer:", selectedOption ? selectedOption.value : "None"); // Log selected answer
  console.log("Correct Answer:", currentQuestion.correct); // Log the correct answer
  const feedback = document.getElementById("feedback");

  if (!selectedOption) {
    feedback.textContent = "Please select an answer before submitting.";
    feedback.style.color = "red";
    return;
  }

  if (selectedOption.value === currentQuestion.correct) {
    totalScore++;
    if (currentQuestion.correct === "por") porCorrect++;
    if (currentQuestion.correct === "para") paraCorrect++;
    feedback.textContent = `Correct! ${currentQuestion.rationale}`;
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Incorrect. ${currentQuestion.rationale}`;
    feedback.style.color = "red";
  }

  currentIndex++;
  updateProgressBar();
  setTimeout(loadQuestion, 5000); // Load the next question after 5 seconds
}

// Function to update the progress bar
function updateProgressBar() {
  console.log(`Progress: Current Index = ${currentIndex}, Total Questions = ${questionPool.length}`);
  console.log(`Por Correct: ${porCorrect}, Para Correct: ${paraCorrect}`);
  const progressContainer = document.getElementById("progress-container");
  const totalProgress = Math.round((currentIndex / questionPool.length) * 100);
  const porProgress = Math.round((porCorrect / questionPool.length) * 100);
  const paraProgress = Math.round((paraCorrect / questionPool.length) * 100);

  progressContainer.innerHTML = `
    <div id="por-progress" style="width: ${porProgress}%; background-color: #0077cc;"></div>
    <div id="para-progress" style="width: ${paraProgress}%; background-color: #28a745;"></div>
  `;

  document.getElementById("progress-label").innerText = `Progress: ${totalProgress}% (Por: ${porCorrect}, Para: ${paraCorrect})`;
}

// Initialize the quiz after dynamically loading the question pool
function initQuiz() {
  console.log("Initializing the quiz..."); // Log when quiz initialization starts
  if (typeof questionPool !== "undefined") {
    loadQuestion();
    updateProgressBar();
  } else {
    console.error("Question pool is not loaded. Please ensure questions.js is included.");
  }
}

document.addEventListener("DOMContentLoaded", initQuiz);
