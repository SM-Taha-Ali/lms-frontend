import React, { useState } from 'react';
import cityContext from './cityContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";

    const cityInitial = [ ]
    const [city, setcity] = useState(cityInitial)

    // Get Cart Items

    const getcity = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/city/get-city`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setcity(json)
    }


    const addcity = async (value, label, name) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/city/add-city`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value , label, name })
        });
        const countr = await response.json();
        setcity(city.concat(countr))
    }


    //  Update Quantity

    const updatecity = async (id, value, label, name) => {
        const response = await fetch(`${host}/api/city/update-city`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name })
        });

        // Logic to edit in client side

        let newcity = JSON.parse(JSON.stringify(city))

        for (let index = 0; index < newcity.length; index++) {
            const element = city[index];
            if (element._id == id) {
                newcity[index].value = value;
                newcity[index].label = label;
                newcity[index].name = name;
                break;
            }
        }
        setcity(newcity);
    }

    // Delete item

    const deletecity = async (id) => {
        const response = await fetch(`${host}/api/city/delete-city`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newcity = city.filter((countr) => { return countr._id !== id })
        setcity(newcity)
    }


    return (
        <cityContext.Provider value={{ city, getcity, addcity, updatecity, deletecity }}>
            {props.children}
        </cityContext.Provider>
    )
}

export default GlobalState