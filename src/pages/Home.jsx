import React from 'react'
import Navbar from '../components/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../swiper.css';
const Home = () => {
    return (
        <div>
            <Navbar />
            <header className=' xl:px-32 sm:px-16 px-8 pt-20 pb-10 relative'>
                <div className="flex items-center gap-5 flex-col lg:flex-row">
                    <div className="lg:flex-[4] space-y-2 sm:space-y-4 md:space-y-5 lg:text-left text-center">
                        <h3 className="text-[#686868] sm:text-2xl text-xl font-semibold">From Our Hearts to Your Home</h3>
                        <h1 className="text-2xl sm:text-3xl md:text-5xl bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text">
                            A Community<span className="font-bold"> Grocery Giveaway Across Canada</span>
                        </h1>
                        <h3 className="text-[#686868] text-2xl font-semibold">Daily Basis Grocery Gift </h3>
                        <div className="flex items-center lg:justify-start justify-center gap-4 sm:pt-7 pt-4">
                            <button className='flex items-center lg:gap-8 gap-16 rounded-full p-2 pl-4 bg-gradient-to-r from-[#F7A738] to-[#F33F41] text-white text-lg font-semibold '><span className="">Get Coupon</span> <span className="flex items-center justify-center lg:w-14 lg:h-14 sm:w-10 w-8 sm:h-10 h-8 bg-[#ffffff] rounded-full"> <img src="./btn_arrow.svg" alt="" /></span></button>
                            <button className='lg:flex items-center gap-6 hidden rounded-full p-2 pr-4 border-2 border-[#F33F41] text-[#F33F41] text-lg tracking-widest'><img src="./btn_paly.svg" alt="" className='w-14 h-14' /> <span className="">Watch video</span></button>
                        </div>
                    </div>
                    <div className="lg:flex-[3] relative lg:py-0 sm:py-10 py-4">
                        <img src="./hero_img.png" alt="" className="sm:max-w-[25rem] max-w-[18rem]" />
                        <div className="absolute bg-[#FEC93E57] w-5 h-5 bottom-28 left-20 shadow-[1px_1px_110px_150px_#FEC93E57] -z-10 rounded-full"></div>
                    </div>
                </div>
                <div className="pt-8 space-y-5">
                    <div className="flex sm:items-end items-center sm:gap-2 gap-1 lg:justify-start justify-center">
                        <h2 className="font-bold md:text-3xl sm:text-2xl text-xl bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text font-[Montserrat] whitespace-nowrap">“ One year Grocery gift from,</h2><img src="./text_mr.png" className='md:w-16 sm:w-10 w-8' alt="text" /> <span className="font-bold sm:text-3xl text-2xl bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text font-[Montserrat]">”</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start sm:gap-24 gap-14  ">
                        <div className="relative">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRy9rvA4ybNUm7EUvEfeQi-PwUNWf7IRWag&usqp=CAU" alt="" className="min-w-12 min-h-12 w-12 h-12 rounded-full border-white border-2 " />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRy9rvA4ybNUm7EUvEfeQi-PwUNWf7IRWag&usqp=CAU" alt="" className="min-w-12 min-h-12 w-12 h-12 rounded-full border-white border-2 absolute top-0 left-1/2" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRy9rvA4ybNUm7EUvEfeQi-PwUNWf7IRWag&usqp=CAU" alt="" className="min-w-12 min-h-12 w-12 h-12 rounded-full border-white border-2 absolute top-0 left-full" />
                        </div>
                        <div className="text-[#686868] whitespace-nowrap">
                            <h6 className="">Our Happy Customers </h6>
                            <p className="flex items-center"> <span className=""><img src="./star.svg" className='w-4 h-4 mr-1 ' alt="" /></span>4.5 <span className='text-[#F33F41] pl-1'>{" "}  ( 6.7 Review) </span></p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 lg:flex-row flex-col lg:justify-start justify-center">
                        <div className="flex items-center gap-4">
                            <img src="./Play store.png" alt="" className='sm:w-36 w-28' />
                            <img src="./IOS.png" alt="" className='sm:w-36 w-28' />
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
                <div className="absolute left-5 flex items-center gap-4 flex-col justify-center top-1/2 -translate-y-full">
                    <span className=""></span><img src="./facebook.svg" alt="" className="" /> <img src="./facebook.svg" alt="" className="" /> <img src="./facebook.svg" alt="" className="" /><span className=""></span></div>
            </header>
            <div className="xl:px-32 sm:px-16 px-8 py-3 bg-[#F6F6F6] my-2 whitespace-nowrap">
                <marquee>
                    <div className="flex items-center justify-start gap-20  w-full">
                        <h3 className="text-xl font-medium text-[#45A843]">Jack smith just bought  2 coupons(AB)</h3>
                        <span className=""><img src="./star.svg" alt="" /></span>
                        <h3 className="text-xl font-medium text-[#45A843]">Jack smith just bought  2 coupons(AB)</h3>
                    </div>

                </marquee>
            </div>
            <section className='py-10 xl:px-32 sm:px-16 px-8'>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium bg-gradient-to-r from-[#F33F41] to-[#EFB635] inline-block text-transparent bg-clip-text">
                    Our privileged daily <span className='font-bold'>Family member</span>
                </h1>
                {/* <div className="flex items-center justify-center gap-6 mt-10">
                    <div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                        <img src="./Outer-image.png" alt="" className="w-full h-full" />
                        <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                            <img src="./Alberta.png" alt="" className='w-full h-2/3 rounded-lg' />
                            <h5 className="">Alberta</h5>
                        </div>
                    </div>
                    <div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                        <img src="./Outer-image.png" alt="" className="w-full h-full" />
                        <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                            <img src="./Alberta.png" alt="" className='w-full h-2/3 rounded-lg' />
                            <h5 className="">Alberta</h5>
                        </div>
                    </div>
                    <div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                        <img src="./Outer-image.png" alt="" className="w-full h-full" />
                        <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                            <img src="./Alberta.png" alt="" className='w-full h-2/3 rounded-lg' />
                            <h5 className="">Alberta</h5>
                        </div>
                    </div>
                    <div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                        <img src="./Outer-image.png" alt="" className="w-full h-full" />
                        <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                            <img src="./Alberta.png" alt="" className='w-full h-2/3 rounded-lg' />
                            <h5 className="">Alberta</h5>
                        </div>
                    </div>
                </div> */}
                <div className="">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}

                        className="mySwiper winersSwiper"
                    >
                        <SwiperSlide><div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                            <img src="./Outer-image.png" alt="" className="w-full h-full" />
                            <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                <img src="./Alberta.png" alt="" className='w-full h-2/3 rounded-lg' />
                                <h5 className="">Alberta</h5>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                            <img src="./Outer-image.png" alt="" className="w-full h-full" />
                            <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                <img src="./Alberta.png" alt="" className='w-full h-2/3 rounded-lg' />
                                <h5 className="">Alberta</h5>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                            <img src="./Outer-image.png" alt="" className="w-full h-full" />
                            <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                <img src="./Alberta.png" alt="" className='w-full h-2/3 rounded-lg' />
                                <h5 className="">Alberta</h5>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                            <img src="./Outer-image.png" alt="" className="w-full h-full" />
                            <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                <img src="./Alberta.png" alt="" className='w-full h-2/3 rounded-lg' />
                                <h5 className="">Alberta</h5>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                            <img src="./Outer-image.png" alt="" className="w-full h-full" />
                            <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                <img src="./Alberta.png" alt="" className='w-full h-2/3 rounded-lg' />
                                <h5 className="">Alberta</h5>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                            <img src="./Outer-image.png" alt="" className="w-full h-full" />
                            <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                <img src="./Alberta.png" alt="" className='w-full h-2/3 rounded-lg' />
                                <h5 className="">Alberta</h5>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                            <img src="./Outer-image.png" alt="" className="w-full h-full" />
                            <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                <img src="./Alberta.png" alt="" className='w-full h-2/3 rounded-lg' />
                                <h5 className="">Alberta</h5>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                            <img src="./Outer-image.png" alt="" className="w-full h-full" />
                            <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                <img src="./Alberta.png" alt="" className='w-full h-2/3 rounded-lg' />
                                <h5 className="">Alberta</h5>
                            </div>
                        </div></SwiperSlide>

                    </Swiper>
                </div>
            </section>
            <section className='flex items-center justify-between md:flex-row flex-col'>
                <div className="md:flex-1 w-full md:h-64 h-52 text-white flex items-center justify-center flex-col relative">
                    <img src="./Wine.png" className='absolute top-0 left-0 w-full h-full object-cover' alt="" />
                    <h3 className="z-10 font-bold text-4xl lg:text-5xl">60000+</h3>
                    <p className="z-10  lg:text-xl"> Our Family </p>
                </div>
                <div className="md:flex-1 w-full md:h-64 h-52 text-white flex items-center justify-center flex-col relative">
                    <img src="./Fruit.png" className='absolute top-0 left-0 w-full h-full object-cover' alt="" />
                    <h3 className="z-10 font-bold text-4xl lg:text-5xl">$5,00,000+</h3>
                    <p className="z-10  lg:text-xl"> Grocery Gift </p>
                </div>
                <div className="md:flex-1 w-full md:h-64 h-52 text-white flex items-center justify-center flex-col relative">
                    <img src="./Vegetable.png" className='absolute top-0 left-0 w-full h-full object-cover' alt="" />
                    <h3 className="z-10 font-bold text-4xl lg:text-5xl">100+</h3>
                    <p className="z-10  lg:text-xl"> Draws </p>
                </div>
            </section>
            <section className='lg:py-20 py-10 xl:px-32 sm:px-16 flex items-stretch lg:gap-3 gap-10 justify-between lg:flex-row flex-col'>
                <div className="flex-1 lg:space-y-10 space-y-5 text-left md:px-10 sm:px-0 lg:px-0 px-8">
                    <img src="./Congratulations.png" alt="" className="w-96" />
                    <div className="border-l-4 border-black">
                        <h2 className="lg:text-[2.5rem] sm:text-[2rem] text-[1.5rem] tracking-wider leading-[1.3] font-light pl-3"><span className="font-bold">
                            DailyDeals
                        </span>
                            Where <br className='lg:block hidden' />
                            Dreams Come <span className='font-semibold bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text'>True and</span><br className='lg:block hidden' /> <span className='text-[#BC8436]'>Winners Emerge Daily!"</span></h2>
                    </div>
                    <p className="">"🎉<span className="font-semibold">Jack Smith Shines!</span>🌟
                        Secures a Year's Supply of Groceries with DailyDeals. Dive into the joy of <span className='font-semibold'>winning</span> as we unravel Jack's story and reveal the daily impact of DailyDeals on their life!</p>
                    <div className="flex items-stretch lg:justify-start justify-center gap-4">
                        <button className='rounded-full p-2 px-5 bg-gradient-to-r from-[#F7A738] to-[#F33F41] text-white text-lg font-semibold'>Check all Results</button>
                        <button className='lg:flex items-center gap-4 hidden rounded-full p-2 pr-4 border-2 border-[#F33F41] text-[#F33F41] text-lg tracking-widest'><img src="./btn_paly.svg" alt="" className='w-10 h-10' /> <span className="">Watch video</span></button>
                    </div>
                </div>
                <div className="relative flex-1 bg-no-repeat bg-contain lg:bg-left bg-center sm:min-h-[28.125rem] min-h-[20.125rem]" style={{ backgroundImage: 'url(./backgrond_winners.png)' }}>
                    <div className="flex items-center gap-3 absolute lg:left-[50%] left-[60%] w-fit z-10  px-4 py-2 rounded-xl bg-[#f8f8f85b] border-[#0003] sm:text-xl text-sm top-[15%] shadow-2xl"><span className="">User Name</span>🎉 </div>
                    <div className="flex items-center justify-end flex-col text-sm gap-1 sm:scale-100 scale-75 absolute lg:left-0 md:left-[15%] left-[7%] w-28 h-40 rounded-xl  z-10  p-2 bg-[#f9f9f9] lg:bottom-[15%] sm:bottom-[10%] bottom-0" style={{ clipPath: 'polygon(0 14%, 100% 0%, 100% 100%, 0 100%)' }} >
                        <img src="./user_img.png" alt="" className="w-10 h-10 rounded-full object-contain drop-shadow-2xl" />
                        <h6 className="text-[#3B3B3B]">Fresh fruit</h6>
                        <hr className="w-1/4 border-b-[#F33F41] border-b-2" />
                        <h4 className="font-bold">$55.00</h4>
                        <p className="text-[#949494]">Free Shopping</p>
                    </div>
                    <div className="flex sm:items-center justify-end sm:flex-row flex-col text-sm sm:gap-3 pr-3 absolute shadow-xl rounded-xl  w-fit lg:left-[50%] left-[60%] z-10  p-2 bg-[#ffffff] bottom-1/4">
                        <img src="./message.png" alt="" className="sm:w-10 sm:h-10 w-6 h-6 object-contain drop-shadow-2xl" />
                        <div className="">
                            <div className="relative bg-white rounded-full shadow-xl hidden sm:block">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRy9rvA4ybNUm7EUvEfeQi-PwUNWf7IRWag&usqp=CAU" alt="" className="min-w-9 min-h-9 w-9 h-9 rounded-full border-white border-2 " />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRy9rvA4ybNUm7EUvEfeQi-PwUNWf7IRWag&usqp=CAU" alt="" className="min-w-9 min-h-9 w-9 h-9 rounded-full border-white border-2 absolute top-0 left-[15%]" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRy9rvA4ybNUm7EUvEfeQi-PwUNWf7IRWag&usqp=CAU" alt="" className="min-w-9 min-h-9 w-9 h-9 rounded-full border-white border-2 absolute top-0 left-[30%]" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRy9rvA4ybNUm7EUvEfeQi-PwUNWf7IRWag&usqp=CAU" alt="" className="min-w-9 min-h-9 w-9 h-9 rounded-full border-white border-2 absolute top-0 left-[45%]" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRy9rvA4ybNUm7EUvEfeQi-PwUNWf7IRWag&usqp=CAU" alt="" className="min-w-9 min-h-9 w-9 h-9 rounded-full border-white border-2 absolute top-0 left-[60%]" />
                            </div>
                            <p className="flex items-center pl-3"> <span className=""><img src="./star.svg" className='w-4 h-4 mr-1 ' alt="" /></span><span className='text-[#F33F41] pl-1'>120 messages</span></p>
                        </div>
                    </div>
                    <img src="user_img.png" alt="" className="sm:w-[20rem] w-[15rem] h-[15rem] sm:h-[20rem] rounded-b-full lg:left-0 left-1/2 lg:top-0 -top-[1.875rem] lg:translate-x-0 -translate-x-[60%] object-contain absolute " />
                </div>
            </section>
            <section className='xl:px-32 sm:px-16 px-8'>
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text">More <span className='font-bold'>winners</span></h3>
                    <button className='rounded-full p-2 px-5 bg-gradient-to-r from-[#F7A738] to-[#F33F41] text-white sm:text-lg text-sm font-semibold'>View All</button>
                </div>
                {/* <div className="flex items-center justify-center gap-5 py-20"> */}
                <div className="py-10">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}

                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="border-[#F33F41] group border rounded-[10px] relative w-52 hover:scale-125 h-60 hover:h-64 p-1 transition-all">
                                <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                    <img src="./line_polygon.png" alt="" className="w-full h-full object-contain" />
                                    <img src="user_img.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                </div>
                                <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                    <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                    <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                    <button className='group-hover:rounded-full rounded-lg p-2 px-5 bg-gradient-to-r from-[#F7A738] to-[#F33F41] text-white text-sm font-semibold'>View details</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="border-[#F33F41] group border rounded-[10px] relative w-52 hover:scale-125 h-60 hover:h-64 p-1 transition-all">
                                <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                    <img src="./line_polygon.png" alt="" className="w-full h-full object-contain" />
                                    <img src="user_img.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                </div>
                                <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                    <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                    <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                    <button className='group-hover:rounded-full rounded-lg p-2 px-5 bg-gradient-to-r from-[#F7A738] to-[#F33F41] text-white text-sm font-semibold'>View details</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="border-[#F33F41] group border rounded-[10px] relative w-52 hover:scale-125 h-60 hover:h-64 p-1 transition-all">
                                <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                    <img src="./line_polygon.png" alt="" className="w-full h-full object-contain" />
                                    <img src="user_img.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                </div>
                                <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                    <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                    <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                    <button className='group-hover:rounded-full rounded-lg p-2 px-5 bg-gradient-to-r from-[#F7A738] to-[#F33F41] text-white text-sm font-semibold'>View details</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="border-[#F33F41] group border rounded-[10px] relative w-52 hover:scale-125 h-60 hover:h-64 p-1 transition-all">
                                <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                    <img src="./line_polygon.png" alt="" className="w-full h-full object-contain" />
                                    <img src="user_img.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                </div>
                                <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                    <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                    <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                    <button className='group-hover:rounded-full rounded-lg p-2 px-5 bg-gradient-to-r from-[#F7A738] to-[#F33F41] text-white text-sm font-semibold'>View details</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="border-[#F33F41] group border rounded-[10px] relative w-52 hover:scale-125 h-60 hover:h-64 p-1 transition-all">
                                <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                    <img src="./line_polygon.png" alt="" className="w-full h-full object-contain" />
                                    <img src="user_img.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                </div>
                                <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                    <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                    <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                    <button className='group-hover:rounded-full rounded-lg p-2 px-5 bg-gradient-to-r from-[#F7A738] to-[#F33F41] text-white text-sm font-semibold'>View details</button>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
                {/* </div> */}
            </section>
        </div>
    )
}

export default Home