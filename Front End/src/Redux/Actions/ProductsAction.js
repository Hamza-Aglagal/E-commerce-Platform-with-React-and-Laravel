import axios from "axios"
import { AddProductApi, deleteProductApi, editProductsApi, showProductsApi, updateProductsApi } from "../../Api/Api"
import { success, warning } from "../../Notification/Notification"



// Shows Products 
export const ShowProducts = () => {
    return async (dispatch) => {
        const result = await axios.get(showProductsApi)
        dispatch({ type: 'ShowProducts', payload: result.data })
    }
}

// Add Products 
export const AddProducts = (info) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(AddProductApi, info);
            success('تمت إضافة المنتج بنجاح')

        } catch (error) {
            dispatch({ type: 'SetError', payload: error.response.data.message })
        }
    }
}


// edit Products 
export const EditProducts = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(editProductsApi + '/' + id);
            dispatch({ type: 'EditProducts', payload: id })
        } catch (error) {
            // console.log(error.response.data.message);
        }
    }
}



// Update Products 
export const UpdateProducts = (id , info) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(updateProductsApi + '/' + id, info);
            success('تم التعديل المنتج بنجاح')

        } catch (error) {
            dispatch({ type: 'SetError', payload: error.response.data.message })
        }
    }
}



// Delete Products 
export const DeleteProducts = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'DeleteProducts', payload: id })
            const response = await axios.delete(deleteProductApi + '/' + id);
            success('تم المسح بنجاح')
        } catch (error) {
            warning(error.response.data.message)
        }
    }
}



