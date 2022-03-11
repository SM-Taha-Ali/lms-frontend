import React, {useEffect} from 'react'

const FeeTr = (props) => {
    const { countr, index, getfee, deletefee, feeUpdate } = props
    useEffect(() => {
        getfee()
    }, [])

    const delfee = ()=>{
        deletefee(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td>{countr.type}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{feeUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delfee}></i>
            </td>
        </tr>
    )
}

export default FeeTr