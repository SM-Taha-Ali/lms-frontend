import React from 'react'

const DClass = () => {
  return (
    <div>
      <h1 className='mt-5'>Add Class</h1>
      <div className="my-5">
        <input type="text" className="form-control" id="religion" />
        <div className="text-end py-4">
          <button className="btn btn_dark_blue text-white">Add Now</button>
        </div>
      </div>

      <div className='mt-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Class</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>XII</td>
              <td className='text-center'>
              <i className="far fa-edit px-2 text-success"></i>
              <i className="far fa-trash-alt px-2 text-danger"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DClass