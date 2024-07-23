import React from 'react'

const Footer: React.FC = () => {
    return (
        <div className='font-titillium text-white max-w-xl mx-auto p-4 flex  flex-col '>
            <h3 className='text-[20px] font-semibold py-2'>Contact</h3>
            <div className='flex flex-col justify-between gap-2'>
                <div className='flex gap-2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        width='20'
                        height='20'
                        color='#ffffff'
                        fill='none'
                    >
                        <path
                            d='M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6'
                            stroke='currentColor'
                            stroke-width='1.5'
                            stroke-linejoin='round'
                        />
                        <path
                            d='M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                            stroke-linejoin='round'
                        />
                    </svg>
                    <div className='flex gap-4 text-[14px] font-light'>
                        <p className=''>Mail</p>
                        <a className='flex gap-1' href='mailto:malawaryan@gmail.com'>
                            malawaryan@gmail.com
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                width='16'
                                height='16'
                                color='#ffffff'
                                fill='none'
                            >
                                <path
                                    d='M17 7L6 18'
                                    stroke='currentColor'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                />
                                <path
                                    d='M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13'
                                    stroke='currentColor'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        width='20'
                        height='20'
                        color='#ffffff'
                        fill='none'
                    >
                        <path
                            d='M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                        />
                        <path
                            d='M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                        />
                        <path
                            d='M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                            stroke-linejoin='round'
                        />
                    </svg>
                    <div className='flex gap-4 text-[14px] font-light'>
                        <p className=''>Linked In</p>
                        <a className='flex gap-1' href='https://www.linkedin.com/in/ryan-malawa/' target='_blank'>
                            Ryan Malawa
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                width='16'
                                height='16'
                                color='#ffffff'
                                fill='none'
                            >
                                <path
                                    d='M17 7L6 18'
                                    stroke='currentColor'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                />
                                <path
                                    d='M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13'
                                    stroke='currentColor'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        width='20'
                        height='20'
                        color='#ffffff'
                        fill='none'
                    >
                        <path
                            d='M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                    </svg>
                    <div className='flex gap-4 text-[14px] font-light'>
                        <p className=''>Github</p>
                        <a className='flex gap-1' href='https://github.com/mryan-3' target='_blank' rel='noopener'>
                            mryan-3
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                width='16'
                                height='16'
                                color='#ffffff'
                                fill='none'
                            >
                                <path
                                    d='M17 7L6 18'
                                    stroke='currentColor'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                />
                                <path
                                    d='M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13'
                                    stroke='currentColor'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
