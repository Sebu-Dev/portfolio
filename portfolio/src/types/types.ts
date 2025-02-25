interface Project {
  visit: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

interface Contact {
  address: string;
  phoneNo: string;
  emailPrivate: string;
  emailWorking: string;
}

export type LanguageKey = "en" | "de";

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
