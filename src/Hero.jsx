import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Countdown from "./Component/Countdown";
import logo from "./Group 48.png";
import Nav from "./Navbar/navbar";
import "./hero.css";
import Timeline from "./Component/Timeline";
import RegistrationButton from "./Component/RegistrationButton";

function Hero() {
  const sponsor = useRef(null);
  const bgAnimate = {
    hidden: {
      clipPath: "polygon(21% 27%, 77% 26%, 77% 77%, 21% 77%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 1,
      },
    },
  };

  const textAnimate1 = {
    hidden: {
      y: "50px",
      opacity: 0,
      color: "#0f0f0f",
    },
    show: {
      y: 0,
      opacity: 1,
      color: "#ffffff",
      transition: {
        ease: "easeInOut",
        duration: 1,
        staggerChildren: 0.4,
        delayChildren: 1,
      },
    },
  };
  const textAnimate2 = {
    hidden: {
      y: "50px",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,

      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 3,
      },
    },
  };
  return (
    <>
      <Element>
        <Nav refer={sponsor} />
        <motion.div
          variants={bgAnimate}
          initial="hidden"
          animate="show"
          className="max-w-screen flex justify-center items-center  bg-blend-multiply inset-0 bg-gradient-to-r from-pink-400 via-blue-300 to-green-300 animate-floatGradient"
           
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
          >
            <motion.div className="px-4 grid grid-row-3 gap-1 mx-auto max-w-screen-xl text-center py-24 lg:py-30">
              <motion.h1
                variants={textAnimate1}
                initial="hidden"
                animate="show"
                className="text-6xl flex justify-center font-extrabold tracking-tight leading-none uppercase text-white md:text-5xl lg:text-6xl"
              >
                <div>
                  <img src={logo} width="250px" alt="img" />
                </div>
              </motion.h1>
              <motion.p
                variants={textAnimate2}
                initial="hidden"
                animate="show"
                className="mb-5 overflow-x-hidden text-base font-normal text-[#efede0] lg:text-lg sm:px-16 py-5 lg:px-48"
              >
                <br />
                <div class="title">
                  <h1>HACKFEST'24  IIT (ISM)  DHANBAD  </h1>
                </div>
              </motion.p>
              <motion.p
                variants={textAnimate2}
                initial="hidden"
                animate="show"
                className="h-22 overflow-x-hidden text-base font-normal text-gray-300 lg:text-lg sm:px-16 lg:px-48"
              >
                <Countdown />
              </motion.p>
              <motion.span
                variants={textAnimate2}
                initial="hidden"
                animate="show"
                className="h-auto  overflow-y-hidden my-5 overflow-x-hidden flex justify-center text-lg font-semibold text-[#fffff] lg:text-2xl sm:px-5 bg-opacity-50 backdrop-blur-xl"
                style={{"fontFamily":"Montserrat"}}
              >
                10 TO 12 MAY, 2024
              </motion.span>
              <motion.div  className="h-auto  overflow-y-hidden my-1 overflow-x-hidden flex justify-center text-lg font-semibold text-[#fffff] lg:text-2xl sm:px-5 bg-opacity-50 backdrop-blur-xl">
                <RegistrationButton />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Element>
      <Timeline/>
    </>
  );
}
export default Hero;
// export Hero
