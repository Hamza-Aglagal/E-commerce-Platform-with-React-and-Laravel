import axios from "axios";
import { AddBrandApi, ShowBrandApi } from "../../Api/Api";
import { success } from "../../Notification/Notification";



// Add Brand 
export const AddBrand = (info) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(AddBrandApi , info);
            success('تمت إضافة  ماركة')

        } catch (error) {
            dispatch({ type: 'SetErrorBand', payload: error.response.data.message })
        }
    }
}


// show Brand 
export const ShowBrand = () => {
    return async (dispatch) => {
        const result = await axios.get(ShowBrandApi)
        dispatch({ type: 'ShowBrand', payload: result.data })
    }
}
