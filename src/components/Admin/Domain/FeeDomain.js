import React from 'react'
import Footer from "../../Footer"


const FeeDomain = () => {
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
      <div className="container">
        <h1 className='mt-5'>Add Fee</h1>
        <div className="my-5">
          <div className="row">
            <div className="col-md-6">
              <input type="text" className="form-control" id="feename" placeholder='Fee Name' />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" id="feetype" placeholder='Fee Type' />
            </div>
          </div>
          <div className="text-end py-4">
            <button className="btn btn_dark_blue text-white">Add Now</button>
          </div>
        </div>
        <div className='mt-5'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col" className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Admission</td>
                <td>Annual</td>
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
  )
}

export default FeeDomain