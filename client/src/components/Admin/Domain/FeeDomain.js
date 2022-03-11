import React, { useContext, useEffect, useState, useRef } from 'react';
import Select from 'react-select';
import feeContext from '../../../context/domain/fee/feeContext';
import FeeTr from './FeeTr.js';

const FeeDomain = () => {
  const context = useContext(feeContext);
  const { fee, getfee, addfee, updatefee, deletefee } = context

  useEffect(() => {
    getfee()
  }, [])

  const ref = useRef(null)

  const [fees, setfees] = useState({ label: "", type: "" })

  const onChange = (e) => {
    try {
      setfees({ ...fees, [e.target.name]: e.target.value })
    } catch (error) {
      setfees({ ...fees, [e.name]: e.value })
    }
  }

  const updateClick = () => {
    updatefee(fees._id, fees.label, fees.label, "fee", fees.type)
  }

  const feeUpdate = (currentfee) => {
    ref.current.click();
    setfees(currentfee)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addfee(fees.label, fees.label, "fee", fees.type)
    var fee = document.getElementById("fee")
    fee.value = ""
  }

  const fee_types = [
    { value: 'Once', label: 'Once', name: "type" },
    { value: 'Annual', label: 'Annual', name: "type" },
    { value: 'Semi-Annual', label: 'Semi-Annual', name: "type" },
    { value: 'Quartarly', label: 'Quartarly', name: "type" },
    { value: 'Monthly', label: 'Monthly', name: "type" },
  ];

  const openNav = () => {
    var body = document.getElementsByTagName("BODY")[0];

    let width = body.offsetWidth
    if (width <= 640) {
      document.getElementById("mySidenav").style.width = "100vw";
      document.getElementById("main").style.marginLeft = "auto";
    } else {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
  }

  return (
    <>
      <div className="d-flex flex-row align-items-center">
        <span onClick={openNav} role="button" className='text-start my-2 d-inline ms-3 text-dark'><i className="fas fa-bars text-dark me-2"></i></span>
        <ul className='domain_nav ms-5'>
        </ul>
      </div>
      <div className="container min_height_footer">
        <div>
          <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Launch static backdrop modal
          </button>

          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Update fee</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                      <input type="text" className="form-control" id="product_name" name='label' required onChange={onChange} value={fees.label} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Type</label>
                      <Select
                        defaultValue={fee.type}
                        onChange={onChange}
                        options={fee_types}
                        width={100}
                        name="type"
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                  <button type="button" className="btn btn_dark_blue text-white" data-bs-dismiss="modal" onClick={updateClick}>Update</button>
                </div>
              </div>
            </div>
          </div>
          <h1 className='mt-5'>Add fee</h1>
          <div className="my-5">
            <div className="row">
              <div className="col-md-6 py-2">
                <input type="text" className="form-control" id="fee" name='label' placeholder='Fee Name' onChange={onChange} />
              </div>
              <div className="col-md-6 py-2">
                <Select
                  defaultValue={null}
                  onChange={onChange}
                  options={fee_types}
                  width={100}
                  name="type"
                  placeholder="Fee Type"
                />
              </div>
            </div>
            <div className="text-end py-4">
              <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
            </div>
          </div>

          <div className='mt-5'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fee Name</th>
                  <th scope="col">Fee Type</th>
                  <th scope="col" className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {fee.map((countr, i) => {
                  return <FeeTr key={i} countr={countr} index={i} getfee={getfee} deletefee={deletefee} feeUpdate={feeUpdate} />
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeeDomain