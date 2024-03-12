import React, { useState } from 'react'
const Navbar = () => {
    const [openTopMenu, setopenTopMenu] = useState(false)
    return (
        <div className="relative">
            <div className='flex items-center justify-between xl:px-32 sm:px-16 px-8'>
                <img src='./nav_logo.png' alt="img" className='lg:w-[8.375rem] w-[6rem] cursor-pointer' />
                <div className="lg:flex items-center gap-5 hidden ">
                    <p className="text-[rgba(238, 0, 3, 1)] text-2xl font-semibold flex items-center justify-center flex-col group text-[#EE0003] cursor-pointer"><span className='group-hover:text-[#EE0003]'>Home</span>
                        <span className="w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100"></span>
                    </p>
                    <p className="text-[rgba(104, 104, 104, 1)] text-xl flex items-center justify-center flex-col group"><span className='group-hover:text-[#EE0003] cursor-pointer'>About</span> <span className="w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100"></span></p>
                    <p className="text-[rgba(104, 104, 104, 1)] text-xl flex items-center justify-center flex-col group"><span className='group-hover:text-[#EE0003] cursor-pointer'>Results</span><span className="w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100"></span></p>
                    <p className="text-[rgba(104, 104, 104, 1)] text-xl flex items-center justify-center flex-col group"><span className='group-hover:text-[#EE0003] cursor-pointer'>Partners</span><span className="w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100"></span></p>
                    <p className="text-[rgba(104, 104, 104, 1)] text-xl flex items-center justify-center flex-col group"><span className='group-hover:text-[#EE0003] cursor-pointer'>Contacts</span><span className="w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100"></span></p>
                </div>
                <div className="lg:flex items-center gap-5 hidden">
                    <img src="./lang.svg" alt="img" className='cursor-pointer' />
                    <img src="./wallet.svg" alt="img" className='cursor-pointer' />
                    <button className='bg-gradient-to-r from-[#E84A4A] to-[#F7A738] px-8 py-2 rounded-full font-medium text-white cursor-pointer'>Login</button>
                    <img src="./nav_img.png" alt="img" className='cursor-pointer' />
                </div>
                <img src="./hambar.svg" className='lg:hidden block cursor-pointer' alt="hambar" onClick={() => {
                    setopenTopMenu(!openTopMenu)
                }} />
            </div>
            <div className={`absolute w-full bg-white z-[9999] ${openTopMenu ? 'top-0' : '-top-[1000px]'}`}>
                <div className='flex items-center justify-between xl:px-32 sm:px-16 px-8 pb-5 border-b'>
                    <img src='./nav_logo.png' alt="img" className='lg:w-[8.375rem] w-[6rem] cursor-pointer' />

                    <img src="./cross.svg" className='cursor-pointer' alt="cross" onClick={() => setopenTopMenu(!openTopMenu)} />
                </div>
                <div className="flex items-center justify-center flex-col gap-8 p-8">
                    <span className='text-[#EE0003] cursor-pointer font-semibold text-xl'>Home</span>
                    <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>About</span>
                    <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Results</span>
                    <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Partners</span>
                    <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Contacts</span>
                    <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Language</span>
                    <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Login</span>
                    <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Coupons</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar