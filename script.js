let currentIndex = 0;
let totalScore = 0;
let porCorrect = 0;
let paraCorrect = 0;
let incorrectAnswers = [];
let paragraphIndex = 0;
let paragraphCorrect = 0;
let paragraphIncorrect = 0;

// Shuffle questions
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
    document.getElementById("result").innerHTML = `
      <h2>Quiz Complete!</h2>
      <p>Your final score: ${totalScore}/${questionPool.length}</p>
      <p>Correct: <span style="color:green">${totalScore}</span></p>
      <p>Incorrect: <span style="color:red">${questionPool.length - totalScore}</span></p>
    `;
    showReview();
    return;
  }

  const currentQuestion = questionPool[currentIndex];
  const div = document.createElement("div");
  div.classList.add("quiz-question");
  div.innerHTML = `
    <p>${currentQuestion.question}</p>
    <input type="radio" id="option-1" name="answer" value="por"> <label for="option-1">Por</label><br>
    <input type="radio" id="option-2" name="answer" value="para"> <label for="option-2">Para</label><br><br>
    <button id="submit-btn">Submit</button>
    <p id="feedback"></p>
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
    totalScore++;
    if (currentQuestion.correct === "por") porCorrect++;
    if (currentQuestion.correct === "para") paraCorrect++;
    feedback.textContent = `Correct! ${currentQuestion.rationale}`;
    feedback.style.color = "green";
  } else {
    incorrectAnswers.push(currentQuestion);
    feedback.textContent = `Incorrect. ${currentQuestion.rationale}`;
    feedback.style.color = "red";
  }

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 2000);
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

// Load a paragraph for practice
function loadParagraph() {
  const paragraphContainer = document.getElementById("paragraph-container");
  const feedback = document.getElementById("paragraph-feedback");
  const nextButton = document.getElementById("next-paragraph");

  paragraphContainer.innerHTML = "";
  feedback.textContent = "";
  nextButton.style.display = "none";

  if (paragraphIndex >= paragraphPool.length) {
    paragraphContainer.innerHTML = `
      <h2>Paragraph Practice Complete!</h2>
      <p>Correct: <span style="color:green">${paragraphCorrect}</span></p>
      <p>Incorrect: <span style="color:red">${paragraphIncorrect}</span></p>
    `;
    return;
  }

  const currentParagraph = paragraphPool[paragraphIndex];
  let html = `<p>${currentParagraph.text}</p>`;
  currentParagraph.answers.forEach((_, index) => {
    html += `
      <label for="answer-${index}">Blank ${index + 1}: </label>
      <input type="text" id="answer-${index}" placeholder="Enter 'por', 'para', or others"><br>
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
    } else {
      document.getElementById(`answer-${index}`).style.borderColor = "red";
      isCorrect = false;
    }
  });

  if (isCorrect) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "green";
    paragraphCorrect++;
  } else {
    feedback.textContent = "Incorrect. Here's what you missed:";
    feedback.style.color = "red";
    paragraphIncorrect++;
    const rationaleList = currentParagraph.rationales.map((rationale, index) => `<li>${rationale}</li>`).join("");
    feedback.innerHTML += `<ul>${rationaleList}</ul>`;
  }

  nextButton.style.display = "block";
  nextButton.addEventListener("click", () => {
    paragraphIndex++;
    loadParagraph();
  });
}

// Initialize the quiz and paragraph practice
function initQuiz() {
  shuffleQuestions(questionPool);
  loadQuestion();
  loadParagraph();
}

document.addEventListener("DOMContentLoaded", initQuiz);
