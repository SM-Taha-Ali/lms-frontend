import React, { useState, useEffect, useContext, useRef } from 'react';
import subBindContext from '../../../../context/domain/student/subBindContext';
import subjectContext from '../../../../context/domain/student/subjectContext';
import classContext from '../../../../context/domain/student/classContext';
import groupContext from '../../../../context/domain/student/groupContext';
import subgroupContext from '../../../../context/domain/student/subgroupContext';
import Select from 'react-select';
import SubBindTr from './SubBindTr.js';

const SubBind = () => {

  const context = useContext(subBindContext);
  const { subBind, getsubBind, addsubBind, updatesubBind, deletesubBind } = context

  useEffect(() => {
    getsubBind()
  }, [])

  const ref = useRef(null)

  const contextSubject = useContext(subjectContext);
  const { subject, getsubject } = contextSubject

  useEffect(() => {
    getsubject()
  }, [])

  const contextClass = useContext(classContext);
  const { clas, getclas } = contextClass

  useEffect(() => {
    getclas()
  }, [])

  const contextGroup = useContext(groupContext);
  const { group, getgroup } = contextGroup

  useEffect(() => {
    getgroup()
  }, [])

  const contextSubgroup = useContext(subgroupContext);
  const { subgroup, getsubgroup } = contextSubgroup

  useEffect(() => {
    getsubgroup()
  }, [])


  const [subBinds, setsubBinds] = useState({ subject: "", group: "", subgroup: "", class: "" })

  const subBindUpdate = (currentsubBind) => {
    ref.current.click();
    setsubBinds(currentsubBind)
  }

  const onChange = (e) => {
    setsubBinds({ ...subBinds, [e.name]: e.value })
  }

  const handleClick = (e) => {
    e.preventDefault()
    addsubBind(subBinds.subject, subBinds.class, subBinds.group, subBinds.subgroup)
  }

  const updateClick = () => {
    updatesubBind( subBinds._id, subBinds.subject, subBinds.class, subBinds.group, subBinds.subgroup )
  }

  const subJects = []
  subject.map((i) => {
    subJects.push({ value: i.value, label: i.label, name: i.name })
  });

  const clAss = []
  clas.map((i) => {
    clAss.push({ value: i.value, label: i.label, name: i.name })
  });

  const gRoup = []
  group.map((i) => {
    gRoup.push({ value: i.value, label: i.label, name: i.name })
  });

  const subgRoup = []
  subgroup.map((i) => {
    subgRoup.push({ value: i.value, label: i.label, name: i.name })
  });

  return (
    <div className='py-2'>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Update subject</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6 py-2">
                    <Select
                      defaultValue={subBinds.subject}
                      onChange={onChange}
                      options={subJects}
                      width={100}
                      placeholder="Select subject"
                      name='subject'
                    />
                  </div>
                  <div className="col-md-6 py-2">
                    <Select
                      defaultValue={subBinds.class}
                      onChange={onChange}
                      options={clAss}
                      width={100}
                      placeholder="Select class"
                      name='class'
                    />
                  </div>
                  <div className="col-md-6 py-2">
                    <Select
                      defaultValue={subBinds.group}
                      onChange={onChange}
                      options={gRoup}
                      width={100}
                      placeholder="Select group"
                      name='group'
                    />
                  </div>
                  <div className="col-md-6 py-2">
                    <Select
                      defaultValue={subBinds.subgroup}
                      onChange={onChange}
                      options={subgRoup}
                      width={100}
                      placeholder="Select sub-group"
                      name='subgroup'
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
              <button type="button" className="btn btn_dark_blue text-white" data-bs-dismiss="modal" onClick={updateClick}>Update</button>
            </div>
          </div>
        </div>
      </div>
      <h1 className='py-5'>Subject Binding</h1>
      <form action="">
        <div className="row">
          <div className="col-md-6 py-2">
            <Select
              defaultValue={null}
              onChange={onChange}
              options={subJects}
              width={100}
              placeholder="Select subject"
              name='subject'
            />
          </div>
          <div className="col-md-6 py-2">
            <Select
              defaultValue={null}
              onChange={onChange}
              options={clAss}
              width={100}
              placeholder="Select class"
              name='class'
            />
          </div>
          <div className="col-md-6 py-2">
            <Select
              defaultValue={null}
              onChange={onChange}
              options={gRoup}
              width={100}
              placeholder="Select group"
              name='group'
            />
          </div>
          <div className="col-md-6 py-2">
            <Select
              defaultValue={null}
              onChange={onChange}
              options={subgRoup}
              width={100}
              placeholder="Select sub-group"
              name='subgroup'
            />
          </div>
        </div>
      </form>
      <div className="text-end py-4">
        <button className="btn btn_dark_blue text-white" onClick={handleClick}>Add Now</button>
      </div>
      <div className='mt-5'>
        <table className="table overflow_control">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject</th>
              <th scope="col">Group</th>
              <th scope="col">Sub-Group</th>
              <th scope="col">Class</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {subBind.map((countr, i) => {
              return <SubBindTr key={i} countr={countr} index={i} getsubBind={getsubBind} deletesubBind={deletesubBind} subBindUpdate={subBindUpdate} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SubBind