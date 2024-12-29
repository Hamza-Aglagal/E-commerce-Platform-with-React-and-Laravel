import React from 'react'
import AdminAddProduct from '../../Components/Admin/AdminAddProduct'
import AdminSideBar from '../../Components/Admin/AdminSideBar'

const AdminAddProductPage = () => {
    return (
        <div>
            <div style={{ minHeight: '670px' }} className='Admin-AllProducts' >

                <AdminSideBar />
                <AdminAddProduct />

            </div>

        </div>
    )
}

export default AdminAddProductPage