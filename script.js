// Question pool
const questionPool = [
  { question: "Caminamos ___ el parque para disfrutar el buen clima.", correct: "por" },
  { question: "Este regalo es ___ mi mejor amigo.", correct: "para" },
  { question: "Gracias ___ tu ayuda con el proyecto.", correct: "por" },
  { question: "Estuve en casa ___ el mal tiempo.", correct: "por" },
  { question: "Salimos ___ la playa a las 8 de la mañana.", correct: "para" },
  { question: "Compré este pastel ___ celebrar tu cumpleaños.", correct: "para" },
  { question: "Trabajé toda la noche ___ terminar el informe a tiempo.", correct: "para" },
  { question: "¿Puedes trabajar ___ mí mañana? Estoy muy ocupado.", correct: "por" },
  { question: "Lo compré ___ $50 en una tienda cercana.", correct: "por" },
  { question: "Ella viajó ___ España durante las vacaciones de verano.", correct: "por" },
  { question: "Este tren va ___ Madrid y hace pocas paradas.", correct: "para" },
  { question: "Caminamos ___ la ciudad buscando un buen restaurante.", correct: "por" },
  { question: "Este medicamento es ___ aliviar el dolor rápidamente.", correct: "para" },
  { question: "Me quedé en casa ___ descansar un poco.", correct: "para" },
  { question: "Pasé ___ tu casa, pero no estabas.", correct: "por" },
  { question: "El proyecto es muy importante ___ mi carrera profesional.", correct: "para" },
  { question: "Este libro es ___ aprender más sobre historia mundial.", correct: "para" },
  { question: "Muchas gracias ___ todo lo que has hecho.", correct: "por" },
  { question: "Viajamos ___ avión porque era más rápido que el tren.", correct: "por" },
  { question: "Salimos temprano ___ evitar el tráfico pesado en la carretera.", correct: "para" },
  { question: "Caminamos ___ el bosque durante nuestra caminata diaria.", correct: "por" },
  { question: "Este coche es ___ mi hermano; él lo compró ayer.", correct: "para" },
  { question: "Hicimos esta reunión ___ discutir los próximos pasos del proyecto.", correct: "para" },
  { question: "Fui al supermercado ___ leche y pan.", correct: "por" },
  { question: "Este boleto es ___ el concierto de esta noche.", correct: "para" },
  { question: "Ella me llamó ___ teléfono para contarme las novedades.", correct: "por" },
  { question: "Este regalo es ___ ti; espero que te guste.", correct: "para" },
  { question: "Estudié toda la noche ___ sacar una buena nota en el examen.", correct: "para" },
  { question: "Nos quedamos en casa ___ la tormenta.", correct: "por" },
  { question: "Pagué demasiado dinero ___ estas entradas al concierto.", correct: "por" },
  { question: "Él es muy inteligente ___ su edad.", correct: "para" },
  { question: "Este autobús es ___ el aeropuerto; sale cada 30 minutos.", correct: "para" },
  { question: "Estoy aquí ___ ayudarte con cualquier cosa que necesites.", correct: "para" },
  { question: "Lo hice ___ amor, no por dinero.", correct: "por" },
  { question: "Corrieron ___ el parque durante media hora.", correct: "por" },
  { question: "Ayer hablé con mi amiga ___ teléfono por varias horas.", correct: "por" },
  { question: "Este documento es ___ entregar mañana al profesor.", correct: "para" },
  { question: "Ella fue premiada ___ su dedicación y esfuerzo en el trabajo.", correct: "por" },
  { question: "Me quedé en casa ___ estudiar para el examen de mañana.", correct: "para" },
  { question: "Muchas gracias ___ ayudarme con el proyecto de matemáticas.", correct: "por" },
  { question: "Compré estas flores ___ decorar la mesa para la cena.", correct: "para" },
  { question: "El puente fue construido ___ ingenieros de todo el mundo.", correct: "por" },
  { question: "Salimos ___ el cine después de cenar en casa.", correct: "para" },
  { question: "Este dinero es ___ pagar la matrícula universitaria.", correct: "para" },
  { question: "Estoy buscando un lugar ___ descansar y relajarme.", correct: "para" },
  { question: "Perdí el tren ___ llegar tarde a la estación.", correct: "por" },
  { question: "Gracias ___ venir a mi fiesta de cumpleaños.", correct: "por" },
  { question: "Estudiamos mucho ___ pasar el examen final de química.", correct: "para" },
  { question: "Caminamos ___ las montañas durante nuestra excursión escolar.", correct: "por" },
  { question: "Este curso es ___ aprender más sobre tecnología moderna.", correct: "para" },
  { question: "Muchas gracias ___ el regalo; fue muy generoso de tu parte.", correct: "por" },
  { question: "Fuimos al parque ___ tomar un poco de aire fresco.", correct: "para" },
  { question: "Este boleto es ___ la entrada al museo.", correct: "para" },
  { question: "Viajaron ___ Italia para celebrar su aniversario de bodas.", correct: "por" },
  { question: "Este tren es ___ Sevilla y sale a las 3 p.m.", correct: "para" },
  { question: "Caminamos ___ debajo del puente para evitar el sol directo.", correct: "por" },
  { question: "Este proyecto es ___ mejorar nuestra comunidad.", correct: "para" },
  { question: "Necesitamos terminar este trabajo ___ la próxima semana.", correct: "para" },
  { question: "Me disculpo ___ llegar tarde; hubo mucho tráfico.", correct: "por" },
  { question: "Fui al mercado ___ comprar frutas frescas.", correct: "para" },
];


// Track current set of questions
let currentQuestions = [];

// Function to load 10 questions dynamically
function loadQuestions() {
  const quizContainer = document.getElementById("questions-container");
  quizContainer.innerHTML = ""; // Clear any existing questions

  // Randomly select 10 questions
  currentQuestions = questionPool.sort(() => Math.random() - 0.5).slice(0, 10);

  // Add questions to the container
  currentQuestions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");
    div.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      <input type="radio" id="q${index}a" name="q${index}" value="por"> <label for="q${index}a">Por</label><br>
      <input type="radio" id="q${index}b" name="q${index}" value="para"> <label for="q${index}b">Para</label>
      <p id="feedback${index}" class="feedback"></p>
    `;
    quizContainer.appendChild(div);
  });
}

// Function to evaluate answers and provide rationale
function evaluateAnswers() {
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

  document.getElementById("result").innerText = `You scored ${score}/10.`;
  saveScore(score);
}

// Save score to localStorage
function saveScore(score) {
  localStorage.setItem("lastScore", score);
}

// Display previous score
function displayPreviousScore() {
  const savedScore = localStorage.getItem("lastScore");
  if (savedScore) {
    document.getElementById("score").innerText = `Previous Score: ${savedScore}/10`;
  }
}

// Initialize the quiz
function initQuiz() {
  loadQuestions();
  displayPreviousScore();

  document.getElementById("submit-btn").addEventListener("click", evaluateAnswers);
}

// Run the initialization function when the page loads
document.addEventListener("DOMContentLoaded", initQuiz);
