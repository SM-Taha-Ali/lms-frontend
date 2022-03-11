import React, { useContext, useEffect, useState, useRef } from 'react';
import classContext from '../../../../context/domain/student/classContext';
import ClasTr from './ClasTr.js';

const Dclass = () => {
  const context = useContext(classContext);
  const { clas, getclas, addclas, updateclas, deleteclas } = context

  useEffect(() => {
    getclas()
  }, [])

  const ref = useRef(null)

  const [classes, setclasses] = useState({ cable: "", label: "" })

  const onChange = (e) => {
    setclasses({ ...classes, cable: e.target.value })
    setclasses({ ...classes, label: e.target.value })
  }

  const updateClick = () => {
    updateclas(classes._id, classes.label, classes.label, "class")
  }

  const clasUpdate = (currentclas) => {
    ref.current.click();
    setclasses(currentclas)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addclas(classes.label, classes.label, "class")
    var clas = document.getElementById("class")
    clas.value = ""
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
              <h5 className="modal-title" id="staticBackdropLabel">Update Class</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={classes.label} />
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
      <h1 className='mt-5'>Add Class</h1>
      <div className="my-5">
        <input type="text" className="form-control" id="clas" name='value' onChange={onChange} />
        <div className="text-end py-4">
          <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Class</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {clas.map((countr, i) => {
              return <ClasTr key={i} countr={countr} index={i} getclas={getclas} deleteclas={deleteclas} clasUpdate={clasUpdate} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dclass