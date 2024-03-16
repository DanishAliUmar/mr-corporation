import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import Button from './Elements/Button';
import Svg from './Elements/Svg';
const Navbar = () => {
    const [openTopMenu, setopenTopMenu] = useState(false)
    return (
        <div className="relative pb-3">
            <div className='flex items-center justify-between xl:px-32 sm:px-16 px-8'>
                <NavLink to="/">
                    <img src='./nav_logo.png' alt="img" className='lg:w-[8.375rem] w-[6rem] cursor-pointer' />
                </NavLink>
                <div className="lg:flex items-center gap-5 hidden ">
                    <NavLink to="/">
                        <p className="text-xl text-[rgba(238, 0, 3, 1)] group  text-2xl flex items-center justify-center flex-col cursor-pointer"><span className='group-hover:text-[#EE0003]'>Home</span>
                            <span className="w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100"></span>
                        </p>
                    </NavLink>
                    <NavLink to="/about">
                        <p className="text-xl flex items-center justify-center flex-col group"><span className='group-hover:text-[#EE0003] cursor-pointer'>About</span> <span className="w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100"></span></p>
                    </NavLink>
                    <NavLink to="/results">
                        <p className="text-[rgba(104, 104, 104, 1)] text-xl flex items-center justify-center flex-col group"><span className='group-hover:text-[#EE0003] cursor-pointer'>Results</span><span className="w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100"></span></p>
                    </NavLink>
                    <NavLink to="/partners">
                        <p className="text-[rgba(104, 104, 104, 1)] text-xl flex items-center justify-center flex-col group"><span className='group-hover:text-[#EE0003] cursor-pointer'>Partners</span><span className="w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100"></span></p>
                    </NavLink>
                    <NavLink to="/contacts">
                        <p className="text-[rgba(104, 104, 104, 1)] text-xl flex items-center justify-center flex-col group"><span className='group-hover:text-[#EE0003] cursor-pointer'>Contacts</span><span className="w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100"></span></p>
                    </NavLink>
                </div>
                <div className="lg:flex items-center gap-5 hidden">
                    <Svg.Language className='cursor-pointer' />
                    <Svg.Wallet className='cursor-pointer' />

                    {/* <img src="./lang.svg" alt="img" className='cursor-pointer' /> */}
                    {/* <img src="./wallet.svg" alt="img" className='cursor-pointer' /> */}
                    <NavLink to="/login">
                        <Button text={'Login'} className={' px-8 py-2 !font-medium !text-base'} />
                    </NavLink>
                    <img src="./nav_img.png" alt="img" className='cursor-pointer' />
                </div>
                <img src="./hambar.svg" className='lg:hidden block cursor-pointer' alt="hambar" onClick={() => {
                    setopenTopMenu(!openTopMenu)
                }} />
            </div>
            <div className={`absolute w-full bg-white z-[9999] ${openTopMenu ? 'top-0' : '-top-[1000px]'}`}>
                <div className='flex items-center justify-between xl:px-32 sm:px-16 px-8 pb-5 border-b'>
                    <NavLink to="/">
                        <img src='./nav_logo.png' alt="img" className='lg:w-[8.375rem] w-[6rem] cursor-pointer' />
                    </NavLink>

                    <img src="./cross.svg" className='cursor-pointer' alt="cross" onClick={() => setopenTopMenu(!openTopMenu)} />
                </div>
                <div className="flex items-center justify-center flex-col gap-8 p-8">
                    <NavLink onClick={()=> setopenTopMenu(!openTopMenu)} to="/">
                        <span className='text-[#EE0003] cursor-pointer font-semibold text-xl'>Home</span>
                    </NavLink>
                    <NavLink onClick={()=> setopenTopMenu(!openTopMenu)} to="/about">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>About</span>
                    </NavLink>
                    <NavLink onClick={()=> setopenTopMenu(!openTopMenu)} to="/results">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Results</span>
                    </NavLink>
                    <NavLink onClick={()=> setopenTopMenu(!openTopMenu)} to="/partners">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Partners</span>
                    </NavLink>
                    <NavLink onClick={()=> setopenTopMenu(!openTopMenu)} to="/contacts">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Contacts</span>
                    </NavLink>
                    <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Language</span>
                    <NavLink onClick={()=> setopenTopMenu(!openTopMenu)} to="/login">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Login</span>
                    </NavLink>
                    <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Coupons</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar