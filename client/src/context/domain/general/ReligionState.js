import React, { useState } from 'react';
import ReligionContext from './religionContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";


    const religionInitial = [ ]
    const [religion, setReligion] = useState(religionInitial)

    // Get Cart Items

    const getReligion = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/religion/get-religion`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setReligion(json)
    }


    const addReligion = async (value, label, name) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/religion/add-religion`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value , label, name })
        });
        const reli = await response.json();
        setReligion(religion.concat(reli))
    }


    //  Update Quantity

    const updateReligion = async (id, value, label, name) => {
        const response = await fetch(`${host}/api/religion/update-religion`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name })
        });

        // Logic to edit in client side

        let newReligion = JSON.parse(JSON.stringify(religion))

        for (let index = 0; index < newReligion.length; index++) {
            const element = religion[index];
            if (element._id == id) {
                newReligion[index].value = value;
                newReligion[index].label = label;
                newReligion[index].name = name;
                break;
            }
        }
        setReligion(newReligion);
    }

    // Delete item

    const deleteReligion = async (id) => {
        const response = await fetch(`${host}/api/religion/delete-religion`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newReligion = religion.filter((reli) => { return reli._id !== id })
        setReligion(newReligion)
    }


    return (
        <ReligionContext.Provider value={{ religion, getReligion, addReligion, updateReligion, deleteReligion }}>
            {props.children}
        </ReligionContext.Provider>
    )
}

export default GlobalState