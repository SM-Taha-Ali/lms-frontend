import React, { useState } from 'react';
import groupContext from './groupContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";

    const groupInitial = [ ]
    const [group, setgroup] = useState(groupInitial)

    // Get Cart Items

    const getgroup = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/dgroup/get-dgroup`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setgroup(json)
    }


    const addgroup = async (value, label, name) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/dgroup/add-dgroup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value , label, name })
        });
        const countr = await response.json();
        setgroup(group.concat(countr))
    }


    //  Update Quantity

    const updategroup = async (id, value, label, name) => {
        const response = await fetch(`${host}/api/dgroup/update-dgroup`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name })
        });

        // Logic to edit in client side

        let newgroup = JSON.parse(JSON.stringify(group))

        for (let index = 0; index < newgroup.length; index++) {
            const element = group[index];
            if (element._id == id) {
                newgroup[index].value = value;
                newgroup[index].label = label;
                newgroup[index].name = name;
                break;
            }
        }
        setgroup(newgroup);
    }

    // Delete item

    const deletegroup = async (id) => {
        const response = await fetch(`${host}/api/dgroup/delete-dgroup`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newgroup = group.filter((countr) => { return countr._id !== id })
        setgroup(newgroup)
    }


    return (
        <groupContext.Provider value={{ group, getgroup, addgroup, updategroup, deletegroup }}>
            {props.children}
        </groupContext.Provider>
    )
}

export default GlobalState