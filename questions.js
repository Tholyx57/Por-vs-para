const questionPool = [
  // Por vs Para Questions
  {
    question: "Caminamos ___ el parque para disfrutar el buen clima.",
    correct: "por",
    options: ["por", "para"],
    rationale: "Por is used for movement through or along a space, such as a park. It describes the route taken.",
    category: "Por vs. Para",
  },
  {
    question: "Estudié mucho ___ aprobar el examen de historia.",
    correct: "para",
    options: ["por", "para"],
    rationale: "Para is used to express purpose (passing the exam).",
    category: "Por vs. Para",
  },
  {
    question: "Este cuadro fue pintado ___ mi abuelo hace muchos años.",
    correct: "por",
    options: ["por", "para"],
    rationale: "Por is used to indicate the agent in passive constructions (painted by my grandfather).",
    category: "Por vs. Para",
  },

  // Ser vs Estar Questions
  {
    question: "La sopa ___ caliente porque acaba de salir de la olla.",
    correct: "está",
    options: ["es", "está"],
    rationale: "Está is used for temporary states or conditions.",
    category: "Ser vs. Estar",
  },
  {
    question: "Mi amiga ___ doctora y trabaja en un hospital.",
    correct: "es",
    options: ["es", "está"],
    rationale: "Es is used for professions, which are considered permanent characteristics.",
    category: "Ser vs. Estar",
  },

  // Conocer vs Saber Questions
  {
    question: "¿___ dónde está la biblioteca?",
    correct: "sabes",
    options: ["conoces", "sabes"],
    rationale: "Saber is used for knowing information.",
    category: "Conocer vs. Saber",
  },
  {
    question: "Yo no ___ a tu hermano, pero he oído hablar de él.",
    correct: "conozco",
    options: ["sé", "conozco"],
    rationale: "Conocer is used for being familiar with someone.",
    category: "Conocer vs. Saber",
  }// Por vs. Para Questions
{
  question: "El proyecto fue cancelado ___ falta de fondos suficientes, pero esperamos reanudarlo pronto.",
  correct: "por",
  options: ["por", "para"],
  rationale: "Por is used to express a cause or reason (lack of sufficient funds).",
  category: "Por vs. Para",
},
{
  question: "Decidí inscribirme en este curso ___ aprender técnicas avanzadas de programación.",
  correct: "para",
  options: ["por", "para"],
  rationale: "Para is used to express purpose (learning advanced programming techniques).",
  category: "Por vs. Para",
},
{
  question: "María viajó a la ciudad ___ cuestiones de trabajo, pero aprovechó para visitar a su familia.",
  correct: "por",
  options: ["por", "para"],
  rationale: "Por is used to indicate a reason or cause (work-related matters).",
  category: "Por vs. Para",
},
{
  question: "El regalo que compré ___ mi hermano no llegó a tiempo para su cumpleaños.",
  correct: "para",
  options: ["por", "para"],
  rationale: "Para is used to indicate the recipient (the brother).",
  category: "Por vs. Para",
},
{
  question: "Tuvimos que caminar ___ tres horas por el bosque antes de encontrar el campamento.",
  correct: "por",
  options: ["por", "para"],
  rationale: "Por is used to indicate duration of time (walking for three hours).",
  category: "Por vs. Para",
},
{
  question: "Esta beca fue otorgada ___ estudiantes que demostraron excelencia académica.",
  correct: "para",
  options: ["por", "para"],
  rationale: "Para is used to express purpose or benefit (awarded to students).",
  category: "Por vs. Para",
},
{
  question: "El jefe me pidió que terminara el informe ___ el lunes sin falta.",
  correct: "para",
  options: ["por", "para"],
  rationale: "Para is used to express a deadline (by Monday).",
  category: "Por vs. Para",
},
{
  question: "El cuadro fue subastado ___ una suma impresionante de dinero en la exposición.",
  correct: "por",
  options: ["por", "para"],
  rationale: "Por is used to indicate exchange or price (sold for an amount of money).",
  category: "Por vs. Para",
},
{
  question: "Pagué la deuda ___ mi amigo porque él no tenía suficiente dinero en ese momento.",
  correct: "por",
  options: ["por", "para"],
  rationale: "Por is used to indicate substitution (paying on behalf of a friend).",
  category: "Por vs. Para",
},
{
  question: "Nos reunimos con el equipo ___ discutir los detalles finales del proyecto.",
  correct: "para",
  options: ["por", "para"],
  rationale: "Para is used to express purpose (discussing final details).",
  category: "Por vs. Para",
},

// Ser vs. Estar Questions
{
  question: "La situación actual del país ___ complicada debido a los problemas económicos.",
  correct: "está",
  options: ["es", "está"],
  rationale: "Está is used to describe a temporary condition (current situation being complicated).",
  category: "Ser vs. Estar",
},
{
  question: "Ese restaurante ___ conocido por ofrecer platos típicos de la región.",
  correct: "es",
  options: ["es", "está"],
  rationale: "Es is used for general or permanent traits (the restaurant being known for its dishes).",
  category: "Ser vs. Estar",
},
{
  question: "Aunque el clima ___ muy frío hoy, mañana subirá la temperatura.",
  correct: "está",
  options: ["es", "está"],
  rationale: "Está is used for temporary conditions (the weather being cold today).",
  category: "Ser vs. Estar",
},
{
  question: "Mi primo ___ el nuevo presidente del club de ajedrez desde la semana pasada.",
  correct: "es",
  options: ["es", "está"],
  rationale: "Es is used for roles or permanent titles (being president of the chess club).",
  category: "Ser vs. Estar",
},
{
  question: "Este coche ___ en perfecto estado, pero lo voy a vender de todos modos.",
  correct: "está",
  options: ["es", "está"],
  rationale: "Está is used for temporary states (the car being in perfect condition).",
  category: "Ser vs. Estar",
},
{
  question: "La reunión ___ el lunes pasado en la oficina central.",
  correct: "fue",
  options: ["fue", "estuvo"],
  rationale: "Fue is used for events that happened in the past (the meeting).",
  category: "Ser vs. Estar",
},
{
  question: "Los jugadores ___ listos para salir al campo y empezar el partido.",
  correct: "están",
  options: ["son", "están"],
  rationale: "Están is used to indicate a temporary state (players being ready).",
  category: "Ser vs. Estar",
},
{
  question: "Juan ___ un hombre muy generoso y siempre ayuda a los demás.",
  correct: "es",
  options: ["es", "está"],
  rationale: "Es is used for defining characteristics (Juan being generous).",
  category: "Ser vs. Estar",
},
{
  question: "Mis abuelos ___ viviendo en una casa cerca del lago durante el verano.",
  correct: "están",
  options: ["son", "están"],
  rationale: "Están is used to describe a temporary action (living near the lake during summer).",
  category: "Ser vs. Estar",
},
{
  question: "Las ventanas ___ sucias porque llovió mucho anoche.",
  correct: "están",
  options: ["son", "están"],
  rationale: "Están is used for temporary states (the windows being dirty after the rain).",
  category: "Ser vs. Estar",
},

// Conocer vs. Saber Questions
{
  question: "¿Tú ___ la fecha exacta en la que se fundó la ciudad?",
  correct: "sabes",
  options: ["conoces", "sabes"],
  rationale: "Saber is used for knowing specific information (the exact date).",
  category: "Conocer vs. Saber",
},
{
  question: "Ellos ___ a muchos artistas famosos gracias a su trabajo en la galería.",
  correct: "conocen",
  options: ["conocen", "saben"],
  rationale: "Conocer is used for familiarity with people (famous artists).",
  category: "Conocer vs. Saber",
},
{
  question: "Mis padres no ___ cómo preparar una paella auténtica.",
  correct: "saben",
  options: ["conocen", "saben"],
  rationale: "Saber is used for knowing how to do something (preparing paella).",
  category: "Conocer vs. Saber",
},
{
  question: "Durante nuestro viaje, ___ un pequeño pueblo lleno de historia y cultura.",
  correct: "conocimos",
  options: ["conocimos", "supimos"],
  rationale: "Conocimos is used for meeting or discovering places for the first time.",
  category: "Conocer vs. Saber",
},
{
  question: "María todavía no ___ a los nuevos vecinos que se mudaron a su edificio.",
  correct: "conoce",
  options: ["conoce", "sabe"],
  rationale: "Conocer is used for familiarity with people (new neighbors).",
  category: "Conocer vs. Saber",
},
{
  question: "Los estudiantes no ___ la respuesta correcta a la última pregunta del examen.",
  correct: "sabían",
  options: ["sabían", "conocían"],
  rationale: "Sabían is used for knowing information (the correct answer).",
  category: "Conocer vs. Saber",
},
{
  question: "Nunca ___ a mi bisabuelo, pero me han contado muchas historias sobre él.",
  correct: "conocí",
  options: ["conocí", "supe"],
  rationale: "Conocí is used for meeting someone for the first time.",
  category: "Conocer vs. Saber",
},
{
  question: "Nosotros ___ que la reunión fue cancelada justo antes de salir de casa.",
  correct: "supimos",
  options: ["supimos", "conocimos"],
  rationale: "Supimos is used for finding out information (the meeting being canceled).",
  category: "Conocer vs. Saber",
},
{
  question: "Ellos ___ la ciudad de Madrid como la palma de su mano.",
  correct: "conocen",
  options: ["conocen", "saben"],
  rationale: "Conocer is used for familiarity with places (knowing Madrid well).",
  category: "Conocer vs. Saber",
},
{
  question: "¿Ustedes ___ quién es el autor de este libro tan interesante?",
  correct: "saben",
  options: ["conocen", "saben"],
  rationale: "Saber is used for knowing specific information (the author).",
  category: "Conocer vs. Saber",
},

];

];

const paragraphPool = [
  // Por vs Para Paragraphs
  {
    text: "Fui al supermercado ___ comprar pan y leche. Caminamos ___ el parque ___ llegar al otro lado de la ciudad.",
    answers: ["para", "por", "para"],
    options: ["por", "para"],
    rationales: [
      "Para is used to express purpose (buying bread and milk).",
      "Por is used for movement through a space (the park).",
      "Para is used to express purpose (arriving at the other side of the city).",
    ],
    category: "Por vs. Para",
  },
  {
    text: "Gracias ___ traerme este regalo tan especial. Caminamos juntos ___ la playa mientras hablábamos de nuestra infancia.",
    answers: ["por", "por"],
    options: ["por", "para"],
    rationales: [
      "Por is used to express gratitude.",
      "Por is used for movement along a space (the beach).",
    ],
    category: "Por vs. Para",
  },

  // Ser vs Estar Paragraphs
  {
    text: "Mi amigo Juan ___ de Colombia, pero ahora ___ viviendo en México.",
    answers: ["es", "está"],
    options: ["es", "está"],
    rationales: [
      "Es is used for origin, a permanent trait.",
      "Está is used for temporary states, like living in Mexico temporarily.",
    ],
    category: "Ser vs. Estar",
  },
  {
    text: "Las flores ___ muy bonitas hoy porque ___ frescas.",
    answers: ["están", "están"],
    options: ["es", "está", "son", "están"],
    rationales: [
      "Están is used for temporary states, like the flowers being pretty today.",
      "Están is used for the temporary freshness of the flowers.",
    ],
    category: "Ser vs. Estar",
  },

  // Conocer vs Saber Paragraphs
  {
    text: "Yo ___ muy bien esta ciudad porque he vivido aquí muchos años. Además, ___ el nombre de todas las calles.",
    answers: ["conozco", "sé"],
    options: ["conozco", "sé"],
    rationales: [
      "Conozco is used for familiarity with a place (the city).",
      "Sé is used for knowing specific information (the names of streets).",
    ],
    category: "Conocer vs. Saber",
  },
  {
    text: "Ellos ___ hablar francés perfectamente, pero no ___ a nadie de Francia.",
    answers: ["saben", "conocen"],
    options: ["saben", "conocen"],
    rationales: [
      "Saben is used for skills or abilities, like speaking French.",
      "Conocen is used for familiarity with people, like people from France.",
    ],
    category: "Conocer vs. Saber",
  },
