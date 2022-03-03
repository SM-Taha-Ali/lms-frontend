import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from './AdminNav'

const Admin = () => {

  

  return (
    <div>
      <AdminNav />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Admin