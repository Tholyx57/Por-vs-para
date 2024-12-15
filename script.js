// Fixed question pool with no duplicates or missing syntax
const questionPool = [
  { question: "Caminamos ___ el parque para disfrutar el buen clima.", correct: "por", rationale: "Por is used for movement through or along a space." },
  { question: "Este regalo es ___ mi mejor amigo.", correct: "para", rationale: "Para is used to indicate the recipient of the gift." },
  { question: "Gracias ___ tu ayuda con el proyecto.", correct: "por", rationale: "Por is used to express gratitude or reason." },
  { question: "Estuve en casa ___ el mal tiempo.", correct: "por", rationale: "Por is used to indicate the reason (bad weather)." },
  { question: "Salimos ___ la playa a las 8 de la mañana.", correct: "para", rationale: "Para is used to indicate a destination." },
  { question: "Trabajé toda la noche ___ terminar el informe a tiempo.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "¿Puedes trabajar ___ mí mañana? Estoy muy ocupado.", correct: "por", rationale: "Por is used to indicate substitution (working on behalf of someone)." },
  { question: "Lo compré ___ $50 en una tienda cercana.", correct: "por", rationale: "Por is used to indicate exchange or cost." },
  { question: "Ella viajó ___ España durante las vacaciones de verano.", correct: "por", rationale: "Por is used for movement through a place." },
  { question: "Este tren va ___ Madrid y hace pocas paradas.", correct: "para", rationale: "Para is used to indicate a destination." },
];

// Variables to manage the current state
let currentIndex = 0; // Index of the first question in the current set
const questionsPerPage = 10; // Number of questions displayed per page

// Function to load a set of questions
function loadQuestions() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = ""; // Clear previous questions

  // Select the current set of questions
  const currentQuestions = questionPool.slice(currentIndex, currentIndex + questionsPerPage);

  // Display each question
  currentQuestions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");
    div.innerHTML = `
      <p>${currentIndex + index + 1}. ${q.question}</p>
      <input type="radio" id="q${index}a" name="q${index}" value="por"> <label for="q${index}a">Por</label><br>
      <input type="radio" id="q${index}b" name="q${index}" value="para"> <label for="q${index}b">Para</label>
      <p id="feedback${index}" class="feedback"></p>
    `;
    quizContainer.appendChild(div);
  });
}

// Function to evaluate answers and provide feedback with rationale
function evaluateAnswers() {
  const currentQuestions = questionPool.slice(currentIndex, currentIndex + questionsPerPage);
  let score = 0;

  currentQuestions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
    const feedback = document.getElementById(`feedback${index}`);

    if (selectedOption) {
      if (selectedOption.value === q.correct) {
        score++;
        feedback.textContent = `Correct! ${q.rationale}`;
        feedback.style.color = "green";
      } else {
        feedback.textContent = `Incorrect. ${q.rationale}`;
        feedback.style.color = "red";
      }
    } else {
      feedback.textContent = "No answer selected.";
      feedback.style.color = "red";
    }
  });

  document.getElementById("result").innerText = `You scored ${score}/${questionsPerPage}.`;
}

// Function to load the next set of questions
function nextQuestions() {
  const maxIndex = questionPool.length; // Total number of questions
  if (currentIndex + questionsPerPage < maxIndex) {
    currentIndex += questionsPerPage; // Move to the next set of questions
    document.getElementById("result").innerText = ""; // Clear previous result
    loadQuestions(); // Load the next set of questions
  } else {
    document.getElementById("result").innerText = "You've completed all the questions!";
  }
}

// Initialize the quiz
function initQuiz() {
  loadQuestions(); // Load the first set of questions

  // Event listener for the submit button
  document.getElementById("submit-btn").addEventListener("click", evaluateAnswers);

  // Event listener for the next questions button
  document.getElementById("next-btn").addEventListener("click", nextQuestions);
}

// Run the initialization function when the page loads
document.addEventListener("DOMContentLoaded", initQuiz);
