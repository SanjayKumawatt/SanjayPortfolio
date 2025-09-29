import React, { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { GoArrowUpRight } from "react-icons/go";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";


function Email() {

    const [isDark, setIsDark] = useContext(ThemeContext);

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [result, setResult] = React.useState("");

    const onSubmit = async (data) => {
        const formData = new FormData();

        formData.append("access_key", "df638eeb-dcac-46a1-9f03-cd538f07617b");
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);


        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Message Sent Successfully ✅");
                reset();
            } else {
                toast.error("error")
            }
        } catch (error) {
            setResult("Error: " + error.message)
        }
    };



    return (
        <div id="contact" className={`${isDark == "dark" ? "bg-dark text-gray-400" : "bg-light"} px-[4%] py-[10%] max-sm:py-[10%] min-h-screen flex flex-col items-center justify-center max-sm:min-h-full`}>
            <Toaster />
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className={`flex flex-col w-[50%] max-sm:w-[100%] max-sm:px-3 px-17 py-10 rounded-4xl shadow-[0_0_20px_4px_rgba(0,0,0,0.25)] ${isDark === "dark" ? "border border-gray-400" : ""}`}>
                <h1 style={{ fontFamily: "Instrument Serif", fontStyle: "italic" }} className={`text-4xl ${isDark === "dark" ? "text-gray-300 font-medium " : "text-black"} text-center mb-3`}>Email Me</h1>

                <form onSubmit={handleSubmit(onSubmit)}>


                    {/* Name */}
                    <div>{!errors.name ? <p className="invisible text-sm text-red-500 text-center">{"_ "}</p> : <p className="text-sm text-red-500 font-medium px-[2%]">{errors.name.message}</p>}</div>
                    <input type="text" {...register("name", { required: "Name is required" })} placeholder="Your Name" className={`w-full outline-none border-2  p-2.5 rounded-xl mb-1 ${isDark === "dark" ? "bg-black border border-gray-500" : "bg-white border-gray-700"}`} />


                    {/* Email */}
                    <div>{!errors.email ? <p className="invisible text-sm text-red-500 text-center">{"_ "}</p> : <p className="text-sm text-red-500 font-medium px-[2%]">{errors.email.message}</p>}</div>
                    <input type="email"  {...register("email", { required: "Email is required" })} placeholder="Your Email" className={`w-full outline-none border-2 p-2.5 rounded-xl  mb-1  ${isDark === "dark" ? "bg-black border border-gray-500" : "bg-white border-gray-700"}`} />


                    {/* Message */}
                    <div>{!errors.message ? <p className="invisible text-sm text-red-500 text-center">{"_ "}</p> : <p className="text-sm text-red-500 font-medium px-[2%]">{errors.message.message}</p>}</div>
                    <textarea  {...register("message", { required: "Enter your message" })} placeholder="Your Message" className={`w-full outline-none border-2  p-2.5 rounded-xl h-40   ${isDark === "dark" ? "bg-black border border-gray-500" : "bg-white border-gray-700"}`} ></textarea>
                    <p className="text-lg font-medium">If you like my work and want to collaborate, feel free to message me.</p>
                    <div className={`w-full text-center flex justify-center items-center mt-3 ${isDark === "dark" ? "text-gray-300" : "text-black"}`}>
                        <button type="submit" className={`flex justify-center items-center px-8 border-2 rounded-3xl  p-2 text-lg font-medium ${isDark === "dark" ? "bg-black" : "bg-[#010101] text-gray-200"}`} >Send Email
                            <GoArrowUpRight />
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}

export default Email;