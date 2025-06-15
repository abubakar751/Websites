import { Project } from '../components/ProjectCard';

export const projects: Project[] = [
  {
    id: 1,
    title: 'CASA (Current Account and Savings Account)',
    overview: 'The CASA Module streamlines account management, allowing users to efficiently open, manage, and monitor their accounts with real-time transaction processing and features like balance inquiries and fee calculations.',
    technologies: ['Java 8/17', 'Hibernate/JPA', 'Spring Boot', 'GraphQL', 'GRPC', 'PostgreSQL', 'Tomcat 9.0', 'CAMUNDA'],
    teamSize: 6,
    responsibilities: ['Requirement Analysis & Design', 'Implementing GraphQL Services', 'Database design and optimization']
  },
  {
    id: 2,
    title: 'Payments',
    overview: 'The Payments Microservice handles inbound and outbound payments, ensuring seamless transaction processing. It includes compliance validation for account numbers and countries, verifying proper formats and checking against global sanctions lists.',
    technologies: ['Java 8/17', 'Hibernate/JPA', 'Spring Boot', 'GraphQL', 'GRPC', 'PostgreSQL', 'Camunda', 'Liquibase', 'Tomcat 9.0'],
    teamSize: 8,
    responsibilities: ['Requirement Analysis & Design', 'Implementing GraphQL Services', 'Building payment processing workflows']
  },
  {
    id: 3,
    title: 'CNP',
    overview: 'CNP application works as an API for sending collect requests, sending OTP notifications, checking transaction status, processing refunds, and handling transactions via UPI, BQR, WALLET, EMI, and CC.',
    technologies: ['Java 7/8', 'Hibernate', 'Angular', 'Spring Boot', 'MySQL 8.0', 'Apache Tomcat 9.0'],
    teamSize: 4,
    responsibilities: ['Requirement Analysis & Design', 'Implementing REST Services', 'Integration with payment gateways']
  },
  {
    id: 4,
    title: 'Notification Engine',
    overview: 'Notification Engine checks transaction details by device serial number and device ID. Sends notifications via MQTT, PUSH, and FIREBASE channels.',
    technologies: ['Java 7/8', 'JDBC Template', 'Spring Boot', 'MySQL 8.0', 'Apache Tomcat 9.0'],
    teamSize: 4,
    responsibilities: ['Requirement Analysis & Design', 'Implementing REST Services', 'Building notification delivery mechanisms']
  },
  {
    id: 5,
    title: 'SMSPay',
    overview: 'SMSPAY application enables users to input card details and process payments. Supports multiple card types like VISA, RUPAY, MASTERCARD, and includes EMI integration with various payment gateways.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Java 7/8', 'Hibernate', 'JPA', 'Spring MVC', 'JSTL', 'Spring Boot', 'MySQL 8.0', 'Apache Tomcat 9.0'],
    teamSize: 2,
    responsibilities: ['Requirement Analysis & Design', 'Designing creative pages using web technologies', 'Implementing REST Services']
  },
  {
    id: 6,
    title: 'IDMANAGEMENT',
    overview: 'IDMANAGEMENT application manages IDs for particular bureaus, including features like Reset ID, New ID, Forgot Password, and New Mail.',
    technologies: ['Java 7/8', 'Spring', 'Hibernate', 'PostgreSQL', 'Apache Tomcat 9.0', 'JSP', 'HTML', 'CSS'],
    teamSize: 1,
    responsibilities: ['Requirement Analysis & Design', 'Designing creative pages using web technologies', 'Implementing REST Services']
  }
];