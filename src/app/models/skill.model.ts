export interface Skill {
  name: string;
  icon: string;
}

export type SkillCategoryKey = 'languages' | 'frontend' | 'backend' | 'tools';

export interface SkillCategory {
  number: string;
  key: SkillCategoryKey;
  skills: Skill[];
}
