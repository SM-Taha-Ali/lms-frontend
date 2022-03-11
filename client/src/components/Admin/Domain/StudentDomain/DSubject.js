import React, { useContext, useEffect, useState, useRef } from 'react';
import subjectContext from '../../../../context/domain/student/subjectContext';
import SubjectTr from './SubjectTr.js';

const DSubject = () => {
  const context = useContext(subjectContext);
  const { subject, getsubject, addsubject, updatesubject, deletesubject } = context

  useEffect(() => {
    getsubject()
  }, [])

  const ref = useRef(null)

  const [subjects, setsubjects] = useState({ cable: "", label: "" })

  const onChange = (e) => {
    setsubjects({ ...subjects, cable: e.target.value })
    setsubjects({ ...subjects, label: e.target.value })
  }

  const updateClick = () => {
    updatesubject(subjects._id, subjects.label, subjects.label, "subject")
  }

  const subjectUpdate = (currentsubject) => {
    ref.current.click();
    setsubjects(currentsubject)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addsubject(subjects.label, subjects.label, "subject")
    var subject = document.getElementById("subject")
    subject.value = ""
  }

  return (
    <div>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Update subject</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={subjects.label} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateClick}>Update</button>
            </div>
          </div>
        </div>
      </div>
      <h1 className='mt-5'>Add Subject</h1>
      <div className="my-5">
        <input type="text" className="form-control" id="subject" name='value' onChange={onChange} />
        <div className="text-end py-4">
          <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {subject.map((countr, i) => {
              return <SubjectTr key={i} countr={countr} index={i} getsubject={getsubject} deletesubject={deletesubject} subjectUpdate={subjectUpdate} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DSubject