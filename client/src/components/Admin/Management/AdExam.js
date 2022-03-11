import React from 'react'
import Footer from "../../Footer"

const AdExam = () => {

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

  return (
    <div className='pb-5'>
      <div className="d-flex flex-row align-items-center">
        <span onClick={openNav} role="button" className='text-start my-2 d-inline ms-3 text-dark'><i className="fas fa-bars text-dark me-2"></i></span>
        <ul className='domain_nav ms-5'>
        </ul>
      </div>
      <div className="min_height_footer container">
        exam
      </div>
    </div>
  )
}

export default AdExam