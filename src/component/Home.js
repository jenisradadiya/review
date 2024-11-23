import React from 'react'
import Navbar from './dashboard/Navbar'
import Sidebar from './dashboard/Sidebar'
import Dashboard from './dashboard/Dashboard'

const Home = () => {
  return (
    <>
    <div className='flex'>
    <Sidebar/>
    <div>
    <Navbar/>
    <Dashboard/>
    </div>
    </div>
    </>
  )
}

export default Home
