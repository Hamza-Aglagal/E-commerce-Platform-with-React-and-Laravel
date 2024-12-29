import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ForgetPasswordClient } from '../../Redux/Actions/Auth/AuthClient'



const ForgetPassword = () => {

    const Dispatch = useDispatch()

    const [email, setemail] = useState()

    // get errors Client
    const ErrClientForget = useSelector(state => state.AuthClient.ErrForgetPass)

    // const formData = new FormData()
    // formData.append('email', email)
    const handleChange = (e) => {
        setemail(e.target.value)
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        Dispatch(ForgetPasswordClient({'email': email}, Dispatch))
    }


    return (
        // <div style={{width:'100%', height:'667px'}}>
        <form onSubmit={handelSubmit}>
            <div className="card text-center" style={{ width: "300px", position: 'absolute', top: '25%', left: '37%' }}>
                <div className="card-header h5 text-white bg-dark">Password Reset</div>
                <div className="card-body px-5">
                    <p className="card-text py-2">
                        Enter your email address and we'll send you an email with instructions to reset your password.
                    </p>
                    <div className="form-outline">
                        <input type="email" name='email' value={email} className="form-control my-3" onChange={handleChange} />
                        <label className="form-label text-danger" htmlFor="typeEmail"> {ErrClientForget} </label>
                    </div>
                    <button type='submit' className="btn btn-dark w-100">Reset password</button>
                    <div className="d-flex justify-content-between mt-4">
                        <div onClick={() => Dispatch({ type: 'true' })} className="btn btn-light w-100"  > Back </div>
                    </div>
                </div>
            </div>
        </form>
        // </div>
    )
}

export default ForgetPassword