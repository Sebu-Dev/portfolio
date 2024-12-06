

import { IMAGES } from "../types/images.ts";
import type { Experience, Language, Project } from "../types/types.ts";


export const DE: Language = {
    HERO_CONTENT: `Ich bin Florian Sebulke, ein motivierter Junior-Softwareentwickler, der sich derzeit auf Full-Stack-Entwicklung mit Fokus auf Java und React spezialisiert. Mit meinem Hintergrund als Mechatroniker und Erfahrung in der industriellen Automatisierung bringe ich eine einzigartige Perspektive in die Softwareentwicklung ein. Mein Ziel ist es, technische Expertise mit innovativen Lösungen zu kombinieren, um zuverlässige und benutzerzentrierte Anwendungen bereitzustellen.`,

    ABOUT_TEXT: `Mein Name ist Florian Sebulke, und ich bin ein engagierter Junior-Softwareentwickler, der von einer technischen Karriere in der Mechatronik in die Welt des Software-Engineerings wechselt. Während meiner Zeit bei VW habe ich wertvolle Erfahrungen in der Prozessoptimierung und Automatisierungsprogrammierung gesammelt, die eine solide Grundlage für meine aktuelle Arbeit in der Java-Full-Stack-Entwicklung bilden. Besonders interessiert bin ich an der Erstellung effizienter und skalierbarer Lösungen mit React, Spring Boot und TypeScript. Meine Neugier für neue Technologien und meine Leidenschaft für kontinuierliches Lernen treiben mich an, Herausforderungen zu meistern und hochwertige Ergebnisse zu liefern. Wenn ich nicht programmiere, erkunde ich gerne Smart-Home-Technologien, arbeite an 3D-Druckprojekten oder verbringe Zeit in der Natur, zum Beispiel mit dem Fahrrad.`,

    EXPERIENCES: [
        {
            year: "2023 - Jetzt",
            role: "Junior Softwareentwickler (Trainee)",
            company: "Volkswagen AG - Fakultät 73",
            description: `Derzeit in Ausbildung zum Full-Stack-Entwickler mit Fokus auf Java und React. Sammle Erfahrung in der Entwicklung von Webanwendungen und RESTful APIs, während ich an Backend-Strukturen und Frontend-Komponenten arbeite. Schwerpunkt auf modernen Technologien wie Spring Boot und TypeScript.`,
            technologies: ["Java", "Spring Boot", "React", "TypeScript"],
        },
        {
            year: "2022 - 2023",
            role: "Schichtprogrammierer / Optimierer",
            company: "Volkswagen AG",
            description: `Optimierung und Programmierung von SPS-Systemen in der Batteriefertigung. Entwicklung von Softwarelösungen zur Prozessverbesserung und Automatisierung sowie Fehlersuche in der Produktionsumgebung.`,
            technologies: ["SPS-Programmierung", "Automatisierungstechnik"],
        },
        {
            year: "2018 - 2022",
            role: "Maschinenführer - Batteriefertigung",
            company: "Volkswagen AG",
            description: `Überwachung und Verwaltung von Produktionsmaschinen in der Batteriefertigung. Durchführung von Qualitätskontrollen, Fehleranalysen und Optimierung von Arbeitsabläufen zur Steigerung der Betriebseffizienz.`,
            technologies: ["Produktionsüberwachung", "Qualitätssicherung"],
        },
        {
            year: "2016 - 2018",
            role: "Montagemitarbeiter - Batteriefertigung",
            company: "Volkswagen AG",
            description: `Montage von Batterieteilen und Sicherstellung ihrer ordnungsgemäßen Funktion. Durchführung von Qualitätsprüfungen, Fehleranalysen und Optimierung von Arbeitsabläufen zur Verbesserung der Produktionseffizienz.`,
            technologies: ["Batteriemontage", "Qualitätssicherung", "Prozessoptimierung"],
        },
        {
            year: "2016",
            role: "Montagemitarbeiter",
            company: "Volkswagen AG",
            description: `Montage von Komponenten in der Kunststofffertigung. Sicherstellung der Einhaltung von Produktionsspezifikationen und Aufrechterhaltung von Qualitätsstandards.`,
            technologies: ["Kunststofffertigung", "Montageprozesse"],
        },
        {
            year: "2013 - 2016",
            role: "Auszubildender Mechatroniker",
            company: "Volkswagen AG",
            description: `IHK Abschluss Mechatroniker. Erwerb von Fähigkeiten in mechanischen und elektrischen Systemen, Fehlersuche und Wartung von Industriemaschinen.`,
            technologies: ["Mechatronik", "Industrielle Wartung"],
        },
    ] as Experience[],

    PROJECTS: [
        {
            title: "Portfolio-Website",
            image: IMAGES.portfolioProjectImg,
            description: `Eine persönliche Portfolio-Website, die Projekte, Fähigkeiten und Kontaktinformationen präsentiert. Die Website wurde mit React und TypeScript erstellt und mit TailwindCSS für ein modernes und responsives Design gestaltet.`,
            technologies: ["React", "TypeScript", "TailwindCSS", "Vite", "Motion for React"],
        },
        {
            title: "Wetter-App",
            image: IMAGES.weatherAppImg,
            description: `Eine Wetteranwendung, die Echtzeit-Wetterdaten basierend auf Benutzereingaben bereitstellt. Entwickelt mit React und integriert mit einer Wetter-API zur Anzeige von aktuellem Wetter.`,
            technologies: ["React", "TypeScript", "API-Integration", "CSS", "Bootstrap", "Vite"],
        },
        {
            title: "Kleidung-E-Commerce-Website",
            image: IMAGES.clothingProjectImg,
            description: `Eine E-Commerce-Plattform für Kleidung mit Produktlisten, Filtern, Einkaufswagen und Benutzeranmeldung. Entwickelt mit React und TypeScript im Frontend und Spring Boot im Backend. Fokusiert auf die verbindung von Frontenden und Backend`,
            technologies: ["React", "TypeScript", "Spring Boot", "SQL"],
        },

        {
            title: "Konsolenbasierter Shop (Java)",
            image: IMAGES.consoleShopImg,
            description: `Eine konsolenbasierte Shop-Anwendung, mit der Benutzer Artikel durchsuchen, in einen Warenkorb legen und einen Kauf abschließen können. Entwickelt in Java, mit Fokus auf grundlegende CRUD-Operationen und Dateiverwaltung.`,
            technologies: ["Java", "Konsolenanwendung", "OOP", "Dateiverwaltung"],
        },
        {
            title: "Java-Quiz-App (Android)",
            image: IMAGES.quizAppImg,
            description: `Eine Android-Quiz-App, bei der Benutzer Fragen zu Java-Themen beantworten können, um Java-Theorie zu lernen. Entwickelt mit Java und Adroidstudio.`,
            technologies: ["Java", "Android"],
        },
    ] as Project[],

    CONTACT: {
        address: "Ilsede, 31246",
        phoneNo: "01741604200",
        emailPrivate: "fsebulke@gmail.com",
        emailWorking: "Florian.Sebulke@Volkswagen.de (SE-A/32)",
    },
    TECHNOLOGIES_HEADLINE: "Technologien",
    ABOUT_ME_HEADLINE: ["Über", "mich"],
    GET_IN_TOUCH_HEADLINE: "Kontakt",
    PROJECTS_HEADLINE: "Projekte",
    EXPERIENCE_HEADLINE: "Erfahrungen",
    SCROLL_TO_CONTACT_TEXT: "Zum Kontakt scrollen",
};
