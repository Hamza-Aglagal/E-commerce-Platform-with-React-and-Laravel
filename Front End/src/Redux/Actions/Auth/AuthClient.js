import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ForgetPasswordApi, LoginApi, RegisterApi, ResetPasswordApi } from "../../../Api/Api";
import { success } from "../../../Notification/Notification";






// Register client
export const RegisterClient = (Client, redirect) => {
    return async (dispatch) => {
        try {
            let response = await axios.post(RegisterApi, Client);
            localStorage.setItem("Client", JSON.stringify(response.data.product))
            localStorage.setItem("Cart",  JSON.stringify([]))
            redirect('/')
            window.location.reload(true)
        } catch (error) {
            dispatch({ type: 'ErrAuthCLient', payload: error.response.data.message })
        }
    }
}



// login CLient 
export const LoginClient = (Client, redirect) => {
    return async (dispatch) => {
        try {
            let response = await axios.post(LoginApi, Client);
            if (response.data.error) {
                dispatch({ type: 'ErrAuthCLient', payload: response.data.error })
            } else {
                localStorage.setItem("Client", JSON.stringify(response.data))
                redirect('/')
                window.location.reload(true)
            }
        } catch (error) {
            dispatch({ type: 'ErrAuthCLient', payload: error.response.data.message })
        }
    }
}


// forget password Client
export const ForgetPasswordClient = (email, Dispatch) => {
    return async (dispatch) => {
        try {
            let response = await axios.post(ForgetPasswordApi, email);
            if (response.data.error) {
                dispatch({ type: 'ErrForgetPassword', payload: response.data.error })
            } else {
                success('تم إرسال رسالة إلى بريدك الإلكتروني')
                Dispatch({ type: 'true' })
            }
        } catch (error) {
            dispatch({ type: 'ErrForgetPassword', payload: error.response.data.message })
        }
    }
}


// reset password Client
export const ResetPassClient = (formData) => {
    return async (dispatch) => {
        try {
            let response = await axios.post(ResetPasswordApi , formData);
            if (response.data.error) {
                dispatch({ type: 'ErrForgetPassword', payload: response.data.error })
            } else {
                success('تم الحفظ')
                // Dispatch({ type: 'true' })
            }
        } catch (error) {
            dispatch({ type: 'ErrForgetPassword', payload: error.response.data.message })
        }
    }
}


