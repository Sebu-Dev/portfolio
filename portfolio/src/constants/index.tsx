import portfolioProject from "../assets/projects/portfolio-project.jpg";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import weatherApp from "../assets/projects/weather-App.jpg";

export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
}


export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}
export const HERO_CONTENT = `I am Florian Sebulke, a motivated junior software developer currently specializing in full stack development with a focus on Java and React. With my background as a mechatronics technician and experience in industrial automation, I bring a unique perspective to software development. My goal is to combine technical expertise with innovative solutions to deliver reliable and user-centered applications.`;

export const ABOUT_TEXT = `My name is Florian Sebulke, and I am a dedicated junior software developer transitioning from a technical career in mechatronics to the world of software engineering. During my time at VW, I gained valuable experience in process optimization and automation programming, which has laid a strong foundation for my current work in Java full stack development. I am particularly interested in creating efficient and scalable solutions using React, Spring Boot, and TypeScript. My curiosity for new technologies and passion for continuous learning drive me to overcome challenges and deliver high-quality results. When I'm not coding, I enjoy exploring smart home technologies, working on 3D printing projects, and diving into the latest innovations in virtual engineering.`;
export const EXPERIENCES: Experience[] = [
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
    year: "2016 - 2028",
    role: "Assembly Worker - Battery Production",
    company: "Volkswagen AG",
    description: `Worked in the assembly of batteries, responsible for assembling battery components and ensuring their proper function. Conducted quality checks, performed error analysis, and contributed to optimizing workflows to improve production efficiency.`,
    technologies: ["Battery Assembly", "Quality Assurance", "Process Optimization"],
  },
  {
    year: "2016 - 2016",
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
];


export const PROJECTS: Project[] = [
  {
    title: "Portfolio Website",
    image: portfolioProject,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. The website was built using React, TypeScript, and styled with TailwindCSS to create a modern and responsive design.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite", "Motion for React "],
  },
  {
    title: "Weather App",
    image: weatherApp,
    description:
      "A weather application that provides real-time weather data based on user input. Built with React and integrates with a weather API to display forecasts, current weather, and more.",
    technologies: ["React", "TypeScript", "API Integration", "CSS", "Bootstrap", "Vite"],
  },
  {
    title: "Clothing E-Commerce Website",
    image: project1,
    description:
      "A e-commerce platform for clothing, featuring product listing, filters, shopping cart, and user authentication. Developed using React and TypeScript for the frontend and Spring Boot for the backend.",
    technologies: ["React", "TypeScript", "Spring Boot", "SQL"],
  },
  {
    title: "Dungeon Crawler Game",
    image: project2,
    description:
      "A text-based dungeon crawler game where players navigate through different levels, battling enemies and collecting items. Built with Java for the backend logic and user interaction in the console.",
    technologies: ["Java", "Console Application", "OOP"],
  },
  {
    title: "Flag Games (Android App)",
    image: project3,
    description:
      "An Android app that allows users to guess flags from around the world. Users can test their knowledge of global flags with quizzes and challenges. Built with Java for Android development.",
    technologies: ["Java", "Android"],
  },
  {
    title: "Console-Based Shop (Java)",
    image: project4,
    description:
      "A console-based shop application that allows users to browse, add items to a cart, and complete a purchase. Developed in Java, this project focuses on creating a shopping system with basic CRUD operations and file handling.",
    technologies: ["Java", "Console Application", "OOP", "File Handling"],
  },
  {
    title: "Java Quiz App (Android)",
    image: project4,
    description:
      "An Android quiz application where users can answer single-choice questions on Java topics to learn Java theory. Built with Java and SQLite for local data storage.",
    technologies: ["Java", "Android", "SQLite"],
  },
];

export const CONTACT = {
  address: "Your Street, City, Postal Code, Country",
  phoneNo: "+00 123 456 7890",
  email: "yourname@example.com",
};