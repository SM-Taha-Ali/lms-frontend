import React, { useContext, useEffect, useState, useRef } from 'react';
import districtContext from '../../../../context/domain/general/districtContext';
import DistrictTr from './DistrictTr';

const District = () => {
  const context = useContext(districtContext);
  const { district, getdistrict, adddistrict, updatedistrict, deletedistrict } = context

  useEffect(() => {
    getdistrict()
  }, [])

  const ref = useRef(null)

  const [districts, setdistricts] = useState({ cable: "", label: "" })

  const onChange = (e) => {
    setdistricts({ ...districts, cable: e.target.value })
    setdistricts({ ...districts, label: e.target.value })
  }

  const updateClick = () => {
    updatedistrict(districts._id, districts.label, districts.label, "district")
  }

  const districtUpdate = (currentdistrict) => {
    ref.current.click();
    setdistricts(currentdistrict)
  }

  const handleClick = (e) => {
    e.preventDefault()
    adddistrict(districts.label, districts.label, "district")
    var district = document.getElementById("district")
    district.value = ""
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
              <h5 className="modal-title" id="staticBackdropLabel">Update district</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={districts.label} />
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
      <h1 className='mt-5'>Add District</h1>
      <div className="my-5">
        <input type="text" className="form-control" id="district" name='value' onChange={onChange} />
        <div className="text-end py-4">
          <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">District</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {district.map((countr, i) => {
              return <DistrictTr key={i} countr={countr} index={i} getdistrict={getdistrict} deletedistrict={deletedistrict} districtUpdate={districtUpdate} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default District