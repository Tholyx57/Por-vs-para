let currentIndex = 0;
let totalScore = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let streak = 0;
let difficulty = "easy"; // Start with easy questions
let paragraphIndex = 0;

// Shuffle questions
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Load the current question based on difficulty
function loadQuestion() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = "";

  const filteredQuestions = questionPool.filter(q => q.difficulty === difficulty);

  if (currentIndex >= filteredQuestions.length) {
    document.getElementById("result").innerText = `Quiz Complete! Your final score: ${totalScore}/${filteredQuestions.length}.`;
    return;
  }

  const currentQuestion = filteredQuestions[currentIndex];
  const div = document.createElement("div");
  div.classList.add("quiz-question");
  div.innerHTML = `
    <p>${currentQuestion.question}</p>
    <input type="radio" id="option-a" name="answer" value="${currentQuestion.options[0]}"> <label for="option-a">${currentQuestion.options[0]}</label><br>
    <input type="radio" id="option-b" name="answer" value="${currentQuestion.options[1]}"> <label for="option-b">${currentQuestion.options[1]}</label><br>
    <input type="radio" id="option-c" name="answer" value="${currentQuestion.options[2]}"> <label for="option-c">${currentQuestion.options[2]}</label><br><br>
    <button id="submit-btn">Submit</button>
    <p id="feedback" class="feedback"></p>
  `;
  quizContainer.appendChild(div);

  document.getElementById("submit-btn").addEventListener("click", evaluateAnswer);
}

// Evaluate the answer
function evaluateAnswer() {
  const filteredQuestions = questionPool.filter(q => q.difficulty === difficulty);
  const currentQuestion = filteredQuestions[currentIndex];
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  const feedback = document.getElementById("feedback");

  if (!selectedOption) {
    feedback.textContent = "Please select an answer before submitting.";
    feedback.style.color = "red";
    return;
  }

  if (selectedOption.value === currentQuestion.correct) {
    feedback.textContent = `Correct! ${currentQuestion.explanations[currentQuestion.correct]}`;
    feedback.style.color = "green";
    totalScore++;
    correctAnswers++;
    streak++;
  } else {
    feedback.textContent = `Incorrect. ${currentQuestion.explanations[selectedOption.value]} \n The correct answer is: ${currentQuestion.correct}. ${currentQuestion.explanations[currentQuestion.correct]}`;
    feedback.style.color = "red";
    streak = 0;
    incorrectAnswers++;
  }

  adjustDifficulty();

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 5000);
}

// Adjust difficulty based on performance
function adjustDifficulty() {
  if (streak >= 3 && difficulty === "easy") {
    difficulty = "medium";
    streak = 0; // Reset streak for the new difficulty
  } else if (streak >= 3 && difficulty === "medium") {
    difficulty = "hard";
    streak = 0;
  } else if (streak === 0 && difficulty === "hard") {
    difficulty = "medium";
  } else if (streak === 0 && difficulty === "medium") {
    difficulty = "easy";
  }

  updateQuizScoreDisplay();
}

// Update quiz score display
function updateQuizScoreDisplay() {
  const quizScoreContainer = document.getElementById("quiz-score");
  quizScoreContainer.innerHTML = `
    <p style="color: green;">Correct: ${correctAnswers}</p>
    <p style="color: red;">Incorrect: ${incorrectAnswers}</p>
  `;
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
      <input type="text" id="answer-${index}" placeholder="ser/estar or saber/conocer"><br>
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
      paragraphCorrectAnswers++;
    } else {
      document.getElementById(`answer-${index}`).style.borderColor = "red";
      paragraphIncorrectAnswers++;
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

  updateParagraphScoreDisplay();
}

// Update paragraph score display
function updateParagraphScoreDisplay() {
  const paragraphScoreContainer = document.getElementById("paragraph-score");
  paragraphScoreContainer.innerHTML = `
    <p style="color: green;">Correct: ${paragraphCorrectAnswers}</p>
    <p style="color: red;">Incorrect: ${paragraphIncorrectAnswers}</p>
  `;
}

// Initialize quiz and paragraph practice
document.addEventListener("DOMContentLoaded", () => {
  shuffleQuestions(questionPool);
  loadQuestion();
  loadParagraph();
});
