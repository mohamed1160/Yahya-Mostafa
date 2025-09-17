import navImage from "../assets/yImage.png";
import { Link } from "react-scroll";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative flex justify-between items-center bg-[#101010] text-white mb-8 sm:mb-10 md:mb-12">
            <figure className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                <img src={navImage} alt="" className="w-full h-full object-cover shadow-lg shadow-[#d9d9d983]" />
            </figure>
            <div className="hidden sm:block">
                <ul className="flex gap-5 sm:gap-8 md:gap-10 text-base sm:text-lg">
                    <li className="hover:text-gray-600 transition cursor-pointer">
                        <Link to="info" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className="hover:text-gray-600 transition cursor-pointer">
                        <Link to="work" smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li className="hover:text-gray-600 transition cursor-pointer">
                        <Link to="contact" smooth={true} duration={500}>
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="hidden sm:block lets-talk-btn">
                <a href="https://wa.me/01022047280" target="_blank" className="btn btn-regular px-6 sm:px-8 md:px-10 py-3 sm:py-4" style={{ textShadow: "0 0 5px rgba(255,255,255,0.7), 0 0 10px rgba(255,255,255,0.5)" }}>
                    Let's Talk
                </a>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-2xl">
                <FaBars />
            </button>
            <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} bg-[#101010] absolute top-full left-0 w-full p-2`}>
                <ul className="flex flex-col gap-4 text-lg">
                    <li className="hover:text-gray-600 transition cursor-pointer">
                        <Link to="info" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li className="hover:text-gray-600 transition cursor-pointer">
                        <Link to="work" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                            Work
                        </Link>
                    </li>
                    <li className="hover:text-gray-600 transition cursor-pointer">
                        <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                            Contact Me
                        </Link>
                    </li>
                </ul>
                <div className="lets-talk-btn mt-4">
                    <a href="https://wa.me/01022047280" target="_blank" className="btn btn-regular px-6 py-3 block text-center" style={{ textShadow: "0 0 5px rgba(255,255,255,0.7), 0 0 10px rgba(255,255,255,0.5)" }}>
                        Let's Talk
                    </a>
                </div>
            </div>
        </nav>
    );
}
