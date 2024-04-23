import React from 'react'

const Projects: React.FC = () => {
    return (
        <div className='font-titillium h-screen text-white max-w-xl mx-auto p-4 mb-4'>
            <h2 className='text-3xl font-bold'>Projects</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 my-2 gap-6'>
                <div className='flex flex-col '>
                    <h3 className='text-2xl font-semibold py-2'>Engage Iq</h3>
                    <p className='font-normal text-[16px]'>
                        Landing page for EngageIq, a customer feedback analysis page. Made using React.js, Typescript and Tailwind CSS.
                    </p>
                </div>
                <div className='flex flex-col '>
                    <h3 className='text-2xl font-semibold py-2'>Dish Decide</h3>
                    <p className='font-normal text-[16px]'>
                     FullStack App to help in deciding what to eat. Made using Next.js, React, Tailwind CSS and MongoDB.
                    </p>
                </div>
                <div className='flex flex-col '>
                    <h3 className='text-2xl font-semibold py-2'>Rently Buzz</h3>
                    <p className='font-normal text-[16px]'>
                    Backend for a property management software. Made using Nest.js and Postgres.
                    </p>
                </div>
                <div className='flex flex-col '>
                    <h3 className='text-2xl font-semibold py-2'> AgriSolve:Leaf</h3>
                    <p className='font-normal text-[16px]'>
                    Hackathon Project made uisng Next.js, Typescript, Node.js and Tailwind CSS.
                    </p>
                </div>
                <div className='flex flex-col '>
                    <h3 className='text-2xl font-semibold py-2'>SmartHome</h3>
                    <p className='font-normal text-[16px]'>
                    API for a smart meter detrection system made in Golang and Supabase.
                    </p>
                </div>
                <div className='flex flex-col '>
                    <h3 className='text-2xl font-semibold py-2'>Engage Iq</h3>
                    <p className='font-normal text-[16px]'>
                        Landing page for EngageIq, a customer feedback analysis page. Made using React.js, Typescript and Tailwind CSS.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Projects
