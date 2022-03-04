import React, {useEffect} from 'react'

const CountryTr = (props) => {
    const { countr, index, getCountry, deleteCountry, countryUpdate } = props
    useEffect(() => {
        getCountry()
    }, [])

    const delCountry = ()=>{
        deleteCountry(countr._id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer" onClick={()=>{countryUpdate(countr)}} ></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer" onClick={delCountry}></i>
            </td>
        </tr>
    )
}

export default CountryTr