import React, { useState } from 'react';
import feeContext from './feeContext';

const GlobalState = (props) => {

    const apiUrl = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";

    const feeInitial = [ ]
    const [fee, setfee] = useState(feeInitial)

    // Get Cart Items

    const getfee = async () => {
        // TODO API CALL
        const response = await fetch(`${apiUrl}/api/feedomain/get-feedomain`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setfee(json)
    }


    const addfee = async (value, label, name, type) => {
        // TODO API CALL
        const response = await fetch(`${apiUrl}/api/feedomain/add-feedomain`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value, label, name, type })
        });
        const countr = await response.json();
        setfee(fee.concat(countr))
    }


    //  Update Quantity

    const updatefee = async (id, value, label, name, type) => {
        const response = await fetch(`${apiUrl}/api/feedomain/update-feedomain`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name, type })
        });

        // Logic to edit in client side

        let newfee = JSON.parse(JSON.stringify(fee))

        for (let index = 0; index < newfee.length; index++) {
            const element = fee[index];
            if (element._id == id) {
                newfee[index].value = value;
                newfee[index].label = label;
                newfee[index].name = name;
                newfee[index].type = type;
                break;
            }
        }
        setfee(newfee);
    }

    // Delete item

    const deletefee = async (id) => {
        const response = await fetch(`${apiUrl}/api/feedomain/delete-feedomain`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newfee = fee.filter((countr) => { return countr._id !== id })
        setfee(newfee)
    }


    return (
        <feeContext.Provider value={{ fee, getfee, addfee, updatefee, deletefee }}>
            {props.children}
        </feeContext.Provider>
    )
}

export default GlobalState