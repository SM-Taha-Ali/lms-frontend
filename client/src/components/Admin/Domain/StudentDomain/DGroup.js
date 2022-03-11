import React, { useContext, useEffect, useState, useRef } from 'react';
import groupContext from '../../../../context/domain/student/groupContext';
import GroupTr from './GroupTr.js';

const DGroup = () => {
  const context = useContext(groupContext);
  const { group, getgroup, addgroup, updategroup, deletegroup } = context

  useEffect(() => {
    getgroup()
  }, [])

  const ref = useRef(null)

  const [groups, setgroups] = useState({ cable: "", label: "" })

  const onChange = (e) => {
    setgroups({ ...groups, cable: e.target.value })
    setgroups({ ...groups, label: e.target.value })
  }

  const updateClick = () => {
    updategroup(groups._id, groups.label, groups.label, "group")
  }

  const groupUpdate = (currentgroup) => {
    ref.current.click();
    setgroups(currentgroup)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addgroup(groups.label, groups.label, "group")
    var group = document.getElementById("group")
    group.value = ""
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
              <h5 className="modal-title" id="staticBackdropLabel">Update group</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={groups.label} />
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
      <h1 className='mt-5'>Add Group</h1>
      <div className="my-5">
        <input type="text" className="form-control" id="group" name='value' onChange={onChange} />
        <div className="text-end py-4">
          <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Group</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {group.map((countr, i) => {
              return <GroupTr key={i} countr={countr} index={i} getgroup={getgroup} deletegroup={deletegroup} groupUpdate={groupUpdate} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DGroup