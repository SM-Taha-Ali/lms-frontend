import React, { useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import "../Stylesheets/Domain.css"
import Footer from "../../Footer"

const Domain = () => {

  let location = useLocation();
  useEffect(() => {
  }, [location]);

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


  return (
    <div className='position-relative'>
      <div id="mySidenav" className="sidenav">
        <span href="" className="closebtn" onClick={closeNav}>×</span>
        <Link className={` ${location.pathname.split('/')[3] == "general" ? "text-white" : ""}`} aria-current="page" to="/admin/domain/general/country">General</Link>
        <Link className={` ${location.pathname.split('/')[3] == "studentdomain" ? "text-white" : ""}`} aria-current="page" to="/admin/domain/studentdomain/group">Academics</Link>
        <Link className={` ${location.pathname.split('/')[3] == "feedomain" ? "text-white" : ""}`} aria-current="page" to="/admin/domain/feedomain">Fee</Link>
        <Link className={` ${location.pathname.split('/')[3] == "examdomain" ? "text-white" : ""}`} aria-current="page" to="/admin/domain/examdomain">Examination</Link>
      </div>
      <div id='main'>
        <Outlet />
      </div>
    </div>
  )
}

export default Domain