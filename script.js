// Variables
let currentIndex = 0; // For quiz
let paragraphIndex = 0; // For paragraphs
let totalScore = 0;
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
}
