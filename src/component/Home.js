import React from 'react'
import Navbar from './dashboard/Navbar'
import Sidebar from './dashboard/Sidebar'
import Dashboard from './dashboard/Dashboard'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='flex'>
      
    <Sidebar/>
    <Dashboard/>
    </div>
    </>
  )
}

export default Home
