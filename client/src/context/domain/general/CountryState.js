import React, { useState } from 'react';
import CountryContext from './countryContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";


    const countryInitial = [ ]
    const [country, setCountry] = useState(countryInitial)

    // Get Cart Items

    const getCountry = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/country//get-country`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setCountry(json)
    }


    const addCountry = async (value, label, name) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/country/add-country`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value , label, name })
        });
        const countr = await response.json();
        setCountry(country.concat(countr))
    }


    //  Update Quantity

    const updateCountry = async (id, value, label, name) => {
        const response = await fetch(`${host}/api/country/update-country`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name })
        });

        // Logic to edit in client side

        let newCountry = JSON.parse(JSON.stringify(country))

        for (let index = 0; index < newCountry.length; index++) {
            const element = country[index];
            if (element._id == id) {
                newCountry[index].value = value;
                newCountry[index].label = label;
                newCountry[index].name = name;
                break;
            }
        }
        setCountry(newCountry);
    }

    // Delete item

    const deleteCountry = async (id) => {
        const response = await fetch(`${host}/api/country//delete-country`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newCountry = country.filter((countr) => { return countr._id !== id })
        setCountry(newCountry)
    }


    return (
        <CountryContext.Provider value={{ country, getCountry, addCountry, updateCountry, deleteCountry }}>
            {props.children}
        </CountryContext.Provider>
    )
}

export default GlobalState