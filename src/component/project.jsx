import { motion,useInView } from "framer-motion";
import { useRef } from 'react';
import Particles from "./particles";
import Card from "./card";
const Project = () => {
  const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <div className="overflow-hidden relative min-h-screen bg-black">
        <Particles className="absolute inset-0 z-0"/>
        <div className="lg:py-20 py-5 px-5 sm:px-[clamp(1.25rem,4vw,2rem)] md:px-[clamp(3.5rem,9.3vw,6rem)] lg:px-[clamp(6rem,12.5vw,10rem)] xl:px-[clamp(10rem,18.75vw,18rem)] 2xl:px-[clamp(18rem,21.05vw,25rem)]">
            <div className="bg-transparent rounded-xl shadow-lg shadow-[#2eced3] z-50 py-[clamp(0.5rem,8.3vw,4rem)] px-[clamp(0.5rem,8.3vw,4rem)]">
                <motion.h1 
                    ref={ref}
                    className={` text-white text-center text-[clamp(2.3rem,12.5vw,6rem)] md:text-[clamp(4.5rem,8.9vw,5.7rem)] lg:text-[clamp(5.7re,8.75vw,7rem)] xl:text-[clamp(6rem,8vw,8rem)] 2xl:text-[clamp(8rem,7.5vw,9rem)] font-bold`}
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 1, delay:0.5, ease: "easeInOut" }}
                >
                My Projects
                </motion.h1>
                <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1, delay:0.7, ease: "easeInOut" }}
                >
                    <Card />
                </motion.div>
                
            </div>
        </div>
    </div>
  );
};

export default Project;
