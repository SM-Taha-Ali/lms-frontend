import React, { useContext, useEffect, useState, useRef } from 'react';
import religionContext from '../../../../context/domain/general/religionContext';
import "../../Stylesheets/Religion.css"
import ReligionTr from './ReligionTr';

const Religion = () => {

  const context = useContext(religionContext);
  const { religion, getReligion, addReligion, updateReligion, deleteReligion } = context

  useEffect(() => {
    getReligion()
  }, [])

  const ref = useRef(null)

  const [religions, setReligions] = useState({ cable: "", label: "" })

  const onChange = (e) => {
    setReligions({ ...religions, cable: e.target.value })
    setReligions({ ...religions, label: e.target.value })
  }

  const updateClick = () => {
    updateReligion(religions._id, religions.label, religions.label, "religion")
  }

  const religionUpdate = (currentReli) => {
    ref.current.click();
    setReligions(currentReli)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addReligion(religions.label, religions.label, "religion")
    var religion = document.getElementById("religion")
    religion.value = ""
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
              <h5 className="modal-title" id="staticBackdropLabel">Update Religion</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={religions.label} />
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


      <h1 className='mt-5'>Add Religion</h1>
      <div className="my-5">
        <input type="text" className="form-control" id="religion" onChange={onChange} />
        <div className="text-end py-4">
          <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Religion</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {religion.map((reli, i) => {
              return <ReligionTr key={i} reli={reli} index={i} getReligion={getReligion} deleteReligion={deleteReligion} religionUpdate={religionUpdate} />
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Religion