import React, { useContext, useEffect, useState, useRef } from 'react';
import bloodgrpContext from '../../../../context/domain/general/bloodgrpContext';
import BloodgrpTr from './BloodgrpTr';

const Bloodgrp = () => {
  const context = useContext(bloodgrpContext);
  const { bloodgrp, getbloodgrp, addbloodgrp, updatebloodgrp, deletebloodgrp } = context

  useEffect(() => {
    getbloodgrp()
  }, [])

  const ref = useRef(null)

  const [bloodgrps, setbloodgrps] = useState({ cable: "", label: "" })

  const onChange = (e) => {
    setbloodgrps({ ...bloodgrps, cable: e.target.value })
    setbloodgrps({ ...bloodgrps, label: e.target.value })
  }

  const updateClick = () => {
    updatebloodgrp(bloodgrps._id, bloodgrps.label, bloodgrps.label, "blood_group")
  }

  const bloodgrpUpdate = (currentbloodgrp) => {
    ref.current.click();
    setbloodgrps(currentbloodgrp)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addbloodgrp(bloodgrps.label, bloodgrps.label, "blood_group")
    var bloodgrp = document.getElementById("bloodgrp")
    bloodgrp.value = ""
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
              <h5 className="modal-title" id="staticBackdropLabel">Update bloodgrp</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={bloodgrps.label} />
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
      <h1 className='mt-5'>Add Blood Group</h1>
      <div className="my-5">
        <input type="text" className="form-control" id="bloodgrp" name='value' onChange={onChange} />
        <div className="text-end py-4">
          <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Blood Group</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {bloodgrp.map((countr, i) => {
              return <BloodgrpTr key={i} countr={countr} index={i} getbloodgrp={getbloodgrp} deletebloodgrp={deletebloodgrp} bloodgrpUpdate={bloodgrpUpdate} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Bloodgrp