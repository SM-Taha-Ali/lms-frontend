import React, {useEffect} from 'react'

const GroupTr = (props) => {
    const { countr, index, getgroup, deletegroup, groupUpdate } = props
    useEffect(() => {
        getgroup()
    }, [])

    const delgroup = ()=>{
        deletegroup(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{groupUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delgroup}></i>
            </td>
        </tr>
    )
}

export default GroupTr