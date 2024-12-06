// context/LanguageContext.tsx
import React, { createContext, useContext, useState, type PropsWithChildren } from 'react';
import { LANGUAGES } from '../constants';
import type { Language, LanguageKey } from '../constants/textTypes';



interface LanguageContextProps {
    language: LanguageKey;
    toggleLanguage: () => void;
    translations: Language;
}
interface Props {
}
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<PropsWithChildren<Props>> = ({ children }) => {
    const [language, setLanguage] = useState<LanguageKey>('de');
    const translations = language === 'de' ? LANGUAGES.de : LANGUAGES.en;

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === 'de' ? 'en' : 'de'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
