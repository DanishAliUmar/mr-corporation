import React from 'react'
import Input from '../components/Elements/Input'
import { Link } from 'react-router-dom'
import Button from '../components/Elements/Button'
import Select from '../components/Elements/Select'

const SignUp = () => {

  const occupationOptions = [
    { value: 'accountant', label: 'Accountant' },
    { value: 'engineer', label: 'Engineer' },
    { value: 'software_developer', label: 'Software Developer' },
    { value: 'designer', label: 'Designer' },
    { value: 'manager', label: 'Manager' },
    { value: 'entrepreneur', label: 'Entrepreneur' },
    // Add more occupations as needed
  ];

  const provinceOptions = [
    { value: 'alberta', label: 'Alberta' },
    { value: 'british_columbia', label: 'British Columbia' },
    { value: 'manitoba', label: 'Manitoba' },
    { value: 'new_brunswick', label: 'New Brunswick' },
    { value: 'newfoundland_and_labrador', label: 'Newfoundland and Labrador' },
    { value: 'nova_scotia', label: 'Nova Scotia' },
    { value: 'ontario', label: 'Ontario' },
    { value: 'prince_edward_island', label: 'Prince Edward Island' },
    { value: 'quebec', label: 'Quebec' },
    { value: 'saskatchewan', label: 'Saskatchewan' },
    { value: 'northwest_territories', label: 'Northwest Territories' },
    { value: 'nunavut', label: 'Nunavut' },
    { value: 'yukon', label: 'Yukon' }
    // Add more provinces as needed
  ];

  return (
    <div className='flex items-stretch'>
      <div className="flex-1 hidden mdlarge:flex items-center p-2 flex-col gap-5 justify-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(./auth_bg.png)' }}>
        <h1 className="font-bold text-4xl text-white">
          Sign Up
        </h1>
        <img src="./auth_img.png" alt="" className="" />
      </div>
      <div className="flex-1 min-h-screen sm:text-left text-center">
        <div className="xl:p-24 sn:p-16 p-6 space-y-6">
          <h2 className="text-2xl font-bold">Choose your account type</h2>
          <div className="text-gray-700 space-y-4">
            <div className="flex items-center sm:justify-start justify-center gap-4 lg:pr-40">
              <div className={`cursor-pointer p-2 px-4 flex rounded-lg items-center justify-start gap-3 w-full text-white bg-gradient-to-r from-[#F7A738] to-[#F33F41]`}>
                <input name="account_type" value='Individual' className='scale-150' type="radio" id='Individual_radio' />
                <label htmlFor="Individual_radio" className='flex-1'>
                  <p className="flex-1">Individual</p>
                </label>
              </div>
              <div className={`cursor-pointer p-2 px-4 flex rounded-lg items-center justify-start gap-3 w-full border-[#F33F41] border`}>
                <input name="account_type" value='Business' className='scale-150' id='Business_radio' type="radio" />
                <label  htmlFor="Business_radio" className='flex-1'>
                  <p className="">Business</p>
                </label>
              </div>
            </div>
            <Input
              width={'w-full'}
              titleStyle={'text-left'}
              title={'Store Name'}
              placeholder={'Type here'}
            />
            <Input
              titleStyle={'text-left'}
              width={'w-full'}
              title={'Email id'}
              placeholder={'Type here'}
            />
            <Input
              titleStyle={'text-left'}
              width={'w-full'}
              title={'Mobile no'}
              placeholder={'Type here'}
            />
            <Input
              titleStyle={'text-left'}
              width={'w-full'}
              type={'Password'}
              title={'Password'}
              placeholder={'Type here'}
            />
            <div className="flex items-center justify-between gap-5">
              <Select
                options={occupationOptions}
                titleStyle={'text-left'}
                title={'Occupation'} />
              <Select
                options={provinceOptions}
                titleStyle={'text-left'}
                title={'Occupation'} />
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <p className="text-gray-700">Yes, I agreee to the <span className="text-blue-600">Terms & conditions</span> and <span className="text-blue-600">Privacy Policy</span> </p>
            </div>
            <Button text={'Sign up'} className={'p-3 px-16'} />
          </div>
          <h5 className="">Already have an account? <Link to={'/login'}><span className="font-bold text-[#F33F41] px-1">Log in</span></Link></h5>
        </div>
      </div>

    </div>
  )
}

export default SignUp