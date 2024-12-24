let currentIndex = 0;
let paragraphIndex = 0;
let totalScore = 0;
let paragraphCorrect = 0;
let paragraphIncorrect = 0;

// Shuffle Questions (Fisher-Yates algorithm)
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ========================= QUIZ SECTION =========================

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

// ========================= PARAGRAPH SECTION =========================

function loadParagraph() {
  const paragraphContainer = document.getElementById("paragraph-content");
  const feedback = document.getElementById("paragraph-feedback");
  const nextButton = document.getElementById("next-paragraph");

  paragraphContainer.innerHTML = ""; // Clear previous paragraph
  feedback.innerHTML = ""; // Clear feedback
  nextButton.style.display = "none";

  if (paragraphIndex >= paragraphPool.length) {
    showParagraphResults();
    return;
  }

  const currentParagraph = paragraphPool[paragraphIndex];
  const paragraphHTML = currentParagraph.text
    .split("___")
    .map((part, index) =>
      index < currentParagraph.answers.length
        ? `${part}<span class="blank" id="blank-${index}">___</span>`
        : part
    )
    .join("");

  const paragraphText = document.createElement("p");
  paragraphText.innerHTML = paragraphHTML;
  paragraphContainer.appendChild(paragraphText);

  const optionsContainer = document.createElement("div");
  currentParagraph.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () =>
      handleBlankSelection(option, currentParagraph.answers)
    );
    optionsContainer.appendChild(button);
  });

  paragraphContainer.appendChild(optionsContainer);
}

function handleBlankSelection(option, correctAnswers) {
  const blanks = document.querySelectorAll(".blank");
  for (let i = 0; i < blanks.length; i++) {
    if (blanks[i].textContent === "___") {
      blanks[i].textContent = option;
      blanks[i].style.color = correctAnswers[i] === option ? "green" : "red";
      break;
    }
  }

  if ([...blanks].every((blank, index) => blank.textContent === correctAnswers[index])) {
    document.getElementById("paragraph-feedback").textContent = "Correct!";
    document.getElementById("next-paragraph").style.display = "block";
    paragraphCorrect++;
  } else if ([...blanks].every((blank) => blank.textContent !== "___")) {
    document.getElementById("paragraph-feedback").textContent = "Some answers are incorrect. Try again.";
    paragraphIncorrect++;
  }
}

function showParagraphResults() {
  const paragraphContainer = document.getElementById("paragraph-content");

  paragraphContainer.innerHTML = `
    <h2>Paragraph Practice Complete!</h2>
    <p>Correct: ${paragraphCorrect}</p>
    <p>Incorrect: ${paragraphIncorrect}</p>
  `;
}

// ========================= INITIALIZATION =========================

document.addEventListener("DOMContentLoaded", () => {
  shuffleQuestions(questionPool);
  loadQuestion();

  document.getElementById("next-question").addEventListener("click", () => {
    currentIndex++;
    loadQuestion();
  });

  loadParagraph();
  document.getElementById("next-paragraph").addEventListener("click", () => {
    paragraphIndex++;
    loadParagraph();
  });
});
