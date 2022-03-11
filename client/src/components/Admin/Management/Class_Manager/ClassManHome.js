import React, { useState, useEffect, useContext, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom'
import batchContext from '../../../../context/management/batches/batchContext';
import BatchCard from './BatchCard';
import "../../Stylesheets/batch.css"

const ClassManHome = () => {

    const contextBatch = useContext(batchContext);
    const { batch, getbatch, addbatch, updatebatch, deletebatch } = contextBatch

    useEffect(() => {
        getbatch()
    }, [])

    return (
        <div>
            <div className="row g-0">
                {batch.map((bat)=>{
                    return <BatchCard bat={bat}/>
                })}
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <Link aria-current="page" to="/admin/management/adbatch/classmanage">
                        <div className="add_card">
                            <div className='icon_wrapper'>
                                <i className="fal fa-plus-circle add_icon"></i>
                            </div>
                            <div className='icon_wrapper pt-3'>
                                Add Batch
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ClassManHome