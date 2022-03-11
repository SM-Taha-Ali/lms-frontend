import React, { useContext, useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom'
import Footer from "../../Footer"
import "../Stylesheets/DomainNav.css"
import examContext from '../../../context/domain/exam/examContext';
import ExamTr from './ExamTr.js';


const ExamDomain = () => {
  const context = useContext(examContext);
  const { exam, getexam, addexam, updateexam, deleteexam } = context

  useEffect(() => {
    getexam()
  }, [])

  const ref = useRef(null)

  const [exams, setexams] = useState({ cable: "", label: "" })

  const onChange = (e) => {
    setexams({ ...exams, cable: e.target.value })
    setexams({ ...exams, label: e.target.value })
  }

  const updateClick = () => {
    updateexam(exams._id, exams.label, exams.label, "exam")
  }

  const examUpdate = (currentexam) => {
    ref.current.click();
    setexams(currentexam)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addexam(exams.label, exams.label, "exam")
    var exam = document.getElementById("exam")
    exam.value = ""
  }

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
    <div>
      <div>
        <div className="d-flex flex-row align-items-center">
          <span onClick={openNav} role="button" className='text-start my-2 d-inline ms-3 text-dark'><i className="fas fa-bars text-dark me-2"></i></span>
          <ul className='domain_nav ms-5'>
          </ul>
        </div>
        <div className="container min_height_footer">
          <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Launch static backdrop modal
          </button>

          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Update exam</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                      <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={exams.label} />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                  <button type="button" className="btn btn_dark_blue text-white" data-bs-dismiss="modal" onClick={updateClick}>Update</button>
                </div>
              </div>
            </div>
          </div>
          <h1 className='mt-5'>Add Exam</h1>
          <div className="my-5">
            <input type="text" className="form-control" id="exam" name='value' onChange={onChange} />
            <div className="text-end py-4">
              <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
            </div>
          </div>

          <div className='mt-5'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Exam</th>
                  <th scope="col" className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {exam.map((countr, i) => {
                  return <ExamTr key={i} countr={countr} index={i} getexam={getexam} deleteexam={deleteexam} examUpdate={examUpdate} />
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamDomain