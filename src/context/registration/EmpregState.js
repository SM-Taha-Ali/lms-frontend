import React, { useState } from 'react';
import EmpregContext from './empregContext';

const GlobalState = (props) => {

    const host = "http://localhost:5000"

    const empregInitial = [ ]
    const [empreg, setEmpreg] = useState(empregInitial)

    // Get Cart Items

    const getEmployees = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/auth/get-employees`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setEmpreg(json)
    }


    const regEmployee = async ( inquiry, gr_no, join_date, jobType, dept, designation, name, f_name, contact, whatsApp, email, cnic, gender, dob, religion, nationality, mother_tng, blood_group, role, martial_status, spouse_name, no_of_children, family_members, curr_addr, perm_addr, country, state, city, area, postal_code, username, password, status ) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/auth/register-employee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ inquiry, gr_no, join_date, jobType, dept, designation, name, f_name, contact, whatsApp, email, cnic, gender, dob, religion, nationality, mother_tng, blood_group, role:"employee", martial_status, spouse_name, no_of_children, family_members, curr_addr, perm_addr, country, state, city, area, postal_code, username, password, status  })
        });
        const emp = await response.json();
        setEmpreg(empreg.concat(emp))
    }

    const getUserEmployee = async (emp_id) => {
        // TODO API CALL
        const response = await fetch(`/api/auth/get-user-employee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ emp_id })
        });
        const json = await response.json()
        return json
    }


    //  Update Quantity

    // const updateCountry = async (id, value, label) => {
    //     const response = await fetch(`${host}/api/country//update-country`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ id, value, label })
    //     });

    //     // Logic to edit in client side

    //     let newCountry = JSON.parse(JSON.stringify(country))

    //     for (let index = 0; index < newCountry.length; index++) {
    //         const element = country[index];
    //         if (element._id == id) {
    //             newCountry[index].value = value;
    //             newCountry[index].label = label;
    //             break;
    //         }
    //     }
    //     setCountry(newCountry);
    // }

    // Delete item

    // const deleteCountry = async (id) => {
    //     const response = await fetch(`${host}/api/country//delete-country`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ id })
    //     });
    //     const newCountry = country.filter((countr) => { return countr._id !== id })
    //     setCountry(newCountry)
    // }


    return (
        <EmpregContext.Provider value={{ empreg, getEmployees, regEmployee, getUserEmployee }}>
            {props.children}
        </EmpregContext.Provider>
    )
}

export default GlobalState