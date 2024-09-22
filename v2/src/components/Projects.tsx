import React from 'react'

const Projects: React.FC = () => {
  return (
    <div
      id='projects'
      className='font-titillium h-full text-white max-w-xl mx-auto p-4 mb-4'
    >
      <h2 className='text-4xl font-bold'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 my-2 gap-2 md:gap-6'>
        <div className='flex flex-col '>
          <h3 className='text-[20px] font-semibold py-2 underline'>
            <a
              href='http://lexisphere-rho.vercel.app/'
              target='_blank'
              rel='noopener'
            >
              LexiSphere
            </a>
          </h3>
          <p className='font-normal text-[14px] sm:text-[16px]'>
            A collaborative text editor made using Next.js, Typescript and
            Tailwind CSS allowing real time collaborations on documents that can
            be saved and shared.
          </p>
        </div>
        <div className='flex flex-col '>
          <h3 className='text-[20px] font-semibold py-2 underline'>
            <a
              href='https://y5yya-zqaaa-aaaam-acsea-cai.icp0.io/'
              target='_blank'
              rel='noopener'
            >
              DuckBuck
            </a>
          </h3>
          <p className='font-normal text-[14px] sm:text-[16px]'>
            A memethon hackathon project built on the Internet Computer and
            using React, Tailwind CSS and Typescript.{' '}
          </p>
        </div>
        <div className='flex flex-col '>
          <h3 className='text-[20px] font-semibold py-2 underline'>
            <a
              href='https://rentlybuzz.kejani.co.ke/'
              target='_blank'
              rel='noopener'
            >
              Rently Buzz
            </a>
          </h3>
          <p className='font-normal text-[14px] sm:text-[16px]'>
            Backend for a property management software. Made using Nest.js and
            Postgres. Implemented authentication, property creation, tenant
            management and property management.
          </p>
        </div>
        <div className='flex flex-col '>
          <h3 className='text-[20px] font-semibold py-2 underline'>
            <a
              href='https://agri-solve.vercel.app/'
              target='_blank'
              rel='noopener'
            >
              {' '}
              AgriSolve:Leaf
            </a>
          </h3>
          <p className='font-normal text-[14px] sm:text-[16px]'>
            Hackathon Project made using Next.js, Typescript, Python
            and Tailwind CSS. Won 2nd Place
          </p>
        </div>
        <div className='flex flex-col '>
          <h3 className='text-[20px] font-semibold py-2 underline'>
            <a
              href='https://medilink.vercel.app'
              target='_blank'
              rel='noopener'
            >
              MediLink
            </a>
          </h3>
          <p className='font-normal text-[14px] sm:text-[16px]'>
            A telemedicine app made using React, Next.js, Typescript, Node.js,
            Tailwind CSS and GoLang for the backend.
          </p>
        </div>
        <div className='flex flex-col '>
          <h3 className='text-[20px] font-semibold py-2 underline'>Elect</h3>
          <p className='font-normal text-[14px] sm:text-[16px]'>
            A hackathon project for the national reasearch fund where we built
            an electronic voting system for voters using Nextjs, Tailwind,
            Python, Internet Computer and Motoko.
          </p>
        </div>

        <div className='flex flex-col '>
          <h3 className='text-[20px] font-semibold py-2 underline'>
            <a
              href='https://github.com/mryan-3/meeting-scheduler'
              target='_blank'
              rel='noopener'
            >
              Meeting Scheduler
            </a>
          </h3>
          <p className='font-normal text-[14px] sm:text-[16px]'>
            A full stack project for a meeting scheduler that allows users to
            create and schedule meetings on specific dates and times. Made using
            Next js, Tailwind CSS, Zutand, Node.js and MySQL.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Projects
