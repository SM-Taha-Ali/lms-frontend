import React, { useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Footer from "../../Footer"
import "../Stylesheets/DomainNav.css"

const StudentDomain = () => {

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  let location = useLocation();
  useEffect(() => {
  }, [location]);

  return (
    <div>
      <div>
        <div className="d-flex flex-row align-items-center">
          <span onClick={openNav} role="button" className='text-start my-2 d-inline ms-3 text-dark'><i className="fas fa-bars text-dark me-2"></i></span>
          <ul className='domain_nav ms-5'>
            <li className="nav-item px-3">
              <Link className={`general_nav_link ${location.pathname === "/admin/domain/studentdomain/group" ? "text_blue" : ""}`} aria-current="page" to="/admin/domain/studentdomain/group">Group</Link>
            </li>
            <li className="nav-item px-3">
              <Link className={`general_nav_link ${location.pathname === "/admin/domain/studentdomain/subgroup" ? "text_blue" : ""}`} aria-current="page" to="/admin/domain/studentdomain/subgroup">Sub-Group</Link>
            </li>
            <li className="nav-item px-3">
              <Link className={`general_nav_link ${location.pathname === "/admin/domain/studentdomain/class" ? "text_blue" : ""}`} aria-current="page" to="/admin/domain/studentdomain/class">Class</Link>
            </li>
            <li className="nav-item px-3">
              <Link className={`general_nav_link ${location.pathname === "/admin/domain/studentdomain/section" ? "text_blue" : ""}`} aria-current="page" to="/admin/domain/studentdomain/section">Section</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default StudentDomain