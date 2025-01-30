import { IMAGES } from "../types/images.ts";
import type { Language } from "../types/types.ts";

export const DE: Language = {
  HERO_CONTENT: `Ich bin Florian Sebulke, ein motivierter Junior-Softwareentwickler, der sich derzeit auf Full-Stack-Entwicklung mit Fokus auf Java und React spezialisiert. Mit meinem Hintergrund als Mechatroniker und Erfahrung in der industriellen Automatisierung bringe ich eine einzigartige Perspektive in die Softwareentwicklung ein. Mein Ziel ist es, technische Expertise mit innovativen Lösungen zu kombinieren, um zuverlässige und benutzerzentrierte Anwendungen bereitzustellen.`,

  ABOUT_TEXT: `Ich bin ein engagierter Junior-Softwareentwickler, der von einer technischen Karriere in der Mechatronik in die Welt des Software-Engineerings wechselt. Während meiner Zeit bei VW habe ich wertvolle Erfahrungen in der Prozessoptimierung und Automatisierungsprogrammierung gesammelt, die eine solide Grundlage für meine aktuelle Arbeit in der Java-Full-Stack-Entwicklung bilden. Besonders interessiert bin ich an der Erstellung effizienter und skalierbarer Lösungen mit React, Spring Boot und TypeScript. Meine Neugier für neue Technologien und meine Leidenschaft für kontinuierliches Lernen treiben mich an, Herausforderungen zu meistern und hochwertige Ergebnisse zu liefern. Wenn ich nicht programmiere, erkunde ich gerne Smart-Home-Technologien, arbeite an 3D-Druckprojekten oder verbringe Zeit in der Natur, zum Beispiel mit dem Fahrrad.`,

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
      technologies: [
        "Batteriemontage",
        "Qualitätssicherung",
        "Prozessoptimierung",
      ],
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
  ],

  PROJECTS: [
    {
      visit: "Zum Projekt",
      title: "Portfolio-Website",
      image: IMAGES.portfolioProjectImg,
      description: `Eine persönliche Portfolio-Website, die Projekte, Fähigkeiten und Kontaktinformationen präsentiert. Die Website wurde mit React und TypeScript erstellt und mit TailwindCSS für ein modernes und responsives Design gestaltet.`,
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Vite",
        "Motion for React",
      ],
    },

    {
      visit: "Zum Projekt",
      title: "Fullstack Trainer",
      image: IMAGES.fullstackTrainerImg,
      description: `Eine interaktive App zum Trainieren von Fullstack-Fähigkeiten. Während der Entwicklung habe ich meine eigene 'sebu-dev-react-lib' kontinuierlich verbessert, da ich zunächst auf Modularitätsprobleme stieß. Zudem vertiefte ich meine Kenntnisse in Zustand-Management mit 'Zustand' und Routing mit 'React Router'. Eine Herausforderung war die Bereitstellung auf GitHub Pages, da es kein direktes Routing unterstützt. Das Projekt ist weiterhin in Arbeit und modular erweiterbar.`,
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
      visit: "Zum Projekt",
      title: "React Styling Komponenten Bibliothek",
      image: IMAGES.sebuDevReactLibImg,
      description: `Eine Styling-Library als Grundlage für meine Projekte, die ein einheitliches Design und wiederverwendbare UI-Komponenten wie Layouts, Popups, Buttons, Cards und Input-Felder bereitstellt. Während der Entwicklung musste ich das Building des npm-Pakets korrekt konfigurieren, damit es über 'npm install' problemlos nutzbar ist. Die größte Herausforderung lag in der richtigen Konfiguration von Rollup und dem Build-Prozess. Ich habe dabei gelernt, modular zu denken und Komponenten so zu gestalten, dass sie flexibel in verschiedenen Projekten eingesetzt werden können.`,
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
      visit: "Zum Projekt",
      title: "Kraftstoff-Kosten-Rechner",
      image: IMAGES.fuelCostCalculatorProjectImg,
      description: `Eine App zur Berechnung von Fahrtkosten, erstellt mit React, TypeScript und TailwindCSS. Dabei lernte ich eigene useStates zu schreiben, Linting-Tools zu integrieren und meine TypeScript-Kenntnisse zu vertiefen. Herausforderungen im responsive Design löste ich durch Optimierung redundanten Code und Wiederverwendung von Komponenten. Framer Motion sorgt für flüssige Animationen.`,
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Vite",
        "Motion for React",
        "eslint",
      ],
      link: "https://sebu-dev.github.io/fuel_cost_calculator/",
    },
    {
      visit: "Zum Projekt",
      title: "Wetter-App",
      image: IMAGES.weatherAppImg,
      description: `Eine Wetteranwendung, die Echtzeit-Wetterdaten basierend auf Benutzereingaben bereitstellt. Entwickelt mit React und integriert mit einer Wetter-API zur Anzeige von aktuellem Wetter.`,
      technologies: [
        "React",
        "TypeScript",
        "API-Integration",
        "CSS",
        "Bootstrap",
        "Vite",
      ],
    },
    {
      visit: "Zum Projekt",
      title: "Kleidung-E-Commerce-Website",
      image: IMAGES.clothingProjectImg,
      description: `Eine E-Commerce-Plattform für Kleidung mit Produktlisten, Filtern, Einkaufswagen und Benutzeranmeldung. Entwickelt mit React und TypeScript im Frontend und Spring Boot im Backend. Fokusiert auf die verbindung von Frontenden und Backend`,
      technologies: ["React", "TypeScript", "Spring Boot", "SQL"],
    },

    {
      visit: "Zum Projekt",
      title: "Konsolenbasierter Shop (Java)",
      image: IMAGES.consoleShopImg,
      description: `Eine konsolenbasierte Shop-Anwendung, mit der Benutzer Artikel durchsuchen, in einen Warenkorb legen und einen Kauf abschließen können. Entwickelt in Java, mit Fokus auf grundlegende CRUD-Operationen und Dateiverwaltung.`,
      technologies: ["Java", "Konsolenanwendung", "OOP", "Dateiverwaltung"],
    },
    {
      visit: "Zum Projekt",
      title: "Java-Quiz-App (Android)",
      image: IMAGES.quizAppImg,
      description: `Eine Android-Quiz-App, bei der Benutzer Fragen zu Java-Themen beantworten können, um Java-Theorie zu lernen. Entwickelt mit Java und Adroidstudio.`,
      technologies: ["Java", "Android"],
    },
  ],

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
