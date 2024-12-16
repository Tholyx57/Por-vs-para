const questionPool = [
  {
    question: "Caminamos ___ el parque para disfrutar el buen clima.",
    correct: "por",
    rationale: "Por is used for movement through or along a space, such as a park. It describes the route taken.",
  },
  {
  question: "Estudié mucho ___ aprobar el examen de historia.",
  correct: "para",
  rationale: "Para is used to express purpose (passing the exam)."
},
{
  question: "Este cuadro fue pintado ___ mi abuelo hace muchos años.",
  correct: "por",
  rationale: "Por is used to indicate the agent in passive constructions (painted by my grandfather)."
},
{
  question: "Este café es ___ mi madre. A ella le encanta el café colombiano.",
  correct: "para",
  rationale: "Para is used to indicate the recipient (the coffee is for the mother)."
},
{
  question: "Viajamos ___ carretera para llegar a la playa.",
  correct: "por",
  rationale: "Por is used to indicate the means or route (by road)."
},
{
  question: "La reunión es ___ discutir los nuevos planes de la empresa.",
  correct: "para",
  rationale: "Para is used to express purpose (discussing new plans)."
},
{
  question: "Gracias ___ tu apoyo durante los momentos difíciles.",
  correct: "por",
  rationale: "Por is used to express gratitude."
},
{
  question: "Estaré aquí ___ las vacaciones de verano.",
  correct: "por",
  rationale: "Por is used to indicate a duration of time (during the summer vacation)."
},
{
  question: "Este libro es ___ ayudarte a mejorar tu gramática en español.",
  correct: "para",
  rationale: "Para is used to express purpose (helping improve grammar)."
},
{
  question: "Lo compré ___ $10 en el mercado local.",
  correct: "por",
  rationale: "Por is used to indicate an exchange (money for the item)."
},
{
  question: "Ellos trabajan ___ una empresa internacional.",
  correct: "para",
  rationale: "Para is used to indicate the employer (an international company)."
},
{
  question: "Caminamos ___ el bosque buscando un lugar para descansar.",
  correct: "por",
  rationale: "Por is used to describe movement through a space (the forest)."
},
{
  question: "El informe es ___ entregar al jefe antes de las 5 p.m.",
  correct: "para",
  rationale: "Para is used to express purpose (submitting the report)."
},
{
  question: "El avión volará ___ encima de las nubes durante el viaje.",
  correct: "por",
  rationale: "Por is used to describe movement through or over a space (above the clouds)."
},
{
  question: "Este juguete es ___ mi sobrino. ¡Le va a encantar!",
  correct: "para",
  rationale: "Para is used to indicate the recipient (the toy is for the nephew)."
},
{
  question: "Él es muy alto ___ su edad.",
  correct: "para",
  rationale: "Para is used to express a comparison to a standard (tall for his age)."
},
{
  question: "Hablé con mi amigo ___ teléfono anoche.",
  correct: "por",
  rationale: "Por is used to indicate the means of communication (by phone)."
},
{
  question: "Tomamos esta decisión ___ el bienestar de toda la familia.",
  correct: "para",
  rationale: "Para is used to express purpose (the family's well-being)."
},
{
  question: "Este tren pasa ___ muchas ciudades antes de llegar a su destino.",
  correct: "por",
  rationale: "Por is used to describe movement through or along many cities."
},
{
  question: "¿Puedes trabajar ___ mí este fin de semana? Necesito un descanso.",
  correct: "por",
  rationale: "Por is used to indicate substitution (working on behalf of someone)."
},
{
  question: "El restaurante está cerrado ___ reformas hasta el próximo mes.",
  correct: "por",
  rationale: "Por is used to indicate the reason (the renovations)."
},
{
  question: "Ella estudia mucho ___ ser una gran doctora en el futuro.",
  correct: "para",
  rationale: "Para is used to express purpose (becoming a great doctor)."
},
{
  question: "Salimos temprano ___ evitar el tráfico pesado.",
  correct: "para",
  rationale: "Para is used to express purpose (avoiding heavy traffic)."
},
{
  question: "Viajamos ___ tren porque era más económico que el avión.",
  correct: "por",
  rationale: "Por is used to indicate the means of transportation (by train)."
},
{
  question: "Este regalo es ___ ti. Espero que te guste mucho.",
  correct: "para",
  rationale: "Para is used to indicate the recipient (you)."
},
{
  question: "La carta fue escrita ___ mi abuelo antes de su viaje.",
  correct: "por",
  rationale: "Por is used to indicate the agent in passive voice (written by my grandfather)."
},
{
  question: "Vamos a salir ___ el aeropuerto a las 3 de la tarde.",
  correct: "para",
  rationale: "Para is used to indicate destination (the airport)."
},
{
  question: "Fui a la tienda ___ pan y leche para la cena.",
  correct: "por",
  rationale: "Por is used to indicate the reason for the action (getting bread and milk)."
},
{
  question: "Este proyecto es muy importante ___ nuestra empresa.",
  correct: "para",
  rationale: "Para is used to express purpose (important for the company)."
},
{
  question: "Ella fue premiada ___ su dedicación al trabajo.",
  correct: "por",
  rationale: "Por is used to express the cause or reason (dedication to work)."
},
{
  question: "Este coche es ___ mi padre; lo compré como regalo.",
  correct: "para",
  rationale: "Para is used to indicate the recipient (the car is for the father)."
},
{
  question: "Él me llamó ___ pedir un favor importante.",
  correct: "para",
  rationale: "Para is used to express purpose (asking for an important favor)."
},
{
  question: "Viajamos ___ México durante las vacaciones de verano.",
  correct: "por",
  rationale: "Por is used to describe movement through a space (traveling through Mexico)."
},
{
  question: "El informe es ___ el lunes. ¡No olvides completarlo a tiempo!",
  correct: "para",
  rationale: "Para is used to express a deadline (due on Monday)."
},
{
  question: "Gracias ___ invitarme a tu fiesta de cumpleaños.",
  correct: "por",
  rationale: "Por is used to express gratitude."
},
{
  question: "Estuve en la biblioteca ___ tres horas estudiando.",
  correct: "por",
  rationale: "Por is used to indicate a duration of time (three hours)."
},
{
  question: "Ella trabaja ___ una gran compañía de tecnología.",
  correct: "para",
  rationale: "Para is used to indicate the employer (the technology company)."
},
{
  question: "Me quedaré en casa ___ el mal tiempo.",
  correct: "por",
  rationale: "Por is used to indicate the reason (bad weather)."
},
{
  question: "Lo hago ___ amor, no por dinero.",
  correct: "por",
  rationale: "Por is used to indicate the reason or cause (out of love)."
},
{
  question: "Este curso es ___ aprender a programar.",
  correct: "para",
  rationale: "Para is used to express purpose (learning programming)."
},
{
  question: "Caminamos ___ el parque buscando un buen lugar para descansar.",
  correct: "por",
  rationale: "Por is used to describe movement through a space (the park)."
},
{
  question: "Ella me llamó ___ teléfono para contarme las buenas noticias.",
  correct: "por",
  rationale: "Por is used to indicate the means of communication (by phone)."
},
{
  question: "Esta tarea es ___ mañana. Necesito completarla pronto.",
  correct: "para",
  rationale: "Para is used to express a deadline (due tomorrow)."
},
{
  question: "El puente fue construido ___ ingenieros expertos.",
  correct: "por",
  rationale: "Por is used to indicate the agent in passive constructions (built by engineers)."
},
{
  question: "Gracias ___ ayudarme con este proyecto tan importante.",
  correct: "por",
  rationale: "Por is used to express gratitude."
},
{
  question: "Estudié toda la noche ___ pasar el examen final.",
  correct: "para",
  rationale: "Para is used to express purpose (passing the final exam)."
},
{
  question: "Este dinero es ___ pagar la matrícula universitaria.",
  correct: "para",
  rationale: "Para is used to express purpose (paying tuition)."
},
{
  question: "La casa fue vendida ___ una gran cantidad de dinero.",
  correct: "por",
  rationale: "Por is used to indicate the exchange (money for the house)."
},
{
  question: "Este tren va ___ Sevilla y sale en 15 minutos.",
  correct: "para",
  rationale: "Para is used to indicate destination (the train is going to Seville)."
},  {
    question: "La sopa ___ caliente porque acaba de salir de la olla.",
    correct: "está",
    options: ["es", "está", "será"],
    rationale: {
      es: "Incorrect. 'Es' is used for permanent characteristics, but the soup being hot is a temporary state.",
      está: "Correct! 'Está' is used for temporary states or conditions.",
      será: "Incorrect. 'Será' refers to a future state, which is not implied in this sentence."
    },
    category: "Ser vs. Estar",
    difficulty: "easy"
  },
  {
    question: "Mi amiga ___ doctora y trabaja en un hospital.",
    correct: "es",
    options: ["es", "está", "era"],
    rationale: {
      es: "Correct! 'Es' is used for professions, which are considered permanent characteristics.",
      está: "Incorrect. 'Está' is used for temporary states, not for professions.",
      era: "Incorrect. 'Era' indicates the past tense, but the context is present."
    },
    category: "Ser vs. Estar",
    difficulty: "easy"
  },
  {
    question: "La reunión ___ en la oficina principal a las 2 p.m.",
    correct: "es",
    options: ["es", "está", "fue"],
    rationale: {
      es: "Correct! 'Es' is used to indicate events, such as meetings.",
      está: "Incorrect. 'Está' is used for the location of objects or people, not events.",
      fue: "Incorrect. 'Fue' refers to the past tense, but the context is present."
    },
    category: "Ser vs. Estar",
    difficulty: "medium"
  },
  {
    question: "Mis hermanos ___ cansados después de correr 10 kilómetros.",
    correct: "están",
    options: ["son", "están", "serán"],
    rationale: {
      son: "Incorrect. 'Son' implies a permanent characteristic, but being tired is temporary.",
      están: "Correct! 'Están' is used for temporary states, such as being tired.",
      serán: "Incorrect. 'Serán' indicates the future tense, which is not relevant here."
    },
    category: "Ser vs. Estar",
    difficulty: "easy"
  },
  {
    question: "Este café ___ de Colombia.",
    correct: "es",
    options: ["es", "está", "fue"],
    rationale: {
      es: "Correct! 'Es' is used to indicate origin.",
      está: "Incorrect. 'Está' is used for temporary states, not for origin.",
      fue: "Incorrect. 'Fue' is past tense, but the context is present."
    },
    category: "Ser vs. Estar",
    difficulty: "medium"
  },
  {
    question: "Hoy ___ muy nublado y frío.",
    correct: "está",
    options: ["es", "está", "será"],
    rationale: {
      es: "Incorrect. 'Es' is used for permanent traits, not temporary weather conditions.",
      está: "Correct! 'Está' is used for temporary states, like the weather today.",
      será: "Incorrect. 'Será' indicates the future tense, not the present."
    },
    category: "Ser vs. Estar",
    difficulty: "easy"
  },
  {
    question: "Las llaves ___ en la mesa.",
    correct: "están",
    options: ["son", "están", "eran"],
    rationale: {
      son: "Incorrect. 'Son' is used for permanent traits, but this is about the location of keys.",
      están: "Correct! 'Están' is used for the location of objects.",
      eran: "Incorrect. 'Eran' is past tense, but the context is present."
    },
    category: "Ser vs. Estar",
    difficulty: "medium"
  },
  {
    question: "Este libro ___ mío.",
    correct: "es",
    options: ["es", "está", "fue"],
    rationale: {
      es: "Correct! 'Es' is used for possession.",
      está: "Incorrect. 'Está' is used for temporary states, not ownership.",
      fue: "Incorrect. 'Fue' refers to the past tense, but the context is present."
    },
    category: "Ser vs. Estar",
    difficulty: "easy"
  },
  {
    question: "Mi abuela ___ joven en espíritu, aunque tiene 80 años.",
    correct: "es",
    options: ["es", "está", "será"],
    rationale: {
      es: "Correct! 'Es' is used for inherent or defining characteristics.",
      está: "Incorrect. 'Está' is used for temporary states, not permanent traits.",
      será: "Incorrect. 'Será' is future tense, not relevant here."
    },
    category: "Ser vs. Estar",
    difficulty: "medium"
  },
  {
    question: "El concierto ___ a las 7 de la noche en el teatro principal.",
    correct: "es",
    options: ["es", "está", "fue"],
    rationale: {
      es: "Correct! 'Es' is used to indicate events, such as concerts.",
      está: "Incorrect. 'Está' is used for location, but this is about the event itself.",
      fue: "Incorrect. 'Fue' refers to the past tense, not present."
    },
    category: "Ser vs. Estar",
    difficulty: "medium"
  },

  // Conocer vs. Saber Questions
  {
    question: "¿___ dónde está la biblioteca?",
    correct: "sabes",
    options: ["conoces", "sabes", "sabías"],
    rationale: {
      conoces: "Incorrect. 'Conocer' is used for familiarity with places or people, not information.",
      sabes: "Correct! 'Saber' is used for knowing information.",
      sabías: "Incorrect. 'Sabías' refers to the past tense, but the context is present."
    },
    category: "Conocer vs. Saber",
    difficulty: "easy"
  },
  {
    question: "Yo no ___ a tu hermano, pero he oído hablar de él.",
    correct: "conozco",
    options: ["sé", "conozco", "conocía"],
    rationale: {
      sé: "Incorrect. 'Saber' is for information, not familiarity with people.",
      conozco: "Correct! 'Conocer' is used for being familiar with someone.",
      conocía: "Incorrect. 'Conocía' is past tense, but the context is present."
    },
    category: "Conocer vs. Saber",
    difficulty: "medium"
  },
  {
    question: "Nosotros ___ cocinar muy bien.",
    correct: "sabemos",
    options: ["sabemos", "conocemos", "supimos"],
    rationale: {
      sabemos: "Correct! 'Saber' is used for skills or abilities.",
      conocemos: "Incorrect. 'Conocer' is not used for skills.",
      supimos: "Incorrect. 'Supimos' is past tense, but the context is present."
    },
    category: "Conocer vs. Saber",
    difficulty: "easy"
  },
  {
    question: "¿Tú ___ a la familia de Pedro?",
    correct: "conoces",
    options: ["sabes", "conoces", "conociste"],
    rationale: {
      sabes: "Incorrect. 'Saber' is used for information, not familiarity with people.",
      conoces: "Correct! 'Conocer' is used for being familiar with someone.",
      conociste: "Incorrect. 'Conociste' is past tense, but the context is present."
    },
    category: "Conocer vs. Saber",
    difficulty: "easy"
  },
  {
    question: "Ellos ___ que necesitamos más tiempo para el proyecto.",
    correct: "saben",
    options: ["conocen", "saben", "sabían"],
    rationale: {
      conocen: "Incorrect. 'Conocer' is for familiarity, not facts or information.",
      saben: "Correct! 'Saber' is used for knowing information.",
      sabían: "Incorrect. 'Sabían' is past tense, but the context is present."
    },
    category: "Conocer vs. Saber",
    difficulty: "medium"
  },
];

const paragraphPool = [
  {
    text: "Fui al supermercado ___ comprar pan y leche. Caminamos ___ el parque ___ llegar al otro lado de la ciudad. Después, tomamos un taxi ___ llegar más rápido a casa porque estaba lloviendo.",
    answers: ["para", "por", "para", "para"],
    rationales: [
      "Para is used to express purpose (buying bread and milk).",
      "Por is used for movement through a space (the park).",
      "Para is used to express purpose (arriving at the other side of the city).",
      "Para is used to express purpose (arriving faster at home)."
    ]
  },
  {
    text: "Gracias ___ traerme este regalo tan especial. Caminamos juntos ___ la playa mientras hablábamos de nuestra infancia. Este día fue organizado ___ recordar los viejos tiempos, y realmente lo disfruté.",
    answers: ["por", "por", "para"],
    rationales: [
      "Por is used to express gratitude.",
      "Por is used for movement along a space (the beach).",
      "Para is used to express purpose (remembering old times)."
    ]
  },
  {
    text: "Estuve estudiando toda la noche ___ sacar una buena nota en el examen de matemáticas. Luego decidí caminar ___ el parque para relajarme un poco. Esta tarde es ___ mí; quiero descansar y no preocuparme por nada.",
    answers: ["para", "por", "para"],
    rationales: [
      "Para is used to express purpose (getting a good grade).",
      "Por is used for movement through a space (the park).",
      "Para is used to indicate that the time is for the speaker's benefit."
    ]
  },
  {
    text: "Este libro fue escrito ___ un autor muy famoso. Lo compré ___ $20 en una tienda del centro. Es ___ aprender más sobre historia, y creo que lo voy a disfrutar mucho.",
    answers: ["por", "por", "para"],
    rationales: [
      "Por is used to indicate the agent (the famous author).",
      "Por is used to indicate exchange (money for the book).",
      "Para is used to express purpose (learning more about history)."
    ]
  },
  {
    text: "Mis amigos y yo viajamos ___ Europa el verano pasado. Fuimos ___ tren la mayoría del tiempo, pero algunas ciudades las visitamos ___ avión. Este viaje fue organizado ___ celebrar nuestra graduación.",
    answers: ["por", "por", "por", "para"],
    rationales: [
      "Por is used for movement through a space (traveling through Europe).",
      "Por is used to indicate means of transportation (train).",
      "Por is used to indicate means of transportation (plane).",
      "Para is used to express purpose (celebrating graduation)."
    ]
  },
  {
    text: "Hicimos una reunión ___ discutir el presupuesto del próximo año. Después, salimos ___ el restaurante para comer y relajarnos. Caminamos ___ el centro de la ciudad antes de volver a la oficina.",
    answers: ["para", "para", "por"],
    rationales: [
      "Para is used to express purpose (discussing the budget).",
      "Para is used to indicate destination (the restaurant).",
      "Por is used for movement through a space (downtown)."
    ]
  },
  {
    text: "Este coche es ___ mi hermana; ella lo necesita para su trabajo. Lo compramos ___ un precio bastante alto, pero valió la pena. A menudo lo usa ___ viajar largas distancias por la ciudad.",
    answers: ["para", "por", "para"],
    rationales: [
      "Para is used to indicate the recipient (the sister).",
      "Por is used to indicate exchange (high price for the car).",
      "Para is used to express purpose (traveling long distances)."
    ]
  },
  {
    text: "El dinero fue enviado ___ correo para que llegara más rápido. Este documento es muy importante ___ el banco, así que lo enviamos inmediatamente. Gracias ___ ayudarte con esto.",
    answers: ["por", "para", "por"],
    rationales: [
      "Por is used to indicate the means (mail).",
      "Para is used to indicate the recipient (the bank).",
      "Por is used to express gratitude."
    ]
  },
  {
    text: "Me gusta caminar ___ las montañas durante los fines de semana. Este fin de semana, voy ___ un lugar especial donde pueda relajarme y disfrutar de la naturaleza. Este tiempo es ___ mí; lo necesito para descansar.",
    answers: ["por", "para", "para"],
    rationales: [
      "Por is used for movement through a space (mountains).",
      "Para is used to indicate the destination (a special place).",
      "Para is used to indicate the benefit (time for the speaker)."
    ]
  },
  {
    text: "Decidimos viajar ___ Francia para visitar a nuestros amigos. Fuimos ___ tren porque era más económico. Luego caminamos ___ el pueblo para explorar las tiendas locales.",
    answers: ["para", "por", "por"],
    rationales: [
      "Para is used to indicate the destination (France).",
      "Por is used to indicate means of transportation (train).",
      "Por is used for movement through a space (the town)."
    ]
  }
];

