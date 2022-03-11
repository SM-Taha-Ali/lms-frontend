import React from 'react'

const ModalListgroup = (props) => {
    const {i, sub, userSub} = props
  return (
    <div>
        <li className="list-group-item d-flex flex-row justify-content-between align-items-center">
            <p className='p-0 m-0'>{sub.value}</p>
            <div><input className="subjectCheckbox" type="checkbox" value={sub.value} id={sub.value} /></div>
        </li>
    </div>
  )
}

export default ModalListgroup