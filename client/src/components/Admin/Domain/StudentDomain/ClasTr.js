import React, {useEffect} from 'react'

const ClasTr = (props) => {
    const { countr, index, getclas, deleteclas, clasUpdate } = props
    useEffect(() => {
        getclas()
    }, [])

    const delclas = ()=>{
        deleteclas(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{clasUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delclas}></i>
            </td>
        </tr>
    )
}

export default ClasTr