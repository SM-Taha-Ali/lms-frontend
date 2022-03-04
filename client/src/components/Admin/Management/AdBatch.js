import React from 'react'
import Footer from "../../Footer"

const AdBatch = () => {


    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    return (
        <div>
            <div className="d-flex flex-row align-items-center">
                <span onClick={openNav} role="button" className='text-start my-2 d-inline ms-3 text-dark'><i className="fas fa-bars text-dark me-2"></i></span>
            </div>
            <div className="temp_fixxer container">
                batch
            </div>
            <Footer />
        </div>
    )
}

export default AdBatch