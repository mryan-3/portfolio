import React, { useState } from "react";
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaLinkedin, FaGithub, } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsPersonFill } from 'react-icons/bs'

const Navbar = () => {
    const [ nav, setNav ] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className="w-full fixed h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
         <div>
            <img src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-r-design_460848-10165.jpg?size=626&ext=jpg&ga=GA1.1.456832239.1703541215&semt=ais" alt="Logo" style={{width: '70px'}}/>
         </div>
        {/*menu*/}
                <ul className="hidden md:flex ">
                    <li><Link
                         to="hero"
                         smooth={true}
                         duration={500}
                             >
                         Home    </Link>
                     </li>
                    <li><Link
                         to="about"
                         smooth={true}
                         duration={500}
                             >
                         About    </Link></li>
                    <li><Link
                         to="skills"
                         smooth={true}
                         duration={500}
                             >
                         Skills</Link></li>
                    <li><Link
                         to="project"
                         smooth={true}
                         duration={500}
                             >
                         Projects </Link></li>
                    <li><Link
                         to="contact"
                         smooth={true}
                         duration={500}
                             >
                         Contact </Link></li>
                 </ul>
        {/*hamburger*/}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
             </div>
        {/*mobile menu*/}
            <ul className={!nav ? "hidden" : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                 <li className="py-6 text-4xl">Home</li>
                 <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Experience</li>
                <li className=" py-6 text-4xl">Work</li>
                <li className="py-6 text-4xl">Contact</li>

             </ul>
        {/*social icons*/}
            <div className="hidden md:flex fixed flex-col top-[40%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900">
                        <a className="flex justify-between items-center w-full text-gray-300" href="/">LinkedIn <FaLinkedin size={30} /> </a>
                     </li>
                     <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900">
                        <a className="flex justify-between items-center w-full text-gray-300" href="/">Github<FaGithub size={30} /> </a>
                     </li>
                     <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900">
                        <a className="flex justify-between items-center w-full text-gray-300" href="/">Email <HiOutlineMail size={30} /> </a>
                     </li>
                     <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900">
                        <a className="flex justify-between items-center w-full text-gray-300" href="/">Resume <BsPersonFill size={30} /> </a>
                     </li>

                </ul>
             </div>
        </div>
    )
}

export default Navbar
