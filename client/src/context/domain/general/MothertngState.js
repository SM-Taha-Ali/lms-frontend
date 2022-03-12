import React, { useState } from 'react';
import mothertngContext from './mothertngContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";


    const mothertngInitial = [ ]
    const [mothertng, setmothertng] = useState(mothertngInitial)

    // Get Cart Items

    const getmothertng = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/mother_tng/get-mother_tng`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setmothertng(json)
    }


    const addmothertng = async (value, label, name) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/mother_tng/add-mother_tng`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value , label, name })
        });
        const countr = await response.json();
        setmothertng(mothertng.concat(countr))
    }


    //  Update Quantity

    const updatemothertng = async (id, value, label, name) => {
        const response = await fetch(`${host}/api/mother_tng/update-mother_tng`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name })
        });

        // Logic to edit in client side

        let newmothertng = JSON.parse(JSON.stringify(mothertng))

        for (let index = 0; index < newmothertng.length; index++) {
            const element = mothertng[index];
            if (element._id == id) {
                newmothertng[index].value = value;
                newmothertng[index].label = label;
                newmothertng[index].name = name;
                break;
            }
        }
        setmothertng(newmothertng);
    }

    // Delete item

    const deletemothertng = async (id) => {
        const response = await fetch(`${host}/api/mother_tng/delete-mother_tng`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newmothertng = mothertng.filter((countr) => { return countr._id !== id })
        setmothertng(newmothertng)
    }


    return (
        <mothertngContext.Provider value={{ mothertng, getmothertng, addmothertng, updatemothertng, deletemothertng }}>
            {props.children}
        </mothertngContext.Provider>
    )
}

export default GlobalState