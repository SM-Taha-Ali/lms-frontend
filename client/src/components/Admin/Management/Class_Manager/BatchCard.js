import React from 'react'
import "../../Stylesheets/batch.css"

const BatchCard = (props) => {

    const { bat } = props

    return (
        <div className='col-xl-3 col-lg-4 col-md-6'>
            <div className="batch_card">
                <h2 className='py-2 text-center'>{bat.batchname}</h2>
                <div className='text-center pt-3'>
                    <h5>Subjects</h5>
                    {bat.subteafees.map(element => {
                        return <p className='d-inline-block px-2'>{element.subject}</p>
                    })}
                    <h5>Teacher</h5>
                    {bat.subteafees.map(element => {
                        return <p className='d-inline-block px-2'>{element.teacher}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default BatchCard