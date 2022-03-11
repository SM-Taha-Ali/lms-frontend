import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from './AdminNav'
import Footer from '../Footer'

const Admin = () => {



  return (
    <div className="height_100">
      <AdminNav />
      <div className='height_max'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Admin