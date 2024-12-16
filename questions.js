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
  },
  // Add more questions with `category` and `difficulty` as needed
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
  // Add more paragraphs as needed
const additionalParagraphs = [
  {
    text: "Fui al supermercado ___ comprar pan y queso. Caminamos ___ el parque ___ llegar a casa.",
    answers: ["para", "por", "para"],
    rationales: [
      "Para is used to express purpose (buying bread and cheese).",
      "Por is used for movement through a space (the park).",
      "Para is used to express purpose (arriving home)."
    ]
  },
  {
    text: "Gracias ___ ayudarme con el proyecto. Este regalo es ___ ti, como muestra de mi gratitud.",
    answers: ["por", "para"],
    rationales: [
      "Por is used to express gratitude.",
      "Para is used to indicate the recipient of the gift (you)."
    ]
  },
  {
    text: "Salimos temprano ___ evitar el tráfico. Viajamos ___ la autopista y llegamos a tiempo.",
    answers: ["para", "por"],
    rationales: [
      "Para is used to express purpose (avoiding traffic).",
      "Por is used for movement along a route (the highway)."
    ]
  },
  {
    text: "Este boleto es ___ la entrada al concierto. Caminamos ___ la ciudad para llegar al teatro.",
    answers: ["para", "por"],
    rationales: [
      "Para is used to express purpose (concert entrance).",
      "Por is used for movement through a space (the city)."
    ]
  },
  {
    text: "Me quedé en casa ___ la tormenta. Llamé a mi amigo ___ teléfono para avisarle.",
    answers: ["por", "por"],
    rationales: [
      "Por is used to indicate the reason or cause (the storm).",
      "Por is used to indicate the means of communication (by phone)."
    ]
  },
  {
    text: "El informe es ___ el jefe. Lo terminé ___ entregarlo antes de la fecha límite.",
    answers: ["para", "para"],
    rationales: [
      "Para is used to indicate the recipient (the boss).",
      "Para is used to express purpose (submitting the report)."
    ]
  },
  {
    text: "Caminamos ___ la playa durante nuestra caminata. Luego fuimos a un restaurante ___ cenar.",
    answers: ["por", "para"],
    rationales: [
      "Por is used for movement along a space (the beach).",
      "Para is used to express purpose (having dinner)."
    ]
  },
  {
    text: "Lo hice ___ amor, no por dinero. Este cuadro es ___ ti, como un regalo especial.",
    answers: ["por", "para"],
    rationales: [
      "Por is used to express the reason or motivation (out of love).",
      "Para is used to indicate the recipient (you)."
    ]
  },
  {
    text: "Viajo ___ México mañana. Este viaje es ___ disfrutar de las playas y la comida.",
    answers: ["para", "para"],
    rationales: [
      "Para is used to indicate the destination (Mexico).",
      "Para is used to express purpose (enjoying beaches and food)."
    ]
  },
  {
    text: "Estudio todos los días ___ mejorar mi español. Tomo clases en línea ___ Zoom.",
    answers: ["para", "por"],
    rationales: [
      "Para is used to express purpose (improving Spanish).",
      "Por is used to indicate the means of communication (Zoom)."
    ]
  }
];

