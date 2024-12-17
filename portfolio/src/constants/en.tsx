import { IMAGES } from "../types/images";
import type { Experience, Language, Project } from "../types/types";

export const EN: Language = {
  HERO_CONTENT: `I am Florian Sebulke, a motivated junior software developer currently specializing in full stack development with a focus on Java and React. With my background as a mechatronics technician and experience in industrial automation, I bring a unique perspective to software development. My goal is to combine technical expertise with innovative solutions to deliver reliable and user-centered applications.`,

  ABOUT_TEXT: `My name is Florian Sebulke, and I am a dedicated junior software developer transitioning from a technical career in mechatronics to the world of software engineering. During my time at VW, I gained valuable experience in process optimization and automation programming, which has laid a strong foundation for my current work in Java full stack development. I am particularly interested in creating efficient and scalable solutions using React, Spring Boot, and TypeScript. My curiosity for new technologies and passion for continuous learning drive me to overcome challenges and deliver high-quality results. When I'm not coding, I enjoy exploring smart home technologies, working on 3D printing projects, or spending time outdoors, such as cycling.`,

  EXPERIENCES: [
    {
      year: "2023 - Present",
      role: "Junior Software Developer (Trainee)",
      company: "Volkswagen AG - Faculty 73",
      description: `Currently undergoing training as a Full Stack Developer with a focus on Java and React. Gaining experience in developing web applications and RESTful APIs while working on backend structures and frontend components. Emphasizing modern technologies like Spring Boot and TypeScript.`,
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
  ] as Experience[],

  PROJECTS: [
    {
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
      title: "Weather App",
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
      image: IMAGES.clothingProjectImg,
      description: `An e-commerce platform for clothing, featuring product listing, filters, shopping cart, and user authentication. Developed using React and TypeScript for the frontend and Spring Boot for the backend. Focusing on the connection between the frontend and backend.`,
      technologies: ["React", "TypeScript", "Spring Boot", "SQL"],
    },
    {
      title: "Console-Based Shop (Java)",
      image: IMAGES.consoleShopImg,
      description: `A console-based shop application that allows users to browse, add items to a cart, and complete a purchase. Developed in Java, this project focuses on creating a shopping system with basic CRUD operations and file handling.`,
      technologies: ["Java", "Console Application", "OOP", "File Handling"],
    },
    {
      title: "Java Quiz App (Android)",
      image: IMAGES.quizAppImg,
      description: `An Android quiz application where users can answer single-choice questions on Java topics to learn Java theory. Built with Androidstudio.`,
      technologies: ["Java", "Android"],
    },
  ] as Project[],

  CONTACT: {
    address: "Ilsede, 31246",
    phoneNo: "01741604200",
    emailPrivate: "fsebulke@gmail.com",
    emailWorking: "Florian.Sebulke@Volkswagen.de (SE-A/32)",
  },

  TECHNOLOGIES_HEADLINE: "Technologies",
  ABOUT_ME_HEADLINE: ["About", "Me"],
  GET_IN_TOUCH_HEADLINE: "Get in Touch",
  PROJECTS_HEADLINE: "Projects",
  EXPERIENCE_HEADLINE: "Experience",
  SCROLL_TO_CONTACT_TEXT: "Go to Contact",
};
