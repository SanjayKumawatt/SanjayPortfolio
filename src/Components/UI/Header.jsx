import React, { useEffect, useState, useContext } from "react";
import { assets } from "../../assets/assets";
import { ThemeContext } from "../Context/ThemeContext";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "framer-motion";


function Headers() {
  const [isDark, setIsDark] = useContext(ThemeContext);
  const [menu, setMenu] = useState(false);

  // scroll pe menu close
  useEffect(() => {
    if (!menu) return;

    const handleScroll = () => {
      setMenu(false); // scroll karte hi menu close
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menu]);

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={`overflow-hidden flex justify-between items-center px-[4%] w-full backdrop-blur-xl ${isDark === "dark" ? "bg-dark text-gray-300" : "bg-light"
          }`}
      >
        {/* Left Side */}
        <div>
          <a href="/">
            <img
              src={isDark === "dark" ? assets.logo_white : assets.logo_black}
              className="kam h-auto max-w-32 flex "
              alt="Logo"
            />
          </a>
        </div>

        {/* Right Side */}
        <div>
          <ul
            className={`max-sm:hidden flex gap-20 text-lg font-medium  ${isDark === "dark" ? "text-gray-300" : "text-black"
              }`}
          >
            <a href="/"><li>Home</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#skills"><li>Skills</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </div>

        <ThemeToggleBtn />

        {/* Menu Icon */}
        <img
          src={isDark === "dark" ? assets.menu_icon_white : assets.menu_icon_black}
          className={` md:hidden lg:hidden sm:hidden xl:hidden h-8 ${menu ? "max-sm:hidden" : " max-sm:visible"
            }`}
          alt=""
          onClick={() => setMenu(true)}
        />
      </motion.div>

      {/* Mobile Menu */}
      {menu && (
        <div className="bg-black px-3 md:hidden sm:hidden lg:hidden xl:hidden w-[50%] h-44 fixed z-20 top-10 rounded-lg right-0 leading-loose">
          <img
            src={assets.close_icon}
            alt=""
            className="h-auto max-w-6 absolute right-5 top-3"
            onClick={() => setMenu(false)}
          />
          <ul className="text-white space-y-4 p-4">
            <a href="/"><li>Home</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#skills"><li>Skills</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Headers;
