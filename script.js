// Full question pool with 150 questions and rationales
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
  { question: "Caminamos ___ la ciudad buscando un buen restaurante.", correct: "por", rationale: "Por is used for movement through a place." },
  { question: "Este medicamento es ___ aliviar el dolor rápidamente.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Me quedé en casa ___ descansar un poco.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Pasé ___ tu casa, pero no estabas.", correct: "por", rationale: "Por is used for movement along a route." },
  { question: "El proyecto es muy importante ___ mi carrera profesional.", correct: "para", rationale: "Para is used to express a comparison or purpose." },
  { question: "Este libro es ___ aprender más sobre historia mundial.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Muchas gracias ___ todo lo que has hecho.", correct: "por", rationale: "Por is used to express gratitude or reason." },
  { question: "Viajamos ___ avión porque era más rápido que el tren.", correct: "por", rationale: "Por is used to indicate means of transportation." },
  { question: "Salimos temprano ___ evitar el tráfico pesado en la carretera.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Caminamos ___ el bosque durante nuestra caminata diaria.", correct: "por", rationale: "Por is used for movement through a place." },
  const questionPool = [
  { question: "Caminamos ___ el parque para disfrutar el buen clima.", correct: "por", rationale: "Por is used for movement through or along a space." },
  { question: "Este regalo es ___ mi mejor amigo.", correct: "para", rationale: "Para is used to indicate the recipient of the gift." },
  { question: "Gracias ___ tu ayuda con el proyecto.", correct: "por", rationale: "Por is used to express gratitude or reason." },
  { question: "Estuve en casa ___ el mal tiempo.", correct: "por", rationale: "Por is used to indicate the reason (bad weather)." },
  { question: "Salimos ___ la playa a las 8 de la mañana.", correct: "para", rationale: "Para is used to indicate a destination." },
  { question: "Compré este pastel ___ celebrar tu cumpleaños.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Trabajé toda la noche ___ terminar el informe a tiempo.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "¿Puedes trabajar ___ mí mañana? Estoy muy ocupado.", correct: "por", rationale: "Por is used to indicate substitution (working on behalf of someone)." },
  { question: "Lo compré ___ $50 en una tienda cercana.", correct: "por", rationale: "Por is used to indicate exchange or cost." },
  { question: "Ella viajó ___ España durante las vacaciones de verano.", correct: "por", rationale: "Por is used for movement through a place." },
  { question: "Este tren va ___ Madrid y hace pocas paradas.", correct: "para", rationale: "Para is used to indicate a destination." },
  { question: "Caminamos ___ la ciudad buscando un buen restaurante.", correct: "por", rationale: "Por is used for movement through a place." },
  { question: "Este medicamento es ___ aliviar el dolor rápidamente.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Me quedé en casa ___ descansar un poco.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Pasé ___ tu casa, pero no estabas.", correct: "por", rationale: "Por is used for movement along a route." },
  { question: "El proyecto es muy importante ___ mi carrera profesional.", correct: "para", rationale: "Para is used to express a comparison or purpose." },
  { question: "Este libro es ___ aprender más sobre historia mundial.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Muchas gracias ___ todo lo que has hecho.", correct: "por", rationale: "Por is used to express gratitude or reason." },
  { question: "Viajamos ___ avión porque era más rápido que el tren.", correct: "por", rationale: "Por is used to indicate means of transportation." },
  { question: "Salimos temprano ___ evitar el tráfico pesado en la carretera.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Caminamos ___ el bosque durante nuestra caminata diaria.", correct: "por", rationale: "Por is used for movement through a place." },
  { question: "Este coche es ___ mi hermano; él lo compró ayer.", correct: "para", rationale: "Para is used to indicate the recipient of the car." },
  { question: "Hicimos esta reunión ___ discutir los próximos pasos del proyecto.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Fui al supermercado ___ leche y pan.", correct: "por", rationale: "Por is used for reasons or causes behind an action." },
  { question: "Este boleto es ___ el concierto de esta noche.", correct: "para", rationale: "Para is used to indicate the purpose of the ticket." },
  { question: "Ella me llamó ___ teléfono para contarme las novedades.", correct: "por", rationale: "Por is used to indicate means of communication." },
  { question: "Este regalo es ___ ti; espero que te guste.", correct: "para", rationale: "Para is used to indicate the recipient of the gift." },
  { question: "Estudié toda la noche ___ sacar una buena nota en el examen.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Nos quedamos en casa ___ la tormenta.", correct: "por", rationale: "Por is used to indicate the reason (the storm)." },
  { question: "Pagué demasiado dinero ___ estas entradas al concierto.", correct: "por", rationale: "Por is used to indicate exchange or cost." },
  { question: "Él es muy inteligente ___ su edad.", correct: "para", rationale: "Para is used to express a comparison or standard." },
  { question: "Este autobús es ___ el aeropuerto; sale cada 30 minutos.", correct: "para", rationale: "Para is used to indicate a destination." },
  { question: "Estoy aquí ___ ayudarte con cualquier cosa que necesites.", correct: "para", rationale: "Para is used to express purpose or intention." },
  { question: "Lo hice ___ amor, no por dinero.", correct: "por", rationale: "Por is used to express the reason or cause of an action." },
  { question: "Corrieron ___ el parque durante media hora.", correct: "por", rationale: "Por is used for movement through or along a space." },
  { question: "Ayer hablé con mi amiga ___ teléfono por varias horas.", correct: "por", rationale: "Por is used to indicate means of communication." },
  { question: "Este documento es ___ entregar mañana al profesor.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Ella fue premiada ___ su dedicación y esfuerzo en el trabajo.", correct: "por", rationale: "Por is used to express the cause or reason." },
  { question: "Me quedé en casa ___ estudiar para el examen de mañana.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Muchas gracias ___ ayudarme con el proyecto de matemáticas.", correct: "por", rationale: "Por is used to express gratitude or reason." },
  { question: "Compré estas flores ___ decorar la mesa para la cena.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "El puente fue construido ___ ingenieros de todo el mundo.", correct: "por", rationale: "Por is used to indicate the agent in passive constructions." },
  { question: "Salimos ___ el cine después de cenar en casa.", correct: "para", rationale: "Para is used to indicate a destination." },
  { question: "Este dinero es ___ pagar la matrícula universitaria.", correct: "para", rationale: "Para is used to express purpose or intention." },
  { question: "Estoy buscando un lugar ___ descansar y relajarme.", correct: "para", rationale: "Para is used to express purpose or intention." },
  { question: "Perdí el tren ___ llegar tarde a la estación.", correct: "por", rationale: "Por is used to indicate the reason (arriving late)." },
  { question: "Gracias ___ venir a mi fiesta de cumpleaños.", correct: "por", rationale: "Por is used to express gratitude or reason." },
  { question: "Estudiamos mucho ___ pasar el examen final de química.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Caminamos ___ las montañas durante nuestra excursión escolar.", correct: "por", rationale: "Por is used for movement through a place." },
  { question: "Este curso es ___ aprender más sobre tecnología moderna.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Muchas gracias ___ el regalo; fue muy generoso de tu parte.", correct: "por", rationale: "Por is used to express gratitude or reason." },
  { question: "Fuimos al parque ___ tomar un poco de aire fresco.", correct: "para", rationale: "Para is used to express purpose or goal." },
  { question: "Este boleto es ___ la entrada al museo.", correct: "para", rationale: "Para is used to indicate the purpose of the ticket." },
  { question: "Viajaron ___ Italia para celebrar su aniversario de bodas.", correct: "por", rationale: "Por is used to indicate a reason or cause (celebration)." },
  { question: "Este tren es ___ Sevilla y sale a las 3 p.m.", correct: "para", rationale: "Para is used to indicate a destination." },
  { question: "Caminamos ___ debajo del puente para evitar el sol directo.", correct: "por", rationale: "Por is used for movement through or under a space." },
  { question: "Este proyecto es ___ mejorar nuestra comunidad.", correct: "para", rationale: "Para is used to express purpose or intention." },
  { question: "Necesitamos terminar este trabajo ___ la próxima semana.", correct: "para", rationale: "Para is used to express a deadline." },
  { question: "Me disculpo ___ llegar tarde; hubo mucho tráfico.", correct: "por", rationale: "Por is used to indicate the reason (traffic)." },
  { question: "Fui al mercado ___ comprar frutas frescas.", correct: "para", rationale: "Para is used to express purpose or goal." }
];
// Variables to manage the current state
let currentIndex = 0; // Index of the first question in the current set
const questionsPerPage = 10; // Number of questions displayed per page

// Load a set of questions
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

// Evaluate answers and provide feedback with rationale
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

// Load the next set of questions
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
