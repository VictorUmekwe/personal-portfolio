import projectItems from "../assets/projectItems"
import ProjectCard from "./ProjectCard"
import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <div className=' py-5 min-vh-100' id='projects'>
        <div  className=' container'>
            <motion.h2 whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className=' mb-5 text-center display-1'>My Projects</motion.h2>
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}} className=' row g-4'>
                 {
                    projectItems.map((project) => <ProjectCard key={project.id} projectImage={project.projectImg} projectName={project.projectTitle} projectDesc={project.projectDescription}/>  )
                 }
            </motion.div>
        </div>
    </div>
  )
}

export default Projects