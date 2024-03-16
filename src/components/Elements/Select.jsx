import React from 'react'

const Select = (props) => {
    return (
        <div className={`space-y-2 w-full ${props?.parent ? props?.parentClass : ''}`}>
            {props.title ? <p className={`font-medium ${props?.titleStyle ? props?.titleStyle : ''}`}>{props?.title}</p> : ''}
            <div className={`flex items-center justify-between border rounded-lg  px-4  bg-[#F5F6F8] border-[#DEDEDE] w-full`}>
                <select className={`bg-transparent focus:outline-none py-3 w-full ${props?.selectStyle} ${props?.width}`} placeholder={props?.placeholder ? props?.placeholder : ''} >
                    <option value="">Select</option>
                    {props?.options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Select