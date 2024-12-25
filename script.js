// Variables
let currentIndex = 0; // Quiz index
let paragraphIndex = 0; // Paragraph index
let totalScore = 0;
let paragraphCorrect = 0;
let paragraphIncorrect = 0;

// Shuffle Array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ================== QUIZ SECTION ==================
function loadQuestion() {
  try {
    const quizContainer = document.getElementById("questions-container");
    const nextQuestionButton = document.getElementById("next-question-button");
    quizContainer.innerHTML = ""; // Clear previous content

    if (currentIndex >= questionPool.length) {
      showQuizResults();
      nextQuestionButton.style.display = "none";
      return;
    }

    const currentQuestion = questionPool[currentIndex];
    const questionText = document.createElement("p");
    questionText.textContent = currentQuestion.question;

    const optionsContainer = document.createElement("div");
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () =>
        evaluateAnswer(option, currentQuestion)
      );
      optionsContainer.appendChild(button);
    });

    quizContainer.appendChild(questionText);
    quizContainer.appendChild(optionsContainer);

    nextQuestionButton.style.display = "none"; // Hide the button until an answer is selected
  } catch (error) {
    console.error("Error in loadQuestion:", error);
  }
}

function evaluateAnswer(selectedOption, question) {
  const feedback = document.getElementById("quiz-feedback");
  const nextQuestionButton = document.getElementById("next-question-button");

  if (selectedOption === question.correct) {
    feedback.innerHTML = `
      <p style="color: green;">Correct! ${question.rationale}</p>
    `;
    totalScore++;
  } else {
    feedback.innerHTML = `
      <p style="color: red;">Incorrect. ${question.rationale}</p>
    `;
  }

  nextQuestionButton.style.display = "block"; // Show the Next Question button
}

function showQuizResults() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your Score: ${totalScore} / ${questionPool.length}</p>
  `;
}

// ================== PARAGRAPH SECTION ==================
function loadParagraph() {
  try {
    const paragraphContainer = document.getElementById("paragraph-container");
    const feedback = document.getElementById("paragraph-feedback");
    const nextParagraphButton = document.getElementById("next-paragraph");

    if (paragraphIndex >= paragraphPool.length) {
      paragraphContainer.innerHTML = `
        <h2>Paragraph Practice Complete!</h2>
        <p>Correct: ${paragraphCorrect}</p>
        <p>Incorrect: ${paragraphIncorrect}</p>
      `;
      nextParagraphButton.style.display = "none";
      return;
    }

    const currentParagraph = paragraphPool[paragraphIndex];
    const textWithBlanks = currentParagraph.text.replace(/___/g, (match, index) => {
      return `<span class="blank" id="blank-${index}">___</span>`;
    });

    paragraphContainer.innerHTML = `<p>${textWithBlanks}</p>`;

    const optionsContainer = document.createElement("div");
    currentParagraph.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () =>
        handleParagraphSelection(option, currentParagraph)
      );
      optionsContainer.appendChild(button);
    });

    paragraphContainer.appendChild(optionsContainer);

    feedback.innerHTML = "";
    nextParagraphButton.style.display = "none";
  } catch (error) {
    console.error("Error in loadParagraph:", error);
  }
}

function handleParagraphSelection(option, currentParagraph) {
  const blanks = document.querySelectorAll(".blank");
  let isFilled = true;

  blanks.forEach((blank, i) => {
    if (blank.textContent === "___" && option === currentParagraph.answers[i]) {
      blank.textContent = option;
      blank.style.color = "green";
    } else if (blank.textContent === "___") {
      blank.style.color = "red";
      isFilled = false;
    }
  });

  if (isFilled) {
    showParagraphRationale(currentParagraph);
  }
}

function showParagraphRationale(currentParagraph) {
  const feedback = document.getElementById("paragraph-feedback");

  feedback.innerHTML = `
    <ul>${currentParagraph.rationales
      .map((rationale) => `<li>${rationale}</li>`)
      .join("")}</ul>
  `;

  document.getElementById("next-paragraph").style.display = "block";
  paragraphIndex++;
}

// ================== INITIALIZATION ==================
function initQuiz() {
  shuffleArray(questionPool);
  shuffleArray(paragraphPool);
  currentIndex = 0;
  paragraphIndex = 0;
  loadQuestion();
  loadParagraph();
}

// Add event listeners for buttons
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("next-question-button").addEventListener("click", () => {
    currentIndex++;
    loadQuestion();
  });

  document.getElementById("next-paragraph").addEventListener("click", () => {
    loadParagraph();
  });

  initQuiz();
});
