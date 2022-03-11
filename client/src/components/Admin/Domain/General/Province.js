import React, { useContext, useEffect, useState, useRef } from 'react';
import provinceContext from '../../../../context/domain/general/provinceContext';
import ProvinceTr from './ProvinceTr';

const Province = () => {
  const context = useContext(provinceContext);
  const { province, getprovince, addprovince, updateprovince, deleteprovince } = context

  useEffect(() => {
    getprovince()
  }, [])

  const ref = useRef(null)

  const [provinces, setprovinces] = useState({ cable: "", label: "" })

  const onChange = (e) => {
    setprovinces({ ...provinces, cable: e.target.value })
    setprovinces({ ...provinces, label: e.target.value })
  }

  const updateClick = () => {
    updateprovince(provinces._id, provinces.label, provinces.label, "state")
  }

  const provinceUpdate = (currentprovince) => {
    ref.current.click();
    setprovinces(currentprovince)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addprovince(provinces.label, provinces.label, "state")
    var province = document.getElementById("province")
    province.value = ""
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
              <h5 className="modal-title" id="staticBackdropLabel">Update province</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={provinces.label} />
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
      <h1 className='mt-5'>Add Province</h1>
      <div className="my-5">
        <input type="text" className="form-control" id="province" name='value' onChange={onChange} />
        <div className="text-end py-4">
          <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Province</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {province.map((countr, i) => {
              return <ProvinceTr key={i} countr={countr} index={i} getprovince={getprovince} deleteprovince={deleteprovince} provinceUpdate={provinceUpdate} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Province