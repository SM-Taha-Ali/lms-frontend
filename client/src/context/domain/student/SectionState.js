import React, { useState } from 'react';
import sectionContext from './sectionContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";

    const sectionInitial = []
    const [section, setsection] = useState(sectionInitial)

    // Get Cart Items

    const getsection = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/dsection/get-dsection`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setsection(json)
    }


    const addsection = async (value, label, name) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/dsection/add-dsection`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value, label, name })
        });
        const countr = await response.json();
        setsection(section.concat(countr))
    }


    //  Update Quantity

    const updatesection = async (id, value, label, name) => {
        const response = await fetch(`${host}/api/dsection/update-dsection`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name })
        });

        // Logic to edit in client side

        let newsection = JSON.parse(JSON.stringify(section))

        for (let index = 0; index < newsection.length; index++) {
            const element = section[index];
            if (element._id == id) {
                newsection[index].value = value;
                newsection[index].label = label;
                newsection[index].name = name;
                break;
            }
        }
        setsection(newsection);
    }

    // Delete item

    const deletesection = async (id) => {
        const response = await fetch(`${host}/api/dsection/delete-dsection`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newsection = section.filter((countr) => { return countr._id !== id })
        setsection(newsection)
    }


    return (
        <sectionContext.Provider value={{ section, getsection, addsection, updatesection, deletesection }}>
            {props.children}
        </sectionContext.Provider>
    )
}

export default GlobalState