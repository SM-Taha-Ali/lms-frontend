import React, { useState } from 'react';
import subjectContext from './subjectContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";

    const subjectInitial = [ ]
    const [subject, setsubject] = useState(subjectInitial)

    // Get Cart Items

    const getsubject = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/dsubject/get-dsubject`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setsubject(json)
    }


    const addsubject = async (value, label, name) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/dsubject/add-dsubject`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value , label, name })
        });
        const countr = await response.json();
        setsubject(subject.concat(countr))
    }


    //  Update Quantity

    const updatesubject = async (id, value, label, name) => {
        const response = await fetch(`${host}/api/dsubject/update-dsubject`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name })
        });

        // Logic to edit in client side

        let newsubject = JSON.parse(JSON.stringify(subject))

        for (let index = 0; index < newsubject.length; index++) {
            const element = subject[index];
            if (element._id == id) {
                newsubject[index].value = value;
                newsubject[index].label = label;
                newsubject[index].name = name;
                break;
            }
        }
        setsubject(newsubject);
    }

    // Delete item

    const deletesubject = async (id) => {
        const response = await fetch(`${host}/api/dsubject/delete-dsubject`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newsubject = subject.filter((countr) => { return countr._id !== id })
        setsubject(newsubject)
    }


    return (
        <subjectContext.Provider value={{ subject, getsubject, addsubject, updatesubject, deletesubject }}>
            {props.children}
        </subjectContext.Provider>
    )
}

export default GlobalState