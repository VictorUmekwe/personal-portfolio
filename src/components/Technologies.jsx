import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { LiaNode } from "react-icons/lia";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div
      className=" bg-primary text-light p-md-5 p-sm-2 min-vh-100 d-flex justify-content-center "
      id="technologies"
    >
      <div className="container">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className=" mb-5 display-1 mt-5 mt-md-0 text-center "
        >
          Technologies
        </motion.h2>

        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}} className="container d-flex justify-content-center align-items-center gap-2 gap-md-4 h-50">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="border-color p-2"
          >
            <SiMongodb size={60} color="black" />
          </motion.div>
          <motion.div  variants={iconVariants(3)}
            initial="initial"
            animate="animate" className="border-color p-2">
            <SiExpress size={60} color="black" />
          </motion.div>
          <motion.div  variants={iconVariants(4)}
            initial="initial"
            animate="animate" className="border-color p-2">
            <FaReact size={60} color="black" />
          </motion.div>
          <motion.div  variants={iconVariants(2)}
            initial="initial"
            animate="animate" className="border-color p-2">
            <LiaNode size={60} color="black" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
