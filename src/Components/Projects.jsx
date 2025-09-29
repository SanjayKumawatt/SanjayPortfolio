import React, { useContext } from "react";
import { projects } from "./data/Projects";
import { ThemeContext } from "./Context/ThemeContext";
import { motion } from "framer-motion";
function Projects() {
    const [isDark, setIsDark] = useContext(ThemeContext);
    return (
        <div id="projects" className={`${isDark == "dark" ? "bg-dark text-gray-400" : "bg-light"} px-[4%]`}>
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h1 style={{ fontFamily: "Instrument Serif", fontStyle: "italic" }} className={`text-4xl font-semibold ${isDark === "dark" ? "text-gray-300 font-thin " : "text-black"} text-center`}>Projects</h1>
                <hr className="border-1 mt-4 mb-15 w-full" />
            </motion.div>
            <div className={`grid grid-cols-1 gap-15`}>
                {
                    projects.map((project) => (
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            key={project.id} className={`w-full flex justify-between max-sm:flex-col `}>
                            <img src={project.image} alt="" className={` ${isDark === "dark" ? "shadow" : "shadow-lg shadow-gray-400"} w-[40%] max-sm:w-full max-sm:mb-5 border rounded-2xl`} />
                            <div className="w-[55%] py-[1%] max-sm:w-[100%]">
                                <h1 className="text-2xl font-medium">{project.name}</h1>
                                <p className="text-lg font-medium mb-4">{project.description}</p>
                                <span className="text-lg font-medium">Technologies :-</span>
                                <div className="flex flex-wrap items-center mb-4">
                                    {
                                        project.technologies.map((tech, index) => (
                                            <p key={index} className="ml-5">{tech + ", "}</p>
                                        ))
                                    }</div>
                                <span className="text-lg font-medium">Live Demo :- </span><a href={project.url} target="_blank" rel="noopener noreferrer"><span className="text-blue-800"> {project.url}</span></a>
                                <hr className=" mt-5 hidden max-sm:block" />

                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;