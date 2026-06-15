export const translations = {
  es: {
    nav: {
      home: 'Inicio', experience: 'Experiencia', projects: 'Proyectos',
      skills: 'Habilidades', contact: 'Contacto'
    },
    hero: {
      greeting: 'Hola, soy',
      title: 'Desarrollador', titleAccent: 'Fullstack',
      bio: 'Desarrollador fullstack especializado en Angular y Django REST Framework. Apasionado por construir aplicaciones web modernas, escalables y con una experiencia de usuario excepcional. Actualmente buscando nuevas oportunidades.',
      btnCV: 'Ver currículum', btnContact: 'Contactar'
    },
    experience: {
      tag: '02 — Experiencia',
      title: 'Dónde he trabajado',
      desc: 'Experiencia profesional y proyectos académicos que han formado mi perfil como desarrollador.'
    },
    projects: {
      tag: '03 — Proyectos',
      title: 'Lo que he construido',
      desc: 'Proyectos destacados que demuestran mi capacidad técnica y enfoque de resolución de problemas.',
      problem: 'Problema', solution: 'Solución',
      viewMore: 'Ver más', viewLess: 'Ver menos'
    },
    skills: {
      tag: '04 — Habilidades',
      title: 'Con qué trabajo',
      desc: 'Tecnologías y herramientas con las que construyo aplicaciones modernas.',
      categories: { languages: 'Lenguajes', frontend: 'Frontend', backend: 'Backend', tools: 'Herramientas' }
    },
    contact: {
      tag: '06 — Contacto',
      title: 'Trabajemos juntos',
      desc: '¿Tienes un proyecto en mente o una oferta de trabajo? Me encantaría escucharte.',
      name: 'Nombre', email: 'Email', message: 'Mensaje',
      namePH: 'Tu nombre', emailPH: 'tu@email.com',
      messagePH: 'Cuéntame sobre tu proyecto o posición...',
      send: 'Enviar mensaje',
      sent: '¡Abriendo tu cliente de email con el mensaje listo!',
      availability: 'Disponible para nuevas oportunidades'
    },
    footer: { madeWith: 'Hecho con Angular' }
  },
  en: {
    nav: {
      home: 'Home', experience: 'Experience', projects: 'Projects',
      skills: 'Skills', contact: 'Contact'
    },
    hero: {
      greeting: "Hi, I'm",
      title: 'Developer', titleAccent: 'Fullstack',
      bio: 'Fullstack developer specialized in Angular and Django REST Framework. Passionate about building modern, scalable web applications with exceptional user experiences. Currently looking for new opportunities.',
      btnCV: 'View CV', btnContact: 'Contact me'
    },
    experience: {
      tag: '02 — Experience',
      title: "Where I've worked",
      desc: 'Professional experience and academic projects that have shaped my developer profile.'
    },
    projects: {
      tag: '03 — Projects',
      title: "What I've built",
      desc: 'Featured projects that demonstrate my technical skills and problem-solving approach.',
      problem: 'Problem', solution: 'Solution',
      viewMore: 'View more', viewLess: 'View less'
    },
    skills: {
      tag: '04 — Skills',
      title: 'What I work with',
      desc: 'Technologies and tools I use to build modern applications.',
      categories: { languages: 'Languages', frontend: 'Frontend', backend: 'Backend', tools: 'Tools' }
    },
    contact: {
      tag: '06 — Contact',
      title: "Let's work together",
      desc: 'Have a project in mind or a job offer? I would love to hear from you.',
      name: 'Name', email: 'Email', message: 'Message',
      namePH: 'Your name', emailPH: 'you@email.com',
      messagePH: 'Tell me about your project or position...',
      send: 'Send message',
      sent: 'Opening your email client with the message ready to send!',
      availability: 'Available for new opportunities'
    },
    footer: { madeWith: 'Made with Angular' }
  }
} as const;

export type Lang = keyof typeof translations;
export type T = typeof translations[Lang];
