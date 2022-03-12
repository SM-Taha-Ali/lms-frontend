import React, { useState } from 'react';
import provinceContext from './provinceContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";


    const provinceInitial = [ ]
    const [province, setprovince] = useState(provinceInitial)

    // Get Cart Items

    const getprovince = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/province//get-province`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setprovince(json)
    }


    const addprovince = async (value, label, name) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/province/add-province`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value , label, name })
        });
        const countr = await response.json();
        setprovince(province.concat(countr))
    }


    //  Update Quantity

    const updateprovince = async (id, value, label, name) => {
        const response = await fetch(`${host}/api/province/update-province`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name })
        });

        // Logic to edit in client side

        let newprovince = JSON.parse(JSON.stringify(province))

        for (let index = 0; index < newprovince.length; index++) {
            const element = province[index];
            if (element._id == id) {
                newprovince[index].value = value;
                newprovince[index].label = label;
                newprovince[index].name = name;
                break;
            }
        }
        setprovince(newprovince);
    }

    // Delete item

    const deleteprovince = async (id) => {
        const response = await fetch(`${host}/api/province//delete-province`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newprovince = province.filter((countr) => { return countr._id !== id })
        setprovince(newprovince)
    }


    return (
        <provinceContext.Provider value={{ province, getprovince, addprovince, updateprovince, deleteprovince }}>
            {props.children}
        </provinceContext.Provider>
    )
}

export default GlobalState