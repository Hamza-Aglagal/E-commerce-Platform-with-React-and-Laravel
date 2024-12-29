import axios from "axios";
import { LoginAdminApi } from "../../../Api/Api";





// Login Admin
export const LoginAdmin = (Client, redirect) => {
    return async (dispatch) => {
        try {
            let response = await axios.post(LoginAdminApi, Client);
            if (response.data.error) {
                dispatch({ type: 'ErrAuthAdmin', payload: response.data.error })
            } else {
                localStorage.setItem("Admin", JSON.stringify('true'))
                redirect('/admin/allproducts')
                window.location.reload(true)
            }
        } catch (error) {
            dispatch({ type: 'ErrAuthAdmin', payload: error.response.data.message })
        }
    }
}