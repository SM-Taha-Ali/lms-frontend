import React, { useState } from 'react';
import subgroupContext from './subgroupContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";

    const subgroupInitial = [ ]
    const [subgroup, setsubgroup] = useState(subgroupInitial)

    // Get Cart Items

    const getsubgroup = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/dsubgroup/get-dsubgroup`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setsubgroup(json)
    }


    const addsubgroup = async (value, label, name) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/dsubgroup/add-dsubgroup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value , label, name })
        });
        const countr = await response.json();
        setsubgroup(subgroup.concat(countr))
    }


    //  Update Quantity

    const updatesubgroup = async (id, value, label, name) => {
        const response = await fetch(`${host}/api/dsubgroup/update-dsubgroup`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name })
        });

        // Logic to edit in client side

        let newsubgroup = JSON.parse(JSON.stringify(subgroup))

        for (let index = 0; index < newsubgroup.length; index++) {
            const element = subgroup[index];
            if (element._id == id) {
                newsubgroup[index].value = value;
                newsubgroup[index].label = label;
                newsubgroup[index].name = name;
                break;
            }
        }
        setsubgroup(newsubgroup);
    }

    // Delete item

    const deletesubgroup = async (id) => {
        const response = await fetch(`${host}/api/dsubgroup/delete-dsubgroup`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newsubgroup = subgroup.filter((countr) => { return countr._id !== id })
        setsubgroup(newsubgroup)
    }


    return (
        <subgroupContext.Provider value={{ subgroup, getsubgroup, addsubgroup, updatesubgroup, deletesubgroup }}>
            {props.children}
        </subgroupContext.Provider>
    )
}

export default GlobalState