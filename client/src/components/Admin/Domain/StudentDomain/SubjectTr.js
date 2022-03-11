import React, {useEffect} from 'react'

const SubjectTr = (props) => {
    const { countr, index, getsubject, deletesubject, subjectUpdate } = props
    useEffect(() => {
        getsubject()
    }, [])

    const delsubject = ()=>{
        deletesubject(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{subjectUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delsubject}></i>
            </td>
        </tr>
    )
}

export default SubjectTr