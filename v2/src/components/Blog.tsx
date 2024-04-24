import React from 'react'

const Blog: React.FC = () => {
    return (
        <div className='font-titillium h-full text-white max-w-xl mx-auto p-4 mb-4'>
            <div className='flex items-center'>
                <h2 className='text-[25px] font-bold'>Blog</h2>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                    color='#ffffff'
                    fill='none'
                >
                    <path
                        d='M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591'
                        stroke='currentColor'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                    />
                    <path
                        d='M11 20H17'
                        stroke='currentColor'
                        stroke-width='1.5'
                        stroke-linecap='round'
                    />
                </svg>
            </div>
            <div className='my-4 flex-col'>
                <div className='flex gap-6 my-4'>
                    <div className=' place-content-start'>
                        <div className='flex flex-col items-center   '>
                            <p className='text-[14px]'>Dec 20 2023</p>
                            <div className='border-[#93c5fd] border-dashed border text-[#e2e8f0] leading-3 basis-0 text-[14px] mt-2' />
                            <div className='border-[#93c5fd] border-dashed border text-[#e2e8f0] leading-3 basis-0 text-[14px] mt-2' />
                            <div className='border-[#93c5fd] border-dashed border text-[#e2e8f0] leading-3 basis-0 text-[14px] mt-2' />
                            <div className='border-[#93c5fd] border-dashed border text-[#e2e8f0] leading-3 basis-0 text-[14px] mt-2' />
                            <div className='sm:hidden border-[#93c5fd] border-dashed border text-[#e2e8f0] leading-3 basis-0 text-[14px] mt-2' />
                            <div className='sm:hidden border-[#93c5fd] border-dashed border text-[#e2e8f0] leading-3 basis-0 text-[14px] mt-2' />
                        </div>
                    </div>

                    <div className='flex flex-col w-[50%] md:w-[70%]'>
                        <span className='text-[14px]'>Wrote an article</span>
                        <a className='font-semibold text-[14px]' href="https://ryanm.hashnode.dev/lightning-fast-apis-building-golang-crud-endpoints-with-supabase" target='_blank' rel='noopener'>
                            Lightning Fast APIs: Building Golang CRUD Endpoints with Supabase⚡️
                        </a>
                    </div>
                </div>

                <div className='flex gap-6 my-4'>
                    <div className=' place-content-start'>
                        <div className='flex flex-col items-center   '>
                            <p className='text-[14px]'>Nov 01 2023</p>
                            <div className='border-[#93c5fd] border-dashed border text-[#e2e8f0] leading-3 basis-0 text-[14px] mt-2' />
                            <div className='border-[#93c5fd] border-dashed border text-[#e2e8f0] leading-3 basis-0 text-[14px] mt-2' />
                            <div className='border-[#93c5fd] border-dashed border text-[#e2e8f0] leading-3 basis-0 text-[14px] mt-2' />
                            <div className='border-[#93c5fd] border-dashed border text-[#e2e8f0] leading-3 basis-0 text-[14px] mt-2' />
                            <div className='sm:hidden border-[#93c5fd] border-dashed border text-[#e2e8f0] leading-3 basis-0 text-[14px] mt-2' />
                            <div className='sm:hidden border-[#93c5fd] border-dashed border text-[#e2e8f0] leading-3 basis-0 text-[14px] mt-2' />
                        </div>
                    </div>

                    <div className='flex flex-col w-[50%] md:w-[70%]'>
                        <span className='text-[14px]'>Wrote an article</span>
                        <a className='font-semibold text-[14px]' href="https://ryanm.hashnode.dev/building-a-restful-api-with-supabase-nodejs-and-expressjs-a-comprehensive-guide" target='_blank' rel='noopener'>
                            Building a RESTful API with Supabase, Node.js, and Express.js: A Comprehensive Guide
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog
