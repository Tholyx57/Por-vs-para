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
  },
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
  category: "Conocer vs. Saber"
}
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
  {
    text: "Después de años de estudiar historia, finalmente ___ los detalles de cómo se formó el imperio romano. Sin embargo, todavía no ___ a muchos historiadores que se dedican a este campo, lo cual sería muy útil para mi investigación.",
    answers: ["sé", "conozco"],
    options: ["sé", "conozco"],
    rationales: [
      "Sé is used for knowing facts or detailed information (the formation of the Roman Empire).",
      "Conozco is used for being familiar with people (historians)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "Durante nuestra visita al museo, el guía nos preguntó si ___ quién pintó 'Las Meninas'. Aunque yo ___ la respuesta, muchos compañeros de clase nunca han ___ a un pintor tan importante como Velázquez.",
    answers: ["sabía", "sabía", "conocido"],
    options: ["sabía", "sabía", "conocido"],
    rationales: [
      "Sabía is used for knowing information (who painted 'Las Meninas').",
      "Sabía again refers to knowing the answer itself.",
      "Conocido is used for having met someone or encountered their work."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "He vivido en esta ciudad por años y ___ perfectamente cada calle y edificio del centro. Sin embargo, no ___ cómo funciona el transporte público porque nunca lo he usado.",
    answers: ["conozco", "sé"],
    options: ["conozco", "sé"],
    rationales: [
      "Conozco is used for being familiar with places (streets and buildings).",
      "Sé is used for knowing how something works (public transport)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "Mi amiga Carla ___ varios idiomas, pero no ___ a nadie que hable japonés en su círculo de amigos. Ella quiere practicar, pero necesita encontrar a alguien que la pueda ayudar.",
    answers: ["sabe", "conoce"],
    options: ["sabe", "conoce"],
    rationales: [
      "Sabe is used for knowing languages (knowledge or skills).",
      "Conoce is used for familiarity with people (someone who speaks Japanese)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "Mis abuelos siempre me cuentan historias sobre lugares maravillosos que ___ cuando eran jóvenes. Pero lo interesante es que todavía ___ detalles específicos de esos viajes, como fechas y nombres.",
    answers: ["conocieron", "saben"],
    options: ["conocieron", "saben"],
    rationales: [
      "Conocieron is used for having visited or discovered places for the first time.",
      "Saben is used for knowing specific details (dates and names)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "Aunque nunca he visitado París, ___ mucho sobre su cultura, historia y monumentos importantes. Espero algún día ___ la ciudad en persona y ver la Torre Eiffel.",
    answers: ["sé", "conocer"],
    options: ["sé", "conocer"],
    rationales: [
      "Sé is used for knowing facts or information (Parisian culture and monuments).",
      "Conocer is used for experiencing or visiting a place in person (Paris)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "Marcos dice que ___ a mucha gente famosa debido a su trabajo en la industria del cine. Aun así, no ___ nada sobre cómo se hacen las películas, lo cual me resulta sorprendente.",
    answers: ["conoce", "sabe"],
    options: ["conoce", "sabe"],
    rationales: [
      "Conoce is used for being familiar with people (famous people).",
      "Sabe is used for knowing facts or processes (how movies are made)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "Durante mi viaje a México, ___ muchos pueblos mágicos llenos de historia. Sin embargo, no ___ exactamente cómo se originaron estas tradiciones.",
    answers: ["conocí", "sé"],
    options: ["conocí", "sé"],
    rationales: [
      "Conocí is used for visiting places for the first time (magical towns).",
      "Sé is used for knowing specific information (origin of traditions)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "Si quieres mejorar tu escritura, te recomiendo que ___ a algunos autores clásicos. Además, debes ___ las reglas básicas de la gramática española.",
    answers: ["conozcas", "saber"],
    options: ["conozcas", "saber"],
    rationales: [
      "Conozcas is used for becoming familiar with people (classic authors).",
      "Saber is used for knowing rules or skills (grammar rules)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "Al llegar al concierto, ___ a varios músicos del grupo porque los había visto en entrevistas. Lo curioso es que mi hermana no ___ quiénes eran hasta que empezaron a tocar.",
    answers: ["conocí", "sabía"],
    options: ["conocí", "sabía"],
    rationales: [
      "Conocí is used for meeting or recognizing people for the first time.",
      "Sabía is used for knowing facts or information (who the musicians were)."
    ],
    category: "Conocer vs. Saber"
  },
    text: "Durante la conferencia, el profesor habló sobre un autor del siglo XIX que yo no ___. Sin embargo, después de investigar más, ahora ___ varias obras escritas por él.",
    answers: ["conocía", "sé"],
    options: ["conocía", "sé"],
    rationales: [
      "Conocía is used for lacking familiarity with someone at the time.",
      "Sé is used for knowing information (works written by the author)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "Mis padres ___ muy bien cómo reparar cualquier electrodoméstico, pero nunca ___ a un técnico profesional que les enseñara esas habilidades.",
    answers: ["saben", "conocieron"],
    options: ["saben", "conocieron"],
    rationales: [
      "Saben is used for knowing how to do something (repair appliances).",
      "Conocieron is used for meeting a person for the first time (a professional technician)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "Antes de empezar mi trabajo en el banco, no ___ nada sobre finanzas personales. Ahora ___ las herramientas necesarias para manejar mi dinero.",
    answers: ["sabía", "conozco"],
    options: ["sabía", "conozco"],
    rationales: [
      "Sabía is used for knowing nothing about a subject before.",
      "Conozco is used for being familiar with tools or concepts now."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "El turista nos preguntó si ___ algún restaurante típico en esta ciudad. Afortunadamente, nosotros ___ un lugar muy acogedor donde sirven comida local.",
    answers: ["conocíamos", "sabemos"],
    options: ["conocíamos", "sabemos"],
    rationales: [
      "Conocíamos is used for being familiar with a place (a restaurant).",
      "Sabemos is used for knowing where something is located or specific details."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "Mi hermano no ___ bien a los vecinos nuevos porque acaba de mudarse. Sin embargo, yo ___ que vienen de una ciudad cercana y son muy amigables.",
    answers: ["conoce", "sé"],
    options: ["conoce", "sé"],
    rationales: [
      "Conoce is used for being familiar with people (the new neighbors).",
      "Sé is used for knowing facts or information (where they come from)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "¿Tú ___ cómo se resuelven ecuaciones complejas? Mi primo estudia matemáticas y ___ a muchos profesores que le han enseñado estas técnicas.",
    answers: ["sabes", "conoce"],
    options: ["sabes", "conoce"],
    rationales: [
      "Sabes is used for knowing how to do something (solving equations).",
      "Conoce is used for being familiar with people (the professors)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "Durante la excursión, los estudiantes ___ muchos sitios históricos. Al regresar, todos dijeron que ahora ___ mucho más sobre la historia local.",
    answers: ["conocieron", "saben"],
    options: ["conocieron", "saben"],
    rationales: [
      "Conocieron is used for visiting places for the first time.",
      "Saben is used for knowing facts or details (local history)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "La maestra nos preguntó si ___ a alguien que hablara más de cinco idiomas. Sorprendentemente, un compañero de clase ___ a una persona que cumple con ese requisito.",
    answers: ["conocíamos", "conoce"],
    options: ["conocíamos", "conoce"],
    rationales: [
      "Conocíamos is used for knowing or not knowing someone.",
      "Conoce is used for being familiar with someone (a multilingual person)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "Aunque no ___ tocar la guitarra, mi amigo me recomendó un profesor que él ___. Espero aprender a tocar pronto.",
    answers: ["sé", "conoce"],
    options: ["sé", "conoce"],
    rationales: [
      "Sé is used for knowing how to do something (playing the guitar).",
      "Conoce is used for being familiar with a person (the professor)."
    ],
    category: "Conocer vs. Saber"
  },
  {
    text: "Antes del viaje, no ___ nada sobre la cultura de Japón. Ahora que lo visité, puedo decir que ___ algunos aspectos de sus costumbres y tradiciones.",
    answers: ["sabía", "conozco"],
    options: ["sabía", "conozco"],
    rationales: [
      "Sabía is used for lacking knowledge before (about Japan's culture).",
      "Conozco is used for having familiarity now (with traditions and customs)."
    ],
    category: "Conocer vs. Saber"
  }{
    text: "El edificio de la universidad ___ muy antiguo y tiene más de cien años, pero ahora ___ en reparación porque sufrió daños en la última tormenta.",
    answers: ["es", "está"],
    options: ["es", "está"],
    rationales: [
      "Es is used to describe a permanent characteristic (the building being old).",
      "Está is used for a temporary state or condition (being under repair)."
    ],
    category: "Ser vs. Estar"
  },
  {
    text: "Mis padres ___ felices porque hoy celebramos su aniversario de bodas. La celebración ___ en el restaurante donde se conocieron hace treinta años.",
    answers: ["están", "es"],
    options: ["están", "es"],
    rationales: [
      "Están is used to express a temporary emotional state (being happy).",
      "Es is used for the location of an event (the celebration)."
    ],
    category: "Ser vs. Estar"
  },
  {
    text: "El examen de matemáticas ___ bastante difícil, pero todos mis compañeros ___ listos para enfrentar el desafío después de estudiar mucho.",
    answers: ["es", "están"],
    options: ["es", "están"],
    rationales: [
      "Es is used for describing the nature of something (the exam being difficult).",
      "Están is used for a temporary state (students being ready)."
    ],
    category: "Ser vs. Estar"
  },
  {
    text: "Mi mejor amiga ___ muy simpática y siempre ayuda a los demás. Sin embargo, hoy ___ un poco cansada porque trabajó hasta muy tarde anoche.",
    answers: ["es", "está"],
    options: ["es", "está"],
    rationales: [
      "Es is used for describing an inherent personality trait (being kind).",
      "Está is used for a temporary physical condition (being tired)."
    ],
    category: "Ser vs. Estar"
  },
  {
    text: "Durante las vacaciones, el hotel donde nos hospedamos ___ muy lujoso y todas las habitaciones ___ limpias y ordenadas cada mañana.",
    answers: ["es", "están"],
    options: ["es", "están"],
    rationales: [
      "Es is used to describe a defining characteristic (the hotel being luxurious).",
      "Están is used to describe temporary states (the rooms being clean and organized)."
    ],
    category: "Ser vs. Estar"
  },
  {
    text: "Los resultados del proyecto ___ impresionantes, pero el equipo de investigación todavía ___ preocupado por los próximos pasos.",
    answers: ["son", "está"],
    options: ["son", "está"],
    rationales: [
      "Son is used for describing a general or permanent quality (the results being impressive).",
      "Está is used for a temporary emotional state (the team being worried)."
    ],
    category: "Ser vs. Estar"
  },
  {
    text: "La conferencia ___ en el auditorio principal del campus, y todos los estudiantes ___ emocionados por conocer a la famosa escritora invitada.",
    answers: ["es", "están"],
    options: ["es", "están"],
    rationales: [
      "Es is used to indicate the location of an event (the conference).",
      "Están is used for temporary emotional states (students being excited)."
    ],
    category: "Ser vs. Estar"
  },
  {
    text: "Mi abuelo ___ un excelente carpintero y siempre hace muebles hermosos. Ahora mismo ___ trabajando en un nuevo proyecto para la casa.",
    answers: ["es", "está"],
    options: ["es", "está"],
    rationales: [
      "Es is used to describe a profession or characteristic (being a carpenter).",
      "Está is used to describe an ongoing action (working on a project)."
    ],
    category: "Ser vs. Estar"
  },
  {
    text: "Las puertas de la iglesia ___ de madera maciza y tienen detalles muy antiguos. Hoy ___ abiertas porque hay una celebración especial.",
    answers: ["son", "están"],
    options: ["son", "están"],
    rationales: [
      "Son is used for describing a permanent characteristic (the doors being made of solid wood).",
      "Están is used for a temporary state (the doors being open)."
    ],
    category: "Ser vs. Estar"
  },
  {
    text: "Mis primos ___ de Argentina, pero ahora ___ viviendo en España porque consiguieron un trabajo temporal en Madrid.",
    answers: ["son", "están"],
    options: ["son", "están"],
    rationales: [
      "Son is used for expressing origin (being from Argentina).",
      "Están is used for a temporary action or state (living in Spain temporarily)."
    ],
    category: "Ser vs. Estar"
  }
  ];
