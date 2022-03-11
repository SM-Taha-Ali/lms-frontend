import React, {useEffect} from 'react'

const BloodgrpTr = (props) => {
    const { countr, index, getbloodgrp, deletebloodgrp, bloodgrpUpdate } = props
    useEffect(() => {
        getbloodgrp()
    }, [])

    const delbloodgrp = ()=>{
        deletebloodgrp(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{bloodgrpUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delbloodgrp}></i>
            </td>
        </tr>
    )
}

export default BloodgrpTr