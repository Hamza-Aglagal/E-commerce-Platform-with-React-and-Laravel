import axios from "axios";
import { AddCategoryApi, ShowCategoryApi } from "../../Api/Api";
import { success } from "../../Notification/Notification";



// Add Category 
export const AddCategory = (info) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(AddCategoryApi, info);
            success(' تمت إضافة  تصنيف جديد')
        } catch (error) {
            dispatch({ type: 'SetErrorCat', payload: error.response.data.message })
        }
    }
}


// show Category 
export const ShowCategory = () => {
    return async (dispatch) => {
        const result = await axios.get(ShowCategoryApi)
        dispatch({ type: 'ShowCategory', payload: result.data })
    }
}




