import React, { useState } from 'react';
import subBindContext from './subBindContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";

    const subBindInitial = []
    const [subBind, setsubBind] = useState(subBindInitial)

    // Get Cart Items

    const getsubBind = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/subBind/get-subBind`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setsubBind(json)
    }


    const addsubBind = async (subject, clasS, group, subgroup) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/subBind/add-subBind`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ subject, class:clasS, group, subgroup })
        });
        const countr = await response.json();
        setsubBind(subBind.concat(countr))
    }


    const getsubOnlyBind = async ( clasS, group, subgroup) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/subBind/get-subOnlyBind`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ class:clasS, group, subgroup })
        });
        const countr = await response.json();
        return countr
    }


    //  Update Quantity

    const updatesubBind = async (id, subject, clasS, group, subgroup) => {
        const response = await fetch(`${host}/api/subBind/update-subBind`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, subject, class:clasS, group, subgroup })
        });

        // Logic to edit in client side

        let newsubBind = JSON.parse(JSON.stringify(subBind))

        for (let index = 0; index < newsubBind.length; index++) {
            const element = subBind[index];
            if (element._id == id) {
                newsubBind[index].subject = subject;
                newsubBind[index].class = clasS;
                newsubBind[index].group = group;
                newsubBind[index].subgroup = subgroup;
                break;
            }
        }
        setsubBind(newsubBind);
    }

    // Delete item

    const deletesubBind = async (id) => {
        const response = await fetch(`${host}/api/subBind/delete-subBind`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newsubBind = subBind.filter((countr) => { return countr._id !== id })
        setsubBind(newsubBind)
    }


    return (
        <subBindContext.Provider value={{ subBind, getsubBind, getsubOnlyBind, addsubBind, updatesubBind, deletesubBind }}>
            {props.children}
        </subBindContext.Provider>
    )
}

export default GlobalState