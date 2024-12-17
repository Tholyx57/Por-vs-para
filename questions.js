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
  }
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

  // Conocer vs Saber Paragraphs
  {
    text: "Yo ___ muy bien esta ciudad porque he vivido aquí muchos años. Además, ___ el nombre de todas las calles.",
    answers: ["conozco", "sé"],
    rationales: [
      "Conozco is used for familiarity with a place (the city).",
      "Sé is used for knowing specific information (the names of streets).",
    ],
    category: "Conocer vs. Saber",
  }
];
