import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import "../../Stylesheets/Profile.css"

const ProfileCard = (props) => {
    const { user } = props
    return (
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 p-3'>
            <div className="profile_card shadow">
                <div className="profile_img_container text-center">
                    <img src='/images/profile_avatar.png' alt="" className="profile_img" />
                </div>
                <h3 className='text-center'>{user.name}</h3>
                <div className="profile_card_body">
                    <div className="d-flex flex-row justify-content-between">
                        <p><b>GR.No.</b></p>
                        <p>{user.gr_no}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <p><b>Dept:</b></p>
                        <p>{user.dept}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <p><b>Mobile:</b></p>
                        <p>{user.contact}</p>
                    </div>
                </div>
                <div className="profile_card_footer">
                    <Link
                        to='/admin/management/adprofile/profiledesc'
                        state={{ user:user }}
                    >
                        <button className="btn btn_dark_blue text-white"> <i className="fad fa-eye me-2"></i>View Profile</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard