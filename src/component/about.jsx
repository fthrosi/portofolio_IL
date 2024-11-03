import { useRef } from 'react';
import { motion,useInView } from "framer-motion";
import {FlipWords} from "./flipwords";
import "../utils/heroeffect.css";
import Particles from "./particles";

export default function Hero() {
  const words = ["Fullstack", "Front-End"];
  const className = "text-[#2eced3]";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    return(
      <div className="overflow-hidden relative xl:min-h-screen bg-black">
      <Particles className="absolute inset-0 z-10"/>
      <div className="content-wraper lg:py-20 py-5 px-5 sm:px-[clamp(1.25rem,4vw,2rem)] md:px-[clamp(3.5rem,9.3vw,6rem)] lg:px-[clamp(6rem,12.5vw,10rem)] xl:px-[clamp(10rem,18.75vw,18rem)] 2xl:px-[clamp(18rem,21.05vw,25rem)] ">
          <motion.div 
            ref={ref} 
            className="bg-transparent rounded-xl shadow-lg shadow-[#2eced3] z-50 px-[clamp(0.5rem,8.3vw,4rem)] py-[clamp(0.5rem,8.3vw,4rem)]"
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.h1 
              ref={ref}
              className={` text-white text-center text-[clamp(2.3rem,12.5vw,6rem)] md:text-[clamp(4.5rem,8.9vw,5.7rem)] lg:text-[clamp(5.7re,8.75vw,7rem)] xl:text-[clamp(6rem,8vw,8rem)] 2xl:text-[clamp(8rem,7.5vw,9rem)] font-bold`}
              initial={{ opacity: 0, y: -50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 1, delay:0.5, ease: "easeInOut" }}
            >
              About Me
            </motion.h1>
            <div className="flex flex-col md:flex-row md:gap-[clamp(1.25rem,2.7vw,1.75rem)] mt-5 lg:mt-[clamp(1.75rem,3vw,2.5rem)]">
              <div className="flex flex-col justify-center items-center md:justify-center xl:justify-start 2xl:pt-7">
                <div className="avatar">
                  <motion.div 
                    ref={ref}
                    className="relative shadow-md shadow-[#2eced3] w-[25vw] p-1 inline-flex h-[25vw] md:w-[25vw] md:h-[25vw] xl:w-[20vw] xl:h-[20vw] rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    initial={{ opacity: 0, scale: 0, x: 100 }}
                    animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0, x: -100 }}
                    transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2eced3_0%,#d8e5ef_50%,#2eced3_100%)]" />
                    <div className="w-full h-full bg-gradient-to-b from-[#00e5ff] to-[#0080ff] rounded-full backdrop-blur-3xl overflow-hidden">
                      <img src="/assets/images/profile.JPG" className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                </div>
                <div className="text-white text-center">
                  <motion.h1 
                  ref={ref}
                  className="text-[clamp(1.5rem,4vw,2rem)] md:text-[clamp(2.5rem,5.46vw,4rem)] lg:text-[clamp(3.5rem,4vw,4rem)] font-bold"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
                  >
                    Hi, I&apos;m Fathur Rosi
                  </motion.h1>
                  <motion.div 
                    ref={ref}
                    className="text-[clamp(1rem,3.5vw,1.5rem)] md:text-[clamp(1.2rem,2.3vw,1.5rem)] lg:text-[clamp(1.5rem,2.08vw,1.8rem)] xl:text-[clamp(1.5rem,1.875vw,1.8rem)] 2xl:text-[clamp(1.8rem,1.875vw,2rem)] font-normal"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
                  >
                    <FlipWords words={words} className={className}/>
                    <span className="text-[clamp(1rem,3.5vw,1.5rem)] md:text-[clamp(1.2rem,2.3vw,1.5rem)] lg:text-[clamp(1.5rem,2.08vw,1.8rem)] xl:text-[clamp(1.5rem,1.875vw,1.8rem)] 2xl:text-[clamp(1.8rem,1.875vw,2rem)] font-normal">Developer</span>
                  </motion.div>
                  <motion.div 
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
                    className="mt-2 flex justify-center space-x-4"
                  >
                    <a href="https://github.com/fthrosi" className="z-50 w-[8vw] h-[8vw] md:w-[5vw] md:h-[5vw] lg:w-[4vw] lg:h-[4vw] xl:w-[3.5vw] xl:h-[3.5vw] border border-[#2eced3] rounded-full">
                      <img src="/assets/icons/github-sign.png" className="h-full w-full object-cover"/>
                    </a>
                    <a href="https://linkedin.com/in/fathurrosi" className="z-50 w-[8vw] h-[8vw] md:w-[5vw] md:h-[5vw] lg:w-[4vw] lg:h-[4vw] xl:w-[3.5vw] xl:h-[3.5vw] border border-[#2eced3] rounded-md">
                      <img src="/assets/icons/linkedin.png" className="h-full w-full object-cover"/>
                    </a>
                    <a href="https://www.instagram.com/fathurrosi_14/" className="z-50 w-[8vw] h-[8vw] md:w-[5vw] md:h-[5vw] lg:w-[4vw] lg:h-[4vw] xl:w-[3.5vw] xl:h-[3.5vw] border border-[#2eced3] rounded-md md:rounded-lg lg:rounded-xl">
                      <img src="/assets/icons/instagram.png" className="h-full w-full object-cover"/>
                    </a>
                  </motion.div>
                </div>
              </div>
              <div className="mt-5 flex items-center">
                <motion.p 
                  ref={ref}
                  className="text-[clamp(0.8rem,2.5vw,1.2rem)] md:text-[clamp(0.8rem,1.56vw,1rem)] lg:text-[clamp(1rem,1.5vw,1.2rem)] xl:text-[clamp(1rem,1.25vw,1.2rem)] 2xl:text-[1.5rem] text-[#2eced3] text-justify"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                >
                  <motion.span
                    ref={ref}
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                  >
                    As a Full Stack Web Developer, I possess extensive and in-depth expertise in a wide range of web development technologies, including HTML, PHP, Laravel, JavaScript, React.js, Next.js, MySQL, and Firebase. I am dedicated to creating responsive, secure, and scalable web applications that not only meet business needs but also provide an optimal user experience.
                  </motion.span><br/><br/>
                  <motion.span
                    ref={ref}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
                  >
                    With a strong background in full stack development, I am capable of handling various aspects of development, from crafting engaging front-end designs to managing efficient back-end operations. My experience spans building applications from scratch to deployment, as well as optimizing application performance and security.
                  </motion.span><br/><br/>
                  <motion.span
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
                  >
                    I am constantly striving to grow and learn the latest technologies in web development, with the goal of delivering innovative and valuable solutions for every project I undertake.
                  </motion.span>
                </motion.p>
              </div>
            </div>
          <div className="content-wrapaer">
            <div ref={ref} className="flex justify-center gap-2 mt-9">
            <motion.div 
                className=" h-[clamp(0.5rem,1.8vw,0.75rem)] w-[clamp(0.5rem,1.8vw,0.75rem)] bg-[#2eced3] rounded-full"
                initial={{opacity:0, scale:0, y:100}}
                animate={isInView ? {opacity:1, scale:1, y:0} : {opacity:0, scale:0, y:100}}
                transition={{duration:1, delay:2.2, ease:"easeInOut"}}
              />
              <motion.div 
                className=" h-[clamp(0.5rem,1.8vw,0.75rem)] w-[clamp(0.5rem,1.8vw,0.75rem)] bg-[#2eced3] rounded-full"
                initial={{opacity:0, scale:0, y:100}}
                animate={isInView ? {opacity:1, scale:1, y:0} : {opacity:0, scale:0, y:100}}
                transition={{duration:1, delay:2.4, ease:"easeInOut"}}
              />
              <motion.div 
                className=" h-[clamp(0.5rem,1.8vw,0.75rem)] w-[clamp(0.5rem,1.8vw,0.75rem)] bg-[#2eced3] rounded-full"
                initial={{opacity:0, scale:0, y:100}}
                animate={isInView ? {opacity:1, scale:1, y:0} : {opacity:0, scale:0, y:100}}
                transition={{duration:1, delay:2.6, ease:"easeInOut"}}
              />
              <motion.div 
                className=" h-[clamp(0.5rem,1.8vw,0.75rem)] w-[clamp(0.5rem,1.8vw,0.75rem)] bg-[#2eced3] rounded-full"
                initial={{opacity:0, scale:0, y:100}}
                animate={isInView ? {opacity:1, scale:1, y:0} : {opacity:0, scale:0, y:100}}
                transition={{duration:1, delay:2.8, ease:"easeInOut"}}
              />
            </div>
          </div>
          </motion.div>
      </div>
    </div>
    )
  };