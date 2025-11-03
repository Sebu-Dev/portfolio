import { IMAGES } from "../types/images";
import type { Language } from "../types/types";

export const EN: Language = {
  HERO_CONTENT: `I am Florian Sebulke, a full stack software developer focusing on Java, Spring Boot, and React. Having completed the internal Faculty 73 training program at Volkswagen, I combine industrial automation experience from my mechatronics background with modern web and cloud development. I aim to deliver robust, scalable, and user-centered applications through clean architecture, maintainable code, and continuous improvement.`,

  ABOUT_TEXT: `I am a full stack software developer who transitioned from mechatronics and industrial automation into professional software engineering. After completing Volkswagen's internal Faculty 73 program, I gained solid experience building web applications, REST APIs, and containerized services with Java, Spring Boot, React, TypeScript, and Docker. My prior work in production environments shaped my structured, reliability-focused approach. I now focus on modular architecture, clean code practices, and scalable backend–frontend integration. In my free time I explore smart home integration and 3D printing to experiment with new technologies.`,

  EXPERIENCES: [
    {
      year: "2025 - Present",
      role: "Application Systems Analyst (Developer)",
      company: "Volkswagen AG - Group AM Sales - NADIN",
      description: `Full stack development and maintenance of sales and after-sales applications. Contributing to a new vehicle ordering solution for importers and dealers using Angular and TypeScript. Implementing new features, refactoring legacy modules, fixing defects, and collaborating closely with business stakeholders to translate requirements into user-focused solutions.`,
      technologies: ["Java", "Spring Boot", "Angular", "TypeScript", "Docker", "AWS"],
    },
    {
      year: "2023 - 2025",
      role: "Junior Software Developer (Faculty 73 Trainee)",
      company: "Volkswagen AG - Faculty 73",
      description: `Completed a structured internal full stack training program focusing on Java, Spring Boot, React, and TypeScript. Built web applications and RESTful APIs, applied clean code principles, introduced containerization with Docker, and worked with CI/CD pipelines and basic cloud concepts.`,
      technologies: ["Java", "Spring Boot", "React", "TypeScript"],
    },
    {
      year: "2022 - 2023",
      role: "Shift Programmer / Optimizer",
      company: "Volkswagen AG",
      description: `Optimized and programmed PLC systems in battery production. Developed software solutions for process improvements and automation while troubleshooting technical issues in the production environment.`,
      technologies: ["PLC Programming", "Automation Technology"],
    },
    {
      year: "2018 - 2022",
      role: "Machine Operator - Battery Production",
      company: "Volkswagen AG",
      description: `Monitored and managed production machinery in battery manufacturing. Conducted quality inspections, performed error analysis, and optimized workflows to enhance operational efficiency.`,
      technologies: ["Production Monitoring", "Quality Assurance"],
    },
    {
      year: "2016 - 2018",
      role: "Assembly Worker - Battery Production",
      company: "Volkswagen AG",
      description: `Worked in the assembly of batteries, responsible for assembling battery components and ensuring their proper function. Conducted quality checks, performed error analysis, and contributed to optimizing workflows to improve production efficiency.`,
      technologies: [
        "Battery Assembly",
        "Quality Assurance",
        "Process Optimization",
      ],
    },
    {
      year: "2016",
      role: "Assembly Worker",
      company: "Volkswagen AG",
      description: `Assembled components in plastic manufacturing. Ensured compliance with production specifications and maintained quality standards.`,
      technologies: ["Plastic Manufacturing", "Assembly Processes"],
    },
    {
      year: "2013 - 2016",
      role: "Apprentice Mechatronics Technician",
      company: "Volkswagen AG",
      description: `Completed a comprehensive apprenticeship program as a mechatronics technician. Acquired skills in mechanical and electrical systems, troubleshooting, and maintenance of industrial machinery.`,
      technologies: ["Mechatronics", "Industrial Maintenance"],
    },
  ],

  PROJECTS: [
    {
      visit: "Visit project",
      title: "Portfolio Website",
      image: IMAGES.portfolioProjectImg,
      description: `A personal portfolio website showcasing projects, skills, and contact information. The website was built using React, TypeScript, and styled with TailwindCSS to create a modern and responsive design.`,
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Vite",
        "Motion for React",
      ],
    },
    {
      visit: "View Project",
      title: "React Styling Component Library",
      image: IMAGES.sebuDevReactLibImg,
      description: `A styling library serving as a foundation for my projects, providing a consistent design and reusable UI components such as layouts, popups, buttons, cards, and input fields. During development, I had to properly configure the npm package build to ensure smooth installation via 'npm install'. The biggest challenge was setting up Rollup and the build process correctly. Through this, I learned to think modularly and design components that are flexible and adaptable across different projects.`,
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Vite",
        "Motion for React",
        "npm (Package Publishing)",
        "Rollup",
      ],
      link: "https://www.npmjs.com/package/sebu-dev-react-lib",
    },

    {
      visit: "View Project",
      title: "Fullstack Trainer",
      image: IMAGES.fullstackTrainerImg,
      description: `An interactive app for Fullstack training, built with React, TypeScript, and TailwindCSS. During development, I continuously improved my own 'sebu-dev-react-lib' as I initially encountered modularity issues. I also deepened my knowledge in state management using 'Zustand' and routing with 'React Router'. One challenge was deploying on GitHub Pages, as it does not support direct routing. The project is still in progress and designed for modular expansion.`,
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Vite",
        "Zustand",
        "React Router",
        "Motion for React",
        "sebu-dev-react-lib",
      ],
      link: "https://sebu-dev.github.io/fullstack-trainer/#/",
    },
    {
      visit: "Visit project",
      title: "Fuel Cost Calculator Web",
      image: IMAGES.fuelCostCalculatorProjectImg,
      description: `An app for calculating travel costs, built with React, TypeScript, and TailwindCSS. I learned to write custom useStates, integrate linting tools, and deepen my TypeScript skills. Challenges in responsive design were solved by optimizing redundant code and reusing components. Framer Motion ensures smooth animations.`,
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Vite",
        "Motion for React",
        "eslint",
      ],
    },

    {
      title: "Weather App",
      visit: "Visit project",
      image: IMAGES.weatherAppImg,
      description: `A weather application that provides real-time weather data based on user input. Built with React and integrates with a weather API to display current weather.`,
      technologies: [
        "React",
        "TypeScript",
        "API Integration",
        "CSS",
        "Bootstrap",
        "Vite",
      ],
    },
    {
      title: "Clothing E-Commerce Website",
      visit: "Visit project",
      image: IMAGES.clothingProjectImg,
      description: `An e-commerce platform for clothing, featuring product listing, filters, shopping cart, and user authentication. Developed using React and TypeScript for the frontend and Spring Boot for the backend. Focusing on the connection between the frontend and backend.`,
      technologies: ["React", "TypeScript", "Spring Boot", "SQL"],
    },
    {
      title: "Console-Based Shop (Java)",
      visit: "Visit project",
      image: IMAGES.consoleShopImg,
      description: `A console-based shop application that allows users to browse, add items to a cart, and complete a purchase. Developed in Java, this project focuses on creating a shopping system with basic CRUD operations and file handling.`,
      technologies: ["Java", "Console Application", "OOP", "File Handling"],
    },
    {
      title: "Java Quiz App (Android)",
      visit: "Visit project",
      image: IMAGES.quizAppImg,
      description: `An Android quiz application where users can answer single-choice questions on Java topics to learn Java theory. Built with Androidstudio.`,
      technologies: ["Java", "Android"],
    },
  ],

  CONTACT: {
    address: "Ilsede, 31246",
    phoneNo: "01741604200",
    emailPrivate: "fsebulke@gmail.com",
    emailWorking: "Florian.Sebulke@Volkswagen.de",
  },

  TECHNOLOGIES_HEADLINE: "Technologies",
  ABOUT_ME_HEADLINE: ["About", "Me"],
  GET_IN_TOUCH_HEADLINE: "Get in Touch",
  PROJECTS_HEADLINE: "Projects",
  EXPERIENCE_HEADLINE: "Experience",
  SCROLL_TO_CONTACT_TEXT: "Go to Contact",
};
