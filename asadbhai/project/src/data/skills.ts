import { Skill } from '../components/SkillBar';

export const skills: Skill[] = [
  // Programming Languages
  { id: 1, name: 'Java/J2EE', level: 90, category: 'Programming Languages' },
  { id: 2, name: 'JavaScript', level: 80, category: 'Programming Languages' },
  
  // Frameworks
  { id: 3, name: 'Spring Boot', level: 85, category: 'Frameworks' },
  { id: 4, name: 'Spring MVC', level: 80, category: 'Frameworks' },
  { id: 5, name: 'Hibernate/JPA', level: 85, category: 'Frameworks' },
  { id: 6, name: 'Angular', level: 70, category: 'Frameworks' },
  
  // Databases
  { id: 7, name: 'MySQL', level: 85, category: 'Databases' },
  { id: 8, name: 'PostgreSQL', level: 80, category: 'Databases' },
  
  // Tools & Technologies
  { id: 9, name: 'REST APIs', level: 90, category: 'Web Technologies' },
  { id: 10, name: 'GraphQL', level: 75, category: 'Web Technologies' },
  { id: 11, name: 'Microservices', level: 80, category: 'Architecture' },
  { id: 12, name: 'GRPC', level: 70, category: 'Web Technologies' },
  { id: 13, name: 'Camunda', level: 75, category: 'Tools' },
  { id: 14, name: 'Git/SVN', level: 85, category: 'Tools' },
  
  // Frontend
  { id: 15, name: 'HTML/CSS', level: 80, category: 'Frontend' },
  { id: 16, name: 'Bootstrap', level: 85, category: 'Frontend' },
  { id: 17, name: 'jQuery', level: 75, category: 'Frontend' }
];

export const skillCategories = [...new Set(skills.map(skill => skill.category))];