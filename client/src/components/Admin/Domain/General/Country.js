import React, { useContext, useEffect, useState, useRef } from 'react';
import countryContext from '../../../../context/domain/general/countryContext';
import CountryTr from './CountryTr';

const Country = () => {
  const context = useContext(countryContext);
  const { country, getCountry, addCountry, updateCountry, deleteCountry } = context

  useEffect(() => {
    getCountry()
  }, [])

  const ref = useRef(null)

  const [countries, setCountries] = useState({ cable: "", label: "" })

  const onChange = (e) => {
    setCountries({ ...countries, cable: e.target.value })
    setCountries({ ...countries, label: e.target.value })
  }

  const updateClick = () => {
    updateCountry(countries._id, countries.label, countries.label, "country")
  }

  const countryUpdate = (currentContry) => {
    ref.current.click();
    setCountries(currentContry)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addCountry(countries.label, countries.label, "country")
    var country = document.getElementById("country")
    country.value = ""
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
              <h5 className="modal-title" id="staticBackdropLabel">Update Country</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={countries.label} />
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
      <h1 className='mt-5'>Add Country</h1>
      <div className="my-5">
        <input type="text" className="form-control" id="country" name='value' onChange={onChange} />
        <div className="text-end py-4">
          <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Country</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {country.map((countr, i) => {
              return <CountryTr key={i} countr={countr} index={i} getCountry={getCountry} deleteCountry={deleteCountry} countryUpdate={countryUpdate} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Country