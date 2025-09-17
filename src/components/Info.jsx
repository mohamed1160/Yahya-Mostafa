import yahyaImage from "../assets/yahya.jpeg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Info() {
    return (
        <>
            <div
                id="info"
                className="hero-banner-container flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-20 bg-[#00000075] rounded-[2rem] py-6 sm:py-8 px-3 sm:px-4 lg:px-8">
                <div className="image-container w-[240px] h-[360px] sm:w-[280px] sm:h-[420px] md:w-[300px] md:h-[380px] lg:w-[341px] lg:h-[524px] shrink-0 relative order-2 lg:order-1">
                    {" "}
                    <img
                        src={yahyaImage}
                        alt="Yahya Mostafa"
                        className="w-full h-full object-cover rounded-tl-[32px] lg:rounded-tl-[64px] rounded-tr-[32px] lg:rounded-tr-[64px] shadow-lg shadow-[#d9d9d983]"
                    />{" "}
                </div>
                <div className="info-container flex flex-col gap-3 sm:gap-4 lg:gap-5 w-full lg:w-1/2 pt-6 sm:pt-8 lg:pt-15 text-center lg:text-left order-1 lg:order-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 lg:mb-5">
                        Welcome to{" "}
                        <span
                            style={{
                                textShadow: "0 0 5px rgba(255,255,255,0.7), 0 0 10px rgba(255,255,255,0.5)",
                            }}>
                            Yahya's{" "}
                        </span>
                        Portfolio
                    </h2>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 lg:mb-5">A UI/UX Designer</h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-md text-justify lg:text-left text-[#d2dae2ca] leading-relaxed">
                        I am Yahya Mostafa, a second-year Computer Science student at Sinai University and a passionate UI/UX Designer with one year of experience. I am always eager to learn new
                        skills and keep exploring innovative ways to create meaningful digital experiences. My love for continuous learning helps me grow, adapt, and stay inspired to craft
                        user-centered designs that truly make a difference.
                    </p>
                    <div className="social-container flex justify-center lg:justify-start">
                        <ul className="flex flex-row gap-3 sm:gap-4 lg:gap-5 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                            <li className="hover:text-gray-400 transition cursor-pointer">
                                <a href="https://www.linkedin.com/in/yahya-mostafa-899536372/" target="_blank" aria-label="LinkedIn Profile">
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="hover:text-gray-400 transition cursor-pointer">
                                <a href="https://www.behance.net/yahyamostafa8" target="_blank" aria-label="Behance Portfolio">
                                    <FaBehance />
                                </a>
                            </li>
                            <li className="hover:text-gray-400 transition cursor-pointer">
                                <a href="https://wa.me/01022047280" target="_blank" aria-label="WhatsApp Contact">
                                    <FaWhatsapp />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="w-[80%] mx-auto my-10 border-gray-300" />
        </>
    );
}
