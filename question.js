const questionPool = [
  { question: "Caminamos ___ el parque para disfrutar el buen clima.", correct: "por", rationale: "Por is used for movement through or along a space, such as a park. It describes the route taken." },
  { question: "Este regalo es ___ mi mejor amigo.", correct: "para", rationale: "Para is used to indicate the recipient of something, in this case, the gift is for the best friend." },
  { question: "Gracias ___ tu ayuda con el proyecto.", correct: "por", rationale: "Por is used to express gratitude or the reason for an action. The speaker is thanking someone for their help." },
  { question: "Estuve en casa ___ el mal tiempo.", correct: "por", rationale: "Por is used to indicate the cause or reason. The speaker stayed home because of the bad weather." },
  { question: "Salimos ___ la playa a las 8 de la mañana.", correct: "para", rationale: "Para is used to indicate the destination. The speaker is saying they are leaving for the beach." },
  { question: "Trabajé toda la noche ___ terminar el informe a tiempo.", correct: "para", rationale: "Para is used to express the purpose or goal of an action. The speaker worked to finish the report." },
  { question: "¿Puedes trabajar ___ mí mañana? Estoy muy ocupado.", correct: "por", rationale: "Por is used to indicate substitution. The speaker is asking someone to work on their behalf." },
  { question: "Lo compré ___ $50 en una tienda cercana.", correct: "por", rationale: "Por is used to indicate exchange. The speaker traded money ($50) for an item." },
  { question: "Ella viajó ___ España durante las vacaciones de verano.", correct: "por", rationale: "Por is used to describe movement through a place. The speaker says the person traveled through Spain." },
  { question: "Este tren va ___ Madrid y hace pocas paradas.", correct: "para", rationale: "Para is used to indicate the destination. The train is going to Madrid." },
  { question: "Viajamos ___ avión porque era más rápido que el tren.", correct: "por", rationale: "Por is used to indicate the means of transportation. The speaker traveled by plane." },
  { question: "Este medicamento es ___ aliviar el dolor rápidamente.", correct: "para", rationale: "Para is used to express purpose or goal. The medicine is to relieve pain." },
  { question: "Pasé ___ tu casa, pero no estabas.", correct: "por", rationale: "Por is used to describe movement along or past a place. The speaker passed by someone's house." },
  { question: "El proyecto es muy importante ___ mi carrera profesional.", correct: "para", rationale: "Para is used to express purpose or benefit. The project is important for the speaker's career." },
  { question: "Estudié toda la noche ___ sacar una buena nota en el examen.", correct: "para", rationale: "Para is used to express purpose or goal. The speaker studied to get a good grade." },
  { question: "Nos quedamos en casa ___ la tormenta.", correct: "por", rationale: "Por is used to indicate the cause or reason. The speaker stayed home because of the storm." },
  { question: "Pagué demasiado dinero ___ estas entradas al concierto.", correct: "por", rationale: "Por is used to indicate exchange. The speaker traded money for concert tickets." },
  { question: "Él es muy inteligente ___ su edad.", correct: "para", rationale: "Para is used to make a comparison or show a standard. The speaker compares his intelligence to his age." },
  { question: "El autobús sale ___ el aeropuerto en cinco minutos.", correct: "para", rationale: "Para is used to indicate the destination. The bus is going to the airport." },
  { question: "Estoy aquí ___ ayudarte con cualquier cosa que necesites.", correct: "para", rationale: "Para is used to express purpose. The speaker is here to help someone." },
  { question: "Lo hice ___ amor, no por dinero.", correct: "por", rationale: "Por is used to express the reason or cause of the action. The speaker did it out of love." },
  { question: "Caminamos ___ el bosque durante nuestra excursión.", correct: "por", rationale: "Por is used for movement through a space. The speaker walked through the forest." },
  { question: "Este documento es ___ entregar mañana al profesor.", correct: "para", rationale: "Para is used to express a deadline. The document must be delivered by tomorrow." },
  { question: "Ella fue premiada ___ su dedicación y esfuerzo en el trabajo.", correct: "por", rationale: "Por is used to indicate the reason. The speaker says she was rewarded because of her dedication." },
  { question: "Caminamos ___ debajo del puente para evitar el sol directo.", correct: "por", rationale: "Por is used to indicate movement through or along. The speaker walked under the bridge." },
  { question: "Necesitamos terminar este trabajo ___ la próxima semana.", correct: "para", rationale: "Para is used to express a deadline. The work must be finished by next week." },
  { question: "Fui al mercado ___ comprar frutas frescas.", correct: "para", rationale: "Para is used to express purpose. The speaker went to the market to buy fresh fruit." },
  { question: "Gracias ___ venir a mi fiesta de cumpleaños.", correct: "por", rationale: "Por is used to express gratitude or the reason for the action. The speaker is thanking someone for coming to their party." },
  { question: "Estudiamos mucho ___ pasar el examen final de química.", correct: "para", rationale: "Para is used to express purpose. The speaker studied to pass the exam." },
  { question: "Este libro es ___ aprender más sobre historia mundial.", correct: "para", rationale: "Para is used to express purpose or goal. The book is to learn more about world history." },
  { question: "Fuimos al parque ___ tomar un poco de aire fresco.", correct: "para", rationale: "Para is used to express purpose. The speaker went to the park to get fresh air." },
  { question: "La carta es ___ mi abuela; la escribí ayer.", correct: "para", rationale: "Para is used to indicate the recipient. The letter is for the grandmother." },
  { question: "Este boleto es ___ la entrada al museo.", correct: "para", rationale: "Para is used to express purpose. The ticket is for entrance to the museum." },
  { question: "Él corrió ___ el parque durante 30 minutos.", correct: "por", rationale: "Por is used to describe movement through a space and indicates the duration (30 minutes)." },
  { question: "Vivimos en esa ciudad ___ varios años.", correct: "por", rationale: "Por is used to express the duration of time. The speaker lived in the city for several years." },
  { question: "Te llamaré ___ teléfono más tarde.", correct: "por", rationale: "Por is used to indicate the means of communication, in this case, by phone." },
  { question: "Viajaron ___ Italia para celebrar su aniversario de bodas.", correct: "por", rationale: "Por is used to describe the reason or cause of an action (celebration)." },
  { question: "El regalo fue comprado ___ mi hermana.", correct: "por", rationale: "Por is used to indicate the agent of an action in passive voice." },
  { question: "Este proyecto es ___ mejorar nuestra comunidad.", correct: "para", rationale: "Para is used to express purpose. The project is for improving the community." },
  { question: "El tren es ___ Sevilla y sale en 10 minutos.", correct: "para", rationale: "Para is used to indicate the destination of the train." },
  { question: "La tarea es ___ el lunes; no olvides completarla.", correct: "para", rationale: "Para is used to express a deadline. The homework is due by Monday." }
  {  question: "Caminamos ___ el parque para disfrutar el buen clima.",
    correct: "por",
    rationale: "Por is used for movement through or along a space, such as a park. It describes the route taken."
  },
  {
    question: "Este regalo es ___ mi mejor amigo.",
    correct: "para",
    rationale: "Para is used to indicate the recipient of something, in this case, the gift is for the best friend."
  },
  {
    question: "Gracias ___ tu ayuda con el proyecto.",
    correct: "por",
    rationale: "Por is used to express gratitude or the reason for an action. The speaker is thanking someone for their help."
  },
  {
    question: "Estuve en casa ___ el mal tiempo.",
    correct: "por",
    rationale: "Por is used to indicate the cause or reason. The speaker stayed home because of the bad weather."
  },
  {
    question: "Salimos ___ la playa a las 8 de la mañana.",
    correct: "para",
    rationale: "Para is used to indicate the destination. The speaker is saying they are leaving for the beach."
  },
  {
    question: "Trabajé toda la noche ___ terminar el informe a tiempo.",
    correct: "para",
    rationale: "Para is used to express the purpose or goal of an action. The speaker worked to finish the report."
  },
  {
    question: "¿Puedes trabajar ___ mí mañana? Estoy muy ocupado.",
    correct: "por",
    rationale: "Por is used to indicate substitution. The speaker is asking someone to work on their behalf."
  },
  {
    question: "Lo compré ___ $50 en una tienda cercana.",
    correct: "por",
    rationale: "Por is used to indicate exchange. The speaker traded money ($50) for an item."
  },
  {
    question: "Ella viajó ___ España durante las vacaciones de verano.",
    correct: "por",
    rationale: "Por is used to describe movement through a place. The speaker says the person traveled through Spain."
  },
  {
    question: "Este tren va ___ Madrid y hace pocas paradas.",
    correct: "para",
    rationale: "Para is used to indicate the destination. The train is going to Madrid."
  },
  {
    question: "Viajamos ___ avión porque era más rápido que el tren.",
    correct: "por",
    rationale: "Por is used to indicate the means of transportation. The speaker traveled by plane."
  },
  {
    question: "Este medicamento es ___ aliviar el dolor rápidamente.",
    correct: "para",
    rationale: "Para is used to express purpose or goal. The medicine is to relieve pain."
  },
  {
    question: "Pasé ___ tu casa, pero no estabas.",
    correct: "por",
    rationale: "Por is used to describe movement along or past a place. The speaker passed by someone's house."
  },
  {
    question: "El proyecto es muy importante ___ mi carrera profesional.",
    correct: "para",
    rationale: "Para is used to express purpose or benefit. The project is important for the speaker's career."
  },
  {
    question: "Estudié toda la noche ___ sacar una buena nota en el examen.",
    correct: "para",
    rationale: "Para is used to express purpose or goal. The speaker studied to get a good grade."
  },
  {
    question: "Nos quedamos en casa ___ la tormenta.",
    correct: "por",
    rationale: "Por is used to indicate the cause or reason. The speaker stayed home because of the storm."
  },
  {
    question: "Pagué demasiado dinero ___ estas entradas al concierto.",
    correct: "por",
    rationale: "Por is used to indicate exchange. The speaker traded money for concert tickets."
  },
  {
    question: "Él es muy inteligente ___ su edad.",
    correct: "para",
    rationale: "Para is used to make a comparison or show a standard. The speaker compares his intelligence to his age."
  },
  {
    question: "El autobús sale ___ el aeropuerto en cinco minutos.",
    correct: "para",
    rationale: "Para is used to indicate the destination. The bus is going to the airport."
  },
  {
    question: "Estoy aquí ___ ayudarte con cualquier cosa que necesites.",
    correct: "para",
    rationale: "Para is used to express purpose. The speaker is here to help someone."
  },
  {
    question: "Lo hice ___ amor, no por dinero.",
    correct: "por",
    rationale: "Por is used to express the reason or cause of the action. The speaker did it out of love."
  },
  {
    question: "Caminamos ___ el bosque durante nuestra excursión.",
    correct: "por",
    rationale: "Por is used for movement through a space. The speaker walked through the forest."
  },
  {
    question: "Este documento es ___ entregar mañana al profesor.",
    correct: "para",
    rationale: "Para is used to express a deadline. The document must be delivered by tomorrow."
  },
  {
    question: "Ella fue premiada ___ su dedicación y esfuerzo en el trabajo.",
    correct: "por",
    rationale: "Por is used to indicate the reason. The speaker says she was rewarded because of her dedication."
  },
  {
    question: "Caminamos ___ debajo del puente para evitar el sol directo.",
    correct: "por",
    rationale: "Por is used to indicate movement through or along. The speaker walked under the bridge."
  },
  {
    question: "Necesitamos terminar este trabajo ___ la próxima semana.",
    correct: "para",
    rationale: "Para is used to express a deadline. The work must be finished by next week."
  },
  {
    question: "Fui al mercado ___ comprar frutas frescas.",
    correct: "para",
    rationale: "Para is used to express purpose. The speaker went to the market to buy fresh fruit."
  },
  {
    question: "Gracias ___ venir a mi fiesta de cumpleaños.",
    correct: "por",
    rationale: "Por is used to express gratitude or the reason for the action. The speaker is thanking someone for coming to their party."
  },
  {
    question: "Estudiamos mucho ___ pasar el examen final de química.",
    correct: "para",
    rationale: "Para is used to express purpose. The speaker studied to pass the exam."
  },
  {
    question: "Este libro es ___ aprender más sobre historia mundial.",
    correct: "para",
    rationale: "Para is used to express purpose or goal. The book is to learn more about world history."
  },
  {
    question: "Fuimos al parque ___ tomar un poco de aire fresco.",
    correct: "para",
    rationale: "Para is used to express purpose. The speaker went to the park to get fresh air."
  },
  {
    question: "La carta es ___ mi abuela; la escribí ayer.",
    correct: "para",
    rationale: "Para is used to indicate the recipient. The letter is for the grandmother."
  },
  {
    question: "Este boleto es ___ la entrada al museo.",
    correct: "para",
    rationale: "Para is used to express purpose. The ticket is for entrance to the museum."
  },
  {
    question: "Él corrió ___ el parque durante 30 minutos.",
    correct: "por",
    rationale: "Por is used to describe movement through a space and indicates the duration (30 minutes)."
  },
  {
    question: "Vivimos en esa ciudad ___ varios años.",
    correct: "por",
    rationale: "Por is used to express the duration of time. The speaker lived in the city for several years."
  },
  {
    question: "Te llamaré ___ teléfono más tarde.",
    correct: "por",
    rationale: "Por is used to indicate the means of communication, in this case, by phone."
  },
  {
    question: "Viajaron ___ Italia para celebrar su aniversario de bodas.",
    correct: "por",
    rationale: "Por is used to describe the reason or cause of an action (celebration)."
  },
  {
    question: "El regalo fue comprado ___ mi hermana.",
    correct: "por",
    rationale: "Por is used to indicate the agent of an action in passive voice."
  },
  {
    question: "Este proyecto es ___ mejorar nuestra comunidad.",
    correct: "para",
    rationale: "Para is used to express purpose. The project is for improving the community."
  },
  {
    question: "El tren es ___ Sevilla y sale en 10 minutos.",
    correct: "para",
    rationale: "Para is used to indicate the destination of the train."
  },
  {
    question: "La tarea es ___ el lunes; no olvides completarla.",
    correct: "para",
    rationale: "Para is used to express a deadline. The homework is due by Monday."
  },
  {
    question: "Hicimos esta reunión ___ discutir los próximos pasos del proyecto.",
    correct: "para",
    rationale: "Para is used to express purpose. The meeting is for discussing the project's next steps."
  },
  {
    question: "Ella me llamó ___ teléfono para contarme las novedades.",
    correct: "por",
    rationale: "Por is used to indicate the means of communication, in this case, by phone."
  },
  {
    question: "Muchas gracias ___ ayudarme con el proyecto de matemáticas.",
    correct: "por",
    rationale: "Por is used to express gratitude or the reason for the action. The speaker is thanking someone for helping with their math project."
  },
  {
    question: "Este coche es ___ mi hermano; él lo compró ayer.",
    correct: "para",
    rationale: "Para is used to indicate the recipient. The car is for the speaker's brother."
  },
  {
    question: "El puente fue construido ___ ingenieros de todo el mundo.",
    correct: "por",
    rationale: "Por is used to indicate the agent of an action in passive constructions."
  },
  {
    question: "Salimos ___ el cine después de cenar en casa.",
    correct: "para",
    rationale: "Para is used to indicate a destination. The speakers are leaving for the movie theater."
  },
  {
    question: "Este dinero es ___ pagar la matrícula universitaria.",
    correct: "para",
    rationale: "Para is used to express purpose. The money is intended to pay the university tuition."
  },
  {
    question: "Estoy buscando un lugar ___ descansar y relajarme.",
    correct: "para",
    rationale: "Para is used to express purpose. The speaker is looking for a place to rest."
  },
  {
    question: "Perdí el tren ___ llegar tarde a la estación.",
    correct: "por",
    rationale: "Por is used to indicate the reason. The train was missed because of being late."
  },
  {
    question: "Lo hago ___ mis hijos; ellos son mi inspiración.",
    correct: "por",
    rationale: "Por is used to indicate the reason or cause of the action. The speaker does it because of their children."
  },
  {
    question: "El trabajo debe estar terminado ___ el viernes.",
    correct: "para",
    rationale: "Para is used to express a deadline. The work must be completed by Friday."
  },
  {
    question: "Compré flores ___ decorar la mesa para la cena.",
    correct: "para",
    rationale: "Para is used to express purpose. The flowers are for decorating the table."
  },
  {
    question: "Hemos vivido aquí ___ más de diez años.",
    correct: "por",
    rationale: "Por is used to express duration of time. The speaker has lived there for more than ten years."
  },
  {
    question: "Este boleto es ___ el concierto de esta noche.",
    correct: "para",
    rationale: "Para is used to express purpose. The ticket is for the concert tonight."
  },
  {
    question: "Fui al supermercado ___ leche y pan.",
    correct: "por",
    rationale: "Por is used to indicate the reason for an action. The speaker went to buy milk and bread."
  },
  {
    question: "Muchas gracias ___ venir a mi fiesta.",
    correct: "por",
    rationale: "Por is used to express gratitude. The speaker is thanking someone for coming to their party."
  },
  {
    question: "Estudié mucho ___ sacar una buena nota.",
    correct: "para",
    rationale: "Para is used to express purpose. The speaker studied to get a good grade."
  },
  {
    question: "La reunión es ___ discutir el presupuesto del próximo año.",
    correct: "para",
    rationale: "Para is used to express purpose. The meeting is to discuss the budget."
  },
  {
    question: "Te cambio mi manzana ___ tu naranja.",
    correct: "por",
    rationale: "Por is used to indicate an exchange. The speaker is offering a trade."
  },
  {
    question: "Esta carta es ___ mi hermana, no para ti.",
    correct: "para",
    rationale: "Para is used to indicate the recipient. The letter is for the sister."
  },
  {
    question: "Caminamos ___ las montañas durante nuestra excursión.",
    correct: "por",
    rationale: "Por is used for movement through a space. The speaker walked through the mountains."
  },
  {
    question: "Estaré aquí ___ dos semanas más.",
    correct: "por",
    rationale: "Por is used to indicate duration of time. The speaker will stay for two more weeks."
  },
  {
    question: "Estudio ___ ser médico algún día.",
    correct: "para",
    rationale: "Para is used to express purpose. The speaker is studying to become a doctor."
  },
  {
    question: "Esta comida es ___ mi perro.",
    correct: "para",
    rationale: "Para is used to indicate the recipient. The food is for the dog."
  },
  {
    question: "El regalo fue enviado ___ correo postal.",
    correct: "por",
    rationale: "Por is used to indicate the means of communication or transportation, in this case, by mail."
  },
  {
    question: "Viajamos ___ México durante las vacaciones de verano.",
    correct: "por",
    rationale: "Por is used to indicate movement through a place. The speaker traveled through Mexico."
  },
  {
    question: "El informe es ___ el jefe; él lo necesita mañana.",
    correct: "para",
    rationale: "Para is used to indicate the recipient. The report is for the boss."
  },
  {
    question: "Se casaron ___ amor, no por conveniencia.",
    correct: "por",
    rationale: "Por is used to indicate the reason or cause of the action. They married out of love."
  },
  {
    question: "Voy al gimnasio ___ mantenerme en forma.",
    correct: "para",
    rationale: "Para is used to express purpose. The speaker goes to the gym to stay fit."
  },
  {
    question: "Este tren pasa ___ muchas ciudades antes de llegar a su destino.",
    correct: "por",
    rationale: "Por is used to describe movement through or along. The train passes through many cities."
  },
  {
    question: "Este curso es ___ aprender a programar.",
    correct: "para",
    rationale: "Para is used to express purpose. The course is for learning programming."
  },
  {
    question: "Te llamaré ___ la tarde para hablar sobre el proyecto.",
    correct: "por",
    rationale: "Por is used to indicate a general time frame (in the afternoon)."
  },
  {
    question: "Este dinero es ___ comprar un regalo para mamá.",
    correct: "para",
    rationale: "Para is used to express purpose. The money is for buying a gift."
  },
  {
    question: "El avión volará ___ encima de las nubes.",
    correct: "por",
    rationale: "Por is used to describe movement through or over a space, in this case, over the clouds."
  },
  {
    question: "Voy a ahorrar dinero ___ el futuro.",
    correct: "para",
    rationale: "Para is used to express purpose or intent. The money is for the future."
  },
  {
    question: "Ella trabaja ___ una gran empresa de tecnología.",
    correct: "para",
    rationale: "Para is used to indicate the employer or organization. She works for a tech company."
  },
  {
    question: "Salimos temprano ___ evitar el tráfico pesado.",
    correct: "para",
    rationale: "Para is used to express purpose. They left early to avoid traffic."
  },
  {
    question: "Este tren va ___ Sevilla.",
    correct: "para",
    rationale: "Para is used to indicate the destination. The train is going to Seville."
  },
  {
    question: "Fui a la tienda ___ pan y leche.",
    correct: "por",
    rationale: "Por is used to indicate the reason for an action. The speaker went for bread and milk."
  },
  {
    question: "Necesito el informe ___ el lunes a más tardar.",
    correct: "para",
    rationale: "Para is used to express a deadline. The report is needed by Monday."
  },
  {
    question: "Me quedaré en casa ___ el mal tiempo.",
    correct: "por",
    rationale: "Por is used to indicate the reason or cause. The speaker is staying home because of the bad weather."
  },
  {
    question: "El dinero fue transferido ___ internet.",
    correct: "por",
    rationale: "Por is used to indicate the means, in this case, the internet."
  },
  {
    question: "Este regalo es ___ ti. Espero que te guste.",
    correct: "para",
    rationale: "Para is used to indicate the recipient. The gift is for you."
  },
  {
    question: "Caminamos ___ la ciudad buscando un buen restaurante.",
    correct: "por",
    rationale: "Por is used to describe movement through a space. The speaker walked through the city."
  },
  {
    question: "Este coche es ___ mi madre.",
    correct: "para",
    rationale: "Para is used to indicate the recipient. The car is for the mother."
  },
  {
    question: "Muchas gracias ___ tu ayuda con el proyecto.",
    correct: "por",
    rationale: "Por is used to express gratitude. The speaker is thanking someone for their help."
  },
  {
    question: "La tarea es ___ mañana. No olvides terminarla.",
    correct: "para",
    rationale: "Para is used to express a deadline. The homework is due tomorrow."
  },
  {
    question: "Ese puente fue construido ___ ingenieros de todo el mundo.",
    correct: "por",
    rationale: "Por is used to indicate the agent of an action in passive voice."
  },
  {
    question: "Este boleto es ___ la entrada al concierto.",
    correct: "para",
    rationale: "Para is used to express purpose. The ticket is for the concert entrance."
  },
  {
    question: "La casa fue comprada ___ mis abuelos hace años.",
    correct: "por",
    rationale: "Por is used to indicate the agent of the action. The house was bought by the grandparents."
  },
  {
    question: "Viajaremos ___ avión porque es más rápido.",
    correct: "por",
    rationale: "Por is used to indicate the means of transportation, in this case, by plane."
  },
  {
    question: "El tren sale ___ Madrid en media hora.",
    correct: "para",
    rationale: "Para is used to indicate the destination. The train is going to Madrid."
  }
];

