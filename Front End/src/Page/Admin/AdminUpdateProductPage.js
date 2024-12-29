import React from 'react'
import AdminAddProduct from '../../Components/Admin/AdminAddProduct'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminUpdateProduct from '../../Components/Admin/AdminUpdateProduct'



const AdminUpdateProductPage = () => {

    

    return (
        <div>
            <div style={{ minHeight: '670px' }} className='Admin-AllProducts' >

                <AdminSideBar />
                <AdminUpdateProduct />

            </div>

        </div>
    )
}

export default AdminUpdateProductPage