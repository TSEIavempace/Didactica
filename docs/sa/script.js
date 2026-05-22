const data = {
  overview: [
    {
      title: "Justificación",
      content: `
        Esta situación de aprendizaje parte de un enfoque inclusivo real: en el aula hay un niño o niña con discapacidad auditiva.
        Trabajar la Lengua de Signos Española favorece su inclusión plena y enriquece la comunicación del grupo completo,
        desarrollando empatía, respeto a la diversidad y nuevas formas de expresión.
      `
    },
    {
      title: "Contextualización del aula",
      content: `
        Grupo destinatario: 16 niños y niñas de 2 a 3 años. Hay un alumno o alumna con discapacidad auditiva bilateral con audífono,
        dos niños con desarrollo del lenguaje oral más lento y resto con desarrollo normotípico. Contexto urbano, familias diversas y
        colaboración familiar activa.
      `
    },
    {
      title: "Competencias clave",
      list: [
        "Competencia en comunicación lingüística.",
        "Competencia personal, social y de aprender a aprender.",
        "Competencia ciudadana."
      ]
    },
    {
      title: "Áreas implicadas",
      list: [
        "Área 1. Crecimiento en armonía.",
        "Área 2. Descubrimiento y exploración del entorno.",
        "Área 3. Comunicación y representación de la realidad."
      ]
    }
  ],

  normativa: [
    {
      title: "Marco legislativo de referencia",
      list: [
        "Real Decreto 95/2022, de 1 de febrero.",
        "Orden ECD/853/2022, de 13 de junio, de Aragón.",
        "Ley 27/2007, de 23 de octubre, de reconocimiento de las lenguas de signos españolas.",
        "LOMLOE como marco inclusivo general."
      ]
    },
    {
      title: "Premisa normativa de precisión",
      content: `
        La LSE cuenta con reconocimiento legal en España. En esta web se usa como marco de inclusión, comunicación aumentativa,
        acceso al currículo y convivencia positiva dentro del aula.
      `
    }
  ],

  objetivos: [
    {
      title: "Objetivos generales de etapa",
      list: [
        "Desarrollar habilidades comunicativas en diferentes lenguajes y formas de expresión.",
        "Relacionarse con los demás y adquirir progresivamente pautas elementales de convivencia."
      ]
    },
    {
      title: "Objetivos específicos y didácticos",
      list: [
        "Conocer y utilizar la LSE como sistema de comunicación alternativo o aumentativo.",
        "Desarrollar empatía y respeto hacia personas con diversidad funcional.",
        "Aprender y utilizar al menos 10 signos básicos en LSE.",
        "Participar activamente en actividades multimodales: oral, signada y visual.",
        "Asociar signos con imágenes, palabras orales y expresiones faciales."
      ]
    }
  ],

  saberes: [
    {
      title: "Conceptos",
      list: [
        "Qué es la lengua de signos y quién la usa.",
        "Vocabulario básico: hola, adiós, gracias, por favor, sí, no, agua, comer, jugar, mamá, papá, amor, triste, feliz, perro, gato, rojo, azul y amarillo."
      ]
    },
    {
      title: "Procedimientos",
      list: [
        "Reproducción motora de signos con las manos.",
        "Asociación signo-imagen-palabra oral.",
        "Uso contextual de signos en rutinas diarias."
      ]
    },
    {
      title: "Actitudes y transversales",
      list: [
        "Respeto y valoración de todas las formas de comunicación.",
        "Apoyo entre iguales.",
        "Educación en valores, igualdad y salud comunicativa."
      ]
    }
  ],

  metodologia: [
    {
      title: "Principios metodológicos",
      list: [
        "DUA: múltiples medios de representación, acción e implicación.",
        "Enfoque globalizador e integrador de áreas.",
        "Papel activo del alumnado.",
        "Aprendizaje significativo a partir de rutinas conocidas.",
        "Juego como recurso metodológico principal.",
        "Atención a la diversidad y adaptación visual de materiales.",
        "Uso puntual y adaptado de recursos digitales.",
        "Colaboración con familias."
      ]
    },
    {
      title: "Estrategias metodológicas",
      list: [
        "Expositiva: presentación de nuevos signos por parte de la educadora.",
        "Por descubrimiento: rincones, exploración libre y talleres manipulativos.",
        "Mixta o proyectual: hilo conductor con el personaje Signe."
      ]
    },
    {
      title: "Agrupamientos",
      list: [
        "Gran grupo: asamblea diaria signada, cuentos y canciones.",
        "Pequeño grupo: talleres de signos y rincones.",
        "Parejas: práctica entre iguales y apoyo colaborativo.",
        "Individual: fichas, observación y autoexpresión con pictogramas."
      ]
    },
    {
      title: "Rol docente",
      content: `
        La educadora guía, modela, observa, acompaña, adapta el entorno y media entre los distintos lenguajes para que toda la clase pueda participar.
      `
    }
  ],

  temporalizacion: [
    {
      title: "Semana 1 · Motivación",
      list: [
        "Sesión 1: presentación de Signe y conocimientos previos.",
        "Sesión 2: creación y exploración del rincón de signos.",
        "Sesiones 3-5: rutina diaria signada en asamblea."
      ]
    },
    {
      title: "Semana 2 · Desarrollo",
      list: [
        "Sesión 6: cuento signado.",
        "Sesión 7: taller de animales.",
        "Sesión 8: canción de colores.",
        "Sesión 9: tienda signada.",
        "Sesión 10: visita especial.",
        "Sesión 11: diccionario de signos."
      ]
    },
    {
      title: "Semana 3 · Consolidación",
      list: [
        "Sesión 12: teatro signado.",
        "Sesión 13: taller con familias.",
        "Sesiones 14-15: evaluación y cierre."
      ]
    },
    {
      title: "Actividad permanente",
      content: `
        La rutina signada de asamblea se mantiene todos los días del curso una vez iniciada, como situación de aprendizaje permanente.
      `
    }
  ],

  sessions: [
    {
      id: 1,
      week: 1,
      phase: "motivacion",
      title: "¿Cómo hablas tú?",
      type: "Inicial / motivación / conocimientos previos",
      duration: "45 minutos",
      space: "Zona de asamblea",
      grouping: "Gran grupo",
      materials: "Muñeca Signe con audífono, espejo grande, cuento adaptado con imágenes signadas, pictogramas de medios de comunicación.",
      humans: "Tutora y especialista o apoyo en LSE si está disponible; en su defecto, recurso audiovisual.",
      teacherRole: "Guía y mediadora. Presenta a Signe y lanza preguntas abiertas.",
      description: "La tutora presenta a Signe, una muñeca que lleva audífono y se comunica con las manos. Se muestra un cuento adaptado, se pregunta al grupo cómo se comunica y se introduce el signo HOLA. El alumno o alumna con discapacidad auditiva puede enseñarlo si lo desea.",
      evaluation: "Observación directa y lista de control: participación, interés y reproducción del signo HOLA.",
      variants: "Se acepta aproximación al signo si hay dificultades motrices finas. Apoyo visual con pictograma grande."
    },
    {
      id: 2,
      week: 1,
      phase: "motivacion",
      title: "El rincón de los signos",
      type: "Introductoria / descubrimiento",
      duration: "45 minutos",
      space: "Rincón de signos dentro del aula",
      grouping: "Pequeños grupos rotatorios",
      materials: "Tarjetas laminadas signo-imagen-palabra, espejo de cuerpo completo, cesta sensorial con texturas asociadas.",
      humans: "Tutora del aula.",
      teacherRole: "Observa, modela y acompaña la exploración.",
      description: "Se presenta el rincón de los signos como espacio permanente. En pequeños grupos, el alumnado explora tarjetas, se observa en el espejo, reproduce signos y asocia signos con objetos reales como agua, comida o juego.",
      evaluation: "Anecdotario de conductas espontáneas y uso funcional de signos.",
      variants: "Puede mantenerse durante toda la propuesta como rincón fijo."
    },
    {
      id: 3,
      week: 1,
      phase: "motivacion",
      title: "Buenos días, ¿cómo estás? · Sesión 1 de rutina",
      type: "Rutina signada diaria",
      duration: "15 minutos integrados en la jornada",
      space: "Zona de asamblea",
      grouping: "Gran grupo",
      materials: "Panel de emociones signadas, pictogramas del tiempo, canciones signadas y apoyo visual.",
      humans: "Tutora y grupo clase.",
      teacherRole: "Modela el saludo y promueve la repetición con apoyo visual.",
      description: "Se inicia la asamblea signada: saludo en LSE, nombres, emoción del día y tiempo atmosférico. El alumno o alumna con discapacidad auditiva puede liderar parte del saludo.",
      evaluation: "Escala de estimación del grado de reproducción de signos de saludo y emociones.",
      variants: "Se repite a diario como rutina estable."
    },
    {
      id: 4,
      week: 1,
      phase: "motivacion",
      title: "Buenos días, ¿cómo estás? · Sesión 2 de rutina",
      type: "Rutina signada diaria",
      duration: "15 minutos integrados en la jornada",
      space: "Zona de asamblea",
      grouping: "Gran grupo",
      materials: "Panel de emociones y apoyos visuales.",
      humans: "Tutora y alumnado.",
      teacherRole: "Refuerza autonomía y turnos.",
      description: "Se continúa la rutina signada incorporando más autonomía en la elección de emociones, saludos entre compañeros y señalización de tiempo y día.",
      evaluation: "Escala de estimación y observación continuada.",
      variants: "Puede grabarse evidencia fotográfica con autorización del centro y familias."
    },
    {
      id: 5,
      week: 1,
      phase: "motivacion",
      title: "Buenos días, ¿cómo estás? · Sesión 3 de rutina",
      type: "Rutina signada diaria",
      duration: "15 minutos integrados en la jornada",
      space: "Zona de asamblea",
      grouping: "Gran grupo",
      materials: "Canciones signadas, panel de aula y pictogramas.",
      humans: "Tutora y alumnado.",
      teacherRole: "Cede progresivamente el protagonismo al grupo.",
      description: "La asamblea signada se consolida: cada niño o niña participa en el saludo, identifica una emoción y refuerza signos básicos de uso cotidiano.",
      evaluation: "Observación sistemática del uso autónomo de signos básicos.",
      variants: "Puede enlazarse con otras rutinas del curso."
    },
    {
      id: 6,
      week: 2,
      phase: "desarrollo",
      title: "El cuento signado: Los tres cerditos",
      type: "Desarrollo / experimentación",
      duration: "45 minutos",
      space: "Asamblea y espacio de movimiento libre",
      grouping: "Gran grupo y parejas",
      materials: "Cuento adaptado con signos LSE, disfraces opcionales, recurso audiovisual de cuento signado previamente revisado.",
      humans: "Tutora y grupo clase.",
      teacherRole: "Narra, signa y facilita la dramatización.",
      description: "La tutora cuenta y signa simultáneamente el cuento. El grupo repite signos clave como LOBO, CASA o SOPLAR, y posteriormente dramatiza escenas por parejas.",
      evaluation: "Observación directa y anecdotario de participación y reproducción gestual.",
      variants: "El alumno o alumna con discapacidad auditiva puede asumir un papel protagonista."
    },
    {
      id: 7,
      week: 2,
      phase: "desarrollo",
      title: "Taller de signos: Los animales",
      type: "Desarrollo / taller experimental",
      duration: "45 minutos",
      space: "Mesas de taller",
      grouping: "Pequeños grupos",
      materials: "Cartas de animales con signo LSE, plastilina, folios, pinturas y plastificadora.",
      humans: "Tutora del aula.",
      teacherRole: "Acompaña la manipulación y la verbalización o signación.",
      description: "Cada niño o niña elige un animal, aprende su signo, modela el animal y crea su propia tarjeta signo-dibujo. Las tarjetas se incorporan al rincón de signos.",
      evaluation: "Producto final, observación del proceso y capacidad de asociación signo-animal.",
      variants: "Actividad de ampliación: inventar un signo razonado para un animal no trabajado."
    },
    {
      id: 8,
      week: 2,
      phase: "desarrollo",
      title: "La canción de los colores en LSE",
      type: "Desarrollo / musical y corporal",
      duration: "45 minutos",
      space: "Sala de psicomotricidad o aula despejada",
      grouping: "Gran grupo",
      materials: "Pañuelos de colores, instrumentos sencillos, letra adaptada y apoyo visual en pantalla.",
      humans: "Tutora y alumnado.",
      teacherRole: "Dirige, canta, signa y propone el juego corporal.",
      description: "El grupo aprende una canción de colores con signos LSE. Después busca objetos o pañuelos del color signado. En la variante inclusiva se realiza sin voz para practicar la comunicación visual.",
      evaluation: "Escala de estimación: identificación y reproducción de al menos tres colores.",
      variants: "Se puede repetir en gran grupo o como transición activa."
    },
    {
      id: 9,
      week: 2,
      phase: "desarrollo",
      title: "Juego simbólico: La tienda signada",
      type: "Desarrollo / juego simbólico",
      duration: "45 minutos",
      space: "Rincón de juego simbólico",
      grouping: "Pequeños grupos",
      materials: "Alimentos de juguete, caja registradora, etiquetas con signos LSE, dinero simbólico y delantales.",
      humans: "Tutora del aula.",
      teacherRole: "Facilita el juego sin dirigirlo en exceso.",
      description: "El alumnado juega a comprar y vender utilizando signos como DAR, QUERER, GRACIAS, POR FAVOR, SÍ y NO. El objetivo es el uso espontáneo de signos en contexto funcional.",
      evaluation: "Observación directa y anecdotario del uso espontáneo de signos en el juego.",
      variants: "Permite reforzar autoestima del alumno o alumna con mayor dominio de la comunicación signada."
    },
    {
      id: 10,
      week: 2,
      phase: "desarrollo",
      title: "Visita especial: Persona sorda adulta",
      type: "Desarrollo / experiencia directa",
      duration: "45 minutos",
      space: "Aula de referencia",
      grouping: "Gran grupo",
      materials: "Libro de visitas, cámara con autorización, materiales aportados por la persona invitada.",
      humans: "Persona sorda adulta, tutora y posible apoyo o mediación comunicativa.",
      teacherRole: "Coordina la visita y prepara preguntas con pictogramas.",
      description: "Una persona sorda o con discapacidad auditiva visita el aula, interactúa con el grupo y observa los signos aprendidos. El alumnado formula preguntas sencillas y comparte una canción o saludo signado.",
      evaluation: "Anecdotario de actitudes de respeto, curiosidad y uso de signos en contexto real.",
      variants: "Requiere coordinación previa con entidad o asociación."
    },
    {
      id: 11,
      week: 2,
      phase: "desarrollo",
      title: "El diccionario de signos de nuestra clase",
      type: "Consolidación / producción",
      duration: "45 minutos",
      space: "Mesas de trabajo",
      grouping: "Pequeños grupos y trabajo individual",
      materials: "Folios, fotos impresas, pinturas, pegamento, portada y encuadernación.",
      humans: "Tutora y alumnado.",
      teacherRole: "Ayuda a seleccionar, montar y conservar el producto final.",
      description: "Cada niño o niña elige su signo favorito, lo dibuja o pega su fotografía haciéndolo y se crea un diccionario colectivo de aula que queda en la biblioteca.",
      evaluation: "Producto final y observación del proceso de elección y representación.",
      variants: "Puede ampliarse con nuevas entradas a lo largo del trimestre."
    },
    {
      id: 12,
      week: 3,
      phase: "consolidacion",
      title: "Actuamos para el cole: Teatro signado",
      type: "Consolidación / representación",
      duration: "45 minutos de preparación y actuación",
      space: "Sala de usos múltiples",
      grouping: "Gran grupo con reparto de roles",
      materials: "Disfraces sencillos, decorado básico y cámara con autorización.",
      humans: "Tutora, alumnado y posible grupo invitado.",
      teacherRole: "Organiza turnos, ensaya y acompaña la representación.",
      description: "El grupo prepara una pequeña representación del cuento signado para otra aula o para familias. Cada niño o niña tiene un momento de signar en escena.",
      evaluation: "Observación del dominio de signos, coordinación grupal y participación.",
      variants: "El alumno o alumna con experiencia en LSE puede asumir rol protagonista o de ayuda."
    },
    {
      id: 13,
      week: 3,
      phase: "consolidacion",
      title: "Taller de familias: Aprende a signar con tu hijo o hija",
      type: "Consolidación / colaboración familiar",
      duration: "60 minutos",
      space: "Aula de referencia y zona de entrada",
      grouping: "Familias y alumnado",
      materials: "Guía impresa con signos básicos, tarjetas laminadas, proyector o pantalla y códigos QR a vídeos seleccionados.",
      humans: "Tutora, familias y alumnado.",
      teacherRole: "Explica la propuesta, dinamiza y entrega materiales para casa.",
      description: "Las familias participan en una sesión donde aprenden con sus hijos e hijas algunos signos trabajados en el aula. Se entregan materiales para reforzar la continuidad en casa.",
      evaluation: "Cuestionario breve a familias y observación de participación compartida.",
      variants: "Puede plantearse también como jornada abierta."
    },
    {
      id: 14,
      week: 3,
      phase: "consolidacion",
      title: "Evaluación y cierre I: ¿Qué hemos aprendido?",
      type: "Final / evaluación",
      duration: "45 minutos",
      space: "Asamblea y rincón de signos",
      grouping: "Individual y gran grupo",
      materials: "Escala con pictogramas, fotografías de la experiencia y lista de control.",
      humans: "Tutora y alumnado.",
      teacherRole: "Observa individualmente y facilita la verbalización o expresión visual.",
      description: "Cada niño o niña revisa imágenes de la situación de aprendizaje, identifica lo que más le gustó y la tutora registra el dominio de signos mediante lista de control.",
      evaluation: "Lista de control, escala de actitudes y observación individual.",
      variants: "Puede añadirse audio o vídeo si existe permiso."
    },
    {
      id: 15,
      week: 3,
      phase: "consolidacion",
      title: "Evaluación y cierre II: mural y despedida signada",
      type: "Final / evaluación y cierre",
      duration: "45 minutos",
      space: "Zona de asamblea",
      grouping: "Gran grupo",
      materials: "Mural final, tarjetas personalizadas y fotos de la experiencia.",
      humans: "Tutora, alumnado y posible presencia familiar puntual.",
      teacherRole: "Conduce el cierre emocional y celebra los logros del grupo.",
      description: "Se descubre el mural colectivo, se repasan los últimos signos juntos y cada niño o niña recibe una tarjeta personalizada con su signo favorito.",
      evaluation: "Cierre grupal, observación de recuerdo y participación emocional.",
      variants: "Puede convertirse en exposición de aula."
    }
  ],

  espacios: [
    {
      title: "Aula de referencia",
      content: "Espacio para rutina signada, asambleas, sesiones iniciales y cierre. Debe ser accesible, luminoso y flexible para reconfigurar zonas."
    },
    {
      title: "Rincón de signos",
      content: "Rincón temporal o permanente dentro del aula con espejo, tarjetas, estantes bajos y apoyos visuales accesibles."
    },
    {
      title: "Juego simbólico",
      content: "Espacio adaptado como tienda signada con etiquetas en LSE y objetos reales o de imitación."
    },
    {
      title: "Sala de usos múltiples",
      content: "Espacio para psicomotricidad, canción de colores, teatro y encuentros con familias."
    },
    {
      title: "Mesas de taller",
      content: "Zona diferenciada para modelado, dibujo, tarjetas y elaboración del diccionario de signos."
    },
    {
      title: "Accesibilidad específica",
      content: "Iluminación adecuada, apoyo visual completo, ausencia de barreras, posición frontal de la docente y reducción de distractores auditivos o visuales innecesarios."
    }
  ],

  humanResources: [
    "Tutora del aula, con función de guía, mediación, observación y diseño.",
    "Especialista en LSE o apoyo externo, cuando el centro disponga de este recurso.",
    "Profesionales de apoyo: PT, AL u orientación, según necesidades del aula.",
    "Persona adulta sorda o con discapacidad auditiva invitada para la sesión de experiencia directa.",
    "Familias como agentes activos de continuidad en casa."
  ],

  materialResources: [
    "Muñeca Signe con audífono.",
    "Espejo de cuerpo completo.",
    "Tarjetas signo-imagen-palabra.",
    "PDI o proyector con apoyo visual.",
    "Pictogramas, panel de emociones y murales.",
    "Folios, cartulinas, ceras, pegamento, plastilina y plastificadora.",
    "Disfraces, pañuelos de colores, alimentos de juguete y caja registradora.",
    "Cámara o tableta con autorización del centro y familias."
  ],

  digitalResources: [
    "Vídeos seleccionados de LSE previamente revisados por la docente.",
    "Pictogramas de ARASAAC.",
    "Presentaciones visuales de signos y emociones.",
    "Recursos audiovisuales breves con control docente.",
    "QR o enlaces impresos para continuidad familiar."
  ],

  evaluation: [
    {
      title: "Características de la evaluación",
      list: [
        "Global.",
        "Continua.",
        "Formativa.",
        "Centrada en la observación directa y sistemática."
      ]
    },
    {
      title: "Qué se evalúa",
      list: [
        "Proceso de aprendizaje del alumnado.",
        "Uso funcional de signos básicos.",
        "Actitudes de respeto e inclusión.",
        "Participación en actividades multimodales.",
        "Práctica docente y adecuación de la propuesta."
      ]
    },
    {
      title: "Criterios e indicadores",
      list: [
        "Utiliza varios signos en contextos reales.",
        "Participa de forma activa en rutinas, cuentos, talleres y juego simbólico.",
        "Muestra actitudes de respeto y colaboración.",
        "Asocia signos con imágenes, objetos y emociones."
      ]
    },
    {
      title: "Técnicas e instrumentos",
      list: [
        "Observación directa.",
        "Anecdotario diario.",
        "Lista de control de signos.",
        "Escala de estimación.",
        "Cuestionario a familias.",
        "Diario de autoevaluación docente."
      ]
    }
  ],

  dua: [
    {
      title: "Múltiples medios de representación",
      content: "La información se ofrece en formato oral, signado, visual, gestual y manipulativo."
    },
    {
      title: "Múltiples medios de acción y expresión",
      content: "El alumnado puede responder hablando, signando, señalando, dramatizando o dibujando."
    },
    {
      title: "Múltiples medios de implicación",
      content: "Se proponen actividades lúdicas, sensoriales, musicales y sociales con diferentes niveles de apoyo."
    },
    {
      title: "Adaptaciones específicas",
      content: "Posición visual óptima, materiales accesibles, alumno o alumna como experto en algunos momentos y apoyo específico para retraso del lenguaje."
    }
  ],

  annexes: [
    "Anexo I. Lista de 20 signos básicos del vocabulario trabajado.",
    "Anexo II. Fichas completas de actividad por sesión.",
    "Anexo III. Lista de control de los 10 signos básicos.",
    "Anexo IV. Escala de estimación de actitudes inclusivas.",
    "Anexo V. Guía para familias: 10 signos para casa.",
    "Anexo VI. Cuestionario de evaluación para familias.",
    "Anexo VII. Diario de autoevaluación docente."
  ]
};

const renderCard = ({ title, content, list }) => `
  <article class="card searchable">
    <h3>${title}</h3>
    ${
      content
        ? `<p>${content}</p>`
        : `<ul>${list.map(item => `<li>${item}</li>`).join("")}</ul>`
    }
  </article>
`;

const overviewCards = document.getElementById("overviewCards");
const normativaCards = document.getElementById("normativaCards");
const objetivosCards = document.getElementById("objetivosCards");
const saberesCards = document.getElementById("saberesCards");
const metodologiaCards = document.getElementById("metodologiaCards");
const temporalizacionCards = document.getElementById("temporalizacionCards");
const espaciosCards = document.getElementById("espaciosCards");
const evaluationCards = document.getElementById("evaluationCards");
const duaCards = document.getElementById("duaCards");
const humanResources = document.getElementById("humanResources");
const materialResources = document.getElementById("materialResources");
const digitalResources = document.getElementById("digitalResources");
const annexList = document.getElementById("annexList");
const sessionsContainer = document.getElementById("sessionsContainer");

overviewCards.innerHTML = data.overview.map(renderCard).join("");
normativaCards.innerHTML = data.normativa.map(renderCard).join("");
objetivosCards.innerHTML = data.objetivos.map(renderCard).join("");
saberesCards.innerHTML = data.saberes.map(renderCard).join("");
metodologiaCards.innerHTML = data.metodologia.map(renderCard).join("");
temporalizacionCards.innerHTML = data.temporalizacion.map(renderCard).join("");
espaciosCards.innerHTML = data.espacios.map(renderCard).join("");
evaluationCards.innerHTML = data.evaluation.map(renderCard).join("");
duaCards.innerHTML = data.dua.map(renderCard).join("");

humanResources.innerHTML = data.humanResources.map(item => `<li>${item}</li>`).join("");
materialResources.innerHTML = data.materialResources.map(item => `<li>${item}</li>`).join("");
digitalResources.innerHTML = data.digitalResources.map(item => `<li>${item}</li>`).join("");
annexList.innerHTML = data.annexes.map(item => `<li>${item}</li>`).join("");

const phaseLabel = {
  motivacion: "Motivación",
  desarrollo: "Desarrollo",
  consolidacion: "Consolidación"
};

const phaseClass = {
  motivacion: "phase-motivacion",
  desarrollo: "phase-desarrollo",
  consolidacion: "phase-consolidacion"
};

function sessionTemplate(session) {
  const reviewKey = `session-reviewed-${session.id}`;
  const isChecked = localStorage.getItem(reviewKey) === "true";

  return `
    <article class="session-card searchable" data-phase="${session.phase}" data-week="${session.week}">
      <details>
        <summary>
          <div class="session-num">${session.id}</div>
          <div class="session-meta">
            <h3>${session.title}</h3>
            <p>${session.type} · ${session.duration} · ${session.space}</p>
          </div>
          <div class="session-badges">
            <span class="badge ${phaseClass[session.phase]}">${phaseLabel[session.phase]}</span>
            <span class="badge">Semana ${session.week}</span>
          </div>
        </summary>

        <div class="session-body">
          <div class="session-grid">
            <div class="session-box">
              <strong>Agrupamiento</strong>
              <p>${session.grouping}</p>
            </div>
            <div class="session-box">
              <strong>Recursos materiales</strong>
              <p>${session.materials}</p>
            </div>
            <div class="session-box">
              <strong>Recursos humanos</strong>
              <p>${session.humans}</p>
            </div>
            <div class="session-box">
              <strong>Papel de la educadora</strong>
              <p>${session.teacherRole}</p>
            </div>
            <div class="session-box">
              <strong>Descripción detallada</strong>
              <p>${session.description}</p>
            </div>
            <div class="session-box">
              <strong>Evaluación</strong>
              <p>${session.evaluation}</p>
            </div>
          </div>

          <div class="session-box">
            <strong>Variantes DUA / observaciones</strong>
            <p>${session.variants}</p>
          </div>

          <div class="session-footer">
            <label class="review-check">
              <input type="checkbox" class="review-toggle" data-review="${reviewKey}" ${isChecked ? "checked" : ""}>
              Sesión revisada
            </label>
            <span class="badge">Interactiva y editable</span>
          </div>
        </div>
      </details>
    </article>
  `;
}

function renderSessions() {
  sessionsContainer.innerHTML = data.sessions.map(sessionTemplate).join("");
  bindReviewToggles();
  updateProgress();
}

renderSessions();

function bindReviewToggles() {
  document.querySelectorAll(".review-toggle").forEach(input => {
    input.addEventListener("change", e => {
      const key = e.target.dataset.review;
      localStorage.setItem(key, String(e.target.checked));
      updateProgress();
    });
  });
}

function updateProgress() {
  const total = data.sessions.length;
  const checked = [...document.querySelectorAll(".review-toggle")].filter(el => el.checked).length;
  const percent = Math.round((checked / total) * 100);
  document.getElementById("progressText").textContent = `${percent}%`;
  document.getElementById("progressFill").style.width = `${percent}%`;
}

const searchInput = document.getElementById("searchInput");
const phaseFilter = document.getElementById("phaseFilter");
const weekFilter = document.getElementById("weekFilter");

function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function applyFilters() {
  const searchTerm = normalize(searchInput.value.trim());
  const phaseValue = phaseFilter.value;
  const weekValue = weekFilter.value;

  document.querySelectorAll(".session-card").forEach(card => {
    const text = normalize(card.innerText);
    const matchesSearch = !searchTerm || text.includes(searchTerm);
    const matchesPhase = phaseValue === "all" || card.dataset.phase === phaseValue;
    const matchesWeek = weekValue === "all" || card.dataset.week === weekValue;

    card.classList.toggle("hidden", !(matchesSearch && matchesPhase && matchesWeek));
  });

  document.querySelectorAll(".card.searchable").forEach(card => {
    const text = normalize(card.innerText);
    const matchesSearch = !searchTerm || text.includes(searchTerm);
    card.classList.toggle("hidden", !matchesSearch);
  });
}

searchInput.addEventListener("input", applyFilters);
phaseFilter.addEventListener("change", applyFilters);
weekFilter.addEventListener("change", applyFilters);

document.getElementById("expandAll").addEventListener("click", () => {
  document.querySelectorAll(".session-card details").forEach(item => item.open = true);
});

document.getElementById("collapseAll").addEventListener("click", () => {
  document.querySelectorAll(".session-card details").forEach(item => item.open = false);
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

document.getElementById("printBtn").addEventListener("click", () => window.print());

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") document.body.classList.add("dark");

document.getElementById("copyAnnexes").addEventListener("click", async () => {
  const text = data.annexes.join("\n");
  try {
    await navigator.clipboard.writeText(text);
    const btn = document.getElementById("copyAnnexes");
    const original = btn.textContent;
    btn.textContent = "Copiado";
    setTimeout(() => btn.textContent = original, 1200);
  } catch {
    alert("No se pudo copiar automáticamente.");
  }
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
