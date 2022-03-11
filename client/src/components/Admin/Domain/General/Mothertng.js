import React, { useContext, useEffect, useState, useRef } from 'react';
import mothertngContext from '../../../../context/domain/general/mothertngContext';
import MothertngTr from './MothertngTr';

const Mothertng = () => {
  const context = useContext(mothertngContext);
  const { mothertng, getmothertng, addmothertng, updatemothertng, deletemothertng } = context

  useEffect(() => {
    getmothertng()
  }, [])

  const ref = useRef(null)

  const [mothertngs, setmothertngs] = useState({ cable: "", label: "" })

  const onChange = (e) => {
    setmothertngs({ ...mothertngs, cable: e.target.value })
    setmothertngs({ ...mothertngs, label: e.target.value })
  }

  const updateClick = () => {
    updatemothertng(mothertngs._id, mothertngs.label, mothertngs.label, "mother_tng")
  }

  const mothertngUpdate = (currentmothertng) => {
    ref.current.click();
    setmothertngs(currentmothertng)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addmothertng(mothertngs.label, mothertngs.label, "mother_tng")
    var mothertng = document.getElementById("mothertng")
    mothertng.value = ""
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
              <h5 className="modal-title" id="staticBackdropLabel">Update Mother Tongue</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={mothertngs.label} />
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
      <h1 className='mt-5'>Add Mother Tongue</h1>
      <div className="my-5">
        <input type="text" className="form-control" id="mothertng" name='value' onChange={onChange} />
        <div className="text-end py-4">
          <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mother Tongue</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {mothertng.map((countr, i) => {
              return <MothertngTr key={i} countr={countr} index={i} getmothertng={getmothertng} deletemothertng={deletemothertng} mothertngUpdate={mothertngUpdate} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Mothertng