import React, {useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";
import "./Main.css"

const Header = () => {
    let location = useLocation();
    useEffect(() => {
    }, [location]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="https://lh3.googleusercontent.com/EcdZ3YQCjyJNG-YiufppqRePIS_NYEaNenaOTJVUMAPt_0ctH1hXl4Ax0LjYrq9XtJpy_Q=s85" alt="" width={45}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item px-1">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link className={`nav-link ${location.pathname === "/batch" ? "active" : ""}`} aria-current="page" to="/batch">Batch</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link className={`nav-link ${location.pathname === "/courses" ? "active" : ""}`} aria-current="page" to="/course">Courses</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} aria-current="page" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link className={`nav-link ${location.pathname === "/admin" ? "active" : ""}`} aria-current="page" to="/admin/management/dashboard">Admin</Link>
                        </li>
                            
                        </ul>
                        <button className='btn btn_blue text-white'>Login</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header