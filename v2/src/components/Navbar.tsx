import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div className='font-titillium max-w-xl mx-auto p-4 sticky mb-6'>
      <div className='flex  justify-between items-center'>
        <h2 className='text-3xl text-white font-bold'>ryanm</h2>
        <div className='flex justify-between gap-4'>
          <h2 className='text-3xl text-white font-bold'>projects</h2>
          <h2 className='text-3xl text-white font-bold'>blog</h2>
        </div>
      </div>
    </div>
  )
}
export default Navbar
