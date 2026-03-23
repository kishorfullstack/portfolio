import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Cloud Analogy CRM Specialist Limited',
      companyUrl: 'https://www.cloudanalogy.com/',
      role: 'Full Stack Technical Lead',
      started: '1st Jan 2018',
      upto: 'present',
      tasks: [
        'Led the design and development of high-performance web applications and backend systems, focusing on scalability and user experience',
        'Collaborated with stakeholders to gather requirements, define project scope, and deliver software solutions aligned with business goals',
        'Managed the entire application lifecycle, from conceptualization and design to development, deployment, and support',
        'Implemented backend services with Node.js and Nest.js to create microservices-based architectures, ensuring modular and maintainable code',
        'Designed, built, and integrated RESTful APIs to connect services and provide robust backend functionality',
        'Architected and deployed cloud-based applications using AWS, GCP, and Azure, optimizing infrastructure for reliability and cost-effectiveness',
        'Mentored junior developers, conducted code reviews, and established best practices to improve code quality and team efficiency',
        'Worked closely with UI/UX designers to translate design prototypes into fully-functional, responsive web interfaces',
        'Implemented secure authentication and authorization systems for web applications, using OAuth and JWT to protect user data',
        'Developed and maintained CI/CD pipelines for seamless integration and delivery using tools like Jenkins, GitLab CI, and AWS CodePipeline',
        'Optimized database performance and handled data migrations across multiple database technologies, including PostgreSQL, MySQL, and MongoDB',
        'Utilized Docker for containerization of applications, enabling consistent deployment environments and efficient scaling',
      ]
    }
  ],
};
