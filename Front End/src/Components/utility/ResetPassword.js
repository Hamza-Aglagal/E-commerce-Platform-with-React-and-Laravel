import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ResetPassClient } from '../../Redux/Actions/Auth/AuthClient'
import { useParams } from 'react-router-dom';



const ResetPassword = () => {

    // get token
    const { token } = useParams();
    console.log(token)

    const Dispatch = useDispatch()

    // get errors Client
    const ErrClient = useSelector(state => state.AuthClient.ErrForgetPass)

    const [Password, setPassword] = useState()
    const [PasswordConfirm, setPasswordConfirm] = useState()

    const formdata = new FormData()
    formdata.append('password', Password)
    formdata.append('password_confirmation', PasswordConfirm)
    formdata.append('token', token)


    const handelSubmit = (e) => {
        e.preventDefault()
        Dispatch(ResetPassClient(formdata))
    }


    return (
        <div style={{ width: '100%', height: '667px' }}>
            <form onSubmit={handelSubmit}>
                <div className="card text-center" style={{ width: "450px", position: 'absolute', top: '25%', left: '30%' }}>
                    <div className="card-header h5 text-white bg-secondary">New Password </div>
                    <div className="card-body px-5">
                        <p className="card-text py-2">
                            Enter your new password 
                        </p>
                        <div className="form-outline">

                            <input type="password" name='password' placeholder='password' value={Password} className="form-control my-3" onChange={(e) => setPassword(e.target.value)} />
                            <input type="password" name='password_confirmation' placeholder='confirm password' value={PasswordConfirm} className="form-control my-3" onChange={(e) => setPasswordConfirm(e.target.value)} />

                            <label className="form-label text-danger" htmlFor="typeEmail"> {ErrClient} </label>

                        </div>

                        <button type='submit' className="btn btn-dark w-100">Reset password</button>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword