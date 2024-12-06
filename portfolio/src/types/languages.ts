import { IMAGES } from './images';

export const LANGUAGES = {
    en: {
        ABOUT_TEXT: "English about text",
        HERO_CONTENT: "English hero content",
        EXPERIENCES: [
            {
                year: "2021",
                role: "Software Engineer",
                company: "Company A",
                description: "Worked on various projects",
                technologies: ["React", "Node.js"]
            }
        ],
        PROJECTS: [
            {
                title: "Portfolio Project",
                image: IMAGES.portfolioProjectImg,
                description: "My personal portfolio",
                technologies: ["React", "TypeScript"]
            }
        ],
        CONTACT: {
            address: "123 Main St",
            phoneNo: "+1234567890",
            email: "email@example.com"
        },
        TECHNOLOGIES_HEADLINE: "Technologies I work with",
        ABOUT_ME_HEADLINE: ["My name is John Doe", "I'm a developer from the UK"],
        GET_IN_TOUCH_HEADLINE: "Get in touch",
        PROJECTS_HEADLINE: "My Projects",
        EXPERIENCE_HEADLINE: "My Experience",
        SCROLL_TO_CONTACT_TEXT: "Scroll to contact section"
    },
    de: {
        ABOUT_TEXT: "Deutscher Text über mich",
        HERO_CONTENT: "Deutscher Heldeninhalt",
        EXPERIENCES: [
            {
                year: "2021",
                role: "Software Ingenieur",
                company: "Firma A",
                description: "Arbeit an verschiedenen Projekten",
                technologies: ["React", "Node.js"]
            }
        ],
        PROJECTS: [
            {
                title: "Portfolio Projekt",
                image: IMAGES.portfolioProjectImg,
                description: "Mein persönliches Portfolio",
                technologies: ["React", "TypeScript"]
            }
        ],
        CONTACT: {
            address: "Musterstraße 123",
            phoneNo: "+49 123 456789",
            email: "email@beispiel.de"
        },
        TECHNOLOGIES_HEADLINE: "Technologien, mit denen ich arbeite",
        ABOUT_ME_HEADLINE: ["Mein Name ist Max Mustermann", "Ich bin Entwickler aus Deutschland"],
        GET_IN_TOUCH_HEADLINE: "Kontakt aufnehmen",
        PROJECTS_HEADLINE: "Meine Projekte",
        EXPERIENCE_HEADLINE: "Meine Erfahrungen",
        SCROLL_TO_CONTACT_TEXT: "Scrollen Sie zum Kontaktbereich"
    }
};
