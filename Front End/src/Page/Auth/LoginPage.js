import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { LoginAdminApi, LoginApi } from '../../Api/Api'
import ForgetPassword from '../../Components/utility/ForgetPassword'
import { LoginAdmin } from '../../Redux/Actions/Auth/AuthAdmin'
import { LoginClient } from '../../Redux/Actions/Auth/AuthClient'


const LoginPage = () => {


  const Booleen = useSelector(state => state.AuthClient.ForgetPass)

  const history = useNavigate()

  const Dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('Client')) {
      history('/')
    }
  }, [])


  const [email, setemail] = useState('')
  const [password, setpassword] = useState()

  const Fromdata = new FormData()
  Fromdata.append('email', email)
  Fromdata.append('password', password)


  const [isAdmin, setisAdmin] = useState(false)

  // get errors Admin
  const ErrAdmin = useSelector(state => state.AuthAdmin.error)

  // get errors Admin
  const ErrClient = useSelector(state => state.AuthClient.error)

  const handelSubmit = async (e) => {
    e.preventDefault()

    if (email) {

      if (email.slice(0, 1) === '#') {
        setisAdmin(true)
        Dispatch(LoginAdmin(Fromdata, history))

      } else {
        Dispatch(LoginClient(Fromdata, history))
      }
    }

  }


  return (
    <div className="Auth-form-container" >
      <form onSubmit={handelSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title"> تسجيل الدخول </h3>
          <div className="form-group mt-3">
            <label>عنوان البريد الالكترونى</label>
            <input
              type="email"
              name='email'
              className="form-control mt-1"
              placeholder="gmail.com@ . . . . ."
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label>كلمة المرور</label>
            <input
              type="password"
              name='password'
              className="form-control mt-1"
              placeholder="**********"
              onChange={(e) => setpassword(e.target.value)}

            />

            {
              isAdmin ? <p className='text-danger'> {ErrAdmin} </p> : <p className='text-danger'> {ErrClient} </p>
            }



          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark">
              تسجيل
            </button>
          </div>
          <div className="forgot-password text-right mt-2 d-flex justify-content-between">
            <Link to='/register' style={{ textDecoration: 'none', fontSize: '.8rem' }} >
              ليس لديك حساب <span href="#" style={{ textDecoration: 'none' }} className='text-danger'> إضغط هنا </span>
            </Link>

            <div style={{ textDecoration: 'none', fontSize: '.8rem' }}>
              نسيت كلمة السر ؟<span onClick={()=>Dispatch({type:'true'})} style={{ textDecoration: 'none', cursor: 'pointer' }} className='text-danger'> إضغط هنا </span>
            </div>
          </div>

        </div>
      </form>


      {
        Booleen && <ForgetPassword/>
      }


           


      {/* <Link to='/admin/allproducts'>
        <a> Admin </a> <br /> <br /> <br />
      </Link>
      <Link to='/user/allorders'>
        <a> User </a>
      </Link> */}
    </div>

  )
}

export default LoginPage