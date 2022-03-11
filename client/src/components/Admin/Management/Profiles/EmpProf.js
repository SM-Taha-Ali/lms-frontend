import React, { useState, useEffect, useContext } from 'react';
import empregContext from '../../../../context/registration/empregContext';
import ProfileCardEmp from './ProfileCardEmp';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

const EmpProf = () => {

  let navigate = useNavigate();

  const contextEmpreg = useContext(empregContext);
  const { empreg, getEmployees, regEmployee, getUserEmployee } = contextEmpreg

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <div className='container pt-5'>
      <div className="d-flex flex-row justify-content-end">
        <div className="input-group mb-3 search_box">
          <span className="input-group-text background_blue" id="basic-addon1"><i className="fas fa-search"></i></span>
          <input type="text" className="form-control" placeholder="Search employees..." aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </div>
      <div className="row pt-5">
        {empreg.map((employee, i) => {
          return <ProfileCardEmp key={i} user={employee}  />
        })}
      </div>

    </div>
  )
}

export default EmpProf