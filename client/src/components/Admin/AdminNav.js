import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import "./Stylesheets/AdminNav.css"

const AdminNav = () => {
  let location = useLocation();
  useEffect(() => {
  }, [location]);

  return (
    <nav className='AdminNav'>
      <div className="container">
        <ul className="adminNav_ul">
          <li className="nav-item pe-1">
            <Link className={`p-2 admin_nav_link ${ location.pathname.split('/')[2] == "management"  ? "admin_nav_link_active" : ""}`}  aria-current="page" to="/admin/management/dashboard">Management</Link>
          </li>
          <li className="nav-item px-1">
            <Link className={`p-2 admin_nav_link ${ location.pathname.split('/')[2] == "domain" ? "admin_nav_link_active" : ""}`} aria-current="page" to="/admin/domain/general/country">Domain</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default AdminNav