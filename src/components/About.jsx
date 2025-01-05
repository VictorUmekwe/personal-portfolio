import React from "react";
import AboutImg from "../assets/images/FB_IMG_1735380517138.jpg";
import ViewWorkBtn from "./ViewWorkBtn";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div
      className=" bg-dark text-light py-5 min-vh-100 d-flex justify-content-center align-items-center"
      id="about"
    >
      <div className=" container">
        <div className=" flex-column-reverse flex-md-row row">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className=" col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center"
          >
            <img
              className=" img-fluid  shadow rounded "width={500} height={500}
              src={AboutImg}
              alt="about img"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className=" col-md-6 d-flex flex-column justify-content-center align-items-center"
          >
            <h2 className=" mb-5 display-1">About Me</h2>
            <p className=" text-start mb-5">
              Hi there, i am Umekwe Chigozie Victor a fullstack web developer
              with a passion for creating and managing websites and webapps, and
              i also love all things tech. When i'm not writing codes, i'm
              probably reading up on the latest development trends or practicing
              my sketching. I have been able to hone my skills in frontend
              technologies like reaactjs, bootstrap, vanilla css, html
              and javascript. I also have a good understanding of backend
              technologies like nodejs, expressjs and mongodb. I'm always
              looking to learn and improve my skills, so if you have any
              projects or ideas, do not hesitate to reach out to me. I'm
              looking forward to collaborating with you on your next project.
            </p>
            <ViewWorkBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
