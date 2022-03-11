import React, { useContext, useEffect, useState, useRef } from 'react';
import sectionContext from '../../../../context/domain/student/sectionContext';
import SectionTr from './SectionTr.js';

const DSection = () => {
  const context = useContext(sectionContext);
  const { section, getsection, addsection, updatesection, deletesection } = context

  useEffect(() => {
    getsection()
  }, [])

  const ref = useRef(null)

  const [sections, setsections] = useState({ cable: "", label: "" })

  const onChange = (e) => {
    setsections({ ...sections, cable: e.target.value })
    setsections({ ...sections, label: e.target.value })
  }

  const updateClick = () => {
    updatesection(sections._id, sections.label, sections.label, "section")
  }

  const sectionUpdate = (currentsection) => {
    ref.current.click();
    setsections(currentsection)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addsection(sections.label, sections.label, "section")
    var section = document.getElementById("section")
    section.value = ""
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
              <h5 className="modal-title" id="staticBackdropLabel">Update section</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={sections.label} />
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
      <h1 className='mt-5'>Add Section</h1>
      <div className="my-5">
        <input type="text" className="form-control" id="section" name='value' onChange={onChange} />
        <div className="text-end py-4">
          <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Section</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {section.map((countr, i) => {
              return <SectionTr key={i} countr={countr} index={i} getsection={getsection} deletesection={deletesection} sectionUpdate={sectionUpdate} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DSection