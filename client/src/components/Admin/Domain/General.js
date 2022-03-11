import React, { useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Footer from "../../Footer"
import "../Stylesheets/DomainNav.css"

const General = () => {
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
    <div className=''>
      <div className="d-flex flex-row align-items-center">
        <span onClick={openNav} role="button" className='text-start my-2 d-inline ms-3 text-dark'><i className="fas fa-bars text-dark me-2"></i></span>
        <nav className='domain_nav_wrapper'>
          <ul className='domain_nav ms-5 overflow_control'>
            <li className="nav-item px-3">
              <Link className={`general_nav_link ${location.pathname === "/admin/domain/general/country" ? "text_blue" : ""}`} aria-current="page" to="/admin/domain/general/country">Country</Link>
            </li>
            <li className="nav-item px-3">
              <Link className={`general_nav_link ${location.pathname === "/admin/domain/general/religion" ? "text_blue" : ""}`} aria-current="page" to="/admin/domain/general/religion">Religion</Link>
            </li>
            <li className="nav-item px-3">
              <Link className={`general_nav_link ${location.pathname === "/admin/domain/general/city" ? "text_blue" : ""}`} aria-current="page" to="/admin/domain/general/city">City</Link>
            </li>
            <li className="nav-item px-3">
              <Link className={`general_nav_link ${location.pathname === "/admin/domain/general/province" ? "text_blue" : ""}`} aria-current="page" to="/admin/domain/general/province">Province</Link>
            </li>
            <li className="nav-item px-3">
              <Link className={`general_nav_link ${location.pathname === "/admin/domain/general/district" ? "text_blue" : ""}`} aria-current="page" to="/admin/domain/general/district">District</Link>
            </li>
            <li className="nav-item px-3">
              <Link className={`general_nav_link ${location.pathname === "/admin/domain/general/area" ? "text_blue" : ""}`} aria-current="page" to="/admin/domain/general/area">Area</Link>
            </li>
            <li className="nav-item px-3">
              <Link className={`general_nav_link ${location.pathname === "/admin/domain/general/mothertng" ? "text_blue" : ""}`} aria-current="page" to="/admin/domain/general/mothertng">Mother Tongue</Link>
            </li>
            <li className="nav-item px-3">
              <Link className={`general_nav_link ${location.pathname === "/admin/domain/general/bloodgrp" ? "text_blue" : ""}`} aria-current="page" to="/admin/domain/general/bloodgrp">Blood Group</Link>
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

export default General