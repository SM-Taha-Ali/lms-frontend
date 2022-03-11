import React, {useEffect} from 'react'

const DistrictTr = (props) => {
    const { countr, index, getdistrict, deletedistrict, districtUpdate } = props
    useEffect(() => {
        getdistrict()
    }, [])

    const deldistrict = ()=>{
        deletedistrict(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{districtUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={deldistrict}></i>
            </td>
        </tr>
    )
}

export default DistrictTr