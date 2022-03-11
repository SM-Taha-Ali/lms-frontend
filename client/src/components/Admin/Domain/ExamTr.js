import React, {useEffect} from 'react'

const ExamTr = (props) => {
    const { countr, index, getexam, deleteexam, examUpdate } = props
    useEffect(() => {
        getexam()
    }, [])

    const delexam = ()=>{
        deleteexam(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{examUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delexam}></i>
            </td>
        </tr>
    )
}

export default ExamTr