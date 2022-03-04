import React, { useContext, useState } from 'react'
import "./Main.css"
import loginContext from '../context/login/loginContext';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

const Login = () => {
    let navigate = useNavigate();

    const contextLogin = useContext(loginContext);
    const { user, loginUser, getUser } = contextLogin

    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const json = await loginUser(credentials.username, credentials.password)
        if (json.success && json.user_status) {
            const user_details = await getUser(json.authToken)
            localStorage.setItem('token', json.authToke)
            localStorage.setItem('user_details', JSON.stringify(user_details))
            navigate('/')
        } else {
            alert('Invalid credentials')
        }
    }

    return (
        <>
            <div className='login-card-wrapper'>
                <div className="login-card shadow">
                    <div className="img-wrapper">
                        <img src="https://lh3.googleusercontent.com/EcdZ3YQCjyJNG-YiufppqRePIS_NYEaNenaOTJVUMAPt_0ctH1hXl4Ax0LjYrq9XtJpy_Q=s85" alt="" className='login-img' />
                    </div>
                    <h1 className='py-4'>Sign In</h1>
                    <div className="login-card-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text background_blue" id="basic-addon1"><i class="fas fa-user"></i></span>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" name='username' onChange={onChange} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text background_blue" id="basic-addon2"><i class="fas fa-key"></i></span>
                            <input type="text" className="form-control" placeholder="Password" aria-label="Password" name='password' onChange={onChange} />
                        </div>
                        <div className="d-flex flex-row justify-content-between align-items-baseline py-4">
                            <p className='forgot_link'>Forgot Password?</p>
                            <div><button className="btn btn_blue text-white" onClick={handleLogin}>Login</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login