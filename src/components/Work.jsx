import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
///! Import Images
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.jpeg";


export default function Work() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "Rahal | Passenger Mobile App",
            description: "Rahal is a smart ride & delivery app designed to simplify daily transportation and delivery needs.",
            image: project4,
            link: "https://www.behance.net/gallery/234981155/Rahal-Passenger-Mobile-App",
        },
        {
            id: 2,
            title: "Liora-Furniture Website",
            description: "A furniture website designed to showcase modern collections with a clean layout and seamless shopping experience.",
            image: project2,
            link: "https://www.behance.net/gallery/233945583/Liora-Furniture-Website",
        },
        {
            id: 3,
            title: "Nova Hotel / Booking Web",
            description: "A modern and elegant hotel website designed to deliver a seamless user experience with a focus on booking and hospitality services.",
            image: project3,
            link: "https://www.behance.net/gallery/232786161/Nova-Hotel-Booking-Web",
        },
        {
            id: 4,
            title: "ELVO / Shopping Website",
            description: "ELVO is a modern shopping website that offers a seamless experience with a wide range of products, competitive prices, and reliable delivery.",
            image: project1,
            link: "https://www.behance.net/gallery/234557547/ELVO-Shopping-Website",
        },
    ]);

    return (
        <div id="work" className="my-10 sm:my-15">
            <div className="work-container-title text-center mb-5 sm:mb-8 max-w-7xl mx-auto px-3 sm:px-2 md:px-10">
                <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] font-[600]">Work Gallery</h2>
                <p className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-[400] text-[#707070] mt-2 sm:mt-4">A Gallery of unique visuals that reflect creative and innovative design</p>
            </div>
            <div className="w-full max-w-7xl mx-auto p-2 sm:p-3 md:p-10">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={40}
                    slidesPerView={1}
                    breakpoints={{
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] rounded-lg shadow-lg">
                    {projects.map((project) => (
                        <SwiperSlide key={project.id} className="flex items-center justify-center p-4 sm:p-6 md:p-2 bg-[#f2f2f20d] rounded-lg max-w-full sm:max-w-4xl mx-auto">
                            <div className="slider-container w-full h-full ">
                                <figure className="slider-img w-full h-[50%] sm:h-[60%] md:h-[440px] rounded-[1rem] sm:rounded-[2rem] overflow-hidden shadow-lg shadow-[#d9d9d983] mb-3 sm:mb-5">
                                    <img src={project.image} alt="" className="w-full h-full object-contain " />
                                </figure>
                                <div className="slider-info flex flex-col gap-2 sm:gap-3 pt-4 sm:pt-8">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold" >
                                        {project.title}
                                    </h3>
                                    <p className="text-[#707070] text-justify text-sm sm:text-[0.5rem] md:text-lg">
                                        {project.description.split(" ").slice(0, 8).join(" ") + (project.description.split(" ").length > 8 ? "..." : "")}
                                    </p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="w-full py-2 sm:py-3 mt-4 sm:mt-8 bg-[#101010] text-white rounded-lg hover:bg-gray-700 transition text-center text-sm sm:text-lg font-semibold">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
