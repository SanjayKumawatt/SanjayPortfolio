import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
function Footer() {
    const [isDark, setIsDark] = useContext(ThemeContext);
    return (
        <div className="w-full overflow-hidden">
            {/* Top */}
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className={`${isDark === "dark" ? "bg-[#0d0d0d]" : "bg-[#000000]"} flex flex-col justify-center items-center px-[4%] py-[1%] overflow-hidden`}>
                <div className={`${isDark === "dark" ? "text-gray-300" : "text-gray-400"} text-center max-sm:flex max-sm:gap-2 max-sm:py-2`}>
                    <h1 className="text-3xl " style={{ fontFamily: "Instrument Serif", fontStyle: "italic" }} >I'm available</h1>
                    <h1 className="text-gray-100 text-4xl" style={{ fontFamily: "Instrument Serif" }}>Let's <span style={{ fontFamily: "Instrument Serif", fontStyle: "italic" }} className="text-gray-400">Connect</span></h1>
                </div>

                <div
                    className="w-full mt-4 flex justify-evenly max-sm:flex-col">
                    <a href="https://github.com/SanjayKumawatt" target="_blank" rel={"noopener noreferrer"}>
                        <div className="flex items-center gap-3 max-sm:border-b-1 max-sm:border-b-gray-500 max-sm:pb-3 w-70 border-1 border-gray-400 rounded py-1 px-1 max-sm:mb-2">
                            <FaGithub className="text-4xl text-blue-700" />
                            <div>
                                <h1 className="text-white">GitHub</h1>
                                <p className="text-sm text-gray-400">All my projects & open-source work</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/sanjay-kumawat-24479029a/" target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center gap-3 max-sm:border-b-1 max-sm:border-b-gray-500 max-sm:pb-3 w-70 border-1 border-gray-400 rounded py-1 px-1  max-sm:mb-2">
                            <FaLinkedin className="text-4xl text-blue-700" />
                            <div>
                                <h1 className="text-white">Linkedin</h1>
                                <p className="text-sm text-gray-400">Connect with me professionally</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://leetcode.com/u/sanjaykumawatt/" target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center gap-3 max-sm:border-b-1 max-sm:border-b-gray-500 max-sm:pb-3 w-70 border-1 border-gray-400 rounded py-1 px-1  max-sm:mb-2">
                            <SiLeetcode className="text-4xl text-blue-700" />
                            <div>
                                <h1 className="text-white">LeetCode</h1>
                                <p className="text-sm text-gray-400">My problem-solving journey</p>
                            </div>
                        </div>
                    </a>
                    <a href="#contact" >
                        <div className="flex items-center gap-3 max-sm:border-b-1 max-sm:border-b-gray-500 max-sm:pb-3 w-70 border-1 border-gray-400 rounded py-1 px-1  max-sm:mb-1">
                            <MdEmail className="text-4xl text-blue-700" />
                            <div>
                                <h1 className="text-white">Email</h1>
                                <p className="text-sm text-gray-400">Get in touch anytime</p>
                            </div>
                        </div>
                    </a>

                </div>

            </motion.div>
            {/* bottom */}
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2}}
                className="text-center text-gray-300 bg-[#111111] py-2">
                © {new Date().getFullYear()} Sanjay Kumawat. All rights reserved.

            </motion.div>

        </div>
    );
}

export default Footer;