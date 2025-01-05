import React from "react";
import ViewWorkBtn from "./ViewWorkBtn";
import HeroImg from "../assets/images/20230413_102719.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <section
      className=" pt-5 min-vh-100 d-flex justify-content-center align-items-center"
      id="hero"
    >
      <div className=" container py-md-5">
        <div className=" row">
          <div className=" col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0">
            <motion.h3
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" text-secondary fw-bold lh-1"
            >
              Victor Umekwe
            </motion.h3>
            <motion.h1
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className=" text-capitalize text-start text-primary lh-1 mb-5 display-1"
            >
              FullStack <br />
              Web Developer
            </motion.h1>
            <motion.div variants={container(1.5)}
              initial="hidden"
              animate="visible">
              <ViewWorkBtn />
            </motion.div>
          </div>

          <div  className=" col-md-6 d-flex justify-content-center justify-content-md-end">
            <motion.img initial={{x: 100,opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1, delay: 1.2}}
              className=" img-fluid rounded shadow my-5" width={500} height={500}
              src={HeroImg}
              alt="hero img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
