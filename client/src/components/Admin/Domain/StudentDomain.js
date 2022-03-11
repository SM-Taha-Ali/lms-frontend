import React, { useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Footer from "../../Footer"
import "../Stylesheets/DomainNav.css"

const StudentDomain = () => {

  const openNav = () => {
    var body = document.getElementsByTagName("BODY")[0];
    let width = body.offsetWidth
    if (width <= 640) {
      document.getElementById("mySidenav").style.width = "100vw";
      document.getElementById("main").style.marginLeft = "auto";
    } else {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
  }

  let location = useLocation();
  useEffect(() => {
  }, [location]);

  return (
    <div >
      <div className="d-flex flex-row align-items-center">
        <span onClick={openNav} role="button" className='text-start my-2 d-inline ms-3 text-dark'><i className="fas fa-bars text-dark me-2"></i></span>
        <nav className='domain_nav_wrapper'>
          <ul className='domain_nav ms-5 overflow_control'>
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
            <li className="nav-item px-3">
              <Link className={`general_nav_link ${location.pathname === "/admin/domain/studentdomain/subject" ? "text_blue" : ""}`} aria-current="page" to="/admin/domain/studentdomain/subject">Subject</Link>
            </li>
            <li className="nav-item px-3">
              <Link className={`general_nav_link ${location.pathname === "/admin/domain/studentdomain/subbind" ? "text_blue" : ""}`} aria-current="page" to="/admin/domain/studentdomain/subbind">Bind-Subjects</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container min_height_footer">
        <Outlet />
      </div>
    </div>
  )
}

export default StudentDomain