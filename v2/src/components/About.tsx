import React from 'react'

const About: React.FC = () => {
  return (
    <div className='font-titillium text-white max-w-xl mx-auto p-4 mb-4'>
      <p className='font-medium text-[15px] sm:text-[16px] '>
        hi i'm ryan malawa, a{' '}
        <span className='font-semibold font-serif text-[16px]'>
          software engineer.
        </span>{' '}
        I love solving problems and writing code.
      </p>
      <p className='font-medium text-[14px] sm:text-[16px] '>
        i like music and games. i enjoy design, web development and i live on
        the terminal. i use javascript, typescript, node.js, nest js, golang and
        python.
      </p>
      <p>
        i am currently interested in devops, computer vision and mobile app development.
      </p>
    </div>
  )
}
export default About
