import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Logo } from "sebu-dev-react-lib";
import LanguageButton from "./LanguageButton";

function GithubLink() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center cursor-pointer "
    >
      <motion.a
        href="https://github.com/Sebu-Dev"
        target="_blank"
        rel="noopener noreferrer"
        className=" relative flex items-center justify-center lg:h-12 lg:w-12 rounded-full bg-black text-white shadow-lg"
      >
        <FaGithub />
      </motion.a>
      <span className="mt-2 text-sm text-neutral-400">GitHub</span>
    </motion.div>
  );
}

const Navbar = () => {
  return (
    <nav className="mb-14 lg:mb-20 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0 items-center">
        <Logo />
      </div>
      <div className="mt-4 lg:m-8 flex items-center justify-center gap-4 text-2xl  ">
        <GithubLink />
        <LanguageButton />
      </div>
    </nav>
  );
};

export default Navbar;
