import React from "react";
import Html from '../assets/html.svg'
import ReactJs from  '../assets/react1.svg'
import Tailwind from '../assets/tailwind-css.svg'
import Nodejs from '../assets/icons8-nodejs.svg'
import Express from '../assets/icons8-express-js.svg'
import MongoDb from '../assets/mongodb.svg'
import Golang from '../assets/go.svg'

const Skills = () => {
    return (
        <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
                <div className="pl-4">
                    <p className="text-4xl inline font-bold border-b-4 border-pink-600">Skills.</p>
                    <p className="py-4">//These are the technologies I work with:</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                   <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
                      <img className="w-20 mx-auto" src={Html} alt="html icon"/>
                      <p>Html</p>
                   </div>
                   <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
                      <img className="w-20 mx-auto" src={ReactJs} alt="html icon"/>
                      <p className="mt-9">ReactJS</p>
                   </div>
                   <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
                      <img className="w-20 mx-auto" src={Tailwind} alt="html icon"/>
                      <p className="mt-10">Tailwind CSS</p>
                   </div>
                   <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
                      <img className="w-20 mx-auto" src={Nodejs} alt="html icon"/>
                      <p className="mt-10">NodeJS</p>
                   </div>
                   <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
                      <img className="w-20 mx-auto" src={Express} alt="html icon"/>
                      <p className="mt-10">Express</p>
                   </div>
                   <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
                      <img className="w-20 mx-auto" src={MongoDb} alt="html icon"/>
                      <p className="mt-10">MongoDB</p>
                   </div>
                   <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
                      <img className="w-20 mx-auto" src={Golang} alt="html icon"/>
                      <p className="mt-10">Golang</p>
                   </div>
                   <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
                      <img className="w-20 mx-auto" src={Html} alt="html icon"/>
                      <p>Html</p>
                   </div>

                </div>
            </div>
        </div>
    )
}

export default Skills
