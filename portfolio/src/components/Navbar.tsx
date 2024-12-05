import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import logo from "../assets/Fs-logo.png";

function scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
}
function ScrollButton() {
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
                <HiOutlineChevronDoubleDown className="text-4xl text-purple-600 h-12 w-12" />
            </motion.div>
            <span className="mt-2 text-sm text-neutral-400">Scroll to Contact</span>
        </motion.div>
    );
}


function GithubLink() {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center cursor-pointer"
        >
            <motion.a
                href="https://github.com/Sebu-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center h-12 w-12 rounded-full bg-black text-white shadow-lg"
            >
                <FaGithub />
            </motion.a>
            <span className="mt-2 text-sm text-neutral-400">GitHub</span>
        </motion.div>
    );
}



const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-3">

            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" className="mx-2 w-12 md:w-20 " />
            </div>
            <div className="m-8 flex  items-center justify-center gap-8 text-2xl  ">
                <GithubLink />

                <ScrollButton />
            </div>

        </nav>
    )
}

export default Navbar