import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext.tsx";

function Experience() {

    const { translations } = useLanguage();
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className=" my-20 text-center text-4xl "> {translations.EXPERIENCE_HEADLINE}
            </motion.h2>
            <div > {translations.EXPERIENCES.map((experience, index) => (
                <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className="w-full max-w-xl lg:w-3/4 flex-wrap flex">
                        <h6 className="mb-2 font-semibold ">
                            {experience.role} - <span className="text-sm text-purple-100">
                                {experience.company}
                            </span>
                        </h6>
                        <p className="mb-4 text-neutral-400"> {experience.description}
                        </p>
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600 " >{tech}  </span>
                        ))}
                    </motion.div>
                </div>
            ))}</div>

        </div>
    )
}

export default Experience 