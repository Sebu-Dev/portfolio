
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
export type LanguageKey = "en" | "de";
export const IMAGES = {
    portfolioProjectImg: portfolioProject,
    weatherAppImg: weatherApp,
    project1Img: project1,
    project2Img: project2,
    project3Img: project3,
    project4Img: project4,
};
export interface Contact {
    address: string;
    phoneNo: string;
    email: string;
}

export interface Language {
    ABOUT_TEXT: string;
    HERO_CONTENT: string;
    EXPERIENCES: Experience[];
    PROJECTS: Project[];
    CONTACT: Contact;
    TECHNOLOGIES_HEADLINE: string;
    ABOUT_ME_HEADLINE: string[];
    GET_IN_TOUCH_HEADLINE: string;
    PROJECTS_HEADLINE: string;
    EXPERIENCE_HEADLINE: string;
    SCROLL_TO_CONTACT_TEXT: string;
}