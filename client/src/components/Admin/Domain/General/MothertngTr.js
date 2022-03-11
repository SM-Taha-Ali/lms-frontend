import React, {useEffect} from 'react'

const MothertngTr = (props) => {
    const { countr, index, getmothertng, deletemothertng, mothertngUpdate } = props
    useEffect(() => {
        getmothertng()
    }, [])

    const delmothertng = ()=>{
        deletemothertng(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{mothertngUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delmothertng}></i>
            </td>
        </tr>
    )
}

export default MothertngTr