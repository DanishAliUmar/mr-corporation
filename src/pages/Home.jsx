import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <header className=' xl:px-32 px-16 pt-20'>
                <div className="flex items-center gap-5 flex-col lg:flex-row">
                    <div className="lg:flex-[4] space-y-5 lg:text-left text-center">
                        <h3 className="text-[#686868] text-2xl font-semibold">From Our Hearts to Your Home</h3>
                        <h1 className="text-5xl bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text">
                            A Community<span className="font-bold"> Grocery Giveaway Across Canada</span>
                        </h1>
                        <h3 className="text-[#686868] text-2xl font-semibold">Daily Basis Grocery Gift </h3>
                        <div className="flex items-center lg:justify-start justify-center gap-4 pt-7">
                            <button className='flex items-center lg:gap-8 gap-16 rounded-full p-2 pl-4 bg-gradient-to-r from-[#F7A738] to-[#F33F41] text-white text-lg font-semibold '><span className="">Get Coupon</span> <span className="flex items-center justify-center lg:w-14 lg:h-14 w-10 h-10 bg-[#ffffff] rounded-full"> <img src="./btn_arrow.svg" alt="" /></span></button>
                            <button className='lg:flex items-center gap-8 hidden rounded-full p-2 pr-4 border-2 border-[#F33F41] text-[#F33F41] text-lg tracking-widest'><img src="./btn_paly.svg" alt="" className='w-14 h-14' /> <span className="">Watch video</span></button>
                        </div>
                    </div>
                    <div className="lg:flex-[3] relative lg:py-0 py-10">
                        <img src="./hero_img.png" alt="" className="max-w-[25rem]" />
                        <div className="absolute bg-[#FEC93E57] w-5 h-5 bottom-28 left-20 shadow-[1px_1px_110px_150px_#FEC93E57] -z-10 rounded-full"></div>
                    </div>
                </div>
                <div className="pt-8 space-y-5">
                    <div className="flex sm:items-end items-center sm:gap-2 gap-1 lg:justify-start justify-center">
                        <h2 className="font-bold sm:text-3xl text-2xl bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text">One year Grocery gift from,</h2><img src="./text_mr.png" className='sm:w-16 w-10' alt="text" />
                    </div>
                    <div className=""></div>
                    <div className="flex items-center gap-4 lg:flex-row flex-col lg:justify-start justify-center">
                    <div className="flex items-center gap-4">
                        <img src="./Play store.png" alt="" />
                        <img src="./IOS.png" alt="" />
                    </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center flex-col rounded-full w-16 h-16 border-[#686868] border text-[#686868]">
                                <h3 className="font-extrabold text-2xl">04</h3>
                                <h3 className="text-xs ">Hours</h3>
                            </div>
                            <div className="flex items-center justify-center flex-col rounded-full w-16 h-16 border-[#686868] border text-[#686868]">
                                <h3 className="font-extrabold text-2xl">04</h3>
                                <h3 className="text-xs ">Hours</h3>
                            </div>
                            <div className="flex items-center justify-center flex-col rounded-full w-16 h-16 border-[#686868] border text-[#686868]">
                                <h3 className="font-extrabold text-2xl">04</h3>
                                <h3 className="text-xs ">Hours</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home