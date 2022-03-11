import React, {useEffect} from 'react'

const ProvinceTr = (props) => {
    const { countr, index, getprovince, deleteprovince, provinceUpdate } = props
    useEffect(() => {
        getprovince()
    }, [])

    const delprovince = ()=>{
        deleteprovince(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{provinceUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delprovince}></i>
            </td>
        </tr>
    )
}

export default ProvinceTr