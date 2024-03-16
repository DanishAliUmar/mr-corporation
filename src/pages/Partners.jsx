import React from 'react'
import { Link } from 'react-router-dom'

const Partners = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Under Construction</h1>
      <p className="text-lg text-gray-600 mb-8">This page is currently under construction. We apologize for the inconvenience.</p>
      <Link to={'/'}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Go to Home Page
        </button>
      </Link>
    </div>
  )
}

export default Partners