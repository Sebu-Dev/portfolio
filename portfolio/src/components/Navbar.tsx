import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/Fs-logo.png";

const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-3">

            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" className="mx-2 w-12 md:w-20 " />
            </div>
            <div className="m-8 flex  items-center justify-center gap-4 text-2xl c ">
                <FaGithub />
                <AiOutlineMail />
            </div>

        </nav>
    )
}

export default Navbar