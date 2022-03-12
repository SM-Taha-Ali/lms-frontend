import React, { useState } from 'react';
import classContext from './classContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";

    const clasInitial = [ ]
    const [clas, setclas] = useState(clasInitial)

    // Get Cart Items

    const getclas = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/dclass/get-dclass`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setclas(json)
    }


    const addclas = async (value, label, name) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/dclass/add-dclass`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value , label, name })
        });
        const countr = await response.json();
        setclas(clas.concat(countr))
    }


    //  Update Quantity

    const updateclas = async (id, value, label, name) => {
        const response = await fetch(`${host}/api/dclass/update-dclass`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name })
        });

        // Logic to edit in client side

        let newclas = JSON.parse(JSON.stringify(clas))

        for (let index = 0; index < newclas.length; index++) {
            const element = clas[index];
            if (element._id == id) {
                newclas[index].value = value;
                newclas[index].label = label;
                newclas[index].name = name;
                break;
            }
        }
        setclas(newclas);
    }

    // Delete item

    const deleteclas = async (id) => {
        const response = await fetch(`${host}/api/dclass/delete-dclass`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newclas = clas.filter((countr) => { return countr._id !== id })
        setclas(newclas)
    }


    return (
        <classContext.Provider value={{ clas, getclas, addclas, updateclas, deleteclas }}>
            {props.children}
        </classContext.Provider>
    )
}

export default GlobalState