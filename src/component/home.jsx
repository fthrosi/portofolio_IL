import { motion } from "framer-motion";
import "../utils/button.css";
const Home = () => {
  return (
    <div className="overflow-hidden relativ">
      <div className="absolute inset-0 bg-black -z-10"></div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img
          src="/assets/images/bg.jpg"
          alt="Background Image"
          className="absolute inset-0 -z-10"
        />
      </motion.div>

      <div className="min-h-screen flex flex-col pt-16 items-center md:px-[clamp(3.5rem,9.3vw,6rem)] px-5 sm:px-[clamp(1.25rem,4vw,2rem)] lg:px-[clamp(6rem,12.5vw,10rem)] xl:px-[clamp(10rem,18.75vw,18rem)] 2xl:px-[clamp(18rem,21.05vw,25rem)]">
        <div className="flex flex-col justify-center items-center gap-36 md:gap-32 lg:gap-24 xl:mt-40 lg:mt-80 mt-40">
          <div className="flex flex-col justify-center items-center">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <span
                className={`overflow-hidden block align-bottom text-[clamp(2.3rem,12.5vw,6rem)] md:text-[clamp(5.5rem,11.7vw,7.5rem)] lg:text-[clamp(6.7rem,10.85vw,8.7rem)] xl:text-[clamp(7rem,8.85vw,8.5rem)] 2xl:text-[clamp(8.5rem,8.4vw,10rem)] font-bold text-slate-50`}
                style={{ lineHeight: 1 }}
              >
                FATHUR ROSI
              </span>
            </motion.div>
            <motion.div
              className="text-center "
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <span
                className={`text-slate-50 text-[clamp(1.2rem,5.8vw,2.8rem)] md:text-[clamp(1.8rem,5.46vw,3.5rem)] lg:text-[clamp(3.5rem,5.4vw,4.3rem)] xl:text-[clamp(3.5rem,4.3vw,4rem)] 2xl:text-[clamp(4rem,4.04vw,4.8rem)] font-bold`}
                style={{ lineHeight: 1.2 }}
              >
                FRONT END & FULLSTACK
              </span>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <span
                className={`text-cyan-500 text-[clamp(1.2rem,5.8vw,2.8rem)] md:text-[clamp(1.8rem,5.46vw,3.5rem)] lg:text-[clamp(3.5rem,5.4vw,4.3rem)] xl:text-[clamp(3.5rem,4.3vw,4rem)] 2xl:text-[clamp(4rem,4.04vw,4.8rem)] font-bold`}
                style={{ lineHeight: 1.2 }}
              >
                DEVELOPER
              </span>
            </motion.div>
          </div>
          <div className="content-wrapaer flex flex-col justify-center items-center">
            <div className="flex justify-center pt-[5rem] md:pt-0 lg:pt-0 fade-in-up-btn ">
              <motion.button
                className=" relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                initial={{ opacity: 0, scale: 0, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#012540_0%,#02989c_35%,#012540_100%)]" />
                <a
                  href="#about"
                  className="text-[clamp(1rem,3.75vw,1.5rem)] z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-[clamp(0.75rem,2.08vw,1rem)]  py-1 text-sm font-medium text-white backdrop-blur-3xl"
                >
                  Explore Now
                </a>
              </motion.button>
            </div>
            <div className="flex justify-center gap-2 mt-9">
              <motion.div
                className=" h-[clamp(0.5rem,1.8vw,0.75rem)] w-[clamp(0.5rem,1.8vw,0.75rem)] bg-[#2eced3] rounded-full"
                initial={{ opacity: 0, scale: 0, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              />
              <motion.div
                className=" h-[clamp(0.5rem,1.8vw,0.75rem)] w-[clamp(0.5rem,1.8vw,0.75rem)] bg-[#2eced3] rounded-full"
                initial={{ opacity: 0, scale: 0, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
              />
              <motion.div
                className=" h-[clamp(0.5rem,1.8vw,0.75rem)] w-[clamp(0.5rem,1.8vw,0.75rem)] bg-[#2eced3] rounded-full"
                initial={{ opacity: 0, scale: 0, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
              />
              <motion.div
                className=" h-[clamp(0.5rem,1.8vw,0.75rem)] w-[clamp(0.5rem,1.8vw,0.75rem)] bg-[#2eced3] rounded-full"
                initial={{ opacity: 0, scale: 0, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
