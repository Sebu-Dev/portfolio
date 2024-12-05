import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/Fs-logo.png";
function GithubLink() {
    return (
        <motion.a
            href="https://github.com/dein-username"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block p-4 text-4xl text-gray-500 hover:text-white transition"
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
                className="absolute inset-0 -z-10 rounded-full bg-purple-500 blur-lg opacity-50"
                whileHover={{
                    scale: 1.5,
                    opacity: 0.8,
                }}
            />
        </motion.a>
    );
}


const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-3">

            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" className="mx-2 w-12 md:w-20 " />
            </div>
            <div className="m-8 flex  items-center justify-center gap-4 text-2xl c ">
                <a href="https://github.com/Sebu-Dev" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <GithubLink />
                <AiOutlineMail />
            </div>

        </nav>
    )
}

export default Navbar