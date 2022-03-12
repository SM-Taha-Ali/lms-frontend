import React, { useState } from 'react';
import EmpregContext from './empregContext';

const GlobalState = (props) => {

    const host = process.env.NODE_ENV === 'production' ? "" : "http://localhost:5000";

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
        }).catch(err => {
            console.log(err.message)
        });
        const json = await response.json()
        setEmpreg(json)
    }


    const regEmployee = async ( inquiry, gr_no, join_date, jobType, dept, designation, name, f_name, contact, whatsApp, email, cnic, gender, dob, religion, nationality, mother_tng, blood_group, role, martial_status, spouse_name, no_of_children, family_members, curr_addr, perm_addr, country, state, district, city, area, postal_code, username, password, status ) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/auth/register-employee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ inquiry, gr_no, join_date, jobType, dept, designation, name, f_name, contact, whatsApp, email, cnic, gender, dob, religion, nationality, mother_tng, blood_group, role, martial_status, spouse_name, no_of_children, family_members, curr_addr, perm_addr, country, state, district, city, area, postal_code, username, password, status:"active"  })
        }).catch(err => {
            console.log(err.message)
        });
        const emp = await response.json();
        setEmpreg(empreg.concat(emp))
        return response
    }

    const getUserEmployee = async (emp_id) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/auth/get-user-employee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ emp_id })
        }).catch(err => {
            console.log(err.message)
        });
        const json = await response.json()
        return json
    }

    const getSubjectEmployee = async (subject) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/auth/get-subject-employee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ subject })
        }).catch(err => {
            console.log(err.message)
        });
        const json = await response.json()
        return json
    }

    const updateSubEmployee = async (id, subject) => {
        const response = await fetch(`${host}/api/auth/get-update-employee`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, subject })
        });

        // Logic to edit in client side

        let newEmpreg = JSON.parse(JSON.stringify(empreg))

        for (let index = 0; index < newEmpreg.length; index++) {
            const element = empreg[index];
            if (element._id == id) {
                newEmpreg[index].subject = subject;
                break;
            }
        }
        setEmpreg(newEmpreg);
    }


    return (
        <EmpregContext.Provider value={{ empreg, getEmployees, regEmployee, updateSubEmployee, getUserEmployee, getSubjectEmployee }}>
            {props.children}
        </EmpregContext.Provider>
    )
}

export default GlobalState