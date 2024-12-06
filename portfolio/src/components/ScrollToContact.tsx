import { motion } from 'framer-motion';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import { LANGUAGES } from '../types/languageConfig';

const SCROLL_TO_CONTACT_TEXT = LANGUAGES.en.SCROLL_TO_CONTACT_TEXT;

function scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
}


export const ScrollToContact = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={scrollToContact}
        >
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <HiOutlineChevronDoubleDown className="text-4xl text-purple-600 lg:h-12 lg:w-12" />
            </motion.div>
            <span className="mt-2 text-sm text-neutral-400 text-center">{SCROLL_TO_CONTACT_TEXT}</span>
        </motion.div>
    );

}
