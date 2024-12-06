import type { Experience, Language, Project } from "./textTypes.tsx";
import { IMAGES } from "./textTypes.tsx";


export const DE: Language = {
    HERO_CONTENT: `Ich bin Florian Sebulke, ein motivierter Junior-Softwareentwickler, der sich derzeit auf Full-Stack-Entwicklung mit Fokus auf Java und React spezialisiert. Mit meinem Hintergrund als Mechatroniker und Erfahrung in der industriellen Automatisierung bringe ich eine einzigartige Perspektive in die Softwareentwicklung ein. Mein Ziel ist es, technische Expertise mit innovativen Lösungen zu kombinieren, um zuverlässige und benutzerzentrierte Anwendungen bereitzustellen.`,

    ABOUT_TEXT: `Mein Name ist Florian Sebulke, und ich bin ein engagierter Junior-Softwareentwickler, der von einer technischen Karriere in der Mechatronik in die Welt des Software-Engineerings wechselt. Während meiner Zeit bei VW habe ich wertvolle Erfahrungen in der Prozessoptimierung und Automatisierungsprogrammierung gesammelt, die eine solide Grundlage für meine aktuelle Arbeit in der Java-Full-Stack-Entwicklung bilden. Besonders interessiert bin ich an der Erstellung effizienter und skalierbarer Lösungen mit React, Spring Boot und TypeScript. Meine Neugier für neue Technologien und meine Leidenschaft für kontinuierliches Lernen treiben mich an, Herausforderungen zu meistern und hochwertige Ergebnisse zu liefern. Wenn ich nicht programmiere, erkunde ich gerne Smart-Home-Technologien, arbeite an 3D-Druckprojekten und tauche in die neuesten Innovationen im Bereich Virtual Engineering ein.`,

    EXPERIENCES: [
        {
            year: "2023 - Gegenwart",
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
            description: `Abschluss eines umfassenden Ausbildungsprogramms zum Mechatroniker. Erwerb von Fähigkeiten in mechanischen und elektrischen Systemen, Fehlersuche und Wartung von Industriemaschinen.`,
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
            description: `Eine Wetteranwendung, die Echtzeit-Wetterdaten basierend auf Benutzereingaben bereitstellt. Entwickelt mit React und integriert mit einer Wetter-API zur Anzeige von Prognosen, aktuellem Wetter und mehr.`,
            technologies: ["React", "TypeScript", "API-Integration", "CSS", "Bootstrap", "Vite"],
        },
        {
            title: "Kleidung-E-Commerce-Website",
            image: IMAGES.project1Img,
            description: `Eine E-Commerce-Plattform für Kleidung mit Produktlisten, Filtern, Einkaufswagen und Benutzeranmeldung. Entwickelt mit React und TypeScript im Frontend und Spring Boot im Backend.`,
            technologies: ["React", "TypeScript", "Spring Boot", "SQL"],
        },
        {
            title: "Dungeon Crawler-Spiel",
            image: IMAGES.project2Img,
            description: `Ein textbasiertes Dungeon-Crawler-Spiel, bei dem Spieler verschiedene Level durchlaufen, Gegner bekämpfen und Gegenstände sammeln. Entwickelt in Java für die Backend-Logik und Benutzerinteraktion in der Konsole.`,
            technologies: ["Java", "Konsolenanwendung", "OOP"],
        },
        {
            title: "Flaggen-Spiel (Android-App)",
            image: IMAGES.project3Img,
            description: `Eine Android-App, mit der Benutzer Flaggen aus der ganzen Welt erraten können. Benutzer können ihr Wissen über globale Flaggen mit Quizzen und Herausforderungen testen. Entwickelt mit Java für die Android-Entwicklung.`,
            technologies: ["Java", "Android"],
        },
        {
            title: "Konsolenbasierter Shop (Java)",
            image: IMAGES.project4Img,
            description: `Eine konsolenbasierte Shop-Anwendung, mit der Benutzer Artikel durchsuchen, in einen Warenkorb legen und einen Kauf abschließen können. Entwickelt in Java, mit Fokus auf grundlegende CRUD-Operationen und Dateiverwaltung.`,
            technologies: ["Java", "Konsolenanwendung", "OOP", "Dateiverwaltung"],
        },
        {
            title: "Java-Quiz-App (Android)",
            image: IMAGES.project4Img,
            description: `Eine Android-Quiz-App, bei der Benutzer Fragen zu Java-Themen beantworten können, um Java-Theorie zu lernen. Entwickelt mit Java und SQLite für die lokale Datenspeicherung.`,
            technologies: ["Java", "Android", "SQLite"],
        },
    ] as Project[],

    CONTACT: {
        address: "Ihre Straße, Stadt, Postleitzahl, Land",
        phoneNo: "+00 123 456 7890",
        email: "ihrname@example.com",
    },
    TECHNOLOGIES_HEADLINE: "Technologien",
    ABOUT_ME_HEADLINE: ["Über", "mich"],
    GET_IN_TOUCH_HEADLINE: "Kontakt",
    PROJECTS_HEADLINE: "Projekte",
    EXPERIENCE_HEADLINE: "Erfahrungen",
    SCROLL_TO_CONTACT_TEXT: "Zum Kontakt scrollen",
};
