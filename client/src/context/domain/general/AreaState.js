import React, { useState } from 'react';
import areaContext from './areaContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";

    const areaInitial = [ ]
    const [area, setarea] = useState(areaInitial)

    // Get Cart Items

    const getarea = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/area//get-area`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setarea(json)
    }


    const addarea = async (value, label, name) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/area/add-area`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value , label, name })
        });
        const countr = await response.json();
        setarea(area.concat(countr))
    }


    //  Update Quantity

    const updatearea = async (id, value, label, name) => {
        const response = await fetch(`${host}/api/area/update-area`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name })
        });

        // Logic to edit in client side

        let newarea = JSON.parse(JSON.stringify(area))

        for (let index = 0; index < newarea.length; index++) {
            const element = area[index];
            if (element._id == id) {
                newarea[index].value = value;
                newarea[index].label = label;
                newarea[index].name = name;
                break;
            }
        }
        setarea(newarea);
    }

    // Delete item

    const deletearea = async (id) => {
        const response = await fetch(`${host}/api/area//delete-area`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newarea = area.filter((countr) => { return countr._id !== id })
        setarea(newarea)
    }


    return (
        <areaContext.Provider value={{ area, getarea, addarea, updatearea, deletearea }}>
            {props.children}
        </areaContext.Provider>
    )
}

export default GlobalState