import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from "react-loader-spinner";
import "../../Stylesheets/StdReg.css"
import "../../Stylesheets/loader.css"
import countryContext from '../../../../context/domain/general/countryContext';
import religionContext from '../../../../context/domain/general/religionContext';
import cityContext from '../../../../context/domain/general/cityContext';
import provinceContext from '../../../../context/domain/general/provinceContext';
import mothertngContext from '../../../../context/domain/general/mothertngContext';
import bloodgrpContext from '../../../../context/domain/general/bloodgrpContext';
import areaContext from '../../../../context/domain/general/areaContext';
import districtContext from '../../../../context/domain/general/districtContext';
import empregContext from '../../../../context/registration/empregContext';
import Alert from 'react-bootstrap/Alert'
import Select from 'react-select';

const gender = [
  { value: 'male', label: 'Male', name: "gender" },
  { value: 'female', label: 'Female', name: "gender" },
  { value: 'notSpecified', label: 'Not-Specified', name: "gender" },
];

const roles = [
  { value: 'teacher', label: 'Teacher', name: "role" },
];


const EmpReg = () => {
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(true);

  const contextCountry = useContext(countryContext);
  const { country, getCountry, addCountry, updateCountry, deleteCountry } = contextCountry

  useEffect(() => {
    getCountry()
  }, [])

  const contextReligion = useContext(religionContext);
  const { religion, getReligion, addReligion, updateReligion, deleteReligion } = contextReligion

  useEffect(() => {
    getReligion()
  }, [])

  const contextProvince = useContext(provinceContext);
  const { province, getprovince } = contextProvince

  useEffect(() => {
    getprovince()
  }, [])

  const contextCity = useContext(cityContext);
  const { city, getcity } = contextCity

  useEffect(() => {
    getcity()
  }, [])

  const contextMothertng = useContext(mothertngContext);
  const { mothertng, getmothertng } = contextMothertng

  useEffect(() => {
    getmothertng()
  }, [])

  const contextDistrict = useContext(districtContext);
  const { district, getdistrict } = contextDistrict

  useEffect(() => {
    getdistrict()
  }, [])

  const contextBloodgrp = useContext(bloodgrpContext);
  const { bloodgrp, getbloodgrp } = contextBloodgrp

  useEffect(() => {
    getbloodgrp()
  }, [])

  const contextArea = useContext(areaContext);
  const { area, getarea } = contextArea

  useEffect(() => {
    getarea()
  }, [])


  const contextEmpreg = useContext(empregContext);
  const { empreg, getEmployees, regEmployee, getUserEmployee } = contextEmpreg

  const [employeeReg, setemployeeReg] = useState({ inquiry: "", gr_no: "", join_date: "", jobType: "", dept: "", designation: "", name: "", f_name: "", contact: "", whatsApp: "", email: "", cnic: "", gender: "", dob: "", religion: "", nationality: "", mother_tng: "", blood_group: "", role: "", martial_status: "", spouse_name: "", no_of_children: "", family_members: "", curr_addr: "", perm_addr: "", country: "", state: "", district: "", city: "", area: "", postal_code: "", username: "", password: "", status: "" })

  const onChange = (e) => {
    try {
      setemployeeReg({ ...employeeReg, [e.target.name]: e.target.value })
    } catch (error) {
      setemployeeReg({ ...employeeReg, [e.name]: e.value })
    }
  }

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoader(false)
    const res = await regEmployee(employeeReg.inquiry, employeeReg.gr_no, employeeReg.join_date, employeeReg.jobType, employeeReg.dept, employeeReg.designation,
      employeeReg.name, employeeReg.f_name, employeeReg.contact, employeeReg.whatsApp, employeeReg.email, employeeReg.cnic, employeeReg.gender, employeeReg.dob,
      employeeReg.religion, employeeReg.nationality, employeeReg.mother_tng, employeeReg.blood_group, employeeReg.role, employeeReg.martial_status, employeeReg.spouse_name,
      employeeReg.no_of_children, employeeReg.family_members, employeeReg.curr_addr, employeeReg.perm_addr, employeeReg.country, employeeReg.state, employeeReg.district, employeeReg.city,
      employeeReg.area, employeeReg.postal_code, employeeReg.username, employeeReg.password, employeeReg.status).catch((err) => {
        setLoader(true)
        setShow(true)
        setTimeout(() => {
          setShow(false)
        }, 2000);
      })
    if (res && res.ok) {
      setLoader(true)
      navigate("/admin/management/adprofile/empprof")
    } else if (!res.ok) {
      setLoader(true)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 2000);
    }
  }
  var counTry = [];

  country.map((countr) => {
    counTry.push({ value: countr.value, label: countr.label, name: countr.name })
  });

  var reLigion = [];

  religion.map((reli) => {
    reLigion.push({ value: reli.value, label: reli.label, name: reli.name })
  });

  var cIty = [];

  city.map((i) => {
    cIty.push({ value: i.value, label: i.label, name: i.name })
  });
  var provInce = [];

  province.map((i) => {
    provInce.push({ value: i.value, label: i.label, name: i.name })
  });

  var bloodGrp = [];

  bloodgrp.map((i) => {
    bloodGrp.push({ value: i.value, label: i.label, name: i.name })
  });

  var motherTng = [];

  mothertng.map((i) => {
    motherTng.push({ value: i.value, label: i.label, name: i.name })
  });

  var disTrict = [];

  district.map((i) => {
    disTrict.push({ value: i.value, label: i.label, name: i.name })
  });

  var aRea = [];

  area.map((i) => {
    aRea.push({ value: i.value, label: i.label, name: i.name })
  });


  return (
    <>
      {!loader && <div className="loader-wrapper">
        <TailSpin color="#00BFFF" height={80} width={80} />
      </div>}
      <div>
        {show ? <div className='alert_wrapper'>
          <Alert variant={'danger'} className='apni_card_alert' >
            <b>Error!</b> Something went wrong please try again.
          </Alert>
        </div> : ""}
        <h1 className='text-center py-5'>EMPLOYEE REGISTRATION</h1>
        <form>
          <div className="row g-0 py-2">
            <div className="col-md-4 padding_fix">
              <label htmlFor="" className="form-label">Inquiry</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='inquiry' onChange={onChange} />
            </div>
            <div className="col-md-4 padding_fix"></div>
            <div className="col-md-4 padding_fix">
              <label htmlFor="" className="form-label">G.R. No.</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='gr_no' onChange={onChange} />
            </div>
          </div>
          <div className="row g-0 py-2">
            <div className="col-md-4 padding_fix">
              <label htmlFor="" className="form-label">Username</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='username' onChange={onChange} />
            </div>
            <div className="col-md-4 padding_fix px-3">
              <label htmlFor="" className="form-label">Password</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='password' onChange={onChange} />
            </div>
            <div className="col-md-4 padding_fix">
              <label htmlFor="" className="form-label">Role</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={roles}
                width={100}
                name="role"
              />
            </div>
          </div>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix pe-2">
              <label htmlFor="" className="form-label">Joining Date</label>
              <input type="date" className="form-control" id="" aria-describedby="emailHelp" name='join_date' onChange={onChange} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">Job Type</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='jobType' onChange={onChange} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">Department</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='dept' onChange={onChange} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix ps-2">
              <label htmlFor="" className="form-label">Designation</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='designation' onChange={onChange} />
            </div>
          </div>
          <h2 className='text-center py-4'>EMPLOYEE DETAILS</h2>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix pe-2">
              <label htmlFor="" className="form-label">Name</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='name' onChange={onChange} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">Father Name</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='f_name' onChange={onChange} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">Contact No.</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='contact' onChange={onChange} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix ps-2">
              <label htmlFor="" className="form-label">WhatsApp</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='whatsApp' onChange={onChange} />
            </div>
          </div>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix pe-2">
              <label htmlFor="" className="form-label">Email</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='email' onChange={onChange} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">C.N.I.C</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='cnic' onChange={onChange} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">Gender</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={gender}
                width={100}
              />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix ps-2">
              <label htmlFor="" className="form-label">D.O.B</label>
              <input type="date" className="form-control" id="" aria-describedby="emailHelp" name='dob' onChange={onChange} />
            </div>
          </div>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix pe-2">
              <label htmlFor="" className="form-label">Religion</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={reLigion}
                width={100}
              />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">Nationality</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='nationality' onChange={onChange} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">Mother Tongue</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={motherTng}
                width={100}
              />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix ps-2">
              <label htmlFor="" className="form-label">Blood Group</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={bloodGrp}
                width={100}
              />
            </div>
          </div>
          <h2 className='text-center py-4'>PERSONAL DETAILS</h2>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix pe-2">
              <label htmlFor="" className="form-label">Martial Status</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='martial_status' onChange={onChange} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">Spouse Name</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='spouse_name' onChange={onChange} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">No. of Children</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='no_of_children' onChange={onChange} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix ps-2">
              <label htmlFor="" className="form-label">Family Members</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='family_members' onChange={onChange} />
            </div>
          </div>
          <h2 className='text-center py-4'>ADDRESS DETAILS</h2>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix pe-2">
              <label htmlFor="" className="form-label">Current Address</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='curr_addr' onChange={onChange} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">Permenant Address</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='perm_addr' onChange={onChange} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">Country</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={counTry}
                width={100}
              />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix ps-2">
              <label htmlFor="" className="form-label">Province</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={provInce}
                width={100}
              />
            </div>
          </div>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix pe-2">
              <label htmlFor="" className="form-label">City</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={cIty}
                width={100}
              />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">District</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={disTrict}
                width={100}
              />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">Area</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={aRea}
                width={100}
              />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix ps-2">
              <label htmlFor="" className="form-label">Postal Code</label>
              <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='postal_code' onChange={onChange} />
            </div>
          </div>
          <div className='text-end btn_mobile py-5'>
            <button type="submit" className="btn btn_blue text-white" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EmpReg