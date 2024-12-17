const questionPool = [
  // Por vs Para Questions
  {
    question: "Caminamos ___ el parque para disfrutar el buen clima.",
    correct: "por",
    rationale: "Por is used for movement through or along a space, such as a park. It describes the route taken.",
    category: "Por vs. Para",
  },
  {
    question: "Estudié mucho ___ aprobar el examen de historia.",
    correct: "para",
    rationale: "Para is used to express purpose (passing the exam).",
    category: "Por vs. Para",
  },
  {
    question: "Este cuadro fue pintado ___ mi abuelo hace muchos años.",
    correct: "por",
    rationale: "Por is used to indicate the agent in passive constructions (painted by my grandfather).",
    category: "Por vs. Para",
  },
  {
    question: "Este café es ___ mi madre. A ella le encanta el café colombiano.",
    correct: "para",
    rationale: "Para is used to indicate the recipient (the coffee is for the mother).",
    category: "Por vs. Para",
  },
  {
    question: "Viajamos ___ carretera para llegar a la playa.",
    correct: "por",
    rationale: "Por is used to indicate the means or route (by road).",
    category: "Por vs. Para",
  },
  {
    question: "La reunión es ___ discutir los nuevos planes de la empresa.",
    correct: "para",
    rationale: "Para is used to express purpose (discussing new plans).",
    category: "Por vs. Para",
  },
  {
    question: "Gracias ___ tu apoyo durante los momentos difíciles.",
    correct: "por",
    rationale: "Por is used to express gratitude.",
    category: "Por vs. Para",
  },
  {
    question: "Estaré aquí ___ las vacaciones de verano.",
    correct: "por",
    rationale: "Por is used to indicate a duration of time (during the summer vacation).",
    category: "Por vs. Para",
  },
  {
    question: "Este libro es ___ ayudarte a mejorar tu gramática en español.",
    correct: "para",
    rationale: "Para is used to express purpose (helping improve grammar).",
    category: "Por vs. Para",
  },
  {
    question: "Lo compré ___ $10 en el mercado local.",
    correct: "por",
    rationale: "Por is used to indicate an exchange (money for the item).",
    category: "Por vs. Para",
  },

  // Ser vs Estar Questions
  {
    question: "La sopa ___ caliente porque acaba de salir de la olla.",
    correct: "está",
    rationale: "Está is used for temporary states or conditions.",
    category: "Ser vs. Estar",
  },
  {
    question: "Mi amiga ___ doctora y trabaja en un hospital.",
    correct: "es",
    rationale: "Es is used for professions, which are considered permanent characteristics.",
    category: "Ser vs. Estar",
  },
  {
    question: "La reunión ___ en la oficina principal a las 2 p.m.",
    correct: "es",
    rationale: "Es is used to indicate events, such as meetings.",
    category: "Ser vs. Estar",
  },
  {
    question: "Mis hermanos ___ cansados después de correr 10 kilómetros.",
    correct: "están",
    rationale: "Están is used for temporary states, such as being tired.",
    category: "Ser vs. Estar",
  },

  // Conocer vs Saber Questions
  {
    question: "¿___ dónde está la biblioteca?",
    correct: "sabes",
    rationale: "Saber is used for knowing information.",
    category: "Conocer vs. Saber",
  },
  {
    question: "Yo no ___ a tu hermano, pero he oído hablar de él.",
    correct: "conozco",
    rationale: "Conocer is used for being familiar with someone.",
    category: "Conocer vs. Saber",
  },
  {
    question: "Nosotros ___ cocinar muy bien.",
    correct: "sabemos",
    rationale: "Saber is used for skills or abilities.",
    category: "Conocer vs. Saber",
  },
  {
    question: "¿Tú ___ a la familia de Pedro?",
    correct: "conoces",
    rationale: "Conocer is used for being familiar with someone.",
    category: "Conocer vs. Saber",
  },
];

const paragraphPool = [
  // Por vs Para Paragraphs
  {
    text: "Fui al supermercado ___ comprar pan y leche. Caminamos ___ el parque ___ llegar al otro lado de la ciudad.",
    answers: ["para", "por", "para"],
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
    rationales: [
      "Es is used for origin, a permanent trait.",
      "Está is used for temporary states, like living in Mexico temporarily.",
    ],
    category: "Ser vs. Estar",
  },
  {
    text: "Las flores ___ muy bonitas hoy porque ___ frescas.",
    answers: ["están", "están"],
    rationales: [
      "Están is used for temporary states, like the flowers being pretty today.",
      "Están is used for temporary freshness of the flowers.",
    ],
    category: "Ser vs. Estar",
  },

  // Conocer vs Saber Paragraphs
  {
    text: "Yo ___ muy bien esta ciudad porque he vivido aquí muchos años. Además, ___ el nombre de todas las calles.",
    answers: ["conozco", "sé"],
    rationales: [
      "Conozco is used for familiarity with a place (the city).",
      "Sé is used for knowing specific information (the names of streets).",
    ],
    category: "Conocer vs. Saber",
  },
  {
    text: "Ellos ___ hablar francés perfectamente, pero no ___ a nadie de Francia.",
    answers: ["saben", "conocen"],
    rationales: [
      "Saben is used for skills or abilities, like speaking French.",
      "Conocen is used for familiarity with people, like people from France.",
    ],
    category: "Conocer vs. Saber",
  },
];
