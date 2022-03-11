import React, { useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import "../Stylesheets/Management.css"
import Footer from "../../Footer"


const Management = () => {

  let location = useLocation();
  useEffect(() => {
  }, [location]);

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  return (
    <>
      <div className='position-relative'>
      <div id="mySidenav" className="sidenav">
        <span href="" className="closebtn" onClick={closeNav}>×</span>
        <Link className={` ${ location.pathname.split('/')[3] == "dashboard" ? "text-white" : ""}`} aria-current="page" to="/admin/management/dashboard">Dashboard</Link>
        <Link className={` ${ location.pathname.split('/')[3] == "registration" ? "text-white" : ""}`} aria-current="page" to="/admin/management/registration/stdreg">Registration</Link>
        <Link className={` ${ location.pathname.split('/')[3] == "adbatch" ? "text-white" : ""}`} aria-current="page" to="/admin/management/adbatch/classmanhome">Batches</Link>
        <Link className={` ${ location.pathname.split('/')[3] == "adexam" ? "text-white" : ""}`} aria-current="page" to="/admin/management/adexam">Examination</Link>
        <Link className={` ${ location.pathname.split('/')[3] == "adprofile" ? "text-white" : ""}`} aria-current="page" to="/admin/management/adprofile/stdprof">Profiles</Link>
        <Link className={` ${ location.pathname.split('/')[3] == "revenue" ? "text-white" : ""}`} aria-current="page" to="/admin/management/revenue">Revenue</Link>
      </div>
      <div id='main'>
        <Outlet />
      </div>
    </div>
    </>

  )
}

export default Management