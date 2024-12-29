import React from 'react'
import AdminAddBrand from '../../Components/Admin/AdminAddBrand'
import AdminSideBar from '../../Components/Admin/AdminSideBar'

const AdminAddBrandPage = () => {
    return (
        <div>
            <div style={{ minHeight: '670px' }} className='Admin-AllProducts' >

                <AdminSideBar />
                <AdminAddBrand />
            </div>

        </div>
    )
}

export default AdminAddBrandPage