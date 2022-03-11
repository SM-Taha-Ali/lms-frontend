import React, { useState } from 'react';
import batchContext from './batchContext';

const GlobalState = (props) => {

    const host = "http://localhost:5000"

    const batchInitial = [ ]
    const [batch, setbatch] = useState(batchInitial)

    // Get Cart Items

    const getbatch = async () => {
        // TODO API CALL
        const response = await fetch(`/api/batches/get-batches`, {
        // const response = await fetch(`${host}/api/batches/get-batches`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setbatch(json)
    }


    const addbatch = async (batchname, subteafees, students, start_date, end_date) => {
        // TODO API CALL
        const response = await fetch(`/api/batches/add-batches`, {
        // const response = await fetch(`${host}/api/batches/add-batches`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ batchname, subteafees, students, start_date, end_date })
        });
        const countr = await response.json();
        setbatch(batch.concat(countr))
    }


    //  Update Quantity

    const updatebatch = async (id, batchname, subteafees, students, start_date, end_date) => {
        const response = await fetch(`/api/batches/update-batches`, {
        // const response = await fetch(`${host}/api/batches/update-batches`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, batchname, subteafees, students, start_date, end_date })
        });

        // Logic to edit in client side

        let newbatch = JSON.parse(JSON.stringify(batch))

        for (let index = 0; index < newbatch.length; index++) {
            const element = batch[index];
            if (element._id == id) {
                newbatch[index].batchname = batchname;
                newbatch[index].subteafees = subteafees;
                newbatch[index].students = students;
                newbatch[index].start_date = start_date;
                newbatch[index].end_date = end_date;
                break;
            }
        }
        setbatch(newbatch);
    }

    // Delete item

    const deletebatch = async (id) => {
        const response = await fetch(`/api/batches/delete-batches`, {
        // const response = await fetch(`${host}/api/batches/delete-batches`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newbatch = batch.filter((countr) => { return countr._id !== id })
        setbatch(newbatch)
    }


    return (
        <batchContext.Provider value={{ batch, getbatch, addbatch, updatebatch, deletebatch }}>
            {props.children}
        </batchContext.Provider>
    )
}

export default GlobalState