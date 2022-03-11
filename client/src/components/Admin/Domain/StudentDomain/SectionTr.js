import React, {useEffect} from 'react'

const SectionTr = (props) => {
    const { countr, index, getsection, deletesection, sectionUpdate } = props
    useEffect(() => {
        getsection()
    }, [])

    const delsection = ()=>{
        deletesection(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{sectionUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delsection}></i>
            </td>
        </tr>
    )
}

export default SectionTr