import React, {useEffect} from 'react'

const ReligionTr = (props) => {
    const { reli, index, getReligion, deleteReligion, religionUpdate } = props
    useEffect(() => {
        getReligion()
    }, [])

    const delReligion = ()=>{
        deleteReligion(reli._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{reli.value}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{religionUpdate(reli)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delReligion}></i>
            </td>
        </tr>
    )
}

export default ReligionTr