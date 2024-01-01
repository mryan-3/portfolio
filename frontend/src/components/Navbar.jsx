import React, { useState } from "react";

import { FaBars, FaTimes } from 'react-icons/fa';

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Work</li>
                    <li>Contact</li>
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
            <div className="hidden"></div>
        </div>
    )
}

export default Navbar
