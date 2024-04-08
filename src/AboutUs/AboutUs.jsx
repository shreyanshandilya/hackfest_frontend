import React, { useEffect } from "react";
import Navbar from "../Navbar/navbar";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import logo from "../Group 48.png";

function AboutUs() {
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-[url('https://media.gettyimages.com/id/466343215/photo/miami-fl-salvi-pascual-and-daniel-arzuaga-use-their-computers-to-write-code-for-a-program.jpg?s=612x612&w=0&k=20&c=v2bhVxcf7tAYObE3Cbjsl4SxmkySNkPQAohFQ4vsqOo=')] bg-cover bg-no-repeat bg-[#0d0c06] jusitfy-center items-center mt-5 h-full w-full backdrop-brightness-50">
        <div className=" px-2  text-center  py-20">
         
            <h1 className="mb-8 mt-10  tracking-tight leading-none text-[#5b4ce3] text-6xl font-serif ">
              About { " "}Us
            </h1>
      
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" mx-[6vw] md:mx-[10vw] flex justify-center items-center bg-white/30 backdrop-blur-md rounded-lg shadow mb-10"
          >
            <div className="flex flex-col items-center py-10 px-10 ">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={logo}
                alt="Prof. Sanjoy Mandal"
              />
              <h5 className="mb-1 text-2xl  font-sans text-center  text-[#f9f9f9]">
                IIT ISM DHANBAD
              </h5>

              <div className="flex mt-4 md:mt-6 text-[#0d0c06]  text-2xl  font-600 ">
                <p className=" px-3 text-justify  px -10">
                  Hack Fest is a 36-hour long hackathon organised by Naresh
                  Vashisht Centre for Tinkering and Innovation (NVCTI), IIT
                  (ISM) Dhanbad, devised as a means for nurturing the growth of
                  technology in the country. It helps students by allowing them
                  to collaborate, unleash their potential and develop new skill
                  sets to push through their boundaries by working on emerging
                  topics of the technical world. HackFest is recognized as a
                  platform for students to foster technological excellence and
                  showcase their unique ideas, innovation, and execution
                  ability.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="py-8 px-2 sm:px-4 max-w-screen-xl text-center flex flex-col sm:flex-row justify-center items-center lg:py-16 mx-4 sm:mx-10">
          <motion.div
            //   ref={scope}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            layout
            transition={{ duration: 1 }}
          >
            <h1 className="mb-8 text-4xl mt-10 font-bold tracking-tight leading-none text-[#dad3a5] md:text-5xl lg:text-6xl">
              
            </h1>
            <div></div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
