import React, { useState } from 'react';
import StdregContext from './stdregContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";

    const stdregInitial = [ ]
    const [stdreg, setStdreg] = useState(stdregInitial)

    // Get Cart Items

    const getStudents = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/auth/get-students`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).catch(err => {
            console.log(err.message)
        });
        const json = await response.json()
        setStdreg(json)
    }


    const regStudent = async (inquiry, gr_no, ref, reg_date, name, contact, whatsApp, email, gender, dob, pob, religion, nationality, mother_tng, blood_group, BformNo, f_name, f_contact, f_cnic, f_email, qualification, occupation, company, designation, m_name, m_contact, m_cnic, m_email, m_qualification, m_occupation, m_company, m_designation, g_name, g_contact, g_cnic, g_email, g_qualification, g_occupation, g_company, g_designation, curr_addr, perm_addr, country, state, district, city, area, postal_code, prev_inst, prev_class, prev_inst_addr, leaving_reason, username, password, role, status) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/auth/register-student`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ inquiry, gr_no, ref, reg_date, name, contact, whatsApp, email, gender, dob, pob, religion, nationality, mother_tng, blood_group, BformNo, f_name, f_contact, f_cnic, f_email, qualification, occupation, company, designation, m_name, m_contact, m_cnic, m_email, m_qualification, m_occupation, m_designation, m_company, g_name, g_contact, g_cnic, g_email, g_qualification, g_occupation, g_company, g_designation, curr_addr, perm_addr, country, state, district, city, area, postal_code, prev_inst, prev_class, prev_inst_addr, leaving_reason, username, password, role, status })
        }).catch(err => {
            console.log(err.message)
        });
        const std = await response.json();
        setStdreg(stdreg.concat(std))
        return response
    }

    const getUserStudent = async (std_id) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/auth/get-user-student`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ std_id })
        }).catch(err => {
            console.log(err.message)
        });
        const json = await response.json()
        return json
    }

    //  Update Quantity

    // const updateCountry = async (id, value, label) => {
    //     const response = await fetch(`/api/country//update-country`, {
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
        <StdregContext.Provider value={{ stdreg, getStudents, regStudent, getUserStudent }}>
            {props.children}
        </StdregContext.Provider>
    )
}

export default GlobalState