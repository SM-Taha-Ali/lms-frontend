import React from 'react'
import "./Main.css"

const Footer = () => {
    return (
        <div className='footer_tpa'>
            <div className='container'>
                <div className="row g-0">
                    <div className="col-md-4">
                        <h4>About Us</h4>
                        <p>Kidum training programs can bring you a super exciting experience of learning through online!</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Get In Touch</h4>
                        <p>There are many variati passages of Lorem Ipsum available.</p>
                        <p>+00 235 695 58</p>
                        <p>+0239564</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Subscribe Now</h4>
                        <div className='pe-5 py-2'>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        </div>
                        <div className="d-flex flex-row">
                            <button className="btn btn_green text-white">Subscribe Now</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row g-0">
                    <div className="col-8">
                        Copyright © 2022 TPA. All Rights Reserved
                    </div>
                    <div className="col-2">Privacy Policy </div>
                    <div className="col-2">Terms {"&"} Conditions</div>
                </div>
            </div>
        </div>

    )
}

export default Footer