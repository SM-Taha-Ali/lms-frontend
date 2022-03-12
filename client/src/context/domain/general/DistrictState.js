import React, { useState } from 'react';
import districtContext from './districtContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";


    const districtInitial = [ ]
    const [district, setdistrict] = useState(districtInitial)

    // Get Cart Items

    const getdistrict = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/district//get-district`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setdistrict(json)
    }


    const adddistrict = async (value, label, name) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/district/add-district`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value , label, name })
        });
        const countr = await response.json();
        setdistrict(district.concat(countr))
    }


    //  Update Quantity

    const updatedistrict = async (id, value, label, name) => {
        const response = await fetch(`${host}/api/district/update-district`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name })
        });

        // Logic to edit in client side

        let newdistrict = JSON.parse(JSON.stringify(district))

        for (let index = 0; index < newdistrict.length; index++) {
            const element = district[index];
            if (element._id == id) {
                newdistrict[index].value = value;
                newdistrict[index].label = label;
                newdistrict[index].name = name;
                break;
            }
        }
        setdistrict(newdistrict);
    }

    // Delete item

    const deletedistrict = async (id) => {
        const response = await fetch(`${host}/api/district//delete-district`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newdistrict = district.filter((countr) => { return countr._id !== id })
        setdistrict(newdistrict)
    }


    return (
        <districtContext.Provider value={{ district, getdistrict, adddistrict, updatedistrict, deletedistrict }}>
            {props.children}
        </districtContext.Provider>
    )
}

export default GlobalState