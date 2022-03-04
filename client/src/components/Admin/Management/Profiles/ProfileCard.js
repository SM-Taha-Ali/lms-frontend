import React, { useState, useEffect, useContext } from 'react';
import "../../Stylesheets/Profile.css"

const ProfileCard = (props) => {
    const { user } = props
    return (
        <div className='col-md-3 px-3'>
            <div className="profile_card shadow">
                <div className="profile_img_container text-center">
                    <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" />
                </div>
                <div className="profile_card_body">
                    <h3 className='text-center'>{user.name}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard