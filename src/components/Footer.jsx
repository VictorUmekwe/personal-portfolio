import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-primary text-light p-3'>

        <div className=' container'>
            <ul className=' list-unstyled d-flex flex-column flex-sm-row justify-content-center align-items-center'>
               <li>
                    <a href="#hero" className=' text-decoration-none text-light'>Home</a>
               </li>
               <li className=' mx-0 mx-sm-3 my-2 my-sm-0'>
               <a href="#about" className=' text-decoration-none text-light'>About</a>
               </li>
               <li className=' me-0 me-sm-3 mb-2 mb-sm-0'>
               <a href="#projects" className=' text-decoration-none text-light'>Projects</a>
               </li>
               <li>
               <a href="#contact" className=' text-decoration-none text-light'>Contact</a>
               </li>
            </ul>
            <hr className=' w-50 mx-auto'/>
            <p className=' text-center'>
            Copyright&copy; Umekwe Victor {new Date().getFullYear()}
            </p>
        </div>

    </footer>
  )
}

export default Footer