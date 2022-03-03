import React, { useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Footer from "../../Footer"

const Registration = () => {

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
    
      let location = useLocation();
      useEffect(() => {
      }, [location]);

    return (
        <div>
            <div className="d-flex flex-row align-items-center">
                <span onClick={openNav} role="button" className='text-start my-2 d-inline ms-3 text-dark'><i className="fas fa-bars text-dark me-2"></i></span>
                <ul className='domain_nav ms-5'>
                    <li className="nav-item px-3">
                        <Link className={`general_nav_link ${location.pathname === "/admin/management/registration/stdreg" ? "text_blue" : ""}`} aria-current="page" to="/admin/management/registration/stdreg">Student</Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className={`general_nav_link ${location.pathname === "/admin/management/registration/empreg" ? "text_blue" : ""}`} aria-current="page" to="/admin/management/registration/empreg">Employee</Link>
                    </li>
                </ul>
            </div>
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Registration