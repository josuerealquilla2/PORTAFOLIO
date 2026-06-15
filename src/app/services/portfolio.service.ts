import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { SkillCategory } from '../models/skill.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getExperiences(): Experience[] {
    return [
      {
        company: 'Lobees — Prácticas Técnicas',
        role: 'Integración & Automatización de Sistemas',
        period: 'May 2026',
        description: 'Desarrollo de un sistema de automatización que integra el CRM de Lobees, workflows de n8n y un backend en Django. Implementación de tres formularios secuenciales en Angular para la interacción con leads, almacenamiento de respuestas en JSON y sincronización de logs y métricas con el CRM vía API REST.',
        logoClass: ['devicon-angular-plain', 'devicon-react-plain colored', 'devicon-django-plain colored'],
        tags: ['Angular', 'Django', 'n8n', 'REST API']
      },
      {
        company: 'Lobees · MPFORALL — Prácticas Técnicas',
        role: 'Desarrollo de Agentes IA & MCP',
        period: 'May 2026',
        description: 'Diseño e implementación de un servidor MCP (Model Context Protocol) en Node.js que expone las operaciones del CRM de Lobees como herramientas para agentes de IA. Definición de skills reutilizables para que Claude Code, ChatGPT y Antigravity ejecuten de forma autónoma el flujo completo: detección de tareas, procesamiento de leads, generación de dashboards HTML autocontenidos y publicación con enlace de vuelta al CRM. Incluyó una comparativa técnica del rendimiento de los tres agentes.',
        logoClass: ['devicon-angular-plain', 'devicon-react-plain colored', 'devicon-django-plain colored'],
        tags: ['MCP', 'Claude Code', 'Node.js', 'REST API']
      },
      {
        company: 'GitLens Explorer',
        role: 'Fullstack Developer',
        period: 'Feb 2025 — Jun 2025',
        description: 'Explorador educativo de repositorios GitHub con análisis de contribuciones, visualización de estadísticas y panel de gestión de tareas. 8+ endpoints integrados, tiempo de carga <1.5s y 20+ componentes Angular.',
        logoClass: ['devicon-angular-plain', 'devicon-react-plain colored', 'devicon-django-plain colored'],
        tags: ['Angular', 'Django', 'Python', 'PostgreSQL', 'GitHub API']
      },
      {
        company: 'Task Manager App',
        role: 'Fullstack Developer',
        period: 'Oct 2024 — Ene 2025',
        description: 'Aplicación de gestión de tareas con autenticación de usuarios, categorización de tareas, filtros y estadísticas de productividad. Soporta 50+ usuarios concurrentes con 80% de cobertura de tests.',
        logoClass: ['devicon-angular-plain', 'devicon-react-plain colored', 'devicon-django-plain colored'],
        tags: ['Angular', 'Django', 'PostgreSQL', 'Docker', 'JWT']
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'GitLens Explorer',
        timeline: 'Feb 2025 — Jun 2025',
        role: 'Fullstack Developer',
        description: 'Explorador educativo de repositorios GitHub con análisis de contribuciones, visualización de estadísticas y panel de gestión de tareas.',
        problem: 'Los desarrolladores necesitan una forma visual e intuitiva de explorar repositorios GitHub y entender el historial de contribuciones sin tener que usar la terminal constantemente.',
        solution: 'Desarrollé una SPA en Angular que consume la API de GitHub para mostrar datos de repositorios, contribuciones y usuarios en dashboards interactivos, con caché de datos para reducir llamadas a la API.',
        metrics: [
          { label: 'Endpoints integrados', value: '8+' },
          { label: 'Tiempo de carga', value: '<1.5s' },
          { label: 'Componentes', value: '20+' }
        ],
        tech: ['angular', 'django', 'python', 'postgresql', 'typescript', 'git'],
        githubUrl: 'https://github.com/josuerealquilla2/GitLens',
        demoUrl: 'https://git-lens-o8jw.vercel.app/',
        expanded: false
      },
      {
        id: 2,
        title: 'Task Manager App',
        timeline: 'Oct 2024 — Ene 2025',
        role: 'Fullstack Developer',
        description: 'Aplicación de gestión de tareas con autenticación de usuarios, categorización de tareas, filtros y estadísticas de productividad.',
        problem: 'Los equipos pequeños necesitan una herramienta simple pero completa para organizar y dar seguimiento a sus tareas diarias sin la complejidad de plataformas como Jira.',
        solution: 'Creé una aplicación Angular con backend Django que permite crear, asignar y dar seguimiento a tareas con sistema de notificaciones y dashboard de métricas.',
        metrics: [
          { label: 'Usuarios concurrentes', value: '50+' },
          { label: 'Cobertura de tests', value: '80%' },
          { label: 'Semanas de desarrollo', value: '10' }
        ],
        tech: ['react', 'django', 'python', 'postgresql', 'typescript', 'docker'],
        githubUrl: 'https://github.com/josuerealquilla2/Gestionador-de-Tareas-',
        demoUrl: 'https://gestionador-de-tareas.vercel.app/login',
        expanded: false
      }
    ];
  }

  getSkillCategories(): SkillCategory[] {
    return [
      {
        number: '01',
        key: 'languages' as const,
        skills: [
          { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
          { name: 'Python',     icon: 'devicon-python-plain colored' },
          { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
          { name: 'HTML5',      icon: 'devicon-html5-plain colored' },
          { name: 'CSS3',       icon: 'devicon-css3-plain colored' },
          { name: 'SQL',        icon: 'devicon-azuresqldatabase-plain colored' }
        ]
      },
      {
        number: '02',
        key: 'frontend' as const,
        skills: [
          { name: 'Angular',      icon: 'devicon-angular-plain colored' },
          { name: 'SCSS',         icon: 'devicon-sass-plain colored' },
          { name: 'Bootstrap',    icon: 'devicon-bootstrap-plain colored' },
          { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
          { name: 'React',        icon: 'devicon-react-plain colored' }
        ]
      },
      {
        number: '03',
        key: 'backend' as const,
        skills: [
          { name: 'Django',     icon: 'devicon-django-plain colored' },
          { name: 'Node.js',    icon: 'devicon-nodejs-plain colored' },
          { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
          { name: 'MySQL',      icon: 'devicon-mysql-plain colored' },
          { name: 'REST API',   icon: 'devicon-fastapi-plain colored' }
        ]
      },
      {
        number: '04',
        key: 'tools' as const,
        skills: [
          { name: 'Git',     icon: 'devicon-git-plain colored' },
          { name: 'GitHub',  icon: 'devicon-github-original' },
          { name: 'Docker',  icon: 'devicon-docker-plain colored' },
          { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
          { name: 'Postman', icon: 'devicon-postman-plain colored' },
          { name: 'Linux',   icon: 'devicon-linux-plain colored' }
        ]
      }
    ];
  }

}
