import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import '../swiper.css';
import Button from '../components/Elements/Button';
import Svg from '../components/Elements/Svg';
const Home = () => {

    // Define state variables for each counter
    const [familyCounter, setFamilyCounter] = useState(0);
    const [groceryCounter, setGroceryCounter] = useState(0);
    const [drawsCounter, setDrawsCounter] = useState(0);

    // Function to update counters
    const updateCounters = () => {
        // Increment each counter by a certain value
        setFamilyCounter(prevCount => prevCount + 100); // Increment by 100
        setGroceryCounter(prevCount => prevCount + 200); // Increment by 200
        setDrawsCounter(prevCount => prevCount + 10); // Increment by 10

    };

    // // Run the updateCounters function every second
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         updateCounters();
    //     }, 10); // Run every 10 milliseconds 

    //     // Clean up the interval when the component unmounts
    //     return () => clearInterval(interval);
    // }, []);


    // Define your FAQ items as an array of objects
    const faqsData = [
        {
            question: 'How does it work?',
            answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            question: 'What are the benefits?',
            answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            question: 'How many users can use it?',
            answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            question: 'Can i have custom pricing?',
            answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },

    ];

    // Define state to track which FAQ item is currently expanded
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to toggle the active FAQ item
    const toggleActiveIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <header className=' xl:px-32 sm:px-16 px-8 drop-shadow-lg pt-20 pb-10 relative'>
                <div className="flex items-center gap-5 flex-col lg:flex-row">
                    <div className="lg:flex-[4] space-y-2 sm:space-y-4 md:space-y-5 lg:text-left text-center">
                        <h3 className="text-[#686868] sm:text-2xl text-xl font-semibold">From Our Hearts to Your Home</h3>
                        <h1 className="text-2xl sm:text-3xl md:text-5xl bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text">
                            A Community<span className="font-bold"> Grocery Giveaway Across Canada</span>
                        </h1>
                        <h3 className="text-[#686868] text-2xl font-semibold">Daily Basis Grocery Gift </h3>
                        <div className="flex items-center lg:justify-start justify-center gap-4 sm:pt-7 pt-4">
                            <button className='flex items-center lg:gap-8 gap-16 hover:scale-105 rounded-full p-2 pl-4 bg-gradient-to-r hover:bg-gradient-to-l from-[#F7A738] to-[#F33F41] transition-all text-white text-lg font-semibold '><span className="">Get Coupon</span> <span className="flex items-center justify-center lg:w-14 lg:h-14 sm:w-10 w-8 sm:h-10 h-8 bg-[#ffffff] rounded-full"><Svg.BtnArrow/> </span></button>
                            <button className='lg:flex items-center gap-6 hidden hover:scale-105 transition-all rounded-full p-2 pr-4 border-2 border-[#F33F41] text-[#F33F41] text-lg tracking-widest'><Svg.PlayBtn  className='w-14 h-14' /> <span className="">Watch video</span></button>
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
                            <p className="flex items-center"> <span className=""><Svg.Star className='w-4 h-4 mr-1 '/></span>4.5 <span className='text-[#F33F41] pl-1'>{" "}  ( 6.7 Review) </span></p>
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
                    <span className="w-[2px] h-20 bg-[#D2BC81]"></span><Svg.InstagramGold className="hover:scale-110 cursor-pointer"/> <Svg.FacebookGold className="hover:scale-110 cursor-pointer"/><Svg.YoutubeGold className="hover:scale-110 cursor-pointer"/><Svg.TicktokGold className="hover:scale-110 cursor-pointer"/><span className="w-[2px] h-20 bg-[#D2BC81]"></span></div>
            </header>
            <div className="xl:px-32 sm:px-16 px-8 py-3 bg-[#F6F6F6] my-2 whitespace-nowrap">
                <marquee>
                    <div className="flex items-center justify-start gap-20  w-full">
                        <h3 className="text-xl font-medium text-[#45A843]">Jack smith just bought  2 coupons(AB)</h3>
                        <span className=""><Svg.Star className=''/></span>
                        <h3 className="text-xl font-medium text-[#45A843]">Jack smith just bought  2 coupons(AB)</h3>
                    </div>

                </marquee>
            </div>
            <section className='py-10'>
                <h1 className="text-2xl xl:px-32 sm:px-16 px-8 sm:text-3xl md:text-5xl font-medium bg-gradient-to-r from-[#F33F41] to-[#EFB635] inline-block text-transparent bg-clip-text">
                    Our privileged daily <span className='font-bold'>Family member</span>
                </h1>
                <div className="px-[5vw]">
                    <Swiper
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },

                            768: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },

                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 0,
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetween: 0,
                            }
                        }}

                        className="mySwiper winersSwiper"
                    >
                        <SwiperSlide>
                            <div className="flex items-center justify-center xl:w-[15vw] lg:w-[18vw] md:w-[22.5vw] sm:w-[30vw] w-[45vw] ">
                                <div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                                    <img src="./Outer-image.png" alt="" className="w-full h-full" />
                                    <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                        <img src="./Newfoundland.png" alt="" className='w-full h-2/3 rounded-lg' />
                                        <h5 className="">Newfoundland</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-center justify-center xl:w-[15vw] lg:w-[18vw] md:w-[22.5vw] sm:w-[30vw] w-[45vw] ">
                                <div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                                    <img src="./Outer-image.png" alt="" className="w-full h-full" />
                                    <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                        <img src="./Northwest-Territories.png" alt="" className='w-full h-2/3 rounded-lg' />
                                        <h5 className="">Northwest</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-center justify-center xl:w-[15vw] lg:w-[18vw] md:w-[22.5vw] sm:w-[30vw] w-[45vw] ">
                                <div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                                    <img src="./Outer-image.png" alt="" className="w-full h-full" />
                                    <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                        <img src="./Nunavut.png" alt="" className='w-full h-2/3 rounded-lg' />
                                        <h5 className="">Nunavut</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-center justify-center xl:w-[15vw] lg:w-[18vw] md:w-[22.5vw] sm:w-[30vw] w-[45vw] ">
                                <div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                                    <img src="./Outer-image.png" alt="" className="w-full h-full" />
                                    <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                        <img src="./Ontario.png" alt="" className='w-full h-2/3 rounded-lg' />
                                        <h5 className="">Ontario</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex items-center justify-center xl:w-[15vw] lg:w-[18vw] md:w-[22.5vw] sm:w-[30vw] w-[45vw] ">
                                <div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                                    <img src="./Outer-image.png" alt="" className="w-full h-full" />
                                    <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                        <img src="./Edward-Island.png" alt="" className='w-full h-2/3 rounded-lg' />
                                        <h5 className="">Edward</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-center justify-center xl:w-[15vw] lg:w-[18vw] md:w-[22.5vw] sm:w-[30vw] w-[45vw] ">
                                <div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                                    <img src="./Outer-image.png" alt="" className="w-full h-full" />
                                    <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                        <img src="./Brunswick.png" alt="" className='w-full h-2/3 rounded-lg' />
                                        <h5 className="">Brunswick</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-center justify-center xl:w-[15vw] lg:w-[18vw] md:w-[22.5vw] sm:w-[30vw] w-[45vw] ">
                                <div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                                    <img src="./Outer-image.png" alt="" className="w-full h-full" />
                                    <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                        <img src="./British-columbia.png" alt="" className='w-full h-2/3 rounded-lg' />
                                        <h5 className="">columbia</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-center justify-center xl:w-[15vw] lg:w-[18vw] md:w-[22.5vw] sm:w-[30vw] w-[45vw] ">
                                <div className="w-44 h-[11.25rem] relative opacity-65 hover:scale-[1.3] hover:opacity-100 transition-all cursor-pointer">
                                    <img src="./Outer-image.png" alt="" className="w-full h-full" />
                                    <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-col w-full h-full absolute top-0 left-0">
                                        <img src="./Alberta.png" alt="" className='w-full h-2/3 rounded-lg' />
                                        <h5 className="">Alberta</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>
            <section className='flex items-center justify-between md:flex-row flex-col'>
                <div className="md:flex-1 w-full md:h-64 h-52 text-white flex items-center justify-center flex-col relative">
                    <img src="./Wine.png" className='absolute top-0 left-0 w-full h-full object-cover' alt="" />
                    <h3 className="z-10 font-bold text-4xl lg:text-5xl">{familyCounter}</h3>
                    <p className="z-10  lg:text-xl"> Our Family </p>
                </div>
                <div className="md:flex-1 w-full md:h-64 h-52 text-white flex items-center justify-center flex-col relative">
                    <img src="./Fruit.png" className='absolute top-0 left-0 w-full h-full object-cover' alt="" />
                    <h3 className="z-10 font-bold text-4xl lg:text-5xl">{groceryCounter}</h3>
                    <p className="z-10  lg:text-xl"> Grocery Gift </p>
                </div>
                <div className="md:flex-1 w-full md:h-64 h-52 text-white flex items-center justify-center flex-col relative">
                    <img src="./Vegetable.png" className='absolute top-0 left-0 w-full h-full object-cover' alt="" />
                    <h3 className="z-10 font-bold text-4xl lg:text-5xl">{drawsCounter}</h3>
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
                        <Button text={'Check all Results'} className={'px-5 p-2'} />
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
            <section className="pb-10 pt-0 flex items-center flex-col">
                <div className="flex items-center justify-between xl:px-32 sm:px-16 px-8 w-full">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text">More <span className='font-bold'>winners</span></h3>
                    <Button text={'View All'} className={'px-5 p-2'} />
                </div>
                <div className="overflow-x-hidden w-full px-[5vw]">
                    <Swiper
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },

                            768: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },

                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 0,
                            }
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="./line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="user_img.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'} className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="./line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="user_img.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'} className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="./line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="user_img.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'} className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="./line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="user_img.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'} className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="./line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="user_img.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'} className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="./line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="user_img.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'} className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="./line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="user_img.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'} className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="./line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="user_img.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'} className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className='taste_section lg:block hidden'>
                <div className="w-full px-10 h-[28.125rem] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'linear-gradient( rgba(0,0,0,.8), rgba(0,0,0,.8)), url(./table_book_bg_img.png)' }}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        pagination={{
                            clickable: false,
                        }}
                        modules={[Pagination]}

                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="flex items-start gap-20 w-full h-full">
                                <div className="flex-[2] flex-col flex items-center gap-10 pl-10">
                                    <img src="./zaika.png" alt="" />
                                    <Button text={'Book your table Now'} className={'px-5 p-2'} />
                                </div>
                                <div className="flex-[4] flex items-center justify-center h-full">
                                    <h2 className="text-5xl text-white leading-[1.5]">"Zaika: Embark on a Culinary Journey with the Taste of India!"</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-start gap-20 w-full h-full">
                                <div className="flex-[2] flex-col flex items-center gap-10">
                                    <img src="./zaika.png" alt="" />
                                    <Button text={'Book your table Now'} className={'px-5 p-2'} />
                                </div>
                                <div className="flex-[4] flex items-center justify-center h-full">
                                    <h2 className="text-5xl text-white leading-[1.5]">"Zaika: Embark on a Culinary Journey with the Taste of India!"</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-start gap-20 w-full h-full">
                                <div className="flex-[2] flex-col flex items-center gap-10">
                                    <img src="./zaika.png" alt="" />
                                    <Button text={'Book your table Now'} className={'px-5 p-2'} />
                                </div>
                                <div className="flex-[4] flex items-center justify-center h-full">
                                    <h2 className="text-5xl text-white leading-[1.5]">"Zaika: Embark on a Culinary Journey with the Taste of India!"</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-start gap-20 w-full h-full">
                                <div className="flex-[2] flex-col flex items-center gap-10">
                                    <img src="./zaika.png" alt="" />
                                    <Button text={'Book your table Now'} className={'px-5 p-2'} />
                                </div>
                                <div className="flex-[4] flex items-center justify-center h-full">
                                    <h2 className="text-5xl text-white leading-[1.5]">"Zaika: Embark on a Culinary Journey with the Taste of India!"</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-start gap-20 w-full h-full">
                                <div className="flex-[2] flex-col flex items-center gap-10">
                                    <img src="./zaika.png" alt="" />
                                    <Button text={'Book your table Now'} className={'px-5 p-2'} />
                                </div>
                                <div className="flex-[4] flex items-center justify-center h-full">
                                    <h2 className="text-5xl text-white leading-[1.5]">"Zaika: Embark on a Culinary Journey with the Taste of India!"</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </section>
            <section className="lg:pt-20 pb-10 flex items-center flex-col">
                <h2 className="text-2xl xl:px-32 sm:px-16 px-8 sm:text-3xl md:text-5xl bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text text-center">Join our <span className="font-bold">Social media accounts</span></h2>
                <div className="overflow-x-hidden w-full px-[5vw]">
                    <Swiper
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },

                            640: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },

                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            }
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="w-[90vw] sm:w-[45vw] flex items-center justify-center lg:w-[30vw] ">
                                <div className="w-11/12">
                                    <div className="rounded-[3rem] px-5 py-10 w-full min-h-[25rem] space-y-3 drop-shadow-xl bg-white border-gray-200 border flex items-center justify-between flex-col">
                                        <img src="./facebook (2).png" alt="" className="sm:w-24 w-20 h-20 sm:h-24 object-contain" />
                                        <div className="text-center space-y-3">
                                            <h3 className="text-2xl font-semibold text-gray-800">Facebook</h3>
                                            <p className="">(14K followers)</p>
                                            <p className="">Follow our official Facebook account for insights and updates</p>
                                        </div>
                                        <Button text={'Follow'} className={'p-2 px-10'} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-[90vw] sm:w-[45vw] flex items-center justify-center  lg:w-[30vw] ">
                                <div className="w-11/12">
                                    <div className="rounded-[3rem] px-5 py-10 w-full min-h-[25rem] space-y-3 drop-shadow-xl bg-white border-gray-200 border flex items-center justify-between flex-col">
                                        <img src="./tiktok (1).png" alt="" className="sm:w-24 w-20 h-20 sm:h-24 object-contain" />
                                        <div className="text-center space-y-3">
                                            <h3 className="text-2xl font-semibold text-gray-800">Tiktok</h3>
                                            <p className="">(14K followers)</p>
                                            <p className="">Follow our official Tiktok account for insights and updates</p>
                                        </div>
                                        <Button text={'Follow'} className={'p-2 px-10'} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-[90vw] sm:w-[45vw] flex items-center justify-center  lg:w-[30vw] ">
                                <div className="w-11/12">
                                    <div className="rounded-[3rem] px-5 py-10 w-full min-h-[25rem] space-y-3 drop-shadow-xl bg-white border-gray-200 border flex items-center justify-between flex-col">
                                        <img src="./instagram (1).png" alt="" className="sm:w-24 w-20 h-20 sm:h-24 object-contain" />
                                        <div className="text-center space-y-3">
                                            <h3 className="text-2xl font-semibold text-gray-800">Instagram</h3>
                                            <p className="">(14K followers)</p>
                                            <p className="">Follow our official Instagram account for insights and updates</p>
                                        </div>
                                        <Button text={'Follow'} className={'p-2 px-10'} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-[90vw] sm:w-[45vw] flex items-center justify-center  lg:w-[30vw] ">
                                <div className="w-11/12">
                                    <div className="rounded-[3rem] px-5 py-10 w-full min-h-[25rem] space-y-3 drop-shadow-xl bg-white border-gray-200 border flex items-center justify-between flex-col">
                                        <img src="./tiktok (1).png" alt="" className="sm:w-24 w-20 h-20 sm:h-24 object-contain" />
                                        <div className="text-center space-y-3">
                                            <h3 className="text-2xl font-semibold text-gray-800">Tiktok</h3>
                                            <p className="">(14K followers)</p>
                                            <p className="">Follow our official Tiktok account for insights and updates</p>
                                        </div>
                                        <Button text={'Follow'} className={'p-2 px-10'} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className='p-10 bg-[#F5F5F5] flex items-center justify-center gap-10 flex-col lg:flex-row lg:text-left text-center'>
                <img src="./Partner.png" alt="" className="flex-[2] w-[300px] md:w-fit" />
                <div className="flex-[3] sm:space-y-7 space-y-4">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text">Become <span className="font-bold"> a  Partner</span></h3>
                    <p className="text-[#686868] md:text-xl sm:text-base text-sm leading-[1.6] pb-5">At MR Corporation, we forge powerful partnerships for mutual growth. Join us to unlock a world of opportunities, connecting your grocery store with our savvy deal-seeking community. Elevate your business with us</p>
                    <Button text={'Apply Now'} className={'p-2 px-8'} />
                </div>
            </section>
            <section className='md:py-10 px-10 py-5 bg-[#F5F5F5] text-center'>
                <h3 className="text-2xl sm:text-3xl md:text-left text-center md:text-5xl bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text"><span className="font-bold">Why Partner </span>with us?</h3>
                <div className="flex items-stretch justify-center lg:flex-row flex-col lg:divide-x divide-y lg:divide-y-0 divide-black md:py-16 py-8">
                    <div className="flex-1 lg:py-4 px-4 py-8 flex items-center justify-start gap-5 flex-col">
                        <img src="./target_person.png" alt="" className="" />
                        <h4 className="sm:text-2xl text-lg bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text">Expand Your Customer Base</h4>
                        <p className="text-[#686868] md:text-xl sm:text-base text-sm leading-[1.6]">Reach a broader audience as <span className='font-semibold'>Mr Corporation</span>users actively seek quality grocery options and exclusive discounts.</p>
                    </div>
                    <div className="flex-1 lg:py-4 px-4 py-8 flex items-center justify-start gap-5 flex-col">
                        <img src="./Visibility.png" alt="" className="" />
                        <h4 className="sm:text-2xl text-lg bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text">Boost Sales and Visibility </h4>
                        <p className="text-[#686868] md:text-xl sm:text-base text-sm leading-[1.6]">Elevate your store's visibility and increase sales by featuring your products through our platform.</p>
                    </div>
                    <div className="flex-1 lg:py-4 px-4 py-8 flex items-center justify-start gap-5 flex-col">
                        <img src="./loyalty.png" alt="" className="" />
                        <h4 className="sm:text-2xl text-lg bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text">Build Customer Loyalty </h4>
                        <p className="text-[#686868] md:text-xl sm:text-base text-sm leading-[1.6]">Engage with our community and build lasting relationships with customers who value both quality and savings.</p>
                    </div>
                </div>
            </section>
            <section className="py-20 pb-10 flex items-center flex-col">
                <h2 className="text-2xl xl:px-32 sm:px-16 px-8 sm:text-3xl md:text-5xl bg-gradient-to-r from-[#F33F41] to-[#FEC93E] inline-block text-transparent bg-clip-text text-center">Grow Your Business, <span className="font-bold">Our Partner</span></h2>
                <div className="overflow-x-hidden w-full px-[5vw]">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },

                            768: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },

                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 0,
                            }
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className=" w-[45vw] sm:w-[30vw] md:w-[22.5vw]  lg:w-[18vw] flex items-center justify-center  ">
                                <div className="flex items-center justify-center hover:scale-125 cursor-pointer transition-all rounded-full bg-[#191919] w-28 h-28">
                                    <img src="./Partner1.png" alt="" className="w-24 object-contain" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[45vw] sm:w-[30vw] md:w-[22.5vw]  lg:w-[18vw] flex items-center justify-center  ">
                                <div className="flex items-center justify-center hover:scale-125 cursor-pointer transition-all rounded-full bg-[#C9DF62] w-28 h-28">
                                    <img src="./Partner2.png" alt="" className="w-24 object-contain" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[45vw] sm:w-[30vw] md:w-[22.5vw]  lg:w-[18vw] flex items-center justify-center  ">
                                <div className="flex items-center justify-center hover:scale-125 cursor-pointer transition-all rounded-full bg-[#83C85C] w-28 h-28">
                                    <img src="./Partner3.png" alt="" className="w-24 object-contain" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[45vw] sm:w-[30vw] md:w-[22.5vw]  lg:w-[18vw] flex items-center justify-center  ">
                                <div className="flex items-center justify-center hover:scale-125 cursor-pointer transition-all rounded-full bg-[#F5D7D4] w-28 h-28">
                                    <img src="./Partner4.png" alt="" className="w-24 object-contain" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[45vw] sm:w-[30vw] md:w-[22.5vw]  lg:w-[18vw] flex items-center justify-center  ">
                                <div className="flex items-center justify-center hover:scale-125 cursor-pointer transition-all rounded-full bg-[#B3E9A6] w-28 h-28">
                                    <img src="./Partner5.png" alt="" className="w-24 object-contain" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[45vw] sm:w-[30vw] md:w-[22.5vw]  lg:w-[18vw] flex items-center justify-center  ">
                                <div className="flex items-center justify-center hover:scale-125 cursor-pointer transition-all rounded-full bg-[#191919] w-28 h-28">
                                    <img src="./Partner1.png" alt="" className="w-24 object-contain" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[45vw] sm:w-[30vw] md:w-[22.5vw]  lg:w-[18vw] flex items-center justify-center  ">
                                <div className="flex items-center justify-center hover:scale-125 cursor-pointer transition-all rounded-full bg-[#C9DF62] w-28 h-28">
                                    <img src="./Partner2.png" alt="" className="w-24 object-contain" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[45vw] sm:w-[30vw] md:w-[22.5vw]  lg:w-[18vw] flex items-center justify-center  ">
                                <div className="flex items-center justify-center hover:scale-125 cursor-pointer transition-all rounded-full bg-[#83C85C] w-28 h-28">
                                    <img src="./Partner3.png" alt="" className="w-24 object-contain" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className='xl:px-32 sm:px-16 lg:block hidden'>
                <div className="  rounded-xl border flex items-center py-4 justify-center gap-5 divide-x">

                    <div className="flex items-center gap-2 py-2 px-4">
                        <img src="./UserEngagement.png" alt="" className='w-12 h-12' />
                        <p className="">User Engagement</p>
                    </div>
                    <div className="flex items-center gap-2 py-2 px-4">
                        <img src="./TargetedCampaigns.png" alt="" className='w-12 h-12' />
                        <p className="">Targeted Campaigns</p>
                    </div>
                    <div className="flex items-center gap-2 py-2 px-4">
                        <img src="./NationwideExposure.png" alt="" className='w-12 h-12' />
                        <p className="">Nationwide Exposure</p>
                    </div>
                    <div className="flex items-center gap-2 py-2 px-4">
                        <img src="./Cost-Effective Advertising.png" alt="" className='w-12 h-12' />
                        <p className="">Cost-Effective Advertising</p>
                    </div>
                </div>
            </section>
            <section className='p-10 flex items-center justify-center gap-10 flex-col lg:flex-row lg:text-left text-center'>
                <img src="./Advertise_buss.png" alt="" className="flex-[2] w-[300px] md:w-[450px]" />
                <div className="flex-[3] sm:space-y-7 space-y-4">
                    <h3 className="bg-gradient-to-r from-[#F33F41] to-[#FEC93E] leading-[1.6] inline-block text-transparent bg-clip-text text-3xl"><span className="font-semibold text-3xl md:text-5xl ">Advertise Your Business with MR</span> – Affordable Promotion Across Canada!</h3>
                    <div className="flex items-center justify-center lg:justify-start gap-10 whitespace-nowrap">
                        <p className="w-7 text-left border-t-4 border-[#F33F41]">Banner <br /> Ad</p>
                        <p className="w-7 text-left border-t-4 border-[#F33F41]">Video <br /> Ad</p>
                        <p className="w-7 text-left border-t-4 border-[#F33F41]">Visiting card <br /> Ad</p>
                    </div>
                    <Button text={'View All'} className={'p-2 px-8'} />
                </div>
            </section>
            <section className=''>
                <div className="w-full min-h-[31.25rem] bg-no-repeat bg-cover bg-center xl:p-20 p-10 space-y-10" style={{ backgroundImage: 'url(./get_started_bg.png)' }}>
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white leading-[1.4]">How to Get Started <br />
                        <span className='font-normal'>Unlock the Potential – Advertise with MR Today!</span></h2>
                    <p className='rounded-md p-2 px-8 bg-gradient-to-r from-[#F7A738] to-[#F33F41] text-white xl:text-2xl md:text-lg sm:text-base text-sm  flex items-center justify-between w-fit md:gap-5 gap-3 flex-wrap'>
                        <li className='list-item'>Contact MR Advertising Team</li>
                        <li className='list-item'>Budget-Friendly Packages</li>
                        <li className='list-item'>Track Performance</li>
                    </p>
                    <div className="w-full flex items-center justify-center">
                        <button className='rounded-full p-2 px-8 bg-white text-[#F33F41] sm:text-lg text-sm font-semibold m-auto'>Start Now</button>
                    </div>
                </div>
                <div className="relative xl:px-20 px-10  drop-shadow-xl w-full -top-20">
                    <img src="./Vector.png" alt="" className="absolute w-96 right-0 top-1/3 -z-10" />
                    <div className="p-10 bg-gradient-to-b from-[#ffffffd5] to-[#ffffffda] backdrop-blur-sm backdrop-filter  rounded-[2.5rem]">
                        <h3 className="text-2xl sm:text-3xl text-center md:text-5xl text-[#F33F41] font-bold w-full">FAQs</h3>
                        <div className="faqs divide-y   ">
                            {faqsData.map((faq, index) => (
                                <div key={index} className="faq-item">
                                    <div className="faq-question flex items-center justify-between w-full cursor-pointer" onClick={() => toggleActiveIndex(index)}>
                                        <h4 className="text-xl font-medium leading-[1.4] w-full py-5">{faq.question}</h4>
                                        <span className={`transition-all ${activeIndex === index ? 'rotate-180' : ''}`}>
                                            <span>&#9660;</span>
                                        </span>
                                    </div>

                                    {activeIndex === index && (
                                        <div className="faq-answer pb-5">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home