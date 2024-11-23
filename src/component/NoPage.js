import React from 'react'
import { NavLink } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-4xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mt-2">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <NavLink
          to="/login" 
          className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Go Back to Login
        </NavLink>
      </div>
    </div>
  )
}

export default NoPage
