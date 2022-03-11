import React, {useEffect} from 'react'

const AreaTr = (props) => {
    const { countr, index, getarea, deletearea, areaUpdate } = props
    useEffect(() => {
        getarea()
    }, [])

    const delarea = ()=>{
        deletearea(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{areaUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delarea}></i>
            </td>
        </tr>
    )
}

export default AreaTr