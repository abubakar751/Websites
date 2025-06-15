import { Skill, Project, Education, Experience, Certification, SocialLink } from '../types';
import { Github, Mail, Phone } from 'lucide-react';

export const personalInfo = {
  name: 'Mohammad Aamir',
  title: 'Sr.Java Developer Specialist',
  tagline: 'Building robust web applications with Java, Spring Boot, and Angular',
  email: 'm.aamirtech1119@gmail.com',
  phone: '+91 8726881557',
  location: 'Sakinaka, Mumbai 400072',
  about: `Experienced Java Developer in building robust web apps using Java, Spring Boot, Angular, and MySQL. Proficient in designing scalable back-end services, developing RESTful APIs, and implementing security protocols with Spring Security. Strong hands-on experience in requirement analysis, system design, and end-to-end development of software solutions. Passionate about creating high performance, user-centric applications with a focus on quality, maintainability, and seamless user experiences.`,
  // resumePath: '/abrar-ahmed-resume.pdf', // Path will be updated by user
  profileImage: 'images/photo.jpg', // Path will be updated by user
  socials: [
    {
      platform: 'GitHub',
      url: 'https://github.com/mohammadaamir1102',
      icon: 'Github'
    },
    {
      platform: 'Email',
      url: 'mailto:m.aamirtech1119@gmail.com',
      icon: 'Mail'
    },
    {
      platform: 'Phone',
      url: 'tel:+918726881557',
      icon: 'Phone'
    }
  ] as SocialLink[]
};

export const skills: Skill[] = [
  // Backend
  { name: 'Core Java', level: 98, category: 'backend' },
  { name: 'Java 11', level: 90, category: 'backend' },
  { name: 'Collection', level: 99, category: 'backend' },
  { name: 'JDBC', level: 95, category: 'backend' },
  { name: 'hibernate', level: 92, category: 'backend' },
  { name: 'JPA', level: 97, category: 'backend' },
  { name: 'Spring Boot', level: 95, category: 'backend' },
  { name: 'Spring Batch', level: 85, category: 'backend' },
  { name: 'Microservices', level: 95, category: 'backend' },
  { name: 'API Gateway', level: 92, category: 'backend' },
  { name: 'Discovery Server', level: 90, category: 'backend' },
  { name: 'Spring Security', level: 93, category: 'backend' },
  { name: 'Jwt', level: 90, category: 'backend' },
  { name: 'Rest API', level: 99, category: 'backend' },
  { name: 'Apache Kafka', level: 96, category: 'backend' },
  { name: 'Apache Solr', level: 90, category: 'backend' },
  { name: 'Metrix', level: 85, category: 'backend' },
  { name: 'Check Marx One', level: 88, category: 'backend' },
  { name: 'Seeker', level: 82, category: 'backend' },
  { name: 'Splunk', level: 90, category: 'backend' },
  



  
  // Frontend
  { name: 'Angular', level: 70, category: 'frontend' },
  { name: 'Angular Material', level: 65, category: 'frontend' },
  { name: 'JavaScript', level: 75, category: 'frontend' },
  { name: 'Thymeleafe', level: 80, category: 'frontend' },
  { name: 'TypeScript', level: 70, category: 'frontend' },
  { name: 'HTML', level: 80, category: 'frontend' },
  { name: 'CSS', level: 75, category: 'frontend' },
  
  // Database
  { name: 'MySQL', level: 85, category: 'database' },
  { name: 'Oracle', level: 80, category: 'database' },
  { name: 'SQL', level: 90, category: 'database' },
  { name: 'JDBC', level: 85, category: 'database' },
  { name: 'JPA', level: 97, category: 'database' },
  { name: 'Redish Cache', level: 85, category: 'database' },
  { name: 'GraphQL', level: 99, category: 'database' },
  
  // DevOps/Tools
  { name: 'Docker', level: 70, category: 'devops' },
  { name: 'Azure', level: 65, category: 'devops' },
  { name: 'Dev Ops', level: 65, category: 'devops' },
  { name: 'CI/CP PipeLine', level: 65, category: 'devops' },
  { name: 'Git/GitHub', level: 80, category: 'devops' },
  { name: 'GitLab', level: 75, category: 'devops' },
  { name: 'Bitbucket', level: 75, category: 'devops' },
  { name: 'Postman', level: 85, category: 'devops' },
  { name: 'Swagger', level: 80, category: 'devops' },
  
  // Other
  { name: 'JSON', level: 90, category: 'other' },
  { name: 'XML', level: 85, category: 'other' },
  { name: 'GraphQL', level: 65, category: 'other' },
  { name: 'STS IDE', level: 80, category: 'other' },
  { name: 'IntelliJ IDEA', level: 85, category: 'other' }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'TUDF (TransUnion Data Format)',
    description: 'As a Senior Developer, led the development of TUDF-based reporting services integrating financial institutions’ credit data into a standardized XML format. Focused on validation, compliance logic, and efficient data transformation using JAXB and Spring Boot.',
    skills: ['Spring Boot', 'JAXB', 'XML', 'REST APIs', 'MySQL'],
    images: [
      'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    achievements: ['Enabled seamless compliance with TransUnion data exchange standards']
  },
  {
    id: 2,
    title: 'Dispute Resolution System (DRS)',
    description: 'Built a robust API-driven platform for handling consumer disputes against financial records. Integrated modules for automated case tracking, resolution status updates, and XML-based communication with external regulators.',
    skills: ['Spring Boot', 'Microservices', 'Kafka', 'PostgreSQL', 'XML'],
    images: [
      'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    achievements: ['Reduced dispute resolution time by 40% with streamlined workflows']
  },
  {
    id: 3,
    title: 'Kotak Life Insurance',
    description: 'Contributed as a Senior Developer to policy onboarding, claims processing, and premium payment modules. Implemented microservices-based architecture, database optimization, and Kafka-based asynchronous communication.',
    skills: ['Java', 'Spring Boot', 'Kafka', 'Oracle DB', 'Microservices'],
    images: [
      'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    achievements: ['Enabled a 25% improvement in claim processing efficiency']
  }
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Information Technology (B.Sc IT)',
    institution: 'Mumbai University',
    year: '2016 - 2019',
    description: 'Focused on computer science fundamentals, programming paradigms, and modern application development.'
  }
];

export const experience: Experience[] = [
  {
    title: 'jr.Java Developer',
    company: 'Textron technology Pvt Ltd.',
    period: 'jylu 2019 to Feb 2022 ',
    description: [
      'Developed and maintained enterprise Java applications using Spring Boot and Microservices',
      'Implemented RESTful APIs for communication between services',
      'Optimized database queries and improved application performance',
      'Collaborated in Agile teams to deliver high-quality software solutions'
    ]
  },
  {
    title: 'Sr.Java Developer',
    company: 'Mindcroft Software Pvt.Ltd',
    period: 'From feb 2022 to September 2023',
    description: [
      'Assisted in developing Java-based web applications',
      'Gained hands-on experience with Spring Framework and Hibernate',
      'Participated in code reviews and testing phases'
    ]
  },
  {
    title: 'Sr.Java Developer',
    company: 'SaksoftLimited',
    period: 'September to till now ',
    description: [
      'Developed and maintained enterprise Java applications using Spring Boot and Microservices',
      'Implemented RESTful APIs for communication between services',
      'Optimized database queries and improved application performance',
      'Collaborated in Agile teams to deliver high-quality software solutions'
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: 'Oracle Cloud Infrastructure Certified Foundations Associate',
    issuer: 'Oracle University',
    year: '2023',
    description: 'Validated knowledge of Oracle Cloud Infrastructure services and functionality'
  }
];

export const achievements = [
  'Led a team of 3 developers for the TUDF (TransUnion Data Format) project',
  'Achieved 90% improvement in TUDF identification accuracy in TUDF (TransUnion Data Format)',
  'Successfully implemented microservices architecture reducing system load by 40%',
  'Optimized database queries resulting in 30% faster application response time'
];