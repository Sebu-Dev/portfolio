import { motion } from "motion/react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { CONTACT } from "../constants/index.tsx";

function Contact() {
    return (
        <div id="contact" className='border-b border-neutral-900 pb-20'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">Get in Touch</motion.h2>
            <div className="text-center tracking-tighter">

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4"> {CONTACT.address}</motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4"> {CONTACT.phoneNo}</motion.p>
                <a href="#">{CONTACT.email}</a>
            </div>

        </div>
    )
}
function MailLink() {
    return (
        <motion.a
            href="https://github.com/Sebu-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block p-4 text-4xl text-black hover:text-white transition"
            whileHover={{
                scale: 1.2,
                rotate: 10,
            }}
            whileTap={{
                scale: 0.9,
            }}
        >
            <FaGithub />
            <motion.div
                className="absolute inset-0 -z-10 rounded-full bg-purple-400 blur-lg opacity-50"
                whileHover={{
                    scale: 1,
                    opacity: 0.5,
                }}
            />
            <AiOutlineMail />

        </motion.a>
    );
}
export default Contact