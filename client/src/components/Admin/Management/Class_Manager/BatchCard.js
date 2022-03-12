import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom'
import "../../Stylesheets/batch.css"

const BatchCard = (props) => {

    const { bat } = props

    return (
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 py-2 d-flex flex-row justify-content-center'>
                <div className="batch_card">
                    <img src="/images/batch_banner.png" alt="" width="100%" />
                    <h2 className='py-2 text-center'>{bat.batchname}</h2>
                    <div className='text-center pt-3'>
                        <Link
                            to='/admin/management/adbatch/batchdesc'
                            state={{ batch: bat }}
                        >
                            <button className="btn btn_dark_blue text-white"> <i className="fad fa-eye me-2"></i>View Batch</button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default BatchCard