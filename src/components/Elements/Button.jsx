import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`rounded-full w-fit bg-gradient-to-r hover:bg-gradient-to-l hover:scale-105 from-[#F7A738] to-[#F33F41] text-white sm:text-lg text-sm font-semibold transition-all ${className}`}>{text}</button>
  )
}

export default Button