export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  title: string;
  timeline: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  metrics: ProjectMetric[];
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  expanded?: boolean;
}
