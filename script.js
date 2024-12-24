let currentIndex = 0;
let totalScore = 0;

// Shuffle Questions (Fisher-Yates algorithm)
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Load Question
function loadQuestion() {
  const quizContainer = document.getElementById("questions-container");
  const feedback = document.getElementById("feedback");
  const nextButton = document.getElementById("next-question");

  quizContainer.innerHTML = ""; // Clear previous question
  feedback.textContent = ""; // Clear feedback

  if (currentIndex >= questionPool.length) {
    showResults();
    return;
  }

  const currentQuestion = questionPool[currentIndex];
  const questionText = document.createElement("p");
  questionText.textContent = currentQuestion.question;
  quizContainer.appendChild(questionText);

  const optionsContainer = document.createElement("div");
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => evaluateAnswer(option, currentQuestion.correct, currentQuestion.rationale));
    optionsContainer.appendChild(button);
  });

  quizContainer.appendChild(optionsContainer);
  nextButton.style.display = "none"; // Hide "Next" button initially
}

// Evaluate Answer
function evaluateAnswer(selectedOption, correctOption, rationale) {
  const feedback = document.getElementById("feedback");
  const nextButton = document.getElementById("next-question");

  if (selectedOption === correctOption) {
    feedback.textContent = `Correct! ${rationale}`;
    feedback.style.color = "green";
    totalScore++;
  } else {
    feedback.textContent = `Incorrect. ${rationale}`;
    feedback.style.color = "red";
  }

  nextButton.style.display = "inline-block"; // Show "Next" button
}

// Show Results
function showResults() {
  const quizContainer = document.getElementById("questions-container");
  const feedback = document.getElementById("feedback");

  quizContainer.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your Score: ${totalScore} / ${questionPool.length}</p>
    <p>Thank you for participating!</p>
  `;
  feedback.textContent = ""; // Clear feedback
}

// Initialize Quiz
document.addEventListener("DOMContentLoaded", () => {
  shuffleQuestions(questionPool);
  loadQuestion();

  const nextButton = document.getElementById("next-question");
  nextButton.addEventListener("click", () => {
    currentIndex++;
    loadQuestion();
  });
});
