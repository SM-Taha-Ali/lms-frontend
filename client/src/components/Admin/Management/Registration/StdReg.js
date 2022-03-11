import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../Stylesheets/loader.css"
import { TailSpin } from "react-loader-spinner";
import Alert from 'react-bootstrap/Alert'
import "../../Stylesheets/StdReg.css"
import countryContext from '../../../../context/domain/general/countryContext';
import religionContext from '../../../../context/domain/general/religionContext';
import cityContext from '../../../../context/domain/general/cityContext';
import provinceContext from '../../../../context/domain/general/provinceContext';
import mothertngContext from '../../../../context/domain/general/mothertngContext';
import bloodgrpContext from '../../../../context/domain/general/bloodgrpContext';
import areaContext from '../../../../context/domain/general/areaContext';
import districtContext from '../../../../context/domain/general/districtContext';
import stdregContext from '../../../../context/registration/stdregContext';
import Select from 'react-select';

const gender = [
  { value: 'male', label: 'Male', name: "gender" },
  { value: 'female', label: 'Female', name: "gender" },
  { value: 'notSpecified', label: 'Not-Specified', name: "gender" },
];

const StdReg = () => {
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(true);

  const contextCountry = useContext(countryContext);
  const { country, getCountry } = contextCountry

  useEffect(() => {
    getCountry()
  }, [])

  const contextreligion = useContext(religionContext);
  const { religion, getReligion } = contextreligion

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

  const contextStdreg = useContext(stdregContext);
  const { stdreg, getStudents, regStudent, getUserStudent } = contextStdreg

  var counTry = [];

  country.map((countr) => {
    counTry.push({ value: countr.value, label: countr.label, name: countr.name })
  });

  var reLigion = [];

  religion.map((i) => {
    reLigion.push({ value: i.value, label: i.label, name: i.name })
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

  const [studentReg, setStudentReg] = useState({ inquiry: "", gr_no: "", ref: "", reg_date: "", name: "", contact: "", whatsApp: "", email: "", gender: "", dob: "", pob: "", religion: "", nationality: "", mother_tng: "", blood_group: "", BformNo: "", f_name: "", f_contact: "", f_cnic: "", f_email: "", qualification: "", occupation: "", company: "", designation: "", m_name: "", m_contact: "", m_cnic: "", m_email: "", m_qualification: "", m_occupation: "", m_company: "", m_designation: "", g_name: "", g_contact: "", g_cnic: "", g_email: "", g_qualification: "", g_occupation: "", g_company: "", g_designation: "", curr_addr: "", perm_addr: "", country: "", state: "", city: "", area: "", postal_code: "", prev_inst: "", prev_class: "", prev_inst_addr: "", leaving_reason: "", username: "", password: "", role: "student", status: "active" })

  const onChange = (e) => {
    try {
      setStudentReg({ ...studentReg, [e.target.name]: e.target.value })
    } catch (error) {
      setStudentReg({ ...studentReg, [e.name]: e.value })
    }
  }

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoader(false)
    const res = await regStudent(studentReg.inquiry, studentReg.gr_no, studentReg.ref, studentReg.reg_date, studentReg.name, studentReg.contact, studentReg.whatsApp,
      studentReg.email, studentReg.gender, studentReg.dob, studentReg.pob, studentReg.religion, studentReg.nationality, studentReg.mother_tng, studentReg.blood_group,
      studentReg.BformNo, studentReg.f_name, studentReg.f_contact, studentReg.f_cnic, studentReg.f_email, studentReg.qualification, studentReg.occupation, studentReg.company,
      studentReg.designation, studentReg.m_name, studentReg.m_contact, studentReg.m_cnic, studentReg.m_email, studentReg.m_qualification, studentReg.m_occupation,
      studentReg.m_company, studentReg.m_designation, studentReg.g_name, studentReg.g_contact, studentReg.g_cnic, studentReg.g_email, studentReg.g_qualification,
      studentReg.g_occupation, studentReg.g_company, studentReg.g_designation, studentReg.curr_addr, studentReg.perm_addr, studentReg.country, studentReg.state, studentReg.city,
      studentReg.area, studentReg.postal_code, studentReg.prev_inst, studentReg.prev_class, studentReg.prev_inst_addr, studentReg.leaving_reason, studentReg.username,
      studentReg.password, studentReg.role, studentReg.status).catch((err) => {
        setLoader(true)
        setShow(true)
        setTimeout(() => {
          setShow(false)
        }, 2000);
      })
    if (res && res.ok) {
      setLoader(true)
      navigate("/admin/management/adprofile/stdprof")
    } else if (!res.ok) {
      setLoader(true)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 2000);
    }
  }


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
        <h1 className='text-center py-5'>STUDENT REGISTRATION</h1>
        <form>
          <div className="row g-0 py-2">
            <div className="col-md-4 padding_fix">
              <label htmlFor="" className="form-label">Inquiry</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='inquiry' />
            </div>
            <div className="col-md-4 padding_fix"></div>
            <div className="col-md-4 padding_fix">
              <label htmlFor="" className="form-label">G.R. No.</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='gr_no' />
            </div>
          </div>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix pe-2">
              <label htmlFor="" className="form-label">Username</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='username' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">Password</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='password' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix px-3">
              <label htmlFor="" className="form-label">Reference</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='ref' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix ps-2">
              <label htmlFor="" className="form-label">Registration Date</label>
              <input type="date" className="form-control" id="" aria-describedby="" onChange={onChange} name='reg_date' />
            </div>
          </div>
          <h2 className='text-center py-4'>STUDENT DETAILS</h2>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix  pe-2">
              <label htmlFor="" className="form-label">Name</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='name' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Contact No.</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='contact' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">WhatsApp</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='whatsApp' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  ps-2">
              <label htmlFor="" className="form-label">Email</label>
              <input type="email" className="form-control" id="" aria-describedby="" onChange={onChange} name='email' />
            </div>
          </div>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix  pe-2">
              <label htmlFor="" className="form-label">Gender</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={gender}
                width={100}
                name="gender"
              />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">D.O.B</label>
              <input type="date" className="form-control" id="" aria-describedby="" onChange={onChange} name='dob' style={{ width: "100%" }} />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Place of Birth</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='pob' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  ps-2">
              <label htmlFor="" className="form-label">Religion</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={reLigion}
                width={100}
              />
            </div>
          </div>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix  pe-2">
              <label htmlFor="" className="form-label">Nationality</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='nationality' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Mother Tongue</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={motherTng}
                width={100}
              />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Blood Group</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={bloodGrp}
                width={100}
              />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  ps-2">
              <label htmlFor="" className="form-label">B. Form No.</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='BformNo' />
            </div>
          </div>
          <h2 className='text-center py-4'>PARENT DETAILS</h2>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix  pe-2">
              <label htmlFor="" className="form-label">Father Name</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='f_name' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Contact No.</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='f_contact' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">C.N.I.C</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='f_cnic' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  ps-2">
              <label htmlFor="" className="form-label">Email</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='f_email' />
            </div>
          </div>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix  pe-2">
              <label htmlFor="" className="form-label">Qualification</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='qualification' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Occupation</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='occupation' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Company</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='company' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  ps-2">
              <label htmlFor="" className="form-label">Designation</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='designation' />
            </div>
          </div>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix  pe-2">
              <label htmlFor="" className="form-label">Mother Name</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='m_name' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Contact No.</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='m_contact' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">C.N.I.C</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='m_cnic' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  ps-2">
              <label htmlFor="" className="form-label">Email</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='m_email' />
            </div>
          </div>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix  pe-2">
              <label htmlFor="" className="form-label">Qualification</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='m_qualification' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Occupation</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='m_occupation' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Company</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='m_company' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  ps-2">
              <label htmlFor="" className="form-label">Designation</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='m_designation' />
            </div>
          </div>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix  pe-2">
              <label htmlFor="" className="form-label">Guardian Name</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='g_name' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Contact No.</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='g_contact' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">C.N.I.C</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='g_cnic' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  ps-2">
              <label htmlFor="" className="form-label">Email</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='g_email' />
            </div>
          </div>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix  pe-2">
              <label htmlFor="" className="form-label">Qualification</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='g_qualification' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Occupation</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='g_occupation' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Company</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='g_company' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  ps-2">
              <label htmlFor="" className="form-label">Designation</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='g_designation' />
            </div>
          </div>
          <h2 className='text-center py-4'>ADDRESS DETAILS</h2>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix  pe-2">
              <label htmlFor="" className="form-label">Current Address</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='curr_addr' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Permenant Address</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='perm_addr' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Country</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={counTry}
                width={100}
              />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  ps-2">
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
            <div className="col-lg-3 col-md-6 padding_fix  pe-2">
              <label htmlFor="" className="form-label">City</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={cIty}
                width={100}
              />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">District</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={disTrict}
                width={100}
              />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Area</label>
              <Select
                defaultValue={null}
                onChange={onChange}
                options={aRea}
                width={100}
              />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  ps-2">
              <label htmlFor="" className="form-label">Postal Code</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='postal_code' />
            </div>
          </div>
          <h2 className='text-center py-4'>PREVIOUS INSTITUTE DETAILS</h2>
          <div className="row g-0 py-2">
            <div className="col-lg-3 col-md-6 padding_fix  pe-2">
              <label htmlFor="" className="form-label">Name</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='prev_inst' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Previous Class</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='prev_class' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  px-3">
              <label htmlFor="" className="form-label">Prev. Inst. Address</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='prev_inst_addr' />
            </div>
            <div className="col-lg-3 col-md-6 padding_fix  ps-2">
              <label htmlFor="" className="form-label">Leaving Reason</label>
              <input type="text" className="form-control" id="" aria-describedby="" onChange={onChange} name='leaving_reason' />
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

export default StdReg