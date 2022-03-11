import React, { useContext, useEffect, useState, useRef } from 'react';
import cityContext from '../../../../context/domain/general/cityContext';
import CityTr from './CityTr';

const City = () => {
  const context = useContext(cityContext);
  const { city, getcity, addcity, updatecity, deletecity } = context

  useEffect(() => {
    getcity()
  }, [])

  const ref = useRef(null)

  const [citys, setcitys] = useState({ cable: "", label: "" })

  const onChange = (e) => {
    setcitys({ ...citys, cable: e.target.value })
    setcitys({ ...citys, label: e.target.value })
  }

  const updateClick = () => {
    updatecity(citys._id, citys.label, citys.label, "city")
  }

  const cityUpdate = (currentcity) => {
    ref.current.click();
    setcitys(currentcity)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addcity(citys.label, citys.label, "city")
    var city = document.getElementById("city")
    city.value = ""
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
              <h5 className="modal-title" id="staticBackdropLabel">Update city</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={citys.label} />
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
      <h1 className='mt-5'>Add City</h1>
      <div className="my-5">
        <input type="text" className="form-control" id="city" name='value' onChange={onChange} />
        <div className="text-end py-4">
          <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">City</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {city.map((countr, i) => {
              return <CityTr key={i} countr={countr} index={i} getcity={getcity} deletecity={deletecity} cityUpdate={cityUpdate} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default City