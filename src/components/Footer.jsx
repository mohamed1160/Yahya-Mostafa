import { FaRegCopyright } from "react-icons/fa6";
import yImage from "../assets/yImage.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="py-2 sm:py-3 md:py-4 lg:py-5 mt-8 sm:mt-10 md:mt-15 lg:mt-25 px-2 sm:px-3 md:px-4 lg:px-5">
            <div className="container flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                <figure>
                    <img src={yImage} alt="" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
                </figure>
                <p className="text-xs sm:text-sm md:text-base lg:text-[1rem]">
                    Copyright <FaRegCopyright className="inline-block" />
                    <span className="font-bold" style={{ textShadow: "0 0 5px rgba(255,255,255,0.7), 0 0 10px rgba(255,255,255,0.5)" }}>
                        Yahya Mostafa
                    </span>
                    2025. All rights reserved.
                </p>
                <ul className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5 text-base sm:text-lg md:text-xl lg:text-[22px]">
                    <li className="hover:text-gray-400  transition cursor-pointer">
                        <a href="https://www.linkedin.com/in/yahya-mostafa-899536372/" target="_blank">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="hover:text-gray-400  transition cursor-pointer">
                        <a href="https://www.behance.net/yahyamostafa8" target="_blank">
                            <FaBehance />
                        </a>
                    </li>
                    <li className="hover:text-gray-400 transition cursor-pointer">
                        <a
                            href="https://wa.me/201022047280?text=Hi%2C%20I%20just%20checked%20your%20portfolio%20and%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20services."
                            target="_blank">
                            <FaWhatsapp />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
