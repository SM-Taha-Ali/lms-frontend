import React, { useState, useEffect, useContext } from 'react';
import stdregContext from '../../../../context/registration/stdregContext';
import ProfileCard from './ProfileCard';

const StdProf = () => {
  const contextStdreg = useContext(stdregContext);
  const { stdreg, getStudents, regStudent, getUserStudent } = contextStdreg

  useEffect(() => {
    getStudents()
  }, [])

  return (
    <div className='container pt-5'>
      <div className="d-flex flex-row justify-content-end">
        <div className="input-group mb-3 search_box">
          <span className="input-group-text background_blue" id="basic-addon1"><i className="fas fa-search"></i></span>
          <input type="text" className="form-control" placeholder="Search students..." aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </div>
      <div className="row pt-5">
        {stdreg.map((student) => {
          return <ProfileCard user={student} />
        })}
      </div>

    </div>
  )
}

export default StdProf