import { motion, type Variants } from "framer-motion";
import { BsFiletypeSql } from "react-icons/bs";
import { FaDatabase, FaJava } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiBootstrap, SiSpring, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";


const iconVariants = (duration: number): Variants => ({

    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

function Technologies() {
    const { translations } = useLanguage();

    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className=' my-20 text-center text-4xl'>{translations.TECHNOLOGIES_HEADLINE} </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <a href="https://docs.oracle.com/javase/" target="_blank" rel="noopener noreferrer">
                        <FaJava className="text-7xl text-amber-600" />
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">
                        <SiTypescript className="text-7xl text-blue-500" />
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">
                        <SiSpring className="text-7xl text-lime-400" />
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                        <SiBootstrap className="text-7xl text-purple-500" />
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <a href="https://tailwindcss.com/docs/" target="_blank" rel="noopener noreferrer">
                        <SiTailwindcss className="text-7xl text-sky-400" />
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(7)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <a href="https://h2database.com/html/main.html" target="_blank" rel="noopener noreferrer">
                        <FaDatabase className="text-7xl text-red-900" />
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <a href="https://www.h2database.com/html/main.html" target="_blank" rel="noopener noreferrer">
                        <BsFiletypeSql className="text-7xl text-orange-600" />
                    </a>
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Technologies