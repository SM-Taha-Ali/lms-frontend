import React, { useContext, useEffect, useState, useRef } from 'react';
import subgroupContext from '../../../../context/domain/student/subgroupContext';
import SubgroupTr from './SubgroupTr.js';

const DSubgroup = () => {
  const context = useContext(subgroupContext);
  const { subgroup, getsubgroup, addsubgroup, updatesubgroup, deletesubgroup } = context

  useEffect(() => {
    getsubgroup()
  }, [])

  const ref = useRef(null)

  const [subgroups, setsubgroups] = useState({ cable: "", label: "" })

  const onChange = (e) => {
    setsubgroups({ ...subgroups, cable: e.target.value })
    setsubgroups({ ...subgroups, label: e.target.value })
  }

  const updateClick = () => {
    updatesubgroup(subgroups._id, subgroups.label, subgroups.label, "subgroup")
  }

  const subgroupUpdate = (currentsubgroup) => {
    ref.current.click();
    setsubgroups(currentsubgroup)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addsubgroup(subgroups.label, subgroups.label, "subgroup")
    var subgroup = document.getElementById("subgroup")
    subgroup.value = ""
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
              <h5 className="modal-title" id="staticBackdropLabel">Update subgroup</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={subgroups.label} />
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
      <h1 className='mt-5'>Add Sub Group</h1>
      <div className="my-5">
        <input type="text" className="form-control" id="subgroup" name='value' onChange={onChange} />
        <div className="text-end py-4">
          <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sub Group</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {subgroup.map((countr, i) => {
              return <SubgroupTr key={i} countr={countr} index={i} getsubgroup={getsubgroup} deletesubgroup={deletesubgroup} subgroupUpdate={subgroupUpdate} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DSubgroup