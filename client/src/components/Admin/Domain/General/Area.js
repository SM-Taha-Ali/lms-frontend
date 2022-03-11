import React, { useContext, useEffect, useState, useRef } from 'react';
import areaContext from '../../../../context/domain/general/areaContext';
import AreaTr from './AreaTr';

const Area = () => {
  const context = useContext(areaContext);
  const { area, getarea, addarea, updatearea, deletearea } = context

  useEffect(() => {
    getarea()
  }, [])

  const ref = useRef(null)

  const [areas, setareas] = useState({ cable: "", label: "" })

  const onChange = (e) => {
    setareas({ ...areas, cable: e.target.value })
    setareas({ ...areas, label: e.target.value })
  }

  const updateClick = () => {
    updatearea(areas._id, areas.label, areas.label, "area")
  }

  const areaUpdate = (currentarea) => {
    ref.current.click();
    setareas(currentarea)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addarea(areas.label, areas.label, "area")
    var area = document.getElementById("area")
    area.value = ""
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
              <h5 className="modal-title" id="staticBackdropLabel">Update area</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={areas.label} />
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
      <h1 className='mt-5'>Add Area</h1>
      <div className="my-5">
        <input type="text" className="form-control" id="area" name='value' onChange={onChange} />
        <div className="text-end py-4">
          <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Area</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {area.map((countr, i) => {
              return <AreaTr key={i} countr={countr} index={i} getarea={getarea} deletearea={deletearea} areaUpdate={areaUpdate} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Area