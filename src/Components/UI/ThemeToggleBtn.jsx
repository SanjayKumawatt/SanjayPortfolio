import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { ThemeContext } from "../Context/ThemeContext";

function ThemeToggleBtn() {

    const [isDark, setIsDark] = useContext(ThemeContext);

    return (
        <div>
            <button>
                {
                    isDark==="dark" ? ( <img src={assets.sun_icon} onClick={()=>setIsDark("light")} alt="" /> ):( <img src={assets.moon_icon} alt="" onClick={()=>setIsDark("dark")} /> )
                }
            </button>
        </div>
    );
}

export default ThemeToggleBtn;
