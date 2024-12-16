const questionPool = [
  {
    question: "Caminamos ___ el parque para disfrutar el buen clima.",
    correct: "por",
    rationale: "Por is used for movement through or along a space, such as a park. It describes the route taken.",
    category: "Movement",
    difficulty: "easy"
  },
  {
    question: "Este regalo es ___ mi mejor amigo.",
    correct: "para",
    rationale: "Para is used to indicate the recipient of a gift.",
    category: "Purpose",
    difficulty: "easy"
  },
  {
    question: "Gracias ___ tu ayuda con el proyecto.",
    correct: "por",
    rationale: "Por is used to express gratitude or the reason for an action.",
    category: "Reason",
    difficulty: "medium"
  },
  {
    question: "El tren va ___ Madrid.",
    correct: "para",
    rationale: "Para is used to indicate the destination.",
    category: "Destination",
    difficulty: "easy"
  }
  // Add more questions here
];

const paragraphPool = [
  {
    text: "Fui al mercado ___ comprar frutas frescas. Caminamos ___ el parque ___ llegar a casa.",
    answers: ["para", "por", "para"],
    rationales: [
      "Para is used to express purpose, buying fresh fruits.",
      "Por is used for movement through a space, the park.",
      "Para is used to express purpose, arriving home."
    ]
  },
  {
    text: "Gracias ___ ayudarme con el proyecto. Este regalo es ___ ti, como muestra de mi gratitud.",
    answers: ["por", "para"],
    rationales: [
      "Por is used to express gratitude.",
      "Para is used to indicate the recipient of the gift (you)."
    ]
  }
  // Add more paragraphs as needed
];
