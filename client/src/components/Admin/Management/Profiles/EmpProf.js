import React, { useState, useEffect, useContext } from 'react';
import empregContext from '../../../../context/registration/empregContext';
import ProfileCard from './ProfileCard';

const EmpProf = () => {

  const contextEmpreg = useContext(empregContext);
  const { empreg, getEmployees, regEmployee, getUserEmployee } = contextEmpreg

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <div className='container pt-5'>
      <div className="d-flex flex-row justify-content-end">
        <div className="input-group mb-3 search_box">
          <span className="input-group-text background_blue" id="basic-addon1"><i class="fas fa-search"></i></span>
          <input type="text" className="form-control" placeholder="Search employees..." aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </div>
      <div className="row pt-5">
        {empreg.map((employee) => {
          return <ProfileCard user={employee} />
        })}
      </div>

    </div>
  )
}

export default EmpProf