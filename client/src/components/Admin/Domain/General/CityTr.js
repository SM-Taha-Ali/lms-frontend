import React, {useEffect} from 'react'

const CityTr = (props) => {
    const { countr, index, getcity, deletecity, cityUpdate } = props
    useEffect(() => {
        getcity()
    }, [])

    const delcity = ()=>{
        deletecity(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{cityUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delcity}></i>
            </td>
        </tr>
    )
}

export default CityTr