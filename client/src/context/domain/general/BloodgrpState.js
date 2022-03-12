import React, { useState } from 'react';
import bloodgrpContext from './bloodgrpContext';

const GlobalState = (props) => {

    const apiUrl = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";

    const bloodgrpInitial = [ ]
    const [bloodgrp, setbloodgrp] = useState(bloodgrpInitial)

    // Get Cart Items

    const getbloodgrp = async () => {
        // TODO API CALL
        const response = await fetch(`${apiUrl}/api/bloodgroup/get-bloodgroup`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setbloodgrp(json)
    }


    const addbloodgrp = async (value, label, name) => {
        // TODO API CALL
        const response = await fetch(`${apiUrl}/api/bloodgroup/add-bloodgroup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value , label, name })
        });
        const countr = await response.json();
        setbloodgrp(bloodgrp.concat(countr))
    }


    //  Update Quantity

    const updatebloodgrp = async (id, value, label, name) => {
        const response = await fetch(`${apiUrl}/api/bloodgroup/update-bloodgroup`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name })
        });

        // Logic to edit in client side

        let newbloodgrp = JSON.parse(JSON.stringify(bloodgrp))

        for (let index = 0; index < newbloodgrp.length; index++) {
            const element = bloodgrp[index];
            if (element._id == id) {
                newbloodgrp[index].value = value;
                newbloodgrp[index].label = label;
                newbloodgrp[index].name = name;
                break;
            }
        }
        setbloodgrp(newbloodgrp);
    }

    // Delete item

    const deletebloodgrp = async (id) => {
        const response = await fetch(`${apiUrl}/api/bloodgroup/delete-bloodgroup`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newbloodgrp = bloodgrp.filter((countr) => { return countr._id !== id })
        setbloodgrp(newbloodgrp)
    }


    return (
        <bloodgrpContext.Provider value={{ bloodgrp, getbloodgrp, addbloodgrp, updatebloodgrp, deletebloodgrp }}>
            {props.children}
        </bloodgrpContext.Provider>
    )
}

export default GlobalState