import React from 'react'
import Footer from "../../Footer"

const Revenue = () => {

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  return (
    <div>
      <div className="d-flex flex-row align-items-center">
        <span onClick={openNav} role="button" className='text-start my-2 d-inline ms-3 text-dark'><i className="fas fa-bars text-dark me-2"></i></span>
        <ul className='domain_nav ms-5'>
        </ul>
      </div>
      <div className="temp_fixxer container">
        revenue
      </div>
      <Footer />
    </div>
  )
}

export default Revenue