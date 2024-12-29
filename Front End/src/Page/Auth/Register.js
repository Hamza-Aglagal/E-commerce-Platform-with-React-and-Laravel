import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RegisterApi } from '../../Api/Api'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { RegisterClient } from '../../Redux/Actions/Auth/AuthClient'



const Register = () => {

    const history = useNavigate()

    //get Error 
    const Error = useSelector(state => state.AuthClient.error)

    const Dispatch = useDispatch()


    useEffect(() => {
        if (localStorage.getItem('Client')) {
            history('/')
        }
    }, [])



    const [fullName, setfullName] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const Client = { fullName, email, password }




    const handelSubmit = async (e) => {
        e.preventDefault()
        Dispatch(RegisterClient(Client , history))
    
    }


    return (
        <div className="Auth-form-container">
            <form onSubmit={handelSubmit} className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title"> اشتراك </h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <span className="link-primary" >
                                تسجيل الدخول
                            </span>
                        </Link>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            name='fullName'
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                            onChange={(e) => setfullName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            name='email'
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            name='password'
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>

                    <p className='text-danger'> {Error} </p>
                    
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-dark">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Register