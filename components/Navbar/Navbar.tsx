import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Briefcase, BriefcaseBusiness } from 'lucide-react'

const Navbar = () => {
    return (
        <section className='w-full h-auto overflow-hidden flex flex-row px-[4rem] shadow-lg'>
            <nav className='w-full h-[4rem] flex flex-row justify-between items-center'>

                {/* Logo */}
                <div className='h-[1.75rem] w-[8.67rem] relative'>
                    <Image src='/food-logo.png' alt='logo' fill objectFit='fill' />
                </div>

                {/* Buttons */}
                <div className='flex flex-row justify-between items-center gap-5 font-medium text-sm'>

                    <div className='flex flex-row justify-between items-center gap-6'>
                        {/* Log in Button */}
                        <button className='bg-white py-1.5 px-4 text-secondary-dark rounded-lg border border-secondary-dark transition-all duration-200 hover:py-2 hover:px-5 hover:-mx-1 hover:bg-secondary-lighter'>
                            Log in
                        </button>

                        {/* Sign up Button */}
                        <button className='bg-primary-dark py-1.5 px-4 rounded-lg text-white transition-all duration-200 
                               hover:bg-primary-darker hover:py-2 hover:px-5 hover:-mx-1'>
                            Sign up
                        </button>


                        {/* Globe + Dropdown Button */}
                        <div className='flex justify-between items-center gap-1 px-0 py-0 transition-all duration-200 hover:bg-secondary-light hover:px-1 hover:py-2 hover:-mx-1 rounded-lg'>
                            <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M12 21C9.4651 18.3899 8 15.3051 8 12C8 8.69488 9.4651 5.61005 12 3M12 21C14.5349 18.3899 16 15.3051 16 12C16 8.69488 14.5349 5.61005 12 3M20 9H4M20 15H4" />
                            </svg>
                            <span className='text-black'>EN</span>
                            <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" stroke="#e91e63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </div>

                    </div>

                    {/* Bag Icon Button */}
                    <div className='p-2 rounded-full flex justify-center items-center hover:bg-secondary-light transition-all duration-200 hover:p-3 hover:-mx-1'>
                        <BriefcaseBusiness className='w-6 h-6 text-secondary-dark' />
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
