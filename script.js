// Tracking variables
let currentIndex = 0;
let totalScore = 0;
let porCorrect = 0;
let paraCorrect = 0;

// Function to load the current question
function loadQuestion() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = ""; // Clear previous question

  // Check if there are no more questions
  if (currentIndex >= questionPool.length) {
    document.getElementById("result").innerText = `Quiz Complete! Your final score: ${totalScore}/${questionPool.length}.`;
    updateProgressBar();
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
    <p id="feedback" class="feedback"></p>
  `;
  quizContainer.appendChild(div);

  // Add event listener to the submit button
  document.getElementById("submit-btn").addEventListener("click", evaluateAnswer);
}

// Function to evaluate the answer
function evaluateAnswer() {
  const currentQuestion = questionPool[currentIndex];
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  const feedback = document.getElementById("feedback");

  if (!selectedOption) {
    feedback.textContent = "Please select an answer before submitting.";
    feedback.style.color = "red";
    return;
  }

  // Check the answer
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

  // Update progress and move to the next question
  currentIndex++;
  updateProgressBar();
  setTimeout(loadQuestion, 5000); // Load the next question after 5 seconds
}

// Function to update the progress bar
function updateProgressBar() {
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
  if (typeof questionPool !== "undefined") {
    loadQuestion(); // Load the first question
    updateProgressBar(); // Initialize progress bar
  } else {
    console.error("Question pool is not loaded. Please ensure questions.js is included.");
  }
}

// Run the initialization function when the page loads
document.addEventListener("DOMContentLoaded", initQuiz);
