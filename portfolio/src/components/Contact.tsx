import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext.tsx";

function Contact() {
    const { translations } = useLanguage();


    return (
        <div id="contact" className='border-b border-neutral-900 pb-20'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">{translations.GET_IN_TOUCH_HEADLINE}</motion.h2>
            <div className="text-center tracking-tighter">

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4"> {translations.CONTACT.address}</motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4"> {translations.CONTACT.phoneNo}</motion.p>
                <a href="#">{translations.CONTACT.email}</a>
            </div>

        </div>
    )
}

export default Contact