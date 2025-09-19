import { MdOutlineEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";

export default function Contact() {
    return (
        <div id="contact" className="container flex flex-col justify-center items-center bg-[#090909] rounded-[2rem] p-3 sm:p-6 md:p-6 lg:p-8 text-white">
            <div className="contact-container text-center my-5 sm:my-6 md:my-8 lg:my-10 ">
                <h2 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[52px] font-[600] w-3/4 mx-auto">Let's build something amazing together</h2>
                <p className="text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-[400] text-[#707070] mt-2 sm:mt-3 md:mt-4">
                    "Let’s bring your idea to life! Drop me a message and I’ll respond as soon as possible."
                </p>
            </div>
            <div className="contact-info-container flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                <a
                    href="https://wa.me/201022047280?text=Hi%2C%20I%20just%20checked%20your%20portfolio%20and%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20services.
"
                    target="_blank"
                    className="px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 text-white rounded-lg hover:bg-gray-700 transition text-center text-xs sm:text-sm md:text-base lg:text-lg font-semibold btn hover:scale-103 hover:shadow-lg hover:shadow-[#d9d9d983] bg-[#00000075] border border-white mb-3 sm:mb-4 md:mb-5">
                    Let's Talk
                </a>
                <div className="contact-info-links flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm md:text-base lg:text-lg">
                    <p className="flex items-center justify-center gap-2">
                        <MdOutlineEmail
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                        
                        />
                        Email Address: <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[1.5rem] px-1 sm:px-2">yahya.mostafa1219@gmail.com</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                        <MdPhone className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
                        Phone Number: <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[1.5rem]">+20 10 220 47280</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
