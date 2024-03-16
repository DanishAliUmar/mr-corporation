import React from 'react'
import Input from '../components/Elements/Input'
import { Link } from 'react-router-dom'
import Button from '../components/Elements/Button'

const Login = () => {
    return (
        <div className='flex items-stretch'>
            <div className="flex-1 hidden mdlarge:flex items-center p-2 flex-col gap-5 justify-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(./auth_bg.png)' }}>
                <h1 className="font-bold text-4xl text-white">
                    Log in
                </h1>
                <img src="./auth_img.png" alt="" className="" />
            </div>
            <div className="flex-1 min-h-screen sm:text-left text-center">
                <div className="xl:p-24 sn:p-16 p-6 space-y-6">
                    <h2 className="text-2xl font-bold">Login to your account</h2>
                    <div className="text-gray-700 space-y-4">
                        <h5 className="text-lg font-semibold text-[#3B3B3B]">Choose your account type</h5>
                        <div className="flex items-stretch sm:justify-start justify-center sm:gap-10 gap-4">
                            <div className={`px-2 cursor-pointer py-3 flex rounded-lg items-center justify-center flex-col gap-2 min-w-28 text-white bg-gradient-to-r from-[#F7A738] to-[#F33F41]`}>
                                <img src="./profile.svg" alt="" className="" />
                                <p className="">Individual</p>
                            </div>
                            <div className={`px-2 cursor-pointer py-3 flex rounded-lg items-center justify-center flex-col gap-2 border border-gray-950 min-w-28`}>
                                <img src="./Business_house.svg" alt="" className="" />
                                <p className="">Business</p>
                            </div>
                        </div>
                        <Input
                            width={'w-full'}
                            titleStyle={'text-left'}
                            title={'Email id or Mobile no'}
                            placeholder={'Type here'}
                        />
                        <Input
                            titleStyle={'text-left'}
                            width={'w-full'}
                            type={'password'}
                            title={'Password'}
                            placeholder={'Type here'}
                        />
                        <div className="!text-right">
                            <p className="text-[#F33F41] w-full font-medium">Forgot password?</p>
                        </div>
                        <div className="space-y-6">
                            <Button text={'Login'} className={'p-3 px-16 sm:!w-fit !w-full'} />
                            <div className="space-y-4">
                                <label htmlFor="loginBtn"><p className=" text-lg"><span className="font-medium">Login</span> with</p></label>
                                <button id='loginBtn' className='rounded-full sm:w-fit w-full p-3 px-10 text-white sm:text-lg text-sm font-semibold border border-[#176BEF]'><img src="./google_logo.png" alt="" className="m-auto" /></button>
                            </div>
                        </div>
                    </div>
                    <h5 className="">Don’t have an account? <Link to={'/signup'}> <span className="font-bold text-[#F33F41] px-1 cursor-pointer">Sign up</span></Link></h5>
                </div>
            </div>

        </div>
    )
}

export default Login