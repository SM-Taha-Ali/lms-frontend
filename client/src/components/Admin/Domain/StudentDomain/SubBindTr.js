import React, {useEffect} from 'react'

const SubBindTr = (props) => {
    const { countr, index, getsubBind, deletesubBind, subBindUpdate } = props
    useEffect(() => {
        getsubBind()
    }, [])

    const delsubBind = ()=>{
        deletesubBind(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.subject}</td>
            <td>{countr.group}</td>
            <td>{countr.subgroup}</td>
            <td>{countr.class}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{subBindUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delsubBind}></i>
            </td>
        </tr>
    )
}

export default SubBindTr