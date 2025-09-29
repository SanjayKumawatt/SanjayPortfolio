import React, { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { TiHtml5 } from "react-icons/ti";
import { FaGitAlt, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiReacttable } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FiSmartphone } from "react-icons/fi"
import { assets } from "../assets/assets"
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

function Skills() {

    const [isDark, setIsDark] = useContext(ThemeContext);



    const skills = [
        { name: "HTML", icon: <TiHtml5 className="text-orange-600 text-4xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
        { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
        { name: "Node.js", icon: <FaNode className="text-green-600 text-4xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-700 text-4xl border rounded" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-4xl" /> },
        { name: "MERN Stack", icon: <SiReacttable className="text-blue-400 text-4xl" /> }, // React logo as generic for MERN
        { name: "Framer Motion", icon: <TbBrandFramerMotion className="text-pink-500 text-4xl" /> },
        { name: "", icon: <img src={assets.gsap_icon} alt="" className="h-4" /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-sky-400 text-4xl" /> },
        { name: "Git & GitHub", icon: <FaGitAlt className="text-red-600 text-4xl" /> },
        { name: "API Integration", icon: <FaJs className="text-yellow-500 text-4xl" /> }, // JS icon as generic
        { name: "Responsive Design", icon: <FiSmartphone className="text-blue-400 text-4xl" /> } // React icon as generic
    ];
    return (
        <div
            id="skills" className={` ${isDark === "dark" ? "bg-dark text-gray-400 font-thin" : "bg-light"} max-sm:w-full w-full min-h-screen overflow-hidden py-10 px-[4%] max-sm:py-0 sm:py-0`}>
            <div
                className="text-center w-full">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}

                >
                    <h1 style={{ fontFamily: "Instrument Serif", fontStyle: "italic" }} className={`text-4xl font-semibold ${isDark === "dark" ? "text-gray-300 font-thin " : "text-black"} `}>Skills</h1>
                    <hr className="border-1 mt-4 mb-4 w-full" />

                    <p className={`text-5xl ${isDark === "dark" ? "text-gray-500" : "text-black"} max-sm:text-2xl `} style={{ fontFamily: "Instrument Serif" }} >
                        I turn ideas into fast, functional, and visually smooth web products. I specialize in building responsive websites with React, MERN stack, and creating engaging animations.
                    </p>
                </motion.div>
                <div className="grid grid-cols-5 gap-7 max-sm:grid-cols-2 mt-7 ">
                    {
                        skills.map((skill, index) => (
                            <motion.div
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                key={index} className={`${isDark === "dark" ? "bg-black" : "bg-white shadow-lg shadow-gray-400 "} font-medium   rounded-4xl border border-gray-300  text-center flex items-center justify-center gap-2 py-2 max-sm:px-5 max-sm:w-full `}>
                                <span>{skill.icon}</span>
                                <span className="text-lg"> {skill.name}</span>
                            </motion.div>
                        ))
                    }

                </div>


            </div>
        </div>
    );
}

export default Skills;