import React, {useEffect} from 'react'

const SubgroupTr = (props) => {
    const { countr, index, getsubgroup, deletesubgroup, subgroupUpdate } = props
    useEffect(() => {
        getsubgroup()
    }, [])

    const delsubgroup = ()=>{
        deletesubgroup(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{subgroupUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delsubgroup}></i>
            </td>
        </tr>
    )
}

export default SubgroupTr