import React, { useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Footer from "../../Footer"
import "../Stylesheets/DomainNav.css"

const ExamDomain = () => {

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
          </ul>
        </div>
        <div className="container">
          <h1 className='mt-5'>Add Exam Type</h1>
          <div className="my-5">
            <input type="text" className="form-control" id="religion" />
            <div className="text-end py-4">
              <button className="btn btn-primary">Add Now</button>
            </div>
          </div>

          <div className='mt-5'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Type</th>
                  <th scope="col" className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Term</td>
                  <td className='text-center'>
                    <i className="far fa-edit px-2 text-success"></i>
                    <i className="far fa-trash-alt px-2 text-danger"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ExamDomain