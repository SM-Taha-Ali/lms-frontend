import React, { useState } from 'react';
import examContext from './examContext';

const GlobalState = (props) => {

    const host = "http://localhost:5000"

    const examInitial = [ ]
    const [exam, setexam] = useState(examInitial)

    // Get Cart Items

    const getexam = async () => {
        // TODO API CALL
        const response = await fetch(`/api/examdomain/get-examdomain`, {
        // const response = await fetch(`${host}/api/examdomain/get-examdomain`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setexam(json)
    }


    const addexam = async (value, label, name) => {
        // TODO API CALL
        const response = await fetch(`/api/examdomain/add-examdomain`, {
        // const response = await fetch(`${host}/api/examdomain/add-examdomain`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value , label, name })
        });
        const countr = await response.json();
        setexam(exam.concat(countr))
    }


    //  Update Quantity

    const updateexam = async (id, value, label, name) => {
        const response = await fetch(`/api/examdomain/update-examdomain`, {
        // const response = await fetch(`${host}/api/examdomain/update-examdomain`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, value, label, name })
        });

        // Logic to edit in client side

        let newexam = JSON.parse(JSON.stringify(exam))

        for (let index = 0; index < newexam.length; index++) {
            const element = exam[index];
            if (element._id == id) {
                newexam[index].value = value;
                newexam[index].label = label;
                newexam[index].name = name;
                break;
            }
        }
        setexam(newexam);
    }

    // Delete item

    const deleteexam = async (id) => {
        const response = await fetch(`/api/examdomain/delete-examdomain`, {
        // const response = await fetch(`${host}/api/examdomain/delete-examdomain`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });
        const newexam = exam.filter((countr) => { return countr._id !== id })
        setexam(newexam)
    }


    return (
        <examContext.Provider value={{ exam, getexam, addexam, updateexam, deleteexam }}>
            {props.children}
        </examContext.Provider>
    )
}

export default GlobalState