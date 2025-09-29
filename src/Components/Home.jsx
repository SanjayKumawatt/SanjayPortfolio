import React, { useContext } from "react";
import Headers from "./UI/Header";
import { assets } from "../assets/assets";
import { ThemeContext } from "./Context/ThemeContext";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

function Home() {

    const [isDark, setIsDark] = useContext(ThemeContext);

    return (
        <div className={`${isDark === "dark" ? "bg-dark" : "bg-light"} w-full min-h-screen max-sm:px-3 max-sm:min-h-full max-sm:pb-25 overflow-hidden`} >
            <Headers />
            < motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 , delay:0.4 }}
                className="flex items-center justify-center">
                <div className={`${isDark === "dark" ? "bg-dark" : "bg-light"}  px-[4%] flex flex-col  items-center w-[50%] max-sm:w-[95%] max-sm:text-center `}>
                    <img src={assets.sk_photo} alt="" className="h-30 object-cover border-2 border-black rounded-full mb-5" />

                    <div className="text-5xl font-bold mb-6 max-sm:text-4xl max-sm:mb-3 w-full text-center">
                        <h1 style={{
                            fontFamily: "Instrument Serif"
                        }} className={`${isDark === "dark" ? "text-gray-300" : "text-black"}`}>I'm <span style={{ fontFamily: "Instrument Serif" }} className="text-gray-600"> Sanjay </span>a  <span style={{ fontFamily: "Instrument Serif" }} className="text-gray-600">Web Developer </span></h1>
                    </div>

                    <div className="mb-7 text-gray-500 font-medium max-sm:mb-5">
                        <p>I’m a MERN Stack Developer who builds beautiful and functional websites.
                            I craft clean UIs, smooth user experiences, and engaging animations using GSAP and Framer Motion.
                            With HTML, CSS, and JavaScript at the core, I focus on creating designs that are not only visually appealing but also fast, intuitive, and user-friendly.
                            I’m passionate about bringing ideas to life on the web — from sleek frontends to powerful backends.
                        </p>
                    </div>

                    <a href="#projects">
                        <button className={`border-2 py-3 px-20 rounded-4xl text-xl flex items-center max-sm:h-15 max-sm:px-5  ${isDark === "dark" ? "text-gray-300 bg-black " : "text-gray-200 bg-[#0a0a0a]"}`}>
                            <span>View Projects</span>
                            <div className="mt-1 ml-0.5" >
                                <GoArrowUpRight />
                            </div>
                        </button>
                    </a>

                </div>
            </motion.div>
        </div >
    );
}

export default Home;